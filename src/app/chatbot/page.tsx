"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";

const SUGGESTIONS = [
  "Explain Newton's second law",
  "What is the formula for kinetic energy?",
  "How to balance chemical equations?",
  "Explain DNA replication",
  "What is Ohm's law?",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: msg }]);
    setLoading(true);

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: getMockResponse(msg),
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-white" size={24} />
          <h1 className="font-heading text-4xl">Ask AI</h1>
        </div>
        <p className="text-gray-400 mb-8">
          Your study buddy. Ask anything about Physics, Chemistry, Maths, or Biology.
        </p>

        <div className="card min-h-[60vh] flex flex-col">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[55vh]">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 italic mb-4">Ask me anything about your syllabus.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="text-xs font-sans px-3 py-1.5 bg-[#111111] border border-[#333333] hover:border-white/50 text-gray-300 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 text-sm ${
                    m.role === "user"
                      ? "bg-white text-black"
                      : "bg-[#111111] border border-[#333333] text-white"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#111111] border border-[#333333] p-3 text-sm text-gray-400 italic">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-[#333333] p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-transparent border-none outline-none text-sm font-serif text-white placeholder:text-gray-600"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2 text-white hover:bg-[#333333] transition-colors disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getMockResponse(question: string): string {
  const responses: Record<string, string> = {
    "newton": "Newton's Second Law states that F = ma. The net force acting on an object equals its mass times its acceleration. This means heavier objects need more force to accelerate, and more force means greater acceleration.",
    "kinetic": "Kinetic Energy = ½mv²\n\nWhere m is mass in kg and v is velocity in m/s.\n\nKey points:\n• KE is always positive\n• It's proportional to mass\n• It's proportional to velocity SQUARED (doubling velocity = 4× energy)",
    "chemical": "To balance chemical equations:\n1. Write the unbalanced equation\n2. Count atoms on each side\n3. Add coefficients (numbers before compounds)\n4. Never change subscripts\n5. Check: same number of each atom on both sides\n\nExample: H₂ + O₂ → H₂O → 2H₂ + O₂ → 2H₂O",
    "dna": "DNA Replication in 3 steps:\n\n1. **Unwinding**: DNA helicase unzips the double helix\n2. **Base pairing**: DNA polymerase adds complementary bases (A-T, C-G)\n3. **Joining**: DNA ligase seals the new strands\n\nResult: 2 identical DNA molecules, each with one old and one new strand.",
    "ohm": "Ohm's Law: V = IR\n\nVoltage (V) = Current (I) × Resistance (R)\n\n• V in volts\n• I in amperes\n• R in ohms (Ω)\n\nThis means: if you increase voltage, current increases proportionally (if resistance stays constant).",
  };

  const q = question.toLowerCase();
  for (const [key, val] of Object.entries(responses)) {
    if (q.includes(key)) return val;
  }

  return "That's a great question! I'm currently running in demo mode with basic responses. Connect a Groq API key to get full AI-powered answers for any topic in your syllabus. For now, try asking about Newton's laws, formulas, balancing equations, or DNA replication!";
}
