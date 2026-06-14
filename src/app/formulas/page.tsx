import { subjects } from "@/lib/subjects";
import Link from "next/link";

export default function FormulasPage() {
  const allFormulas = subjects.map((s) => ({
    subject: s,
    chapters: s.standards.flatMap((std) =>
      std.chapters
        .filter((ch) => ch.formulaCount !== undefined && ch.formulaCount > 0)
        .map((ch) => ({ ...ch, std: std.std }))
    ),
  }));

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-4xl mb-2">Formula Hub</h1>
        <p className="text-gray-400 mb-10 font-serif">
          All formulas, reactions, and equations — searchable and sorted by chapter.
        </p>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search formulas..."
            className="w-full p-3 pl-10 card font-serif text-sm focus:outline-none focus:border-white/50 transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        {allFormulas.map(({ subject, chapters }) => (
          <div key={subject.id} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{subject.icon}</span>
              <h2 className="font-heading text-2xl">{subject.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapters.map((ch) => (
                <Link
                  key={`${ch.id}-${ch.std}`}
                  href={`/subjects/${subject.id}/${ch.id}`}
                  className="p-4 card"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-xs text-gray-400">
                      Std {ch.std} · Ch. {ch.number}
                    </span>
                    <span className="font-sans text-xs text-white">
                      {ch.formulaCount} formulas
                    </span>
                  </div>
                  <h3 className="font-heading text-sm group-hover:text-white transition-colors">
                    {ch.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
