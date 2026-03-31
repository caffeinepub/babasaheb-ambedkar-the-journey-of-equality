import { Book, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ConversionToBuddhism() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="conversion"
      ref={ref}
      className="py-20 lg:py-28 bg-section dark:bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, oklch(0.72 0.09 75) 0%, transparent 50%), radial-gradient(circle at 70% 50%, oklch(0.46 0.11 235) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            14 October 1956 · Nagpur
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Conversion to Buddhism
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/generated/ambedkar-nagpur-conversion.dim_800x600.jpg"
              alt="Nagpur Conversion Ceremony 1956"
              className="rounded-2xl w-full object-cover h-64 sm:h-80 shadow-navy"
              loading="lazy"
            />
            <p className="text-center text-xs text-muted-foreground mt-3 tracking-wide uppercase">
              Dhammachakra Pravartan Din · Nagpur · 14 October 1956
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-[oklch(0.72_0.09_75)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  The Historic Event
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                On 14 October 1956, at the Diksha Bhumi in Nagpur, Dr. Ambedkar
                received diksha (initiation) from Bhadant U Chandramani, the
                oldest Buddhist monk in India. This was the culmination of over
                two decades of spiritual searching.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[oklch(0.46_0.11_235)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  Mass Conversion
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                After receiving diksha himself, Ambedkar administered it to
                approximately 600,000 of his followers on the same day — making
                it the largest mass religious conversion in recorded human
                history. He gave them 22 vows to guide their new Buddhist lives.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <Book className="w-5 h-5 text-[oklch(0.55_0.12_160)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  Final Legacy
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                His final book, <em>"The Buddha and His Dhamma"</em>, was
                completed just days before his passing. On 6 December 1956 —
                only 47 days after embracing Buddhism — Babasaheb Ambedkar
                passed away, leaving behind a transformed nation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
