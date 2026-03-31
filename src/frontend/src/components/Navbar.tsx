import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Biography", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Quotes", href: "#quotes" },
  { label: "Legacy", href: "#legacy" },
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
        scrolled
          ? "bg-white dark:bg-[oklch(0.17_0.03_238)] shadow-navy"
          : "bg-white/95 dark:bg-[oklch(0.17_0.03_238)] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex flex-col leading-tight">
            <span className="font-playfair font-bold text-lg lg:text-xl text-navy-deep dark:text-white tracking-wide">
              BABASAHEB AMBEDKAR
            </span>
            <span className="text-xs text-[oklch(0.52_0.025_240)] dark:text-[oklch(0.65_0.03_235)] tracking-widest uppercase">
              The Journey of Equality
            </span>
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
                className="text-sm font-medium text-[oklch(0.285_0.065_234)] dark:text-[oklch(0.8_0.04_235)] hover:text-[oklch(0.46_0.11_235)] dark:hover:text-white transition-colors tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              data-ocid="nav.toggle"
              className="p-2 rounded-full bg-secondary hover:bg-[oklch(0.46_0.11_235/0.1)] transition-colors text-navy dark:text-[oklch(0.8_0.04_235)]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
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
              className="p-2 rounded-full bg-secondary transition-colors text-navy dark:text-[oklch(0.8_0.04_235)]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.button"
              className="p-2 rounded-md text-navy dark:text-white"
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
        <div className="md:hidden bg-white dark:bg-[oklch(0.17_0.03_238)] border-t border-border shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className="text-left py-2.5 px-3 text-sm font-medium text-navy dark:text-white hover:bg-secondary rounded-md transition-colors tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
