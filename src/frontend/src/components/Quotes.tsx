import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const QUOTES = [
  {
    key: "progress",
    text: "I measure the progress of a community by the degree of progress which women have achieved.",
    context: "On social progress",
  },
  {
    key: "life",
    text: "Life should be great rather than long.",
    context: "On purpose",
  },
  {
    key: "education",
    text: "Education is the milk of a lioness, whoever drinks it will roar.",
    context: "On education",
  },
  {
    key: "rights",
    text: "Lost rights are never regained by begging and by appeals to conscience of the usurpers, but by relentless struggle.",
    context: "On rights",
  },
  {
    key: "greatman",
    text: "A great man is different from an eminent one in that he is ready to be the servant of the society.",
    context: "On greatness",
  },
  {
    key: "agitate",
    text: "Be educated, be organized, be agitated.",
    context: "His call to action",
  },
  {
    key: "religion",
    text: "I like the religion that teaches liberty, equality, and fraternity.",
    context: "On religion",
  },
  {
    key: "freedom",
    text: "So long as you do not achieve social liberty, whatever freedom is provided by the law is of no avail to you.",
    context: "On social freedom",
  },
];

export default function Quotes() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % QUOTES.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + QUOTES.length) % QUOTES.length),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleIndices = [
    (current - 1 + QUOTES.length) % QUOTES.length,
    current,
    (current + 1) % QUOTES.length,
  ];

  return (
    <section
      id="quotes"
      ref={ref}
      className="py-20 lg:py-28 bg-[oklch(0.285_0.065_234)] dark:bg-[oklch(0.17_0.03_238)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 text-white/5 select-none pointer-events-none">
        <Quote className="w-64 h-64" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Words of Wisdom
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide">
            Wise Quotes
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {visibleIndices.map((qi, pos) => (
            <div
              key={QUOTES[qi].key}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                pos === 1
                  ? "bg-white dark:bg-[oklch(0.22_0.04_238)] border-[oklch(0.72_0.09_75)] shadow-[0_0_30px_oklch(0.72_0.09_75/0.3)] scale-105"
                  : "bg-white/10 dark:bg-white/5 border-white/20 opacity-70"
              }`}
              data-ocid={`quotes.item.${pos + 1}`}
            >
              <Quote
                className={`w-8 h-8 mb-4 ${
                  pos === 1 ? "text-[oklch(0.72_0.09_75)]" : "text-white/40"
                }`}
              />
              <p
                className={`font-playfair italic text-base leading-relaxed mb-4 ${
                  pos === 1 ? "text-navy-deep dark:text-white" : "text-white/80"
                }`}
              >
                &ldquo;{QUOTES[qi].text}&rdquo;
              </p>
              <p
                className={`text-xs uppercase tracking-wider ${
                  pos === 1
                    ? "text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)]"
                    : "text-white/50"
                }`}
              >
                — Dr. B. R. Ambedkar · {QUOTES[qi].context}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            data-ocid="quotes.pagination_prev"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {QUOTES.map((q, i) => (
              <button
                key={q.key}
                type="button"
                onClick={() => setCurrent(i)}
                data-ocid="quotes.toggle"
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-[oklch(0.72_0.09_75)] w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            data-ocid="quotes.pagination_next"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
