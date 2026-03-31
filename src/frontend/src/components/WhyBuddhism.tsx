import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "Rejection of Caste",
    desc: "Hinduism's caste system justified untouchability as divine order. Buddhism offered a complete rejection of caste — every human being is equal regardless of birth.",
  },
  {
    num: "02",
    title: "Equality & Dignity",
    desc: "Buddhism's sangha (community) was open to all — men and women, high and low. It was the only ancient Indian philosophy that truly practiced what it preached about equality.",
  },
  {
    num: "03",
    title: "Rational Philosophy",
    desc: "Buddhism is grounded in reason, observation, and ethical conduct — not blind faith or revelation. Ambedkar valued its rational, empirical approach to understanding life.",
  },
  {
    num: "04",
    title: "Peace & Compassion",
    desc: "The core Buddhist values of ahimsa (non-violence), karuna (compassion), and metta (loving-kindness) aligned with Ambedkar's vision for a humane society.",
  },
];

export default function WhyBuddhism() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="why-buddhism"
      ref={ref}
      className="py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            The Spiritual Journey
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Why He Adopted Buddhism
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="bg-[oklch(0.285_0.065_234)] rounded-2xl p-8 text-white mb-6">
              <p className="font-playfair italic text-lg leading-relaxed mb-4">
                "I was born a Hindu, but I solemnly assure you that I will not
                die as a Hindu."
              </p>
              <p className="text-white/60 text-sm">
                — Dr. B. R. Ambedkar, 1935
              </p>
            </div>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-4">
              For over two decades after making this declaration, Ambedkar
              studied various religions — Islam, Christianity, Sikhism, and
              Buddhism — searching for one that truly embodied equality and
              dignity for all human beings.
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base">
              He concluded that Buddhism — the ancient Indian philosophy of the
              Enlightened One — was the answer. It was born in India, rooted in
              the soil, yet free from the poison of caste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item) => (
              <div
                key={item.num}
                className="p-5 bg-white dark:bg-[oklch(0.15_0.025_240)] rounded-xl border border-border shadow-xs"
              >
                <div className="font-playfair font-bold text-3xl text-[oklch(0.72_0.09_75/0.3)] dark:text-[oklch(0.72_0.09_75/0.4)] mb-2">
                  {item.num}
                </div>
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
