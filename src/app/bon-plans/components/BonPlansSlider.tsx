"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Replace these with the real files once they're added to /public.
// Desktop images: 1920 x 1080px (16:9). Mobile images: 1080 x 1350px (4:5).
const SLIDES = [
  { desktop: '/bonplan-1.jpg', mobile: '/bonplan-1-mobile.jpg', alt: 'Bon plan Palooza Park 1' },
  { desktop: '/bonplan-2.jpg', mobile: '/bonplan-2-mobile.jpg', alt: 'Bon plan Palooza Park 2' },
  { desktop: '/bonplan-3.jpg', mobile: '/bonplan-3-mobile.jpg', alt: 'Bon plan Palooza Park 3' },
  { desktop: '/bonplan-4.jpg', mobile: '/bonplan-4-mobile.jpg', alt: 'Bon plan Palooza Park 4' },
];

const AUTOPLAY_MS = 4500;

const BonPlansSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((newIndex + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/9]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.picture key={index}>
            <source media="(min-width: 640px)" srcSet={SLIDES[index].desktop} />
            <motion.img
              src={SLIDES[index].mobile}
              alt={SLIDES[index].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.picture>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Image précédente"
          className="absolute left-2 sm:left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 sm:p-3 text-white transition-all hover:bg-black/60 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
        </button>
        <button
          onClick={next}
          aria-label="Image suivante"
          className="absolute right-2 sm:right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 sm:p-3 text-white transition-all hover:bg-black/60 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Aller à l'image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-7 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonPlansSlider;
