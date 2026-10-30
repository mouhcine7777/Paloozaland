"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const OFFERS = [
  { src: '/popup-halloween-maquillage.jpg', alt: 'Maquillage Halloween 25DH à Palooza Park' },
  { src: '/popup-halloween-gouter.jpg', alt: 'Offre Goûter Halloween Palooza Park' },
];

const OffersPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('offers_popup_shown');
    if (dismissed) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('offers_popup_shown', '1');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => setIndex((i) => (i + 1) % OFFERS.length), 5000);
    return () => clearInterval(interval);
  }, [isOpen, index]);

  const handleClose = () => setIsOpen(false);
  const prev = () => setIndex((i) => (i - 1 + OFFERS.length) % OFFERS.length);
  const next = () => setIndex((i) => (i + 1) % OFFERS.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-50 w-[92%] sm:w-[85%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-20 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Slider */}
              <div className="relative w-full aspect-[1500/852] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={index}
                    src={OFFERS[index].src}
                    alt={OFFERS[index].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex justify-center gap-2 py-3">
                {OFFERS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                    aria-label={`Offre ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OffersPopup;
