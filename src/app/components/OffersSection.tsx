"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NoelSection = () => {
  const offers = [
    {
      title: "Fun & Food – Spécial Fin d'Année",
      price: "109 DH",
      description: "Accès aux attractions + Menu enfant ou Menu goûter. Une formule simple, gourmande et idéale pour les familles."
    },
    {
      title: "All Inclusive Gourmand",
      price: "209 DH",
      description: "Manèges + Aventures + VR + 1 gaufre ou crêpe offerte ! L'expérience Palooza complète avec un bonus gourmand."
    },
    {
      title: "Winter Family Pack – 4 personnes",
      price: "320 DH",
      description: "4 Accès attractions + Photo souvenir digitale offerte ! L'offre immanquable pour les sorties familiales."
    },
    {
      title: "Duo Magic Pass",
      price: "179 DH",
      description: "2 Accès attractions + Goûter à partager. Parfait pour couples, amis, ou duo parent-enfant."
    },
    {
      title: "Magic Weekend Pass",
      price: "159 DH",
      description: "Accès illimité aux attractions sur 2 jours consécutifs + Photo souvenir digitale offerte !"
    }
  ];

  return (
    <div id="noel-section" className="relative w-full overflow-hidden bg-gradient-to-br from-black via-red-950 to-black py-8 md:py-12 lg:py-0 lg:h-screen">
      <div className="container mx-auto h-full px-4 sm:px-6 md:px-8">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Single Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full order-2 lg:order-1">
            <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/noel.jpg"
                alt="Noël à Palooza Park"
                className="h-full w-full object-cover lg:object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2 py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Noel Title */}
              <motion.h2 
                className="mb-2 md:mb-3 font-dinosaur text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight drop-shadow-2xl"
                style={{
                  background: 'linear-gradient(to right, #dc2626, #ef4444, #fecaca)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                OFFRES SPÉCIALES NOËL
              </motion.h2>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-red-600 to-red-500 mb-6 md:mb-8 mx-auto lg:mx-0"
              />

              {/* Subtitle */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-4 md:mb-6 font-dinosaur text-lg sm:text-xl md:text-2xl text-red-400 drop-shadow-lg"
              >
                Des offres magiques pour célébrer les fêtes en famille !
              </motion.h3>

              {/* Offers List */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {offers.map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="bg-gradient-to-r from-red-900/30 to-transparent backdrop-blur-sm border-l-4 border-red-500 rounded-r-lg p-3 sm:p-4 shadow-lg hover:shadow-red-500/20 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="font-dinosaur text-base sm:text-lg md:text-xl text-red-400">
                        {offer.title}
                      </h4>
                      <span className="font-dinosaur text-lg sm:text-xl md:text-2xl text-white mt-1 sm:mt-0">
                        {offer.price}
                      </span>
                    </div>
                    <p className="font-montserrat text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {offer.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoelSection;