"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Background Image with Black Shadow Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/bg2.jpg')`
          }}
        />
        {/* Black shadow overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Blue gradient overlay on top of black shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
        >
          <motion.h1 
            className="mb-4 sm:mb-6 font-dinosaur text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight drop-shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-teal-600 bg-clip-text text-transparent leading-tight"
          >
            CONTACTEZ
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent"> NOUS</span>
          </motion.h1>

          <motion.div
            initial={{ width: "0%" }}
            animate={isLoaded ? { width: "100%" } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto h-0.5 sm:h-1 bg-gradient-to-r from-orange-600 to-yellow-400 mb-4 sm:mb-6 max-w-48 sm:max-w-md"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-3 sm:mb-4 font-dinosaur text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-md"
          >
            Nous Sommes À Votre Écoute
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-6 sm:mb-8 font-montserrat text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
          >
            Des questions sur votre visite ? Besoin d'informations pour organiser un événement ?
            Notre équipe est là pour vous accompagner dans votre aventure préhistorique.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base"
          >
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
              <span className="text-white font-montserrat whitespace-nowrap">Réponse Rapide</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
              <span className="text-white font-montserrat whitespace-nowrap">Service Personnalisé</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
              <span className="text-white font-montserrat whitespace-nowrap">Support 7j/7</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col space-y-3 sm:space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-center items-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHeroSection;