import { Book, Globe, Scale } from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  {
    key: "law-minister",
    icon: <Scale className="w-4 h-4" />,
    text: "स्वतंत्र भारत के प्रथम कानून मंत्री",
  },
  {
    key: "constitution",
    icon: <Book className="w-4 h-4" />,
    text: "संविधान मसौदा समिति के अध्यक्ष (1947–1949)",
  },
  {
    key: "phd",
    icon: <Globe className="w-4 h-4" />,
    text: "कोलंबिया विश्वविद्यालय से पीएचडी और लंदन स्कूल ऑफ इकोनॉमिक्स से डीएससी",
  },
];

const LOTUS_PATHS = [
  "M100,180 C100,180 60,140 60,100 C60,75 80,60 100,55 C120,60 140,75 140,100 C140,140 100,180 100,180Z",
  "M100,175 C60,140 30,100 50,70 C65,50 85,50 100,60",
  "M100,175 C140,140 170,100 150,70 C135,50 115,50 100,60",
  "M100,25 C60,35 50,70 100,140",
  "M100,25 C140,35 150,70 100,140",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <svg
        viewBox="0 0 200 200"
        className="absolute -top-8 right-0 w-64 h-64 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        {LOTUS_PATHS.map((d) => (
          <path
            key={d.slice(0, 20)}
            d={d}
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="3"
          />
        ))}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="none"
          stroke="oklch(0.72 0.09 75)"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.3)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            आधुनिक भारत के शिल्पकार
          </p>
          <h2 className="heading-accent font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide mb-6">
            डॉ. अंबेडकर के बारे में
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="w-4 h-1 rounded bg-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.09_75)]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-dashed border-[oklch(0.72_0.09_75/0.2)] scale-105" />
              <div className="gold-frame rounded-xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96 card-premium">
                <img
                  src="/assets/generated/ambedkar-constitution.dim_800x600.jpg"
                  alt="डॉ. अंबेडकर संविधान लिखते हुए"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[oklch(0.285_0.065_234)] text-white rounded-xl p-4 shadow-navy">
                <div className="font-playfair font-bold text-2xl">1891</div>
                <div className="text-xs tracking-wider uppercase opacity-80">
                  जन्म
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-2xl text-navy-deep dark:text-white mb-2">
              भीमराव रामजी अंबेडकर
            </h3>
            <p className="text-[oklch(0.72_0.09_75)] text-sm font-medium tracking-wider uppercase mb-4">
              जन्म: 14 अप्रैल 1891 · महू, मध्य प्रदेश
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed mb-5 text-base">
              डॉ. भीमराव रामजी अंबेडकर, जिन्हें प्यार से बाबासाहेब कहा जाता है, आधुनिक
              भारत के सबसे महान व्यक्तित्वों में से एक थे। वे एक विधिवेत्ता, अर्थशास्त्री,
              राजनेता और समाज सुधारक थे जिन्होंने अपना पूरा जीवन सामाजिक असमानता और
              भेदभाव को मिटाने में लगाया।
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed mb-6 text-base">
              स्वतंत्रता के बाद, वे भारत के पहले कानून मंत्री बने और संविधान मसौदा समिति की
              अध्यक्षता की। उन्होंने भारत को उसका वह आधारभूत दस्तावेज दिया जो सभी
              नागरिकों के लिए समानता, स्वतंत्रता और बंधुत्व की गारंटी देता है।
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.key}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[oklch(0.93_0.012_235)] dark:hover:bg-[oklch(0.22_0.04_238)] transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[oklch(0.46_0.11_235/0.1)] dark:bg-[oklch(0.46_0.11_235/0.2)] flex items-center justify-center text-[oklch(0.46_0.11_235)] dark:text-[oklch(0.65_0.14_235)] flex-shrink-0 mt-0.5 group-hover:bg-[oklch(0.72_0.09_75/0.15)] group-hover:text-[oklch(0.72_0.09_75)] transition-colors duration-200">
                    {item.icon}
                  </div>
                  <span className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] text-sm leading-relaxed pt-1.5">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
