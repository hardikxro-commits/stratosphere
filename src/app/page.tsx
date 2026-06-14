"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import Link from "next/link";
import { BookOpen, Brain, Sparkles, Target, ArrowRight, Bookmark } from "lucide-react";
import ProgressBar from "@/components/ui/ProgressBar";
import { getSubjectProgress } from "@/lib/progress";
import { subjects } from "@/lib/subjects";

const features = [
  {
    icon: BookOpen,
    title: "Chapter Notes",
    desc: "Concept-wise summaries for every chapter in Physics, Chem, Maths & Biology.",
    href: "/subjects",
  },
  {
    icon: Bookmark,
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
  const [progressData, setProgressData] = useState<{ name: string; id: string; pct: number; total: number }[]>([]);

  useEffect(() => {
    const data = subjects.map((s) => {
      const totalChapters = s.standards.reduce((sum, std) => sum + std.chapters.length, 0);
      return {
        name: s.title,
        id: s.id,
        pct: getSubjectProgress(s.id, totalChapters),
        total: totalChapters,
      };
    });
    setProgressData(data);
  }, []);

  return (
    <>
      <HeroSection />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group p-4 sm:p-5 card min-h-[44px]"
            >
              <f.icon size={20} className="text-white mb-2 sm:mb-3" />
              <h3 className="font-heading text-base sm:text-lg mb-1">{f.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              <ArrowRight size={14} className="mt-2 sm:mt-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="card p-4 sm:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="font-heading text-xl sm:text-2xl">Your Progress</h2>
            <Link href="/subjects" className="text-xs sm:text-sm font-sans text-white hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {progressData.map((s) => (
              <div key={s.name} className="flex items-center gap-2 sm:gap-4">
                <span className="font-sans text-2xs sm:text-xs uppercase tracking-wider w-14 sm:w-20 shrink-0 text-gray-400">
                  {s.name}
                </span>
                <ProgressBar value={s.pct} max={100} />
                <span className="font-sans text-2xs sm:text-xs text-gray-400 w-10 sm:w-16 text-right shrink-0">
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>
          {progressData.every((s) => s.pct === 0) && (
            <p className="text-xs sm:text-sm text-gray-400 italic mt-3">
              No progress yet. Start marking chapters as complete from any subject page.
            </p>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="card p-6 sm:p-8 text-center">
          <p className="font-heading text-base sm:text-lg text-gray-400">
            &ldquo;Study not for marks, but for understanding.
            <br />
            Marks will follow.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
