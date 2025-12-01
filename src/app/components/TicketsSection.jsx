"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ForfeitsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;
      
      const section = document.getElementById('forfaits');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const passes = [
    {
      title: "PASS MANÈGES",
      weekdayPrice: "69 DH",
      weekendPrice: "89 DH",
      entryPrice: "20 DH",
      entryNote: "(+2ans / +90cm)",
      features: [
        "Cinéma 6D",
        "Kontiki / Bateau pirates",
        "Coco piloto",
        "Loco loco",
        "Crazy cannon",
        "Spider mountain",
        "Dream land",
        "Mini hélicoptère",
        "Dino valley",
        "Spinning bumper",
        "Apollo",
        "L'orient express",
        "Looping bike",
        "Waikiki",
        "Trampoline",
        "Sky glider"
      ],
      color: "from-yellow-400 to-amber-500",
      note: "Entrée + Accès Illimité",
      count: "16 Attractions"
    },
    {
      title: "PASS AVENTURES",
      price: "69 DH",
      features: [
        "Accrobranche",
        "Jump tower",
        "Monster tower",
        "Zipline"
      ],
      color: "from-amber-500 to-orange-600",
      note: "Entrée + 1 passage",
      count: "4 Aventures"
    },
    {
      title: "PASS VR CLUB",
      price: "69 DH",
      features: [
        "AR Car Racing",
        "Cyber truck",
        "VR Team"
      ],
      color: "from-orange-500 to-amber-600",
      note: "Entrée + 1 passage",
      count: "3 Expériences VR"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="forfaits" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url(/light-grain.jpg), linear-gradient(to bottom, #fef3c7, #fed7aa)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Palm decorations in corners */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none -ml-8 -mb-8 opacity-40">
        <img 
          src="palm.png" 
          alt="" 
          className="w-full h-full object-contain transform rotate-180 scale-x-[-1]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none -mr-8 -mb-8 opacity-40">
        <img 
          src="palm.png"
          alt="" 
          className="w-full h-full object-contain transform rotate-180"
        />
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ scale: 0.9 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="font-dinosaur text-5xl md:text-6xl mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm"
          >
            BILLETERIE
          </motion.h2>
          <div className="mx-auto h-1 w-40 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"></div>
          <p className="font-montserrat text-amber-900 text-lg mx-auto max-w-2xl mb-4">
            Choisissez le pass qui vous convient pour une expérience préhistorique inoubliable au cœur de Palooza Park
          </p>
          <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl px-6 py-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div>
                <span className="font-montserrat text-sm font-semibold">Accès Simple au Parc: </span>
                <span className="font-montserrat text-2xl font-bold">20 DH</span>
                <span className="font-montserrat text-xs ml-2 bg-white/20 px-2 py-1 rounded-full">(+2ans / +90cm)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Three Flip Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {passes.map((pass, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative h-[500px] md:h-[520px]"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                >
                  {/* Front of Card */}
                  <div 
                    className="absolute w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${pass.color}`}></div>
                    
                    <div className="p-5 h-full flex flex-col relative">
                      {/* Decorative circles */}
                      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
                      
                      {/* Badge for attractions count */}
                      <div className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-bl-3xl rounded-tr-3xl px-4 py-2 shadow-lg">
                        <div className="font-montserrat text-xs font-bold">{pass.count}</div>
                      </div>
                      
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Header */}
                        <div className="text-center mb-4">
                          <h3 className="font-dinosaur text-2xl md:text-3xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                            {pass.title}
                          </h3>
                        </div>
                        
                        {/* Price */}
                        {index === 0 ? (
                          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-4 border-2 border-amber-200">
                            <div className="space-y-2">
                              <div className="bg-white rounded-xl p-2 border-2 border-amber-200 text-center">
                                <div className="font-montserrat text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Mardi → Vendredi</div>
                                <div className="font-montserrat font-bold text-2xl text-amber-900">{pass.weekdayPrice}</div>
                              </div>
                              
                              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-2 border-2 border-orange-400 text-center shadow-md">
                                <div className="font-montserrat text-xs uppercase tracking-wide text-orange-700 font-semibold mb-1">WE • Jours Fériés • Vacances</div>
                                <div className="font-montserrat font-bold text-2xl text-orange-900">{pass.weekendPrice}</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-4 border-2 border-amber-200 text-center">
                            <div className="font-montserrat font-bold text-3xl text-amber-900">
                              {pass.price}
                            </div>
                            <div className="font-montserrat text-sm text-amber-700 mt-2 font-medium">/personne</div>
                          </div>
                        )}
                        
                        {/* Note with Entry Info */}
                        <div className="mb-4">
                          <div className="flex items-center justify-center gap-2 text-amber-700 bg-amber-50 rounded-xl p-2 border border-amber-200">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="font-montserrat text-xs font-bold">{pass.note}</span>
                          </div>
                        </div>
                        
                        {/* Spacer */}
                        <div className="flex-1"></div>
                        
                        {/* Flip Button */}
                        <button
                          onClick={() => handleFlip(index)}
                          className={`w-full py-3 rounded-2xl font-montserrat font-bold text-white bg-gradient-to-r ${pass.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                          <span className="text-sm">Voir les attractions</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div 
                    className="absolute w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${pass.color}`}></div>
                    
                    <div className="p-5 h-full flex flex-col">
                      {/* Header */}
                      <div className="text-center mb-4">
                        <h3 className="font-dinosaur text-xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                          {pass.title}
                        </h3>
                        <span className="font-montserrat text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                          {pass.count}
                        </span>
                      </div>
                      
                      {/* Features Grid */}
                      <div className="flex-1 mb-4 overflow-visible">
                        <div className={`grid gap-1.5 ${
                          index === 0 
                            ? 'grid-cols-2 auto-rows-min' 
                            : 'grid-cols-1'
                        }`}>
                          {pass.features.map((feature, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-1.5 border border-amber-200 hover:border-orange-400 hover:shadow-sm transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-full flex items-center justify-center bg-gradient-to-r ${pass.color} text-white flex-shrink-0`}>
                                  <span className="text-[8px] font-bold">✓</span>
                                </div>
                                <span className={`font-montserrat text-[13px] font-medium text-amber-900 leading-tight`}>{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Back Button */}
                      <button
                        onClick={() => handleFlip(index)}
                        className={`w-full py-3 rounded-2xl font-montserrat font-bold text-white bg-gradient-to-r ${pass.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm">Retour</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* All Inclusive Card - Optimized Layout */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="rounded-3xl overflow-hidden bg-white shadow-2xl border-2 border-amber-300"
          >
            <div className="h-2 w-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            
            {/* Improved balanced layout */}
            <div className="p-6 lg:p-8">
              {/* Header with Price */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
                <div className="text-center lg:text-left">
                  <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full font-montserrat text-sm font-bold mb-3">
                    MEILLEURE OFFRE
                  </div>
                  <h3 className="font-dinosaur text-3xl md:text-4xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    PASS ALL INCLUSIVE
                  </h3>
                  <p className="font-montserrat text-amber-700 text-lg font-semibold">Expérience Complète</p>
                </div>
                
                {/* Price Box */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-300 text-center min-w-[200px]">
                  <div className="font-montserrat font-bold text-4xl text-amber-900 mb-2">
                    209 DH
                  </div>
                  <div className="font-montserrat text-sm text-amber-700 font-medium">/personne</div>
                  <div className="mt-3 flex items-center justify-center gap-2 text-amber-700 bg-amber-100 rounded-xl p-2 border border-amber-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-montserrat text-xs font-bold">Accès complet</span>
                  </div>
                </div>
              </div>

              {/* Included Passes - Horizontal Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-white mx-auto mb-3">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="font-montserrat text-base font-bold text-amber-900 mb-1">PASS MANÈGES</div>
                  <div className="font-montserrat text-xs text-amber-700 mb-2">16 attractions</div>
                  <div className="text-xs bg-yellow-100 text-amber-800 px-2 py-1 rounded-full font-semibold">Accès illimité</div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-300 hover:border-amber-400 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white mx-auto mb-3">
                    <span classNam  e="text-lg font-bold">2</span>
                  </div>
                  <div className="font-montserrat text-base font-bold text-amber-900 mb-1">PASS AVENTURES</div>
                  <div className="font-montserrat text-xs text-amber-700 mb-2">4 aventures</div>
                  <div className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-semibold">1 passage</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border-2 border-orange-300 hover:border-orange-400 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600 text-white mx-auto mb-3">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="font-montserrat text-base font-bold text-amber-900 mb-1">PASS VR CLUB</div>
                  <div className="font-montserrat text-xs text-amber-700 mb-2">3 expériences VR</div>
                  <div className="text-xs bg-orange-100 text-amber-800 px-2 py-1 rounded-full font-semibold">1 passage</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForfeitsSection;