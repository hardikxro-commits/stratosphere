import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groqApiKey = process.env.GROQ_API_KEY || "";

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
    return NextResponse.json({ error: "no messages" }, { status: 400 });
  }

  if (!groqApiKey) {
    return NextResponse.json({
      role: "assistant",
      content: "Hey! I'm in demo mode right now. Add a **Groq API key** in your `.env.local` file to get AI-powered answers. For now, try the suggestion buttons above — they have pre-written responses for common topics!",
    });
  }

  try {
    const groq = new Groq({ apiKey: groqApiKey });
    const chatMessages = [
      { role: "system" as const, content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";
    return NextResponse.json({ role: "assistant", content: reply });
  } catch (e) {
    return NextResponse.json({
      role: "assistant",
      content: "Oops! Something went wrong. Please try again in a moment.",
    });
  }
}
