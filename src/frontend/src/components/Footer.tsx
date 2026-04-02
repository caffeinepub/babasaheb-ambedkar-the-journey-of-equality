import { ExternalLink, Heart } from "lucide-react";
import { ChakraSpokes } from "./ChakraSVG";

export default function Footer() {
  const year = new Date().getFullYear();

  const navSections = [
    {
      title: "त्वरित लिंक",
      links: [
        { label: "परिचय", href: "#about" },
        { label: "प्रारंभिक जीवन", href: "#early-life" },
        { label: "शिक्षा", href: "#education" },
        { label: "योगदान", href: "#contributions" },
      ],
    },
    {
      title: "अधिक",
      links: [
        { label: "बौद्ध धर्म क्यों", href: "#why-buddhism" },
        { label: "समयरेखा", href: "#timeline" },
        { label: "गैलरी", href: "#gallery" },
        { label: "विरासत", href: "#legacy" },
      ],
    },
  ];

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[oklch(0.19_0.04_240)] dark:bg-[oklch(0.1_0.02_240)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        viewBox="0 0 500 500"
        className="absolute -top-32 -right-32 w-96 h-96 opacity-[0.04] animate-spin-slow pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="250"
          cy="250"
          r="230"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        <circle
          cx="250"
          cy="250"
          r="170"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <circle cx="250" cy="250" r="14" fill="white" />
        <ChakraSpokes
          cx={250}
          cy={250}
          innerR={14}
          outerR={170}
          stroke="white"
          strokeWidth={1.5}
        />
      </svg>

      <div className="h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <svg
                viewBox="0 0 40 40"
                className="w-8 h-8 opacity-70"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="oklch(0.72 0.09 75)"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="20" r="3" fill="oklch(0.72 0.09 75)" />
                <ChakraSpokes
                  cx={20}
                  cy={20}
                  innerR={3}
                  outerR={14}
                  stroke="oklch(0.72 0.09 75)"
                  strokeWidth={0.8}
                />
              </svg>
              <h3 className="font-playfair font-bold text-xl tracking-wide">
                बाबासाहेब अंबेडकर
              </h3>
            </div>
            <p className="text-[oklch(0.72_0.09_75)] text-xs uppercase tracking-widest mb-4">
              समानता की यात्रा
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              आधुनिक भारत के सबसे महान समाज सुधारक को श्रद्धांजलि — उनकी स्मृति, संदेश और
              मिशन को आने वाली पीढ़ियों तक जीवित रखने के लिए।
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-[oklch(0.72_0.09_75/0.2)]">
              <p className="font-playfair italic text-white/80 text-sm leading-relaxed">
                &ldquo;शिक्षित बनो, संगठित रहो, संघर्ष करो।&rdquo;
              </p>
              <p className="text-white/40 text-xs mt-1">
                &mdash; डॉ. बी. आर. अंबेडकर
              </p>
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-[oklch(0.72_0.09_75/0.3)] pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleScroll(link.href)}
                      data-ocid="footer.link"
                      className="text-white/60 hover:text-[oklch(0.72_0.09_75)] text-sm transition-colors text-left hover:translate-x-1 inline-block duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[oklch(0.72_0.09_75/0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {year}. Developed with{" "}
            <Heart className="w-3 h-3 inline text-red-400" /> by{" "}
            <span className="text-white/70 font-medium">SAGAR INDRAKIYA</span>
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            जय भीम · जय भारत
            <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
