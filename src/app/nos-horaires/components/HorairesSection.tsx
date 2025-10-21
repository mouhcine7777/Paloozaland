"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('timing-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="timing-section" 
      className="relative py-20 px-4 md:py-28 bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-amber-800" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
        </svg>
      </div>

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-dinosaur text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-4"
        >
          NOS HORAIRES
        </motion.h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={isVisible ? { width: "90%", maxWidth: "400px" } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto h-1 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"
        />
      </div>

      {/* Main content area with flex layout */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          
          {/* Left side: Just the plain image but bigger */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 w-full order-2 lg:order-1 flex justify-center"
          >
            {/* Plain image with size increase */}
            <img 
              src="/dinoclock.png" 
              alt="Horloge dinosaure" 
              className="w-full h-auto max-w-2xl"
            />
          </motion.div>
          
          {/* Right side: Timing Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="lg:w-1/2 w-full order-1 lg:order-2"
          >
            {/* Timing Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-amber-200"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-4 px-6">
                <h3 className="font-dinosaur text-2xl text-white text-center">HORAIRES D'OUVERTURE</h3>
              </div>
              
              {/* Timing Details */}
              <div className="p-6 space-y-6">
                {/* Park Hours - Now Open Every Day */}
                <motion.div 
                  variants={itemVariants} 
                  className="relative p-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg border-2 border-amber-200 overflow-hidden"
                >
                  {/* Sun rays pattern background */}
                  <div className="absolute inset-0 opacity-10 overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 400 100">
                      <circle cx="350" cy="20" r="15" fill="currentColor" className="text-amber-400 animate-pulse" />
                      <path d="M350 5 L350 0 M365 20 L370 20 M357 7 L360 4 M343 7 L340 4 M357 33 L360 36 M343 33 L340 36" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      {/* Park/Clock icon */}
                      <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-montserrat font-bold text-lg text-amber-800">Horaires Parc</h4>
                      <p className="font-dinosaur text-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Ouvert tous les jours • 16h00 à 00h00
                      </p>
                      <p className="font-montserrat text-sm text-amber-700 mt-1 opacity-80">
                        7/7 pour votre plaisir !
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Pool Hours - Special Section */}
                <motion.div 
                  variants={itemVariants} 
                  className="relative p-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-lg border-2 border-cyan-200 overflow-hidden"
                >
                  {/* Water wave pattern background */}
                  <div className="absolute inset-0 opacity-10 overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 400 100" className="absolute bottom-0">
                      <path d="M0,50 Q100,30 200,50 T400,50 L400,100 L0,100 Z" fill="currentColor" className="text-cyan-400 animate-pulse" />
                      <path d="M0,60 Q100,40 200,60 T400,60 L400,100 L0,100 Z" fill="currentColor" className="text-blue-300 animate-pulse" style={{animationDelay: '0.5s'}} />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      {/* Swimming pool icon */}
                      <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l-2 2-2-2m16 0l-2 2-2-2m-8-4l2-2 2 2m-8 8c0 1.5 1.5 3 3 3s3-1.5 3-3-1.5-3-3-3-3 1.5-3 3zm8 0c0 1.5 1.5 3 3 3s3-1.5 3-3-1.5-3-3-3-3 1.5-3 3z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-montserrat font-bold text-lg text-cyan-800">Horaires Piscine</h4>
                      <p className="font-dinosaur text-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Ouverture du 15 Juin au 30 Septembre
                      </p>
                      <p className="font-montserrat text-sm text-cyan-700 mt-1 opacity-80">
                        Plongez dans l'aventure aquatique !
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
              
              {/* Additional Info */}
              <motion.div variants={itemVariants} className="p-6 bg-gradient-to-r from-amber-100 to-orange-100">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-amber-900 mb-2">À noter</h4>
                    <p className="font-montserrat text-amber-900">
                      Le parc accepte les dernières entrées jusqu'à 21h00. Nous vous recommandons d'arriver au moins 2-3 heures avant la fermeture pour profiter pleinement de votre expérience.
                    </p>
                  </div>
                </div>
                
                {/* Decorative dino footprints */}
                <div className="flex justify-end mt-4 space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-4 h-6 text-amber-800 opacity-40">
                      <svg viewBox="0 0 24 36" fill="currentColor">
                        <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
                      </svg>
                    </div>
                  ))}
                </div>
                </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;