import { ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const navSections = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Early Life", href: "#early-life" },
        { label: "Education", href: "#education" },
        { label: "Contributions", href: "#contributions" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Why Buddhism", href: "#why-buddhism" },
        { label: "Timeline", href: "#timeline" },
        { label: "Gallery", href: "#gallery" },
        { label: "Legacy", href: "#legacy" },
      ],
    },
  ];

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.19_0.04_240)] dark:bg-[oklch(0.1_0.02_240)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="font-playfair font-bold text-xl tracking-wide mb-2">
              BABASAHEB AMBEDKAR
            </h3>
            <p className="text-[oklch(0.72_0.09_75)] text-xs uppercase tracking-widest mb-4">
              The Journey of Equality
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A tribute to the greatest social reformer of modern India —
              dedicated to keeping his memory, his message, and his mission
              alive for generations to come.
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-playfair italic text-white/80 text-sm leading-relaxed">
                &ldquo;Be educated, be organized, be agitated.&rdquo;
              </p>
              <p className="text-white/40 text-xs mt-1">— Dr. B. R. Ambedkar</p>
            </div>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleScroll(link.href)}
                      data-ocid="footer.link"
                      className="text-white/60 hover:text-white text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {year}. Built with{" "}
            <Heart className="w-3 h-3 inline text-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Jai Bhim · Jai Bharat
            <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
