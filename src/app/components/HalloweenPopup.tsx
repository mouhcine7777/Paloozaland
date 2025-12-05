"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const NoelPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavigate = () => {
    setIsOpen(false);
    // Scroll to Noel section
    const noelSection = document.getElementById('noel-section');
    if (noelSection) {
      noelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Snowflakes Animation */}
          <div className="fixed inset-0 z-50 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, x: Math.random() * window.innerWidth, opacity: 0 }}
                animate={{
                  y: window.innerHeight + 20,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute text-white text-xl"
              >
                ❄
              </motion.div>
            ))}
          </div>

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950 via-black to-red-950 shadow-2xl">
              {/* Sparkle decorations */}
              <div className="absolute top-4 left-4 text-yellow-300 animate-pulse">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="absolute top-4 right-16 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="h-5 w-5" />
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src="/noelpopup.jpg"
                  alt="Événement de Noël"
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-3 font-dinosaur text-4xl sm:text-5xl md:text-4xl"
                  style={{
                    background: 'linear-gradient(to right, #dc2626, #ef4444, #fecaca)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Noël Magique à Palooza Park
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 font-montserrat text-gray-200 text-sm sm:text-base leading-relaxed"
                >
                  Du 6 décembre au 18 janvier, Palooza Park s'illumine pour les fêtes !<br />
                  Rencontrez le Père Noël, émerveillez-vous devant les dinosaures décorés, 
                  et profitez d'animations féériques pour toute la famille.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavigate}
                  className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 font-montserrat font-bold text-white shadow-lg hover:shadow-red-500/50 transition-shadow"
                >
                  DÉCOUVRIR LA MAGIE DE NOËL
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NoelPopup;