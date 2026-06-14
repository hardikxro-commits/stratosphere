import Link from "next/link";
import { Brain, Target, Clock, Bookmark, BarChart3, Zap, ArrowUpRight } from "lucide-react";

type AidItem = {
  icon: typeof Brain;
  title: string;
  desc: string;
  href?: string;
  status?: string;
};

const aids: AidItem[] = [
  {
    icon: Target,
    title: "PYQ Bank",
    desc: "Previous year board exam questions filtered by subject and year.",
    href: "/pyq",
  },
  {
    icon: Brain,
    title: "Mock Tests",
    desc: "Timed tests with auto-scoring, accuracy tracking, and weak topic analysis.",
    status: "Coming soon",
  },
  {
    icon: Clock,
    title: "Study Planner",
    desc: "Enter your exam dates and get a personalized daily roadmap.",
    status: "Coming soon",
  },
  {
    icon: Bookmark,
    title: "Error Notebook",
    desc: "Save mistakes and review them with spaced repetition reminders.",
    status: "Coming soon",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Track accuracy, time spent, and improvement across subjects.",
    status: "Coming soon",
  },
  {
    icon: Zap,
    title: "Daily Challenge",
    desc: "10 quick questions every day to keep your mind sharp.",
    status: "Coming soon",
  },
];

export default function AidsPage() {
  return (
    <div className="pt-20 sm:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-heading text-3xl sm:text-4xl mb-2">Study Aids</h1>
        <p className="text-xs sm:text-base text-gray-400 mb-8 sm:mb-10 font-serif">
          Tools to help you practice, track, and improve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {aids.map((aid) => {
            const content = (
              <>
                <aid.icon size={20} className="mb-2 sm:mb-3 text-white" />
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-heading text-base sm:text-lg">{aid.title}</h2>
                  {"status" in aid ? (
                    <span className="font-sans text-2xs sm:text-xs px-2 py-0.5 text-gray-500 border border-gray-600">
                      {aid.status}
                    </span>
                  ) : (
                    <ArrowUpRight size={16} className="text-gray-500" />
                  )}
                </div>
                <p className="text-2xs sm:text-sm text-gray-400">{aid.desc}</p>
              </>
            );

            if (aid.href) {
              return (
                <Link key={aid.title} href={aid.href} className="p-4 sm:p-6 card block hover:border-white/30 transition-colors">
                  {content}
                </Link>
              );
            }

            return (
              <div key={aid.title} className="p-4 sm:p-6 card">
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 p-4 sm:p-6 card text-center">
          <p className="font-heading text-xs sm:text-lg text-gray-400">
            More study tools are being built. All features will always be free.
          </p>
        </div>
      </div>
    </div>
  );
}
