import { subjects, getSubject } from "@/lib/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterContent } from "@/content";
import { Lightbulb, Target } from "lucide-react";

export function generateStaticParams() {
  const params: { subject: string; chapter: string }[] = [];
  for (const subject of subjects) {
    for (const std of subject.standards) {
      for (const ch of std.chapters) {
        params.push({ subject: subject.id, chapter: ch.id });
      }
    }
  }
  return params;
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ subject: string; chapter: string }>;
}) {
  const { subject: subjectId, chapter: chapterId } = await params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  let foundChapter = null;
  let foundStd = 0;
  for (const std of subject.standards) {
    const ch = std.chapters.find((c) => c.id === chapterId);
    if (ch) {
      foundChapter = ch;
      foundStd = std.std;
      break;
    }
  }
  if (!foundChapter) notFound();

  const content = getChapterContent(subjectId, chapterId);

  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-sans text-gray-400 hover:text-white mb-4 sm:mb-6 transition-colors min-h-[44px]"
        >
          ← {subject.title} — Std {foundStd}
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl sm:text-2xl">{subject.icon}</span>
          <h1 className="font-heading text-xl sm:text-3xl">{foundChapter.title}</h1>
        </div>

        <div className="flex items-center gap-3 mt-2 mb-6 sm:mb-8">
          <span className="font-sans text-2xs sm:text-xs text-white border border-white/30 px-2 py-0.5">
            Ch. {foundChapter.number}
          </span>
          <span className="font-sans text-2xs sm:text-xs text-gray-400">
            Std {foundStd}
          </span>
        </div>

        {content ? (
          <div className="space-y-6 sm:space-y-8">
            {/* Easy Overview */}
            <div className="card p-4 sm:p-6 border-l-4 border-l-white">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={18} className="text-white shrink-0" />
                <h2 className="font-heading text-base sm:text-lg">Easy Overview</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {content.overview}
              </p>
            </div>

            {/* Concepts */}
            <div className="space-y-4 sm:space-y-6">
              {content.concepts.map((section, i) => (
                <div key={i} className="card p-4 sm:p-6">
                  <h3 className="font-heading text-sm sm:text-lg mb-2 sm:mb-3 text-white">
                    {section.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="card p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} className="text-white shrink-0" />
                <h2 className="font-heading text-base sm:text-lg">Key Points</h2>
              </div>
              <ul className="space-y-2">
                {content.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <span className="text-white mt-0.5 shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Questions */}
            {content.importantQuestions && content.importantQuestions.length > 0 && (
              <div className="card p-4 sm:p-6">
                <h2 className="font-heading text-base sm:text-lg mb-3">Practice Questions</h2>
                <ul className="space-y-3">
                  {content.importantQuestions.map((q, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-300 border-l-2 border-gray-600 pl-3">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="card p-4 sm:p-6 min-h-[30vh]">
            <p className="text-xs sm:text-sm text-gray-400 italic">
              Chapter notes coming soon. This page will contain concept-wise summaries, key formulas, and important questions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
