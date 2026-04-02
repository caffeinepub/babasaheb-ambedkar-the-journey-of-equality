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
            14 अक्टूबर 1956 · नागपुर
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            बौद्ध धर्म में दीक्षा
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/generated/ambedkar-nagpur-conversion.dim_800x600.jpg"
              alt="नागपुर दीक्षा समारोह 1956"
              className="rounded-2xl w-full object-cover h-64 sm:h-80 shadow-navy"
              loading="lazy"
            />
            <p className="text-center text-xs text-muted-foreground mt-3 tracking-wide uppercase">
              धम्मचक्र प्रवर्तन दिन · नागपुर · 14 अक्टूबर 1956
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-[oklch(0.72_0.09_75)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  ऐतिहासिक घटना
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                14 अक्टूबर 1956 को, नागपुर की दीक्षाभूमि में, डॉ. अंबेडकर ने भारत के सबसे
                वृद्ध बौद्ध भिक्षु भदंत उ चंद्रमणि से दीक्षा ली। यह दो दशकों से अधिक की
                आध्यात्मिक खोज का परिणाम था।
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[oklch(0.46_0.11_235)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  सामूहिक दीक्षा
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                डीक्षा ग्रहण के बाद, अंबेडकर ने उसी दिन लगभग 6 लाख अनुयायियों को दीक्षा
                दी — यह मानव इतिहास में सबसे बड़ा सामूहिक धर्म परिवर्तन बना। उन्होंने उन्हें
                नए बौद्ध जीवन के लिए 22 प्रतिज्ञाएँ दीं।
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border shadow-xs hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Book className="w-5 h-5 text-[oklch(0.55_0.12_160)]" />
                <h3 className="font-playfair font-bold text-navy-deep dark:text-white">
                  अंतिम विरासत
                </h3>
              </div>
              <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                उनकी अंतिम पुस्तक <em>"बुद्ध और उनका धम्म"</em> उनके निधन से मात्र कुछ दिन
                पहले पूरी हुई थी। 6 दिसंबर 1956 को — बौद्ध धर्म अपनाने के केवल 47 दिन बाद
                — बाबासाहेब अंबेडकर का निधन हो गया।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
