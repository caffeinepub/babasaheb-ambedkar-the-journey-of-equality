import { Award, GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";

const achievements = [
  {
    key: "columbia-ma",
    year: "1913",
    title: "Columbia University, New York",
    desc: "Awarded scholarship from Baroda State to study at Columbia University.",
    degree: "MA in Economics",
  },
  {
    key: "columbia-phd",
    year: "1916",
    title: "PhD from Columbia",
    desc: 'Completed PhD with thesis "National Dividend of India". First Indian to receive a doctorate in economics from a foreign university.',
    degree: "Doctor of Philosophy",
  },
  {
    key: "lse-enroll",
    year: "1916",
    title: "London School of Economics",
    desc: "Enrolled at LSE to study for a second doctoral degree.",
    degree: "DSc Economics",
  },
  {
    key: "lse-dsc",
    year: "1920",
    title: "Returned to London",
    desc: "Completed MSc in Economics and DSc from LSE.",
    degree: "MSc & DSc",
  },
  {
    key: "bar",
    year: "1923",
    title: "Called to the Bar",
    desc: "Called to the Bar from Gray’s Inn, London — qualifying as a barrister.",
    degree: "Barrister-at-Law",
  },
  {
    key: "constitution",
    year: "1947–49",
    title: "Constitution Drafting Committee",
    desc: "Appointed Chairman of the Constitution Drafting Committee by the Constituent Assembly of India.",
    degree: "Legacy Achievement",
  },
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 lg:py-28 bg-[oklch(0.285_0.065_234)] dark:bg-[oklch(0.17_0.03_238)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[oklch(0.72_0.09_75)] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Academic Excellence
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base">
            Ambedkar accumulated more university degrees than any other Indian
            leader of his time, transforming himself from an untouchable boy
            into one of the world’s greatest legal minds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <div
              key={item.key}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors group"
              data-ocid={`education.item.${i + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[oklch(0.72_0.09_75)] flex items-center justify-center flex-shrink-0">
                  {item.key === "constitution" ? (
                    <Award className="w-4 h-4 text-white" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="font-playfair font-bold text-[oklch(0.72_0.09_75)] text-xl">
                  {item.year}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-3">
                {item.desc}
              </p>
              <span className="inline-block text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full tracking-wide">
                {item.degree}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden max-h-64 relative">
          <img
            src="/assets/generated/ambedkar-student.dim_800x600.jpg"
            alt="Young Ambedkar during student years abroad"
            className="w-full h-64 object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.285_0.065_234)] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 text-white">
            <p className="font-playfair font-bold text-lg">
              Student Years Abroad
            </p>
            <p className="text-white/70 text-sm">
              Columbia University, New York · 1913–1916
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
