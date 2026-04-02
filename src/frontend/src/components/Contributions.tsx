import { BookOpen, Scale, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { ChakraSpokes } from "./ChakraSVG";

const contributions = [
  {
    key: "mahad",
    icon: <Users className="w-6 h-6" />,
    title: "महाद सत्याग्रह (1927)",
    desc: "दलितों के सार्वजनिक तालाबों से पानी पीने के अधिकार के लिए ऐतिहासिक महाद सत्याग्रह का नेतृत्व किया — जाति भेदभाव से वंचित एक मौलिक मानवाधिकार।",
    color: "oklch(0.46 0.11 235)",
  },
  {
    key: "manusmriti",
    icon: <Scale className="w-6 h-6" />,
    title: "मनुस्मृति दहन (1927)",
    desc: "जाति भेदभाव और अत्याचार को संहिताबद्ध करने वाले प्राचीन ग्रंथ मनुस्मृति को सार्वजनिक रूप से जलाया — जातिवाद के खिलाफ एक प्रतीकात्मक विरोध के रूप में।",
    color: "oklch(0.72 0.09 75)",
  },
  {
    key: "journalism",
    icon: <BookOpen className="w-6 h-6" />,
    title: "अधिकारों के लिए पत्रकारिता",
    desc: "मूकनायक (1920) और बहिष्कृत भारत (1927) समाचार पत्रों की स्थापना की, जिन्होंने करोड़ों वंचितों की आवाज़ बनी।",
    color: "oklch(0.55 0.12 160)",
  },
  {
    key: "poona-pact",
    icon: <Star className="w-6 h-6" />,
    title: "पूना समझौता (1932)",
    desc: "महात्मा गांधी के साथ पूना समझौता किया, सभी प्रांतों में अनुसूचित जातियों के लिए विधानमंडलों में आरक्षित सीटें सुरक्षित कीं।",
    color: "oklch(0.62 0.14 30)",
  },
  {
    key: "women",
    icon: <Users className="w-6 h-6" />,
    title: "महिला अधिकार",
    desc: "हिंदू कोड बिल में महिलाओं को तलाक, विरासत और कानून के तहत समान व्यवहार का अधिकार दिलाने में महत्वपूर्ण भूमिका निभाई।",
    color: "oklch(0.56 0.16 310)",
  },
  {
    key: "labour",
    icon: <Scale className="w-6 h-6" />,
    title: "श्रमिक अधिकार",
    desc: "वायसराय की कार्यकारिणी परिषद में श्रम सदस्य के रूप में, न्यूनतम वेतन, श्रमिकों के अधिकारों और न्यायसंगत श्रम नीतियों के लिए संघर्ष किया।",
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
      className="relative py-20 lg:py-28 bg-section dark:bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <svg
        viewBox="0 0 300 300"
        className="absolute -top-12 -left-12 w-72 h-72 opacity-[0.03] animate-spin-reverse pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="150"
          cy="150"
          r="138"
          fill="none"
          stroke="oklch(0.285 0.065 234)"
          strokeWidth="3"
        />
        <circle cx="150" cy="150" r="10" fill="oklch(0.72 0.09 75)" />
        <ChakraSpokes
          cx={150}
          cy={150}
          innerR={10}
          outerR={120}
          stroke="oklch(0.285 0.065 234)"
          strokeWidth={1.5}
        />
      </svg>

      <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[oklch(0.72_0.09_75/0.2)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            सेवा का एक जीवन
          </p>
          <h2 className="heading-accent font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide mb-6">
            समाज में योगदान
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="w-4 h-1 rounded bg-[oklch(0.72_0.09_75)]" />
            <div className="w-2 h-2 rounded-full bg-[oklch(0.72_0.09_75)]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[oklch(0.72_0.09_75)]" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((item, i) => (
            <div
              key={item.key}
              className={`card-premium group p-6 bg-white dark:bg-[oklch(0.17_0.03_238)] rounded-xl border border-border hover:border-[oklch(0.46_0.11_235/0.4)] shadow-xs animate-stagger-${(i % 6) + 1}`}
              data-ocid={`contributions.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110"
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
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[oklch(0.46_0.11_235)] to-[oklch(0.72_0.09_75)] rounded transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
