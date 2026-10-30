"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon } from 'lucide-react';

const RamadanPopup = () => {
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
    // Scroll to Ramadan section
    const ramadanSection = document.getElementById('ramadan-section');
    if (ramadanSection) {
      ramadanSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-black to-indigo-950 shadow-2xl">
              {/* Moon decorations */}
              <div className="absolute top-4 left-4 text-yellow-300 animate-pulse">
                <Moon className="h-6 w-6" />
              </div>
              <div className="absolute top-4 right-16 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Moon className="h-5 w-5" />
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
              <div className="relative h-48 sm:h-56 md:h-72 w-full">
                <img
                  src="/ramadanpopup.jpg"
                  alt="Ramadan au Palooza Park"
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-3 font-dinosaur text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg whitespace-nowrap"
                >
                  Ramadan au Palooza Park
                </motion.h2>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="mb-4 font-montserrat text-base sm:text-lg font-bold text-yellow-400"
                >
                  Horaires spéciaux pendant le Ramadan
                </motion.h3>

                {/* Schedule */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 font-montserrat text-sm sm:text-base text-left space-y-2 bg-white/5 rounded-xl p-4"
                >
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span><span className="text-white font-semibold">21 fév – 08 mars :</span> 12h00 – 17h00 &amp; 21h00 – 23h00</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span><span className="text-white font-semibold">09 mars – 13 mars :</span> Fermeture du parc</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span><span className="text-white font-semibold">14 mars – fin du Ramadan :</span> 12h00 – 17h00 &amp; 21h00 – 23h00</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RamadanPopup;