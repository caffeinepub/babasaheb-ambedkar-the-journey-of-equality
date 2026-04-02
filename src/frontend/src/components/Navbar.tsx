import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ChakraSpokes } from "./ChakraSVG";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const NAV_LINKS = [
  { label: "होम", href: "#hero" },
  { label: "जीवनी", href: "#about" },
  { label: "समयरेखा", href: "#timeline" },
  { label: "विचार", href: "#quotes" },
  { label: "विरासत", href: "#legacy" },
];

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass-scrolled" : "navbar-glass"
      }`}
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75)] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 40 40"
              className="w-8 h-8 shrink-0 opacity-80"
              aria-hidden="true"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="oklch(0.285 0.065 234)"
                strokeWidth="1.5"
              />
              <circle cx="20" cy="20" r="3" fill="oklch(0.72 0.09 75)" />
              <ChakraSpokes
                cx={20}
                cy={20}
                innerR={3}
                outerR={14}
                stroke="oklch(0.285 0.065 234)"
                strokeWidth={0.8}
              />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair font-bold text-lg lg:text-xl text-navy-deep dark:text-white tracking-wide">
                बाबासाहेब अंबेडकर
              </span>
              <span className="text-xs text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] tracking-widest uppercase">
                समानता की यात्रा
              </span>
            </div>
          </div>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className="nav-link-animated text-sm font-semibold text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.8_0.04_235)] hover:text-[oklch(0.72_0.09_75)] dark:hover:text-[oklch(0.78_0.1_75)] transition-colors tracking-wide pb-1"
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-5 bg-[oklch(0.88_0.015_235)] dark:bg-[oklch(1_0_0/0.15)]" />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              data-ocid="nav.toggle"
              className="p-2 rounded-full bg-[oklch(0.93_0.012_235)] hover:bg-[oklch(0.72_0.09_75/0.15)] dark:bg-[oklch(0.22_0.04_238)] dark:hover:bg-[oklch(0.72_0.09_75/0.2)] transition-all duration-200 text-navy dark:text-[oklch(0.8_0.04_235)] shadow-sm hover:shadow-gold"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[oklch(0.78_0.1_75)]" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              data-ocid="nav.toggle"
              className="p-2 rounded-full bg-[oklch(0.93_0.012_235)] dark:bg-[oklch(0.22_0.04_238)] transition-colors text-navy dark:text-[oklch(0.8_0.04_235)]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[oklch(0.78_0.1_75)]" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.button"
              className="p-2 rounded-md text-navy dark:text-white hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[oklch(0.14_0.025_238/0.97)] backdrop-blur-sm border-t border-[oklch(var(--gold)/0.2)] shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className="text-left py-2.5 px-3 text-sm font-semibold text-navy dark:text-white hover:bg-[oklch(0.93_0.012_235)] dark:hover:bg-[oklch(0.22_0.04_238)] hover:text-[oklch(0.72_0.09_75)] rounded-md transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.09_75)] to-transparent opacity-50" />
        </div>
      )}
    </header>
  );
}
