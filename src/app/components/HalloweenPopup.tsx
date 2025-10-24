"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const HalloweenPopup = () => {
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
    // Scroll to Halloween section
    const halloweenSection = document.getElementById('halloween-section');
    if (halloweenSection) {
      halloweenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-950 via-black to-orange-950 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full">
                <img
                  src="/halloweenpopup.jpg"
                  alt="Halloween Event"
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
                  className="mb-3 font-dinosaur text-4xl sm:text-5xl md:text-6xl"
                  style={{
                    background: 'linear-gradient(to right, #ff6b00, #ff8c00, #ffa500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  HALLOWEEN
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 font-montserrat text-gray-300 text-sm sm:text-base"
                >
                  Rejoignez-nous pour une expérience terrifiante !<br />
                  Animations, spectacles et bien plus encore...
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavigate}
                  className="rounded-full bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-3 font-montserrat font-bold text-white shadow-lg hover:shadow-orange-500/50 transition-shadow"
                >
                  DÉCOUVRIR L'ÉVÉNEMENT
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HalloweenPopup;