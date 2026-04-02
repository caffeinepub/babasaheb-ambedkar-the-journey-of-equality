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
import { ChakraSpokes } from "./ChakraSVG";

const legacyItems = [
  {
    key: "constitution",
    icon: <Scale className="w-7 h-7" />,
    title: "संविधान के शिल्पकार",
    desc: "भारतीय संविधान — विश्व का सबसे लंबा लिखित संविधान — अनुच्छेद 17 द्वारा अस्पृश्यता की समाप्ति और सबके लिए समानता की गारंटी।",
  },
  {
    key: "buddhist-movement",
    icon: <Users className="w-7 h-7" />,
    title: "दलित बौद्ध आंदोलन",
    desc: "उनके धर्म परिवर्तन ने भारत में नव-बौद्ध आंदोलन को जन्म दिया। लाखों दलितों ने उनके मार्ग का अनुसरण किया।",
  },
  {
    key: "bharat-ratna",
    icon: <Award className="w-7 h-7" />,
    title: "भारत रत्न 1990",
    desc: "राष्ट्र के प्रति असाधारण योगदान की मान्यता में मरणोपरांत भारत के सर्वोच्च नागरिक सम्मान से नवाजा गया।",
  },
  {
    key: "global",
    icon: <Globe className="w-7 h-7" />,
    title: "वैश्विक प्रभाव",
    desc: "उनके विचारों ने विश्वभर में जाति-विरोधी और नागरिक अधिकार आंदोलनों को प्रभावित किया।",
  },
  {
    key: "scholar",
    icon: <Book className="w-7 h-7" />,
    title: "विपुल विद्वान",
    desc: "'जातिभेद का विनाश', 'बुद्ध और उनका धम्म' साहित दर्जनों पुस्तकें लिखीं जो आज भी प्रासंगिक हैं।",
  },
  {
    key: "jayanti",
    icon: <Star className="w-7 h-7" />,
    title: "अंबेडकर जयंती",
    desc: "14 अप्रैल को अंबेडकर जयंती के रूप में राष्ट्रीय अवकाश मनाया जाता है।",
  },
  {
    key: "women",
    icon: <Heart className="w-7 h-7" />,
    title: "महिला सशक्तिकरण",
    desc: "हिंदू कोड बिल ने भारतीय महिलाओं को अभूतपूर्व कानूनी अधिकार दिए।",
  },
  {
    key: "economic",
    icon: <Zap className="w-7 h-7" />,
    title: "आर्थिक दृष्टि",
    desc: "उनकी आर्थिक नीतियाँ — उद्योगों का राष्ट्रीकरण, भूमि सुधार, श्रम कल्याण — ने स्वतंत्र भारत के विकास ढांचे को आकार दिया।",
  },
];

const BANNER_SPOKES = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);

function BannerChakra({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <circle
        cx="30"
        cy="30"
        r="27"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="30" r="4" fill="white" />
      {BANNER_SPOKES.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={30 + 4 * Math.sin(rad)}
            y1={30 - 4 * Math.cos(rad)}
            x2={30 + 23 * Math.sin(rad)}
            y2={30 - 23 * Math.cos(rad)}
            stroke="white"
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}

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
      className="relative py-20 lg:py-28 bg-section-alt dark:bg-[oklch(0.17_0.03_238)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-diagonal-pattern opacity-60 pointer-events-none" />

      <svg
        viewBox="0 0 300 300"
        className="absolute -bottom-16 -left-16 w-80 h-80 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      >
        <ellipse
          cx="150"
          cy="200"
          rx="80"
          ry="100"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="4"
        />
        <ellipse
          cx="110"
          cy="190"
          rx="55"
          ry="90"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="3"
          transform="rotate(-25 110 190)"
        />
        <ellipse
          cx="190"
          cy="190"
          rx="55"
          ry="90"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="3"
          transform="rotate(25 190 190)"
        />
        <circle
          cx="150"
          cy="150"
          r="20"
          fill="none"
          stroke="oklch(0.72 0.09 75)"
          strokeWidth="3"
        />
        <circle cx="150" cy="150" r="6" fill="oklch(0.72 0.09 75)" />
      </svg>

      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.25)] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.15)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            एक अमर प्रभाव
          </p>
          <h2 className="heading-accent font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide mb-6">
            उनकी विरासत
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="w-4 h-1 rounded bg-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.09_75)]" />
          </div>
          <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] mt-5 max-w-2xl mx-auto text-base">
            आधुनिक भारत पर बाबासाहेब अंबेडकर का प्रभाव अतुलनीय है। भारतीय संसद में उनकी
            प्रतिमा न्याय के प्रति समर्पित जीवन की शाश्वत गवाही है।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {legacyItems.map((item, i) => (
            <div
              key={item.key}
              className={`card-premium group text-center p-6 bg-white dark:bg-[oklch(0.15_0.025_240)] rounded-xl border border-border shadow-xs animate-stagger-${(i % 6) + 1}`}
              data-ocid={`legacy.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[oklch(0.285_0.065_234)] text-white flex items-center justify-center mx-auto mb-4 group-hover:bg-[oklch(0.72_0.09_75)] transition-colors duration-300">
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
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <BannerChakra className="absolute top-3 left-3 w-12 h-12 opacity-10 animate-spin-slow" />
          <BannerChakra className="absolute bottom-3 right-3 w-12 h-12 opacity-10 animate-spin-reverse" />
          <p className="relative font-playfair italic text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed max-w-3xl mx-auto">
            &ldquo;शिक्षित बनो, संघर्ष करो, संगठित रहो — मुक्ति के तीन स्तंभ। बाबासाहेब ने
            हमें राह दिखाई।&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[oklch(0.72_0.09_75)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-8 bg-[oklch(0.72_0.09_75)]" />
          </div>
          <p className="text-white/60 text-sm mt-3 uppercase tracking-widest">
            जय भीम
          </p>
        </div>
      </div>
    </section>
  );
}
