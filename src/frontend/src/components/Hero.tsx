export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-section-alt dark:bg-background overflow-hidden pt-16 lg:pt-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 80% 50%, oklch(0.46 0.11 235 / 0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, oklch(0.72 0.09 75 / 0.06) 0%, transparent 50%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F3E5A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[oklch(0.46_0.11_235/0.15)] to-[oklch(0.72_0.09_75/0.15)] blur-xl" />
              <div className="relative gold-frame rounded-xl overflow-hidden w-72 h-80 sm:w-96 sm:h-[26rem] lg:w-[420px] lg:h-[500px]">
                <img
                  src="/assets/generated/ambedkar-hero.dim_1200x800.jpg"
                  alt="Dr. B. R. Ambedkar — Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.72_0.09_75)] to-[oklch(0.62_0.09_70)] opacity-70" />
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-2 border-[oklch(0.72_0.09_75)] opacity-50" />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-[oklch(0.72_0.09_75)] font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
              14 April 1891 – 6 December 1956
            </p>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-navy-deep dark:text-white mb-6 uppercase tracking-wide">
              Dr. B. R. Ambedkar
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[oklch(0.46_0.11_235)] dark:text-[oklch(0.65_0.14_235)] mt-2">
                A Symbol of Equality
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl text-[oklch(0.72_0.09_75)] mt-1">
                and Justice
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              From struggle to greatness — a life dedicated to the upliftment of
              the oppressed and the creation of a just India. Architect of the
              Indian Constitution. Champion of equality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={scrollToAbout}
                data-ocid="hero.primary_button"
                className="px-8 py-3.5 bg-[oklch(0.285_0.065_234)] hover:bg-[oklch(0.35_0.08_234)] text-white font-semibold rounded-lg transition-all duration-200 shadow-navy hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wider text-sm"
              >
                Explore His Life
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .querySelector("#early-life")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.secondary_button"
                className="px-8 py-3.5 border-2 border-[oklch(0.285_0.065_234)] dark:border-[oklch(0.55_0.12_235)] text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.8_0.04_235)] font-semibold rounded-lg transition-all duration-200 hover:bg-[oklch(0.285_0.065_234/0.08)] uppercase tracking-wider text-sm"
              >
                Read Biography
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
              {[
                { num: "1947", label: "Law Minister" },
                { num: "600K", label: "Buddhism Converts" },
                { num: "1990", label: "Bharat Ratna" },
              ].map((stat) => (
                <div key={stat.num} className="text-center">
                  <div className="font-playfair font-bold text-2xl lg:text-3xl text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.65_0.14_235)]">
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
