"use client";

import { useState } from "react";
import { getPYQs, getYears } from "@/pyq";
import { subjects } from "@/lib/subjects";
import { Target, Search } from "lucide-react";

export default function PYQPage() {
  const [subjectFilter, setSubjectFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const years = getYears();
  const questions = getPYQs(subjectFilter || undefined).filter(
    (q) => !yearFilter || q.year === Number(yearFilter)
  );

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="text-white" size={20} />
          <h1 className="font-heading text-2xl sm:text-4xl">PYQ Bank</h1>
        </div>
        <p className="text-xs sm:text-base text-gray-400 mb-4 sm:mb-8">
          Previous year board exam questions, filtered by subject and year.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <span className="text-xs sm:text-sm text-gray-500 font-sans self-center ml-auto">
            {questions.length} question{questions.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {questions.length === 0 ? (
            <div className="card p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400 italic">No questions match your filters.</p>
            </div>
          ) : (
            questions.map((q) => (
              <div key={q.id} className="card p-3 sm:p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-2xs sm:text-xs text-gray-500 font-sans">
                    {q.month} {q.year} · {q.marks} marks
                  </span>
                  <span
                    className={`text-2xs font-sans px-1.5 py-0.5 ${
                      q.difficulty === "easy"
                        ? "text-green-400 border border-green-400/30"
                        : q.difficulty === "medium"
                        ? "text-yellow-400 border border-yellow-400/30"
                        : "text-red-400 border border-red-400/30"
                    }`}
                  >
                    {q.difficulty}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white leading-relaxed">{q.question}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
