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
        <h1 className="font-heading text-4xl italic mb-2">Formula Hub</h1>
        <p className="text-[#8B7D6B] dark:text-[#7A6F8A] mb-10 font-serif">
          All formulas, reactions, and equations — searchable and sorted by chapter.
        </p>

        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search formulas..."
            className="w-full p-3 pl-10 border border-[#D4C9B8] dark:border-[#3A3545] bg-[#F0EBE0] dark:bg-[#232339] font-serif text-sm focus:outline-none focus:border-[#B84A3A] dark:focus:border-[#D4735E] transition-colors"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B7D6B] dark:text-[#7A6F8A]">
            🔍
          </span>
        </div>

        {allFormulas.map(({ subject, chapters }) => (
          <div key={subject.id} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{subject.icon}</span>
              <h2 className="font-heading text-2xl italic">{subject.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {chapters.map((ch) => (
                <Link
                  key={`${ch.id}-${ch.std}`}
                  href={`/subjects/${subject.id}/${ch.id}`}
                  className="p-4 border border-[#D4C9B8] dark:border-[#3A3545] bg-[#F0EBE0] dark:bg-[#232339] hover:border-[#B84A3A] dark:hover:border-[#D4735E] group transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans text-xs text-[#8B7D6B] dark:text-[#7A6F8A]">
                      Std {ch.std} · Ch. {ch.number}
                    </span>
                    <span className="font-sans text-xs text-[#B84A3A] dark:text-[#D4735E]">
                      {ch.formulaCount} formulas
                    </span>
                  </div>
                  <h3 className="font-heading italic text-sm group-hover:text-[#B84A3A] dark:group-hover:text-[#D4735E] transition-colors">
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
