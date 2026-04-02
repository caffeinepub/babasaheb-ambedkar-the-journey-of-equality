import { useEffect, useRef } from "react";
import { ChakraSpokes } from "./ChakraSVG";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (portraitRef.current) {
      portraitRef.current.style.opacity = "0";
      portraitRef.current.style.transform = "translateY(30px) scale(0.95)";
      setTimeout(() => {
        if (portraitRef.current) {
          portraitRef.current.style.transition =
            "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)";
          portraitRef.current.style.opacity = "1";
          portraitRef.current.style.transform = "translateY(0) scale(1)";
        }
      }, 200);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.008 235) 0%, oklch(0.99 0.003 220) 30%, oklch(0.96 0.012 240) 60%, oklch(0.98 0.006 60) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 80% 70% at 75% 50%, oklch(0.46 0.11 235 / 0.07) 0%, transparent 65%)",
            "radial-gradient(ellipse 60% 50% at 20% 80%, oklch(0.72 0.09 75 / 0.06) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 40% at 90% 10%, oklch(0.65 0.14 200 / 0.05) 0%, transparent 50%)",
            "radial-gradient(ellipse 50% 30% at 10% 15%, oklch(0.285 0.065 234 / 0.04) 0%, transparent 50%)",
          ].join(", "),
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F3E5A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 400 400"
          className="w-[480px] h-[480px] sm:w-[580px] sm:h-[580px] lg:w-[680px] lg:h-[680px] opacity-[0.035] animate-spin-slow"
          aria-hidden="true"
        >
          <circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="4"
          />
          <circle
            cx="200"
            cy="200"
            r="155"
            fill="none"
            stroke="oklch(0.285 0.065 234)"
            strokeWidth="2"
          />
          <circle cx="200" cy="200" r="18" fill="oklch(0.285 0.065 234)" />
          <circle
            cx="200"
            cy="200"
            r="8"
            fill="none"
            stroke="oklch(0.72 0.09 75)"
            strokeWidth="3"
          />
          <ChakraSpokes
            cx={200}
            cy={200}
            innerR={18}
            outerR={155}
            stroke="oklch(0.285 0.065 234)"
            strokeWidth={2.5}
          />
          {Array.from({ length: 24 }, (_, i) => (i * 360) / 24).map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <circle
                key={angle}
                cx={200 + 172 * Math.sin(rad)}
                cy={200 - 172 * Math.cos(rad)}
                r="4"
                fill="oklch(0.72 0.09 75)"
              />
            );
          })}
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full animate-orb-drift"
          style={{
            top: "10%",
            right: "5%",
            background:
              "radial-gradient(circle, oklch(0.46 0.11 235 / 0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full animate-orb-drift-2"
          style={{
            bottom: "15%",
            left: "8%",
            background:
              "radial-gradient(circle, oklch(0.72 0.09 75 / 0.1) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full animate-orb-drift-3"
          style={{
            top: "55%",
            right: "35%",
            background:
              "radial-gradient(circle, oklch(0.65 0.14 200 / 0.08) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        <div
          className="absolute w-20 h-20 rounded-full animate-float"
          style={{
            top: "25%",
            left: "15%",
            background:
              "radial-gradient(circle, oklch(0.72 0.09 75 / 0.09) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      <svg
        className="absolute top-24 left-4 w-16 h-16 opacity-10 dark:opacity-[0.07] pointer-events-none"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path
          d="M8 56 L8 8 L56 8"
          fill="none"
          stroke="oklch(0.72 0.09 75)"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute top-24 right-4 w-16 h-16 opacity-10 dark:opacity-[0.07] pointer-events-none"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path
          d="M56 56 L56 8 L8 8"
          fill="none"
          stroke="oklch(0.72 0.09 75)"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75/0.4)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait with motion */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div ref={portraitRef} className="relative animate-image-float">
              {/* Glow aura */}
              <div className="absolute -inset-6 rounded-2xl animate-glow-pulse pointer-events-none" />
              <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-[oklch(0.46_0.11_235/0.12)] to-[oklch(0.72_0.09_75/0.12)] blur-2xl" />
              <div className="absolute -inset-3 rounded-2xl border border-[oklch(0.72_0.09_75/0.25)] scale-105" />
              <div className="relative gold-frame rounded-xl overflow-hidden w-72 h-80 sm:w-96 sm:h-[26rem] lg:w-[420px] lg:h-[500px]">
                <img
                  src="/assets/generated/ambedkar-hero.dim_1200x800.jpg"
                  alt="डॉ. बी. आर. अंबेडकर — चित्र"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Shimmer sweep overlay */}
                <div className="absolute inset-0 animate-shimmer-sweep pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.19_0.04_240/0.3)] via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.72_0.09_75)] to-[oklch(0.62_0.09_70)] opacity-80 shadow-gold" />
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-2 border-[oklch(0.72_0.09_75)] opacity-50 animate-pulse-slow" />
              <svg
                viewBox="0 0 50 50"
                className="absolute -bottom-2 -left-6 w-12 h-12 opacity-30 animate-spin-slow"
                aria-hidden="true"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="22"
                  fill="none"
                  stroke="oklch(0.285 0.065 234)"
                  strokeWidth="1.5"
                />
                <circle cx="25" cy="25" r="3" fill="oklch(0.72 0.09 75)" />
                <ChakraSpokes
                  cx={25}
                  cy={25}
                  innerR={3}
                  outerR={19}
                  stroke="oklch(0.285 0.065 234)"
                  strokeWidth={0.8}
                />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4 animate-stagger-1">
              <div className="h-px w-8 bg-[oklch(0.72_0.09_75)]" />
              <p className="text-[oklch(0.72_0.09_75)] font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm">
                14 अप्रैल 1891 – 6 दिसंबर 1956
              </p>
              <div className="h-px w-8 bg-[oklch(0.72_0.09_75)]" />
            </div>

            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-navy-deep dark:text-white mb-6 uppercase tracking-wide animate-stagger-2">
              डॉ. बी. आर. अंबेडकर
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[oklch(0.46_0.11_235)] dark:text-[oklch(0.65_0.14_235)] mt-2">
                समानता का प्रतीक
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl text-[oklch(0.72_0.09_75)] mt-1">
                और न्याय
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-stagger-3">
              संघर्ष से महानता तक — एक ऐसा जीवन जो दलितों के उत्थान और न्यायपूर्ण भारत के
              निर्माण को समर्पित था। भारतीय संविधान के शिल्पकार। समानता के प्रणेता।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-stagger-4">
              <button
                type="button"
                onClick={scrollToAbout}
                data-ocid="hero.primary_button"
                className="btn-heritage px-8 py-3.5 bg-[oklch(0.285_0.065_234)] hover:bg-[oklch(0.35_0.08_234)] text-white font-semibold rounded-lg transition-all duration-300 shadow-navy hover:shadow-lg hover:-translate-y-1 uppercase tracking-wider text-sm border border-[oklch(0.46_0.11_235/0.3)]"
              >
                उनका जीवन जानें
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#early-life")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.secondary_button"
                className="btn-heritage px-8 py-3.5 border-2 border-[oklch(0.285_0.065_234)] dark:border-[oklch(0.55_0.12_235)] text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.8_0.04_235)] font-semibold rounded-lg transition-all duration-300 hover:bg-[oklch(0.285_0.065_234/0.08)] hover:-translate-y-1 uppercase tracking-wider text-sm"
              >
                जीवनी पढ़ें
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[oklch(0.88_0.015_235)] dark:border-[oklch(1_0_0/0.1)] animate-stagger-5">
              {[
                { num: "1947", label: "क़ानून मंत्री" },
                { num: "600K", label: "बौद्ध धर्म ग्रहणकर्ता" },
                { num: "1990", label: "भारत रत्न" },
              ].map((stat) => (
                <div key={stat.num} className="text-center group">
                  <div className="font-playfair font-bold text-2xl lg:text-3xl text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.65_0.14_235)] group-hover:text-[oklch(0.72_0.09_75)] transition-colors duration-300">
                    {stat.num}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
