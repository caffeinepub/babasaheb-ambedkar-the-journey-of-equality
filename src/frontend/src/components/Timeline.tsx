import { useEffect, useRef } from "react";
import { ChakraSpokes } from "./ChakraSVG";

const events = [
  {
    key: "birth",
    year: "1891",
    title: "जन्म",
    desc: "14 अप्रैल को महू, मध्य प्रदेश में जन्म",
  },
  {
    key: "matric",
    year: "1907",
    title: "मैट्रिकुलेशन",
    desc: "मैट्रिकुलेशन पास किया — महार जाति के पहले विद्यार्थी",
  },
  {
    key: "columbia",
    year: "1913",
    title: "कोलंबिया विश्वविद्यालय",
    desc: "बड़ौदा छात्रवृत्ति पर न्यूयॉर्क विश्वविद्यालय में अध्ययन हेतु पहुँचे",
  },
  {
    key: "phd",
    year: "1916",
    title: "पीएचडी",
    desc: "कोलंबिया विश्वविद्यालय से अर्थशास्त्र में पीएचडी पूरी की",
  },
  {
    key: "mooknayak",
    year: "1920",
    title: "मूकनायक",
    desc: '"मूकनायक" समाचार पत्र का प्रकाशन शुरू किया',
  },
  {
    key: "mahad",
    year: "1927",
    title: "महाद सत्याग्रह",
    desc: "महाद सत्याग्रह का नेतृत्व; मनुस्मृति का सार्वजनिक दहन",
  },
  {
    key: "poona",
    year: "1932",
    title: "पूना समझौता",
    desc: "गांधी जी से पूना समझौते पर हस्ताक्षर; अनुसूचित जातियों के लिए आरक्षित सीटें सुरक्षित",
  },
  {
    key: "labour-party",
    year: "1936",
    title: "श्रमिक पार्टी",
    desc: "श्रमिकों के अधिकारों के लिए स्वतंत्र श्रमिक पार्टी की स्थापना",
  },
  {
    key: "viceroy",
    year: "1942",
    title: "वायसराय परिषद",
    desc: "वायसराय की कार्यकारिणी परिषद में श्रम सदस्य नियुक्त",
  },
  {
    key: "law-minister",
    year: "1947",
    title: "कानून मंत्री",
    desc: "स्वतंत्र भारत के प्रथम कानून मंत्री नियुक्त",
  },
  {
    key: "constitution",
    year: "1947–49",
    title: "संविधान",
    desc: "संविधान मसौदा समिति की अध्यक्षता",
  },
  {
    key: "republic",
    year: "1950",
    title: "गणतंत्र दिवस",
    desc: "26 जनवरी को संविधान लागू",
  },
  {
    key: "buddhism",
    year: "1956",
    title: "बौद्ध धर्म ग्रहण",
    desc: "14 अक्टूबर को नागपुर में 6 लाख अनुयायियों साथ बौद्ध धर्म ग्रहण",
  },
  {
    key: "passing",
    year: "1956",
    title: "महापरिनिर्वाण",
    desc: "6 दिसंबर को निधन — दीक्षा के 47 दिन बाद",
  },
  {
    key: "bharat-ratna",
    year: "1990",
    title: "भारत रत्न",
    desc: "भारत के सर्वोच्च नागरिक सम्मान से मरणोपरांत सम्मानित",
  },
];

export default function Timeline() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <svg
        viewBox="0 0 400 400"
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-[0.035] animate-spin-slow pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="200"
          r="145"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="200" r="12" fill="oklch(0.72 0.09 75)" />
        <ChakraSpokes
          cx={200}
          cy={200}
          innerR={12}
          outerR={145}
          stroke="oklch(0.285 0.065 234)"
          strokeWidth={1.5}
        />
      </svg>

      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.2)] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            एक सार्थक जीवन
          </p>
          <h2 className="heading-accent font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide mb-6">
            जीवन समयरेखा
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="w-4 h-1 rounded bg-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.09_75)]" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[oklch(0.72_0.09_75/0.3)] via-[oklch(0.72_0.09_75)] to-[oklch(0.72_0.09_75/0.3)] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[oklch(0.72_0.09_75/0.3)] via-[oklch(0.72_0.09_75)] to-[oklch(0.72_0.09_75/0.3)] md:hidden" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <div
                key={event.key}
                className={`relative flex items-start gap-4 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-ocid={`timeline.item.${i + 1}`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    i % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  } pl-12 md:pl-0`}
                >
                  <div
                    className={`card-premium bg-white dark:bg-[oklch(0.15_0.025_240)] border border-border rounded-xl p-5 shadow-xs group ${
                      i % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
                    }`}
                  >
                    <div className="font-playfair font-bold text-[oklch(0.72_0.09_75)] text-lg mb-1">
                      {event.year}
                    </div>
                    <div className="font-semibold text-navy-deep dark:text-white text-sm mb-1">
                      {event.title}
                    </div>
                    <div className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-xs leading-relaxed">
                      {event.desc}
                    </div>
                    <div
                      className={`mt-3 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[oklch(0.72_0.09_75)] to-[oklch(0.46_0.11_235)] rounded transition-all duration-500 ${i % 2 === 0 ? "" : "ml-auto"}`}
                    />
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-5 h-5 rounded-full bg-[oklch(0.285_0.065_234)] border-4 border-[oklch(0.72_0.09_75)] z-10 shadow-gold" />
                <div className="md:hidden absolute left-[13px] top-5 w-4 h-4 rounded-full bg-[oklch(0.285_0.065_234)] border-4 border-[oklch(0.72_0.09_75)] z-10" />
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
