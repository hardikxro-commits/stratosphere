import { getRequestContext } from "@cloudflare/next-on-pages";
import { createDb, schema } from "@/db";
import { auth } from "@/lib/auth";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ progress: [] });
  }

  try {
    const ctx = getRequestContext();
    const db = createDb(ctx.env as { DB: D1Database });
    const rows = await db
      .select()
      .from(schema.progress)
      .where(eq(schema.progress.userId, session.user.id));
    return NextResponse.json({ progress: rows });
  } catch {
    return NextResponse.json({ progress: [] });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { subjectId, chapterId, completed }: { subjectId: string; chapterId: string; completed: boolean } = await req.json();
  if (!subjectId || !chapterId || typeof completed !== "boolean") {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  try {
    const ctx = getRequestContext();
    const db = createDb(ctx.env as { DB: D1Database });

    const existing = await db
      .select()
      .from(schema.progress)
      .where(
        and(
          eq(schema.progress.userId, session.user.id),
          eq(schema.progress.subjectId, subjectId),
          eq(schema.progress.chapterId, chapterId)
        )
      )
      .limit(1);

    if (existing.length > 0) {
      await db
        .update(schema.progress)
        .set({
          completed,
          completedAt: completed ? new Date() : null,
          updatedAt: new Date(),
        })
        .where(eq(schema.progress.id, existing[0].id));
    } else {
      await db.insert(schema.progress).values({
        id: crypto.randomUUID(),
        userId: session.user.id,
        subjectId,
        chapterId,
        completed,
        completedAt: completed ? new Date() : null,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
