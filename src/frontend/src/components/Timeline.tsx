import { useEffect, useRef } from "react";

const events = [
  {
    key: "birth",
    year: "1891",
    title: "Birth",
    desc: "Born on 14 April in Mhow, Madhya Pradesh",
  },
  {
    key: "matric",
    year: "1907",
    title: "Matriculation",
    desc: "Passed Matriculation — first Mahar caste student to do so",
  },
  {
    key: "columbia",
    year: "1913",
    title: "Columbia University",
    desc: "Arrived in New York to study at Columbia University on a Baroda scholarship",
  },
  {
    key: "phd",
    year: "1916",
    title: "PhD Completed",
    desc: "Completed PhD in Economics from Columbia University",
  },
  {
    key: "mooknayak",
    year: "1920",
    title: "Mooknayak",
    desc: 'Launched newspaper "Mooknayak" (Voice of the Mute) for Dalit rights',
  },
  {
    key: "mahad",
    year: "1927",
    title: "Mahad Satyagraha",
    desc: "Led Mahad Satyagraha; publicly burned Manusmriti",
  },
  {
    key: "poona",
    year: "1932",
    title: "Poona Pact",
    desc: "Signed Poona Pact with Gandhi; secured reserved seats for Scheduled Castes",
  },
  {
    key: "labour-party",
    year: "1936",
    title: "Labour Party",
    desc: "Founded Independent Labour Party for workers' rights",
  },
  {
    key: "viceroy",
    year: "1942",
    title: "Viceroy's Council",
    desc: "Appointed Labour Member in Viceroy's Executive Council",
  },
  {
    key: "law-minister",
    year: "1947",
    title: "Law Minister",
    desc: "Appointed first Law Minister of Independent India",
  },
  {
    key: "constitution",
    year: "1947\u201349",
    title: "Constitution",
    desc: "Chaired the Constitution Drafting Committee",
  },
  {
    key: "republic",
    year: "1950",
    title: "Republic Day",
    desc: "Indian Constitution adopted on 26 January",
  },
  {
    key: "buddhism",
    year: "1956",
    title: "Embraced Buddhism",
    desc: "Converted to Buddhism on 14 October at Nagpur along with 600,000 followers",
  },
  {
    key: "passing",
    year: "1956",
    title: "Mahaparinirvana",
    desc: "Passed away on 6 December — 47 days after conversion",
  },
  {
    key: "bharat-ratna",
    year: "1990",
    title: "Bharat Ratna",
    desc: "Awarded Bharat Ratna posthumously — India’s highest civilian honour",
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
      className="py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            A Life Well Lived
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Life Timeline
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[oklch(0.88_0.015_235)] dark:bg-[oklch(0.3_0.04_238)] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[oklch(0.88_0.015_235)] dark:bg-[oklch(0.3_0.04_238)] md:hidden" />

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
                  <div className="bg-white dark:bg-[oklch(0.15_0.025_240)] border border-border rounded-xl p-5 shadow-xs hover:shadow-navy transition-shadow">
                    <div className="font-playfair font-bold text-[oklch(0.72_0.09_75)] text-lg mb-1">
                      {event.year}
                    </div>
                    <div className="font-semibold text-navy-deep dark:text-white text-sm mb-1">
                      {event.title}
                    </div>
                    <div className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-xs leading-relaxed">
                      {event.desc}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-[oklch(0.285_0.065_234)] border-4 border-[oklch(0.72_0.09_75)] z-10" />
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
