import { useEffect, useRef } from "react";

const reasons = [
  {
    num: "01",
    title: "जाति व्यवस्था का खंडन",
    desc: "हिंदू धर्म की जाति व्यवस्था ने अस्पृश्यता को ईश्वरीय व्यवस्था बताया। बौद्ध धर्म ने जाति का पूर्ण खंडन किया — हर मानव जन्म से नहीं, कर्म से महान होता है।",
  },
  {
    num: "02",
    title: "समानता और सम्मान",
    desc: "बौद्ध धर्म का संघ सभी के लिए खुला था — स्त्री-पुरुष, उच्च-नीच। यह एकमात्र प्राचीन भारतीय दर्शन था जिसने समानता का सवाल वास्तव में प्रतिपादित किया।",
  },
  {
    num: "03",
    title: "तर्कसंगत दर्शन",
    desc: "बौद्ध धर्म तर्क, अवलोकन और नैतिक आचरण पर आधारित है, न कि अंधविश्वास पर। अंबेडकर ने जीवन की समझ के लिए इसके तर्कसंगत, अनुभववादी दृष्टिकोण को महत्व दिया।",
  },
  {
    num: "04",
    title: "शांति और करुणा",
    desc: "बौद्ध धर्म के मूल मूल्य — अहिंसा, करुणा और मैत्री — अंबेडकर की एक मानवीय समाज की परिकल्पना के साथ मेल खाते थे।",
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
            आध्यात्मिक यात्रा
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            उन्होंने बौद्ध धर्म क्यों अपनाया
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="bg-[oklch(0.285_0.065_234)] rounded-2xl p-8 text-white mb-6">
              <p className="font-playfair italic text-lg leading-relaxed mb-4">
                &ldquo;मैं एक हिंदू के रूप में पैदा हुआ था, लेकिन मैं गंभीरतापूर्वक आपको आश्वस्त
                करता हूँ कि मैं हिंदू के रूप में नहीं मरूँगा।&rdquo;
              </p>
              <p className="text-white/60 text-sm">
                &mdash; डॉ. बी. आर. अंबेडकर, 1935
              </p>
            </div>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-4">
              इस घोषणा के दो दशकों से अधिक समय तक, अंबेडकर ने विभिन्न धर्मों — इस्लाम,
              ईसाई, सिख और बौद्ध — का अध्ययन किया, उसे ढूँढते हुए जो सभी मनुष्यों के लिए
              सद्भाव और सम्मान को सत्तामें रखता हो।
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base">
              उन्होंने निष्कर्ष निकाला कि बौद्ध धर्म — जो भारत की पवित्र भूमि में प्रकट हुआ,
              फिर भी जाति के विष से मुक्त था — उत्तर है।
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item) => (
              <div
                key={item.num}
                className="p-5 bg-white dark:bg-[oklch(0.15_0.025_240)] rounded-xl border border-border shadow-xs hover:-translate-y-1 transition-transform duration-300"
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
