import { Book, Globe, Scale } from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  {
    key: "law-minister",
    icon: <Scale className="w-4 h-4" />,
    text: "First Law Minister of Independent India",
  },
  {
    key: "constitution",
    icon: <Book className="w-4 h-4" />,
    text: "Chairman, Constitution Drafting Committee (1947–1949)",
  },
  {
    key: "phd",
    icon: <Globe className="w-4 h-4" />,
    text: "PhD from Columbia University & DSc from London School of Economics",
  },
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
      className="py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            The Architect of Modern India
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            About Dr. Ambedkar
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="gold-frame rounded-xl overflow-hidden w-72 h-80 sm:w-80 sm:h-96">
                <img
                  src="/assets/generated/ambedkar-constitution.dim_800x600.jpg"
                  alt="Dr. Ambedkar drafting the Constitution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[oklch(0.285_0.065_234)] text-white rounded-xl p-4 shadow-navy">
                <div className="font-playfair font-bold text-2xl">1891</div>
                <div className="text-xs tracking-wider uppercase opacity-80">
                  Born
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-2xl text-navy-deep dark:text-white mb-2">
              Bhimrao Ramji Ambedkar
            </h3>
            <p className="text-[oklch(0.72_0.09_75)] text-sm font-medium tracking-wider uppercase mb-4">
              Born: 14 April 1891 · Mhow, Madhya Pradesh
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed mb-5 text-base">
              Dr. Bhimrao Ramji Ambedkar, fondly known as Babasaheb, was one of
              India’s most towering figures — a jurist, economist, politician,
              and social reformer who dedicated his life to eradicating social
              inequality and discrimination.
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed mb-6 text-base">
              Post-Independence, he served as India’s first Law Minister and
              chaired the Constitution Drafting Committee, giving India its
              foundational document that enshrines equality, liberty, and
              fraternity for all citizens.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item.key} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[oklch(0.46_0.11_235/0.1)] dark:bg-[oklch(0.46_0.11_235/0.2)] flex items-center justify-center text-[oklch(0.46_0.11_235)] dark:text-[oklch(0.65_0.14_235)] flex-shrink-0 mt-0.5">
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
