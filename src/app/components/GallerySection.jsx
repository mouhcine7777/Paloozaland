"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NosUniversSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return;
      
      const section = document.getElementById('nos-univers');
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

  const universes = [
    {
      id: 1,
      title: "Dino Fun",
      description: "Manèges et attractions pour toute la famille",
      image: "/univers/dino-fun.jpg"
    },
    {
      id: 2,
      title: "Dino Aventures",
      description: "Sensations fortes et défis extrêmes",
      image: "/univers/dino-aventures.jpg"
    },
    {
      id: 3,
      title: "Dino VR",
      description: "Expériences immersives en réalité virtuelle",
      image: "/univers/dino-vr.jpg"
    },
    {
      id: 4,
      title: "Dino Découverte",
      description: "Explorez le monde des dinosaures",
      image: "/univers/dino-decouverte.jpg"
    },
    {
      id: 5,
      title: "Dino Show",
      description: "Spectacles et animations quotidiennes",
      image: "/univers/dino-show.jpg"
    },
    {
      id: 6,
      title: "Dino Food",
      description: "Restaurants et espaces de restauration",
      image: "/univers/dino-food.jpg"
    },
    {
      id: 7,
      title: "Dino Baignade",
      description: "Piscines et jeux aquatiques rafraîchissants",
      image: "/univers/dino-baignade.jpg"
    }
  ];

  // Helper function to get grid column classes
  const getGridColClass = (index) => {
    // Last item spans 2 columns only on larger screens
    if (index === 6) {
      return 'col-span-1 md:col-span-2 lg:col-span-2';
    }
    return 'col-span-1';
  };

  return (
    <section 
      id="nos-univers"
      className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50"
    >
      {/* Header Section with Background */}
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2 
              initial={{ scale: 0.9 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="font-dinosaur text-5xl md:text-7xl mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm"
            >
              NOS UNIVERS
            </motion.h2>
            <div className="mx-auto h-1 w-48 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"></div>
            <p className="font-montserrat text-amber-900 text-lg mx-auto max-w-4xl">
              Sept mondes extraordinaires vous attendent pour une aventure préhistorique complète.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full Width Universes Grid - No Background Visible */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {universes.map((universe, index) => (
            <motion.div
              key={universe.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group cursor-pointer overflow-hidden h-[300px] md:h-[400px] ${getGridColClass(index)}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={universe.image} 
                  alt={universe.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-20' : 'opacity-30'
              }`}></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="font-dinosaur text-2xl md:text-4xl mb-2 md:mb-3 drop-shadow-lg">
                    {universe.title}
                  </h3>
                  <p className="font-montserrat text-sm md:text-lg drop-shadow-md opacity-90 max-w-md">
                    {universe.description}
                  </p>

                  {/* Animated underline on hover */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={hoveredIndex === index ? { width: '120px' } : { width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-white mt-3 md:mt-4 rounded-full"
                  />
                </motion.div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-4 border-white transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-30' : 'opacity-0'
              }`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosUniversSection;