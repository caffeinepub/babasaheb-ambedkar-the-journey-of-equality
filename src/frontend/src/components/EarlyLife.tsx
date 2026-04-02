import { AlertCircle, BookOpen, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const struggles = [
  {
    key: "discrimination",
    icon: <AlertCircle className="w-5 h-5" />,
    title: "जाति भेदभाव",
    desc: "महार जाति में जन्मे, जिसे हिंदू जाति व्यवस्था में 'अछूत' माना जाता था। उन्हें कक्षा में अलग बैठना पड़ता था और सार्वजनिक नल से पानी पीने का अधिकार नहीं था।",
  },
  {
    key: "family",
    icon: <Heart className="w-5 h-5" />,
    title: "परिवार और जड़ें",
    desc: "रामजी मालोजी सकपाल, एक सेना अधिकारी, के पुत्र। उनके पिता की सैन्य सेवा और मामूली आय के बावजूद, परिवार को केवल जाति के आधार पर निरंतर सामाजिक बहिष्कार का सामना करना पड़ा।",
  },
  {
    key: "education",
    icon: <BookOpen className="w-5 h-5" />,
    title: "विपरीत परिस्थितियों में शिक्षा",
    desc: "शिक्षक उनकी किताबें छूने से मना करते थे। फिर भी उन्होंने पढ़ाई में उत्कृष्टता हासिल की। उनकी प्रतिभा ने उन्हें अमेरिका में अध्ययन के लिए छात्रवृत्ति दिलाई, जिसने उनकी नियति बदल दी।",
  },
];

export default function EarlyLife() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  return (
    <section
      id="early-life"
      ref={ref}
      className="py-20 lg:py-28 bg-section dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            दृढ़ता और संकल्प
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            प्रारंभिक जीवन और संघर्ष
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-6">
              भीमराव अंबेडकर का जन्म 14 अप्रैल 1891 को महू, अब मध्य प्रदेश, में हुआ था। वे
              अपने माता-पिता की 14वीं और अंतिम संतान थे। जीवन के पहले वर्षों से ही उन्होंने
              अस्पृश्यता की क्रूर वास्तविकता का अनुभव किया।
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base mb-6">
              स्कूल में उन्हें कक्षा के बाहर फर्श पर बैठाया जाता था। चपरासी ऊंचाई से उनके हाथों
              पर पानी डालता था — लड़के को नल छूने की अनुमति नहीं थी। इन अपमानों के
              बावजूद, अंबेडकर की सीखने की इच्छाशक्ति अटूट रही।
            </p>
            <p className="text-[oklch(0.44_0.025_240)] dark:text-[oklch(0.75_0.02_235)] leading-relaxed text-base">
              बड़ौदा के महाराजा के समर्थन से उन्हें विदेश में उच्च शिक्षा के लिए छात्रवृत्ति
              मिली। इससे न्यूयॉर्क के कोलंबिया विश्वविद्यालय के द्वार खुले — और भारतीय
              इतिहास की दिशा बदल गई।
            </p>
          </div>

          <div className="space-y-6">
            {struggles.map((item, i) => (
              <div
                key={item.key}
                className={`flex gap-4 p-5 rounded-xl bg-white dark:bg-[oklch(0.17_0.03_238)] border border-border shadow-xs hover:shadow-navy transition-all duration-300 animate-stagger-${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.285_0.065_234)] text-white flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-navy-deep dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
