import { subjects, getSubject } from "@/lib/subjects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProgressBar from "@/components/ui/ProgressBar";

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.id }));
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectId } = await params;
  const subject = getSubject(subjectId);

  if (!subject) notFound();

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
        <p className="text-[#8B7D6B] dark:text-[#7A6F8A] mb-10">{subject.description}</p>

        <div className="space-y-10">
          {subject.standards.map((std) => (
            <div key={std.std}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-2xl italic">
                  Standard {std.std}
                </h2>
                <span className="font-sans text-xs text-[#8B7D6B] dark:text-[#7A6F8A]">
                  {std.chapters.length} chapters
                </span>
              </div>

              <div className="space-y-2">
                {std.chapters.map((ch) => (
                  <Link
                    key={ch.id}
                    href={`/subjects/${subject.id}/${ch.id}`}
                    className="flex items-center justify-between p-4 border border-[#D4C9B8] dark:border-[#3A3545] bg-[#F0EBE0] dark:bg-[#232339] hover:border-[#B84A3A] dark:hover:border-[#D4735E] group transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-sans text-xs text-[#8B7D6B] dark:text-[#7A6F8A] w-6 text-right">
                        {ch.number}
                      </span>
                      <div>
                        <h3 className="font-heading italic group-hover:text-[#B84A3A] dark:group-hover:text-[#D4735E] transition-colors">
                          {ch.title}
                        </h3>
                        <p className="text-xs text-[#8B7D6B] dark:text-[#7A6F8A]">{ch.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-sans text-[#8B7D6B] dark:text-[#7A6F8A]">
                      {ch.formulaCount !== undefined && ch.formulaCount > 0 && (
                        <span className="hidden sm:inline">{ch.formulaCount} formulas</span>
                      )}
                      <span>{ch.questionCount}+ Qs</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
