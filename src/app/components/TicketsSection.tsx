"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ForfeitsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

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

  const mainPass = {
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
    note: "Entrée + Accès Illimité"
  };

  const otherPasses = [
    {
      title: "PASS AVENTURES",
      price: "69 DH",
      features: [
        "Accrobranche",
        "Le jump tower",
        "Le monster tower",
        "Zipline"
      ],
      color: "from-amber-500 to-orange-600",
      note: "Entrée + 1 passage"
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
      note: "Entrée + 1 passage"
    },
    {
      title: "ALL INCLUSIVE",
      price: "209 DH",
      features: [
        "Pass Manèges",
        "Pass Aventures",
        "Pass VR Club"
      ],
      color: "from-yellow-500 to-orange-600",
      note: "Accès complet au parc"
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
             BILLETERIES
          </motion.h2>
          <div className="mx-auto h-1 w-40 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"></div>
          <p className="font-montserrat text-amber-900 text-lg mx-auto max-w-2xl">
            Choisissez le pass qui vous convient pour une expérience préhistorique inoubliable au cœur de Palooza Park
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Main Pass - Horizontal Full Width Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="rounded-3xl overflow-hidden bg-white shadow-2xl"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${mainPass.color}`}></div>
            
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Title and Pricing */}
                <div className="lg:w-1/3 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-dinosaur text-3xl md:text-4xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      {mainPass.title}
                    </h3>
                  </div>
                  
                  {/* Pricing Box */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 flex-1">
                    <div className="text-center mb-5 pb-5 border-b-2 border-dashed border-amber-300">
                      <div className="font-montserrat text-xs uppercase tracking-wide text-amber-600 font-bold mb-2">Accès Simple</div>
                      <div className="font-montserrat font-bold text-3xl text-amber-900">{mainPass.entryPrice}</div>
                      <div className="font-montserrat text-xs text-amber-600 mt-1">{mainPass.entryNote}</div>
                    </div>
                    
                    <div className="space-y-3 mb-5">
                      <div className="bg-white rounded-xl p-4 border-2 border-amber-200 text-center">
                        <div className="font-montserrat text-xs uppercase tracking-wide text-amber-600 font-semibold mb-2">Mardi → Vendredi</div>
                        <div className="font-montserrat font-bold text-3xl text-amber-900">{mainPass.weekdayPrice}</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-4 border-2 border-orange-400 text-center shadow-md">
                        <div className="font-montserrat text-xs uppercase tracking-wide text-orange-700 font-semibold mb-2">WE • Fériés • Vacances</div>
                        <div className="font-montserrat font-bold text-3xl text-orange-900">{mainPass.weekendPrice}</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-amber-200">
                      <div className="flex items-center justify-center gap-2 text-amber-700">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-montserrat text-sm font-bold">{mainPass.note}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Features Grid */}
                <div className="lg:w-2/3">
                  <div className="mb-4">
                    <span className="font-montserrat inline-block text-sm uppercase tracking-wider font-bold text-amber-600 bg-amber-100 px-4 py-2 rounded-full">
                      16 Attractions Incluses
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {mainPass.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + (i * 0.03) }}
                        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-200 hover:border-orange-400 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex-shrink-0 mt-0.5">
                            <span className="text-xs">✓</span>
                          </div>
                          <span className="font-montserrat text-sm font-medium text-amber-900 leading-tight">{feature}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Passes - 3 Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPasses.map((pass, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${pass.color}`}></div>
                
                <div className="p-6 relative">
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-100 rounded-full opacity-20"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h3 className="font-dinosaur text-2xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                        {pass.title}
                      </h3>
                    </div>
                    
                    {/* Price */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 mb-6 border-2 border-amber-200 text-center">
                      <div className="font-montserrat font-bold text-4xl text-amber-900">
                        {pass.price}
                      </div>
                      <div className="font-montserrat text-sm text-amber-700 mt-2 font-medium">/personne</div>
                      
                      <div className="mt-4 pt-4 border-t border-amber-300">
                        <div className="flex items-center justify-center gap-2 text-amber-700">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-montserrat text-xs font-bold">{pass.note}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <span className="font-montserrat text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                        {index === 0 ? '4 Aventures' : index === 1 ? '3 Expériences VR' : '3 Pass Inclus'}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {pass.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-3 border border-amber-200 hover:border-orange-400 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r ${pass.color} text-white flex-shrink-0`}>
                              <span className="text-xs font-bold">✓</span>
                            </div>
                            <span className={`font-montserrat text-sm font-medium text-amber-900 ${index === 2 ? 'font-bold' : ''}`}>{feature}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForfeitsSection;