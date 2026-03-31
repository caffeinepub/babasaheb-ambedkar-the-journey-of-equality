import {
  Award,
  Book,
  Globe,
  Heart,
  Scale,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

const legacyItems = [
  {
    key: "constitution",
    icon: <Scale className="w-7 h-7" />,
    title: "Architect of the Constitution",
    desc: "The Indian Constitution — the world’s longest written constitution — enshrines fundamental rights, abolition of untouchability (Article 17), and equality for all.",
  },
  {
    key: "buddhist-movement",
    icon: <Users className="w-7 h-7" />,
    title: "Dalit Buddhist Movement",
    desc: "His conversion sparked the Neo-Buddhist movement in India. Millions of Dalits followed his path, transforming their social identity and dignity.",
  },
  {
    key: "bharat-ratna",
    icon: <Award className="w-7 h-7" />,
    title: "Bharat Ratna 1990",
    desc: "Posthumously awarded India’s highest civilian honour — the Bharat Ratna — in recognition of his extraordinary contribution to the nation.",
  },
  {
    key: "global",
    icon: <Globe className="w-7 h-7" />,
    title: "Global Influence",
    desc: "His work influenced anti-caste and civil rights movements worldwide. Scholars and activists across the globe study his writings on equality and social justice.",
  },
  {
    key: "scholar",
    icon: <Book className="w-7 h-7" />,
    title: "Prolific Scholar",
    desc: "Authored dozens of books including ‘Annihilation of Caste’, ‘The Buddha and His Dhamma’, and ‘Thoughts on Pakistan’, all of which remain influential to this day.",
  },
  {
    key: "jayanti",
    icon: <Star className="w-7 h-7" />,
    title: "Ambedkar Jayanti",
    desc: "His birthday, 14 April, is celebrated as Ambedkar Jayanti — a national holiday in India, observed with processions, readings, and cultural events across the country.",
  },
  {
    key: "women",
    icon: <Heart className="w-7 h-7" />,
    title: "Women’s Empowerment",
    desc: "The Hindu Code Bill he championed granted Indian women unprecedented legal rights — the right to divorce, to inheritance, and to equal treatment under the law.",
  },
  {
    key: "economic",
    icon: <Zap className="w-7 h-7" />,
    title: "Economic Vision",
    desc: "His economic policies — nationalization of industries, land reform, focus on labour welfare — shaped independent India’s development framework in its early years.",
  },
];

export default function Legacy() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="legacy"
      ref={ref}
      className="py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            An Eternal Impact
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            His Legacy
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
          <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] mt-5 max-w-2xl mx-auto text-base">
            Babasaheb Ambedkar’s impact on modern India is immeasurable. His
            statue stands in the Parliament of India — a permanent testament to
            a life lived in service of justice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legacyItems.map((item, i) => (
            <div
              key={item.key}
              className="group text-center p-6 bg-white dark:bg-[oklch(0.15_0.025_240)] rounded-xl border border-border shadow-xs hover:shadow-navy hover:-translate-y-1 transition-all duration-300"
              data-ocid={`legacy.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.285_0.065_234)] text-white flex items-center justify-center mx-auto mb-4 group-hover:bg-[oklch(0.46_0.11_235)] transition-colors">
                {item.icon}
              </div>
              <h3 className="font-playfair font-bold text-navy-deep dark:text-white text-sm mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[oklch(0.285_0.065_234)] rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          <p className="relative font-playfair italic text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed max-w-3xl mx-auto">
            &ldquo;Educate, Agitate, Organize — the three pillars of liberation.
            Babasaheb showed us the way."
          </p>
          <div className="mt-6 w-16 h-0.5 bg-[oklch(0.72_0.09_75)] mx-auto" />
          <p className="text-white/60 text-sm mt-3 uppercase tracking-widest">
            Jai Bhim
          </p>
        </div>
      </div>
    </section>
  );
}
