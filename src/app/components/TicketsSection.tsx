"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ForfeitsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return; // Don't check if already animated
      
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
    handleScroll(); // Check initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const passes = [
    {
      title: "PASS MANÈGES",
      price: "79 DH",
      features: [
        "Accès presque illimité aux manèges du parc",
        "Attractions familiales adaptées à tous les âges",
        "Différentes attractions pour tous"
      ],
      color: "from-yellow-400 to-amber-500",
      highlight: false
    },
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
      highlight: true
    },
    {
      title: "PASS VR CLUB",
      price: "69 DH",
      features: [

        "Courses de voitures AR",
        "Simulations immersives",
        "Jeux d'équipe en VR"
      ],
      color: "from-orange-500 to-red-600",
      highlight: false
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="forfaits" 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('light-grain.jpg'), linear-gradient(to bottom, #fef3c7, #fed7aa)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Palm decorations in corners */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none -ml-8 -mb-8">
        <img 
          src="palm.png" 
          alt="" 
          className="w-full h-full object-contain transform rotate-180 scale-x-[-1]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none -mr-8 -mb-8">
        <img 
          src="palm.png"
          alt="" 
          className="w-full h-full object-contain transform rotate-180 "
        />
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.9 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="font-dinosaur text-5xl md:text-6xl mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm"
          >
            FORFAIT ET TICKETS
          </motion.h2>
          <div className="mx-auto h-1 w-40 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"></div>
          <p className="font-montserrat text-amber-900 text-lg max-w-2xl mx-auto">
            Choisissez le pass qui vous convient pour une expérience préhistorique inoubliable au cœur de Palooza Park
          </p>
        </motion.div>

        {/* Passes Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl overflow-hidden ${pass.highlight ? 'border-2 border-yellow-500 md:-translate-y-4' : 'border border-orange-200'} bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-orange-300/30 transition-all`}
            >
              <div className={`h-3 w-full bg-gradient-to-r ${pass.color}`}></div>
              <div className="p-8 relative">
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-100 rounded-full opacity-20"></div>
                
                <h3 className="font-dinosaur text-2xl mb-2 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent relative z-10">
                  {pass.title}
                </h3>
                <div className="font-montserrat font-bold text-4xl text-amber-900 my-6 relative z-10">
                  {pass.price}
                  <span className="text-sm text-amber-700/70 ml-1">/personne</span>
                </div>
                <ul className="space-y-3 mb-4 relative z-10">
                  {pass.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center text-amber-800 font-montserrat"
                    >
                      <div className="mr-2 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">✓</div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16 font-montserrat text-amber-800 max-w-2xl mx-auto"
        >
          <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-200">
            <p className="text-amber-900">
              Réservez en avance et bénéficiez d'une réduction de 15% ! Les billets sont également disponibles sur place.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForfeitsSection;