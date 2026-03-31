import { BookOpen, Scale, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const contributions = [
  {
    key: "mahad",
    icon: <Users className="w-6 h-6" />,
    title: "Mahad Satyagraha (1927)",
    desc: "Led the historic Mahad Satyagraha, fighting for Dalits\u2019 right to drink water from public tanks — a fundamental human right denied by caste discrimination.",
    color: "oklch(0.46 0.11 235)",
  },
  {
    key: "manusmriti",
    icon: <Scale className="w-6 h-6" />,
    title: "Burned Manusmriti (1927)",
    desc: "Publicly burned the Manusmriti — the ancient text that codified caste hierarchy and oppression — as a symbolic protest against caste discrimination.",
    color: "oklch(0.72 0.09 75)",
  },
  {
    key: "journalism",
    icon: <BookOpen className="w-6 h-6" />,
    title: "Journalism for Rights",
    desc: "Founded Mooknayak (1920) and Bahishkrit Bharat (1927) — newspapers championing the cause of the oppressed and giving voice to millions who had none.",
    color: "oklch(0.55 0.12 160)",
  },
  {
    key: "poona-pact",
    icon: <Star className="w-6 h-6" />,
    title: "Poona Pact (1932)",
    desc: "Negotiated the Poona Pact with Mahatma Gandhi, securing reserved seats in legislatures for Scheduled Castes across all provinces.",
    color: "oklch(0.62 0.14 30)",
  },
  {
    key: "women",
    icon: <Users className="w-6 h-6" />,
    title: "Women’s Rights",
    desc: "Played a key role in advancing the Hindu Code Bill, granting women rights to divorce, inheritance, and equal treatment under the law.",
    color: "oklch(0.56 0.16 310)",
  },
  {
    key: "labour",
    icon: <Scale className="w-6 h-6" />,
    title: "Labour Rights",
    desc: "As Labour Member in the Viceroy’s Executive Council, fought for minimum wages, workers\u2019 rights, and equitable labour policies for India\u2019s workforce.",
    color: "oklch(0.50 0.13 200)",
  },
];

export default function Contributions() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="contributions"
      ref={ref}
      className="py-20 lg:py-28 bg-section dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            A Lifetime of Service
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Contributions to Society
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item, i) => (
            <div
              key={item.key}
              className="group p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border hover:border-[oklch(0.46_0.11_235/0.4)] shadow-xs hover:shadow-navy transition-all duration-300 hover:-translate-y-1"
              data-ocid={`contributions.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-playfair font-bold text-navy-deep dark:text-white mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
