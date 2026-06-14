import { NextResponse } from "next/server";

export const runtime = "edge";

const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const SYSTEM_PROMPT = `You are a study assistant for Maharashtra Board 11th and 12th Science students (Physics, Chemistry, Maths, Biology). 

Rules:
- Explain concepts like a human tutor — conversational, use analogies
- Never use phrases like "furthermore", "moreover", "in conclusion"
- Keep answers clear and to the point
- Use simple language first, then add depth if needed
- Format with short paragraphs and bullet points where helpful
- If asked something outside the syllabus, politely redirect`;

export async function POST(req: Request) {
  const { messages }: { messages: { role: "user" | "assistant"; content: string }[] } = await req.json();

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ content: "No messages provided." }, { status: 400 });
  }

  if (!GROQ_API_KEY) {
    return NextResponse.json({
      content: "Hey! I'm in demo mode right now. Add a **Groq API key** in your `.env.local` file to get AI-powered answers. For now, try the suggestion buttons above — they have pre-written responses for common topics!",
    });
  }

  try {
    const body = {
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 1024,
    };

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Groq API error:", res.status, errText);
      return NextResponse.json({
        content: "Oops! Something went wrong with the AI service. Please try again.",
      });
    }

    const data: { choices?: { message?: { content?: string } }[] } = await res.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    return NextResponse.json({ content: reply });
  } catch {
    return NextResponse.json({
      content: "Oops! Something went wrong. Please try again in a moment.",
    });
  }
}
