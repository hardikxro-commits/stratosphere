"use client";

import { subjects, getSubject } from "@/lib/subjects";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { isChapterCompleted, toggleChapter, getSubjectProgress } from "@/lib/progress";
import { CheckCircle, Circle } from "lucide-react";

export default function SubjectPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const subject = getSubject(subjectId);

  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!subject) return;
    const map: Record<string, boolean> = {};
    for (const std of subject.standards) {
      for (const ch of std.chapters) {
        map[ch.id] = isChapterCompleted(subject.id, ch.id);
      }
    }
    setCompleted(map);
  }, [subject]);

  if (!subject) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p className="text-[#8B7D6B] dark:text-[#7A6F8A]">Subject not found.</p>
        <Link href="/subjects" className="text-[#B84A3A] dark:text-[#D4735E] hover:underline font-sans text-sm mt-4 inline-block">
          ← All Subjects
        </Link>
      </div>
    );
  }

  const totalChapters = subject.standards.reduce((sum, std) => sum + std.chapters.length, 0);
  const progress = getSubjectProgress(subject.id, totalChapters);

  const handleToggle = (chapterId: string) => {
    const updated = toggleChapter(subject.id, chapterId);
    const map: Record<string, boolean> = {};
    for (const std of subject.standards) {
      for (const ch of std.chapters) {
        map[ch.id] = updated.completedChapters[subject.id]?.includes(ch.id) ?? false;
      }
    }
    setCompleted({ ...map });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href="/subjects"
          className="inline-flex items-center gap-1 text-sm font-sans text-[#8B7D6B] dark:text-[#7A6F8A] hover:text-[#B84A3A] dark:hover:text-[#D4735E] mb-6 transition-colors"
        >
          ← All Subjects
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{subject.icon}</span>
          <h1 className="font-heading text-4xl italic">{subject.title}</h1>
        </div>
        <p className="text-[#8B7D6B] dark:text-[#7A6F8A] mb-6">{subject.description}</p>

        <div className="mb-8 p-4 glass-card">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-xs uppercase tracking-wider text-[#8B7D6B] dark:text-[#7A6F8A]">
              Overall Progress
            </span>
            <span className="font-sans text-xs text-[#B84A3A] dark:text-[#D4735E]">
              {Math.round(totalChapters > 0 ? (Object.values(completed).filter(Boolean).length / totalChapters) * 100 : 0)}%
            </span>
          </div>
          <div className="h-3 bg-[#D4C9B8] dark:bg-[#3A3545] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#B84A3A] dark:bg-[#D4735E] rounded-full transition-all duration-500"
              style={{ width: `${Math.round(totalChapters > 0 ? (Object.values(completed).filter(Boolean).length / totalChapters) * 100 : 0)}%` }}
            />
          </div>
        </div>

        <div className="space-y-10">
          {subject.standards.map((std) => {
            const stdCompleted = std.chapters.filter((ch) => completed[ch.id]).length;
            return (
              <div key={std.std}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-2xl italic">
                    Standard {std.std}
                  </h2>
                  <span className="font-sans text-xs text-[#8B7D6B] dark:text-[#7A6F8A]">
                    {stdCompleted}/{std.chapters.length} done
                  </span>
                </div>

                <div className="space-y-1">
                  {std.chapters.map((ch) => {
                    const done = completed[ch.id] ?? false;
                    return (
                      <div
                        key={ch.id}
                        className="flex items-center justify-between p-3 pl-4 glass-card hover:!border-[#B84A3A] dark:hover:!border-[#D4735E] group transition-all"
                      >
                        <button
                          onClick={() => handleToggle(ch.id)}
                          className="flex items-center gap-3 flex-1 text-left"
                        >
                          {done ? (
                            <CheckCircle size={18} className="text-[#4A7C59] shrink-0" />
                          ) : (
                            <Circle size={18} className="text-[#D4C9B8] dark:text-[#3A3545] shrink-0" />
                          )}
                          <div>
                            <h3 className={`font-heading italic text-sm ${done ? "line-through text-[#8B7D6B] dark:text-[#5A4F6A]" : "group-hover:text-[#B84A3A] dark:group-hover:text-[#D4735E]"} transition-colors`}>
                              {ch.number}. {ch.title}
                            </h3>
                            <p className="text-xs text-[#8B7D6B] dark:text-[#7A6F8A]">{ch.description}</p>
                          </div>
                        </button>
                        <Link
                          href={`/subjects/${subject.id}/${ch.id}`}
                          className="text-xs font-sans text-[#B84A3A] dark:text-[#D4735E] hover:underline ml-4 shrink-0"
                        >
                          Open →
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
