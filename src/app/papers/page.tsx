"use client";

import { useState } from "react";
import { getPapers, getPaperTypes, getPaperYears, getStandards } from "@/papers";
import { subjects } from "@/lib/subjects";
import { BookOpen, Download, ExternalLink } from "lucide-react";

const typeLabels: Record<string, string> = {
  "board-exam": "Board Exam PYQ",
  "question-bank": "Question Bank",
  "sample-paper": "Sample Paper",
  "mock-test": "Mock Test",
};

const typeColors: Record<string, string> = {
  "board-exam": "text-blue-400 border border-blue-400/30",
  "question-bank": "text-purple-400 border border-purple-400/30",
  "sample-paper": "text-green-400 border border-green-400/30",
  "mock-test": "text-orange-400 border border-orange-400/30",
};

export default function PapersPage() {
  const [standardFilter, setStandardFilter] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const types = getPaperTypes();
  const years = getPaperYears();
  const standards = getStandards();

  const papers = getPapers(
    standardFilter ? Number(standardFilter) : undefined,
    subjectFilter || undefined,
    typeFilter || undefined,
    yearFilter ? Number(yearFilter) : undefined
  );

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-white" size={20} />
          <h1 className="font-heading text-2xl sm:text-4xl">Paper Library</h1>
        </div>
        <p className="text-xs sm:text-base text-gray-400 mb-4 sm:mb-8">
          Previous year board exam papers, official question banks, and sample papers. Download and practice.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          <select
            value={standardFilter}
            onChange={(e) => setStandardFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Standards</option>
            {standards.map((s) => (
              <option key={s} value={s}>Std {s}</option>
            ))}
          </select>

          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>{typeLabels[t] || t}</option>
            ))}
          </select>

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="bg-[#111] border border-[#333] text-white text-xs sm:text-sm px-3 py-2 min-h-[44px] font-sans"
          >
            <option value="">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          <span className="text-xs sm:text-sm text-gray-500 font-sans self-center ml-auto">
            {papers.length} paper{papers.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {papers.length === 0 ? (
            <div className="card p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-400 italic">No papers match your filters.</p>
            </div>
          ) : (
            papers.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target={p.local ? undefined : "_blank"}
                rel={p.local ? undefined : "noopener noreferrer"}
                className="card p-3 sm:p-4 block hover:bg-[#1a1a1a] transition-colors no-underline"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-2xs sm:text-xs text-gray-500 font-sans">
                      Std {p.standard} · {p.subjectId} · {p.month ? `${p.month} ` : ""}{p.year}
                    </span>
                    <span className={`text-2xs font-sans px-1.5 py-0.5 ${typeColors[p.type] || "text-gray-400 border border-gray-400/30"}`}>
                      {typeLabels[p.type] || p.type}
                    </span>
                  </div>
                  {p.local ? (
                    <Download size={14} className="text-gray-400 shrink-0" />
                  ) : (
                    <ExternalLink size={14} className="text-gray-400 shrink-0" />
                  )}
                </div>
                <p className="text-xs sm:text-sm text-white font-medium mt-0.5">{p.title}</p>
                <p className="text-2xs sm:text-xs text-gray-400 mt-0.5 leading-relaxed">{p.description}</p>
                {p.marks && (
                  <p className="text-2xs text-gray-500 mt-1 font-sans">{p.marks} marks · {p.duration}</p>
                )}
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
