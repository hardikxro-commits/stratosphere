"use client";

import HeroSection from "@/components/hero/HeroSection";
import Link from "next/link";
import { BookOpen, Brain, Sparkles, Target, ArrowRight } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";

const features = [
  {
    icon: BookOpen,
    title: "Chapter Notes",
    desc: "Concept-wise summaries for every chapter in Physics, Chem, Maths & Biology.",
    href: "/subjects",
  },
  {
    icon: Target,
    title: "PYQs & Practice",
    desc: "Previous year questions with modular paper generator.",
    href: "/aids",
  },
  {
    icon: Brain,
    title: "Formula Hub",
    desc: "All formulas, reactions, and equations in one searchable place.",
    href: "/formulas",
  },
  {
    icon: Sparkles,
    title: "AI Study Buddy",
    desc: "Ask doubts, get explanations. Powered by AI, free for everyone.",
    href: "/chatbot",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group p-5 bg-[#F0EBE0] dark:bg-[#232339] border border-[#D4C9B8] dark:border-[#3A3545] hover:border-[#B84A3A] dark:hover:border-[#D4735E] transition-all"
            >
              <f.icon size={20} className="text-[#B84A3A] dark:text-[#D4735E] mb-3" />
              <h3 className="font-heading text-lg italic mb-1">{f.title}</h3>
              <p className="text-sm text-[#8B7D6B] dark:text-[#7A6F8A] leading-relaxed">{f.desc}</p>
              <ArrowRight size={14} className="mt-3 text-[#B84A3A] dark:text-[#D4735E] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="border-t border-[#D4C9B8] dark:border-[#3A3545] pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl italic">Your Progress</h2>
            <Link href="/subjects" className="text-sm font-sans text-[#B84A3A] dark:text-[#D4735E] hover:underline">
              View all subjects →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { name: "Physics", pct: 35 },
              { name: "Chemistry", pct: 22 },
              { name: "Mathematics", pct: 48 },
              { name: "Biology", pct: 15 },
            ].map((s) => (
              <div key={s.name} className="flex items-center gap-4">
                <span className="font-sans text-xs uppercase tracking-wider w-20 text-[#8B7D6B] dark:text-[#7A6F8A]">
                  {s.name}
                </span>
                <ProgressBar value={s.pct} max={100} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="border border-[#D4C9B8] dark:border-[#3A3545] p-8 text-center">
          <p className="font-heading text-lg italic text-[#8B7D6B] dark:text-[#7A6F8A]">
            &ldquo;Study not for marks, but for understanding.
            <br />
            Marks will follow.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
