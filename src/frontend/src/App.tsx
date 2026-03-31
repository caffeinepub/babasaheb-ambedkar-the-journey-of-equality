import { useEffect, useState } from "react";
import About from "./components/About";
import Contributions from "./components/Contributions";
import ConversionToBuddhism from "./components/ConversionToBuddhism";
import EarlyLife from "./components/EarlyLife";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Legacy from "./components/Legacy";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Timeline from "./components/Timeline";
import WhyBuddhism from "./components/WhyBuddhism";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            entry.target.classList.remove("section-hidden");
          }
        }
      },
      { threshold: 0.08 },
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <EarlyLife />
        <Education />
        <Contributions />
        <WhyBuddhism />
        <ConversionToBuddhism />
        <Quotes />
        <Timeline />
        <Gallery />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
}
