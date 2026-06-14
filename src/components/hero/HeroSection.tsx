import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white mb-4 tracking-tight">
          stratos
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
          Free study tools for Maharashtra Board
          <br />
          11th & 12th Science.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-sans text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Start Studying
          </Link>
          <Link
            href="/chatbot"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-sans text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Ask AI
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10 text-white/60">
          {[
            { label: "Physics", icon: "⚡" },
            { label: "Chemistry", icon: "🧪" },
            { label: "Maths", icon: "📐" },
            { label: "Biology", icon: "🧬" },
          ].map((s) => (
            <Link
              key={s.label}
              href={`/subjects/${s.label.toLowerCase()}`}
              className="flex flex-col items-center gap-1 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
              <span className="text-xs font-sans uppercase tracking-wider">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
