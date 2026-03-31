import { AlertCircle, BookOpen, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const struggles = [
  {
    key: "discrimination",
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Caste Discrimination",
    desc: "Born into the Mahar caste, considered 'untouchable' in the rigid Hindu caste hierarchy. Forced to sit separately in class and denied the right to drink water from a common tap.",
  },
  {
    key: "family",
    icon: <Heart className="w-5 h-5" />,
    title: "Family & Roots",
    desc: "Son of Ramji Maloji Sakpal, an army officer. Despite his father’s military service and modest income, the family faced relentless social ostracism based solely on their caste identity.",
  },
  {
    key: "education",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Education Against All Odds",
    desc: "Teachers refused to touch his books. Yet he excelled in studies, eventually moving to Satara and Mumbai. His brilliance earned him a scholarship to study in America, changing his destiny.",
  },
];

export default function EarlyLife() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="early-life"
      ref={ref}
      className="py-20 lg:py-28 bg-section dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Resilience & Determination
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Early Life & Struggles
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-6">
              Bhimrao Ambedkar was born on 14 April 1891 in the town of Mhow,
              now in Madhya Pradesh. He was the 14th and last child of his
              parents. From the very first years of his life, he experienced the
              brutal reality of untouchability.
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-6">
              In school, he was made to sit on the floor outside the classroom.
              The school peon would pour water into his hands from a height —
              the boy was not allowed to touch the water tap. Despite these
              humiliations, Ambedkar’s will to learn was unbreakable.
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base">
              With the support of the Maharaja of Baroda, he received a
              scholarship to pursue higher education abroad. This opened the
              doors to Columbia University, New York — and changed the course of
              Indian history.
            </p>
          </div>

          <div className="space-y-6">
            {struggles.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 p-5 rounded-xl bg-white dark:bg-[oklch(0.17_0.03_238)] border border-border shadow-xs hover:shadow-navy transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.285_0.065_234)] text-white flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-navy-deep dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
