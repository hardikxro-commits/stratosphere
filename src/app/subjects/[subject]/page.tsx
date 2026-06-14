"use client";

import { subjects, getSubject } from "@/lib/subjects";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { isChapterCompleted, toggleChapter, getSubjectProgress, toggleChapterRemote } from "@/lib/progress";
import { useSession } from "next-auth/react";
import { CheckCircle, Circle } from "lucide-react";

export default function SubjectPage() {
  const params = useParams();
  const subjectId = params.subject as string;
  const subject = getSubject(subjectId);

  const { data: session } = useSession();
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
        <p className="text-gray-400">Subject not found.</p>
        <Link href="/subjects" className="text-white hover:underline font-sans text-sm mt-4 inline-block">
          ← All Subjects
        </Link>
      </div>
    );
  }

  const totalChapters = subject.standards.reduce((sum, std) => sum + std.chapters.length, 0);
  const progress = getSubjectProgress(subject.id, totalChapters);

  const handleToggle = (chapterId: string) => {
    const was = completed[chapterId] ?? false;
    const updated = toggleChapter(subject.id, chapterId);
    const map: Record<string, boolean> = {};
    for (const std of subject.standards) {
      for (const ch of std.chapters) {
        map[ch.id] = updated.completedChapters[subject.id]?.includes(ch.id) ?? false;
      }
    }
    setCompleted({ ...map });
    if (session?.user) {
      toggleChapterRemote(subject.id, chapterId, !was);
    }
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href="/subjects"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-sans text-gray-400 hover:text-white mb-4 sm:mb-6 transition-colors min-h-[44px]"
        >
          ← All Subjects
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl sm:text-3xl">{subject.icon}</span>
          <h1 className="font-heading text-2xl sm:text-4xl">{subject.title}</h1>
        </div>
        <p className="text-xs sm:text-base text-gray-400 mb-4 sm:mb-6">{subject.description}</p>

        <div className="mb-6 sm:mb-8 p-3 sm:p-4 card">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-2xs sm:text-xs uppercase tracking-wider text-gray-400">
              Overall Progress
            </span>
            <span className="font-sans text-2xs sm:text-xs text-white">
              {Math.round(totalChapters > 0 ? (Object.values(completed).filter(Boolean).length / totalChapters) * 100 : 0)}%
            </span>
          </div>
          <div className="h-2 sm:h-3 progress-track">
            <div
              className="h-full progress-fill"
              style={{ width: `${Math.round(totalChapters > 0 ? (Object.values(completed).filter(Boolean).length / totalChapters) * 100 : 0)}%` }}
            />
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {subject.standards.map((std) => {
            const stdCompleted = std.chapters.filter((ch) => completed[ch.id]).length;
            return (
              <div key={std.std}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h2 className="font-heading text-xl sm:text-2xl">
                    Standard {std.std}
                  </h2>
                  <span className="font-sans text-2xs sm:text-xs text-gray-400">
                    {stdCompleted}/{std.chapters.length} done
                  </span>
                </div>

                <div className="space-y-px sm:space-y-1">
                  {std.chapters.map((ch) => {
                    const done = completed[ch.id] ?? false;
                    return (
                      <div
                        key={ch.id}
                        className="card flex items-stretch overflow-hidden"
                      >
                        <button
                          onClick={() => handleToggle(ch.id)}
                          className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 flex-1 text-left min-h-[52px] active:bg-[#2A2A2A] transition-colors"
                        >
                          {done ? (
                            <CheckCircle size={20} className="text-white shrink-0" />
                          ) : (
                            <Circle size={20} className="text-gray-600 shrink-0" />
                          )}
                          <div className="min-w-0">
                            <h3 className={`font-heading text-xs sm:text-sm ${done ? "line-through text-gray-500" : ""} transition-colors truncate`}>
                              {ch.number}. {ch.title}
                            </h3>
                            <p className="text-2xs sm:text-xs text-gray-400 truncate">{ch.description}</p>
                          </div>
                        </button>
                        <Link
                          href={`/subjects/${subject.id}/${ch.id}`}
                          className="flex items-center px-3 sm:px-4 text-xs font-sans text-white hover:bg-white/10 shrink-0 transition-colors min-h-[52px]"
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
