import { subjects } from "@/lib/subjects";
import Link from "next/link";

export default function SubjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-4xl italic mb-2">Subjects</h1>
        <p className="text-[#8B7D6B] dark:text-[#7A6F8A] mb-10 font-serif">
          Pick a subject and start studying.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}`}
              className="group p-6 border border-[#D4C9B8] dark:border-[#3A3545] bg-[#F0EBE0] dark:bg-[#232339] hover:border-[#B84A3A] dark:hover:border-[#D4735E] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{subject.icon}</span>
                <span
                  className="font-sans text-xs uppercase tracking-wider px-2 py-1"
                  style={{ color: subject.color, border: `1px solid ${subject.color}` }}
                >
                  {subject.standards.length} standards
                </span>
              </div>
              <h2 className="font-heading text-2xl italic mb-1">{subject.title}</h2>
              <p className="text-sm text-[#8B7D6B] dark:text-[#7A6F8A] mb-4">{subject.description}</p>

              <div className="flex gap-4 text-xs font-sans text-[#5C4F3F] dark:text-[#B5A88A]">
                {subject.standards.map((s) => (
                  <span key={s.std}>
                    Std {s.std} · {s.chapters.length} chapters
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
