import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    key: "portrait",
    src: "/assets/generated/ambedkar-hero.dim_1200x800.jpg",
    caption: "Dr. Ambedkar — Portrait",
    desc: "The iconic portrait of Babasaheb Ambedkar — architect, reformer, liberator.",
  },
  {
    key: "constitution",
    src: "/assets/generated/ambedkar-constitution.dim_800x600.jpg",
    caption: "Drafting the Constitution",
    desc: "Dr. Ambedkar at work drafting India’s foundational document, 1947–1949.",
  },
  {
    key: "student",
    src: "/assets/generated/ambedkar-student.dim_800x600.jpg",
    caption: "Student Years Abroad",
    desc: "The young scholar during his transformative years at Columbia University.",
  },
  {
    key: "nagpur",
    src: "/assets/generated/ambedkar-nagpur-conversion.dim_800x600.jpg",
    caption: "Nagpur Conversion 1956",
    desc: "The historic Dhammachakra Pravartan Din — the largest mass religious conversion.",
  },
  {
    key: "speech",
    src: "/assets/generated/ambedkar-speech.dim_800x600.jpg",
    caption: "A Voice for the Voiceless",
    desc: "Dr. Ambedkar addressing the masses — a powerful speaker and tireless advocate.",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("scroll-reveal", "section-hidden");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 lg:py-28 bg-section dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[oklch(0.72_0.09_75)] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Historical Moments
          </p>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep dark:text-white uppercase tracking-wide">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-[oklch(0.72_0.09_75)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <button
              key={img.key}
              type="button"
              onClick={() => setLightbox(i)}
              data-ocid={`gallery.item.${i + 1}`}
              className={`relative group cursor-pointer overflow-hidden rounded-xl text-left ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? "h-64 md:h-full" : "h-40 md:h-48"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 w-full h-full max-w-full max-h-full m-0 border-0"
          aria-label="Image lightbox"
          data-ocid="gallery.modal"
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox(null);
          }}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            data-ocid="gallery.close_button"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          />
          <div className="relative max-w-3xl w-full z-10">
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="w-full rounded-xl object-cover max-h-[70vh]"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">
                {images[lightbox].caption}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {images[lightbox].desc}
              </p>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
