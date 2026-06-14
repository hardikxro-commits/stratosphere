import { subjects } from "@/lib/subjects";
import Link from "next/link";

export default function SubjectsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-3xl sm:text-4xl mb-2">Subjects</h1>
        <p className="text-gray-400 mb-8 sm:mb-10 font-serif text-sm sm:text-base">
          Pick a subject and start studying.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}`}
              className="group p-5 sm:p-6 card"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">{subject.icon}</span>
                <span
                  className="font-sans text-2xs sm:text-xs uppercase tracking-wider px-2 py-1"
                  style={{ color: subject.color, border: `1px solid ${subject.color}` }}
                >
                  {subject.standards.length} standards
                </span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl mb-1">{subject.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{subject.description}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-2xs sm:text-xs font-sans text-gray-500">
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
