import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <picture>
        <source srcSet="/images/hero-bg-mobile.webp" media="(max-width: 640px)" type="image/webp" />
        <source srcSet="/images/hero-bg.webp" type="image/webp" />
        <source srcSet="/images/hero-bg.jpg" type="image/jpeg" />
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-white mb-3 sm:mb-4 tracking-tight">
          stratos
        </h1>
        <p className="text-base sm:text-xl text-white/80 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Free study tools for Maharashtra Board
          <br />
          11th & 12th Science.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-white text-black font-sans text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Start Studying
          </Link>
          <Link
            href="/chatbot"
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] border border-white/40 text-white font-sans text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
          >
            Ask AI
          </Link>
        </div>

        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 sm:gap-10 text-white/60">
          {[
            { label: "Physics", icon: "⚡" },
            { label: "Chemistry", icon: "🧪" },
            { label: "Maths", icon: "📐" },
            { label: "Biology", icon: "🧬" },
          ].map((s) => (
            <Link
              key={s.label}
              href={`/subjects/${s.label.toLowerCase()}`}
              className="flex flex-col items-center gap-1 group min-h-[44px] justify-end"
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-wider">{s.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
