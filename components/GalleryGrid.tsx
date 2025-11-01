// components/GalleryGrid.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryGrid({ count = 4 }: { count?: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hidden, setHidden] = useState<Record<number, boolean>>({});

  const items = Array.from({ length: count }, (_, i) => `/gallery/${i + 1}.jpg`);
  const visibleItems = items.filter((_, i) => !hidden[i]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex(p => (p === null ? 0 : (p + 1) % visibleItems.length));
      if (e.key === "ArrowLeft") setActiveIndex(p => (p === null ? 0 : (p - 1 + visibleItems.length) % visibleItems.length));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visibleItems.length]);

  const handleSwipe = (dir: "left" | "right") => {
    if (!visibleItems.length) return;
    if (dir === "left") setActiveIndex(p => (p === null ? 0 : (p + 1) % visibleItems.length));
    else setActiveIndex(p => (p === null ? 0 : (p - 1 + visibleItems.length) % visibleItems.length));
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-2 py-10 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((src, idx) =>
            hidden[idx] ? null : (
              <div
                key={idx}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md cursor-pointer"
                onClick={() => {
                  const vi = items
                    .map((_, i) => i)
                    .filter(i => !hidden[i]);
                  const pos = vi.indexOf(idx);
                  setActiveIndex(pos);
                }}
              >
                <Image
                  src={src}
                  alt={`Photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={idx < 2}
                  onError={() => setHidden(h => ({ ...h, [idx]: true }))}
                />
              </div>
            )
          )}
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && visibleItems.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <button onClick={() => setActiveIndex(null)} className="absolute top-4 right-4 z-50 text-white p-2" aria-label="Close">
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => setActiveIndex(p => (p === null ? 0 : (p - 1 + visibleItems.length) % visibleItems.length))}
              className="absolute left-4 text-white/80 hover:text-white"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <button
              onClick={() => setActiveIndex(p => (p === null ? 0 : (p + 1) % visibleItems.length))}
              className="absolute right-4 text-white/80 hover:text-white"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              key={activeIndex}
              className="relative w-[90vw] max-w-4xl aspect-[4/3]"
              drag="x" dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) handleSwipe("left");
                if (info.offset.x > 50) handleSwipe("right");
              }}
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={visibleItems[activeIndex]}
                alt={`Gallery photo ${activeIndex + 1}`}
                fill className="object-contain select-none" sizes="100vw" priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
