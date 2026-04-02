import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChakraSpokes } from "./ChakraSVG";

const QUOTES = [
  {
    key: "progress",
    text: "मैं किसी समुदाय की प्रगति का माप उस प्रगति की मात्रा से करता हूँ जो महिलाओं ने हासिल की है।",
    context: "सामाजिक प्रगति पर",
  },
  {
    key: "life",
    text: "जीवन लंबा नहीं, महान होना चाहिए।",
    context: "जीवन के उद्देश्य पर",
  },
  {
    key: "education",
    text: "शिक्षा शेरनी का दूध है, जो पीएगा वो दहाड़ेगा।",
    context: "शिक्षा पर",
  },
  {
    key: "rights",
    text: "खोए हुए अधिकार कभी याचना और शोषकों की अंतरात्मा की अपील से नहीं, बल्कि निरंतर संघर्ष से वापस मिलते हैं।",
    context: "अधिकारों पर",
  },
  {
    key: "greatman",
    text: "एक महान व्यक्ति एक प्रतिष्ठित व्यक्ति से इस मायने में भिन्न होता है कि वह समाज का सेवक बनने के लिए तैयार रहता है।",
    context: "महानता पर",
  },
  {
    key: "agitate",
    text: "शिक्षित बनो, संगठित रहो, संघर्ष करो।",
    context: "उनका आह्वान",
  },
  {
    key: "religion",
    text: "मुझे वह धर्म पसंद है जो स्वतंत्रता, समानता और बंधुत्व सिखाता है।",
    context: "धर्म पर",
  },
  {
    key: "freedom",
    text: "जब तक आप सामाजिक स्वतंत्रता नहीं पाते, कानून द्वारा दी गई कोई भी स्वतंत्रता आपके किसी काम नहीं।",
    context: "सामाजिक स्वतंत्रता पर",
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
      className="relative py-20 lg:py-28 bg-[oklch(0.285_0.065_234)] dark:bg-[oklch(0.17_0.03_238)] overflow-hidden"
    >
      <svg
        viewBox="0 0 500 500"
        className="absolute -bottom-20 -right-20 w-96 h-96 opacity-[0.04] animate-spin-slow pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="250"
          cy="250"
          r="235"
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
        <circle
          cx="250"
          cy="250"
          r="180"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="250" cy="250" r="15" fill="white" />
        <ChakraSpokes
          cx={250}
          cy={250}
          innerR={15}
          outerR={180}
          stroke="white"
          strokeWidth={2}
        />
      </svg>

      <div className="absolute top-0 left-0 text-white/5 select-none pointer-events-none">
        <Quote className="w-64 h-64" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, oklch(0.72 0.09 75 / 0.15) 80px, oklch(0.72 0.09 75 / 0.15) 81px)",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75/0.5)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75/0.5)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            ज्ञान के वचन
          </p>
          <h2 className="heading-accent font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide mb-6">
            अमर विचार
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="w-4 h-1 rounded bg-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.09_75)]" />
          </div>
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
                className={`w-8 h-8 mb-4 ${pos === 1 ? "text-[oklch(0.72_0.09_75)]" : "text-white/40"}`}
              />
              <p
                className={`font-playfair italic text-base leading-relaxed mb-4 ${pos === 1 ? "text-navy-deep dark:text-white" : "text-white/80"}`}
              >
                &ldquo;{QUOTES[qi].text}&rdquo;
              </p>
              <p
                className={`text-xs uppercase tracking-wider ${pos === 1 ? "text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)]" : "text-white/50"}`}
              >
                &mdash; डॉ. बी. आर. अंबेडकर · {QUOTES[qi].context}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            data-ocid="quotes.pagination_prev"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.09_75/0.3)] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="पिछला"
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
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[oklch(0.72_0.09_75)] w-6" : "bg-white/30 hover:bg-white/50 w-2"}`}
                aria-label={`विचार ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            data-ocid="quotes.pagination_next"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.09_75/0.3)] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="अगला"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
