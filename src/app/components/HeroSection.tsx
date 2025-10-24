"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Black Shadow Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg4.jpg"
          alt="Palooza Park Background"
          fill
          priority
          className="object-cover"
        />
        {/* Black shadow overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Orange gradient overlay on top of black shadow */}

      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4 md:px-8 max-w-4xl"
        >
          <motion.h1 
            className="mb-4 font-dinosaur text-7xl md:text-8xl tracking-tight drop-shadow-lg bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent"
          >
            PALOOZA
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent"> PARK</span>
          </motion.h1>

          <motion.div
            initial={{ width: "0%" }}
            animate={isLoaded ? { width: "100%" } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto h-1 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"
          />

          <motion.h2
            className="mb-6 font-dinosaur text-2xl md:text-3xl bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-md"
          >
            Le Premier Parc à Thème des Dinosaures <br></br>au Maroc
          </motion.h2>

          <motion.p
            className="mb-8 font-montserrat text-lg text-white drop-shadow-md"
          >
Vivez une aventure préhistorique époustouflante avec attractions sensationnelles, piscine spectaculaire et musée fascinant !
          </motion.p>

          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center"
          >
            <Link href="/attractions" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-3 font-montserrat font-bold text-white shadow-lg"
              >
                DÉCOUVRIR
              </motion.button>
            </Link>
          </motion.div>

          {/* Simple Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.9 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="font-montserrat text-sm md:text-base"
            >
              <span className="font-bold">SCROLLEZ</span> POUR L'AVENTURE
              <div className="mx-auto mt-2 flex justify-center">
                <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
                <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
                <div className="h-2 w-2 rounded-full bg-white mx-1"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;