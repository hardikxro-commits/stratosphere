import { subjects, getSubject, getChapter } from "@/lib/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1 text-sm font-sans text-gray-400 hover:text-white mb-6 transition-colors"
        >
          ← {subject.title} — Std {foundStd}
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{subject.icon}</span>
          <h1 className="font-heading text-3xl">{foundChapter.title}</h1>
        </div>

        <div className="flex items-center gap-3 mt-2 mb-8">
          <span className="font-sans text-xs text-white border border-white/30 px-2 py-0.5">
            Ch. {foundChapter.number}
          </span>
          <span className="font-sans text-xs text-gray-400">
            Std {foundStd}
          </span>
        </div>

        <div className="card p-6 min-h-[50vh]">
          <p className="text-gray-400 italic mb-6">
            Chapter notes coming soon. This page will contain concept-wise summaries, key formulas, and important questions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-[#111111] border border-[#333333]">
              <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                <span className="text-white">📖</span>
                Theory Notes
              </h3>
              <p className="text-sm text-gray-400">
                Concept-wise summaries with key points.
              </p>
            </div>

            <div className="p-4 bg-[#111111] border border-[#333333]">
              <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                <span className="text-white">📝</span>
                PYQs & Practice
              </h3>
              <p className="text-sm text-gray-400">
                Previous year questions with solutions.
              </p>
            </div>

            {foundChapter.formulaCount !== undefined && foundChapter.formulaCount > 0 && (
              <div className="p-4 bg-[#111111] border border-[#333333]">
                <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                  <span className="text-white">📐</span>
                  Formulas
                </h3>
                <p className="text-sm text-gray-400">
                  {foundChapter.formulaCount} key formulas to master.
                </p>
              </div>
            )}

            <div className="p-4 bg-[#111111] border border-[#333333]">
              <h3 className="font-heading text-lg mb-2 flex items-center gap-2">
                <span className="text-white">🎯</span>
                Quick Quiz
              </h3>
              <p className="text-sm text-gray-400">
                Test your understanding with MCQs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
