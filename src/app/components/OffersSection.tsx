"use client";
import { motion } from 'framer-motion';
import { Moon, Star, Tag } from 'lucide-react';

const RamadanSection = () => {
  return (
    <div id="ramadan-section" className="relative w-full overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative h-[380px] sm:h-[450px] md:h-[500px] lg:h-[560px] w-full order-1">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/ramadan.jpg"
                alt="Ramadan au Palooza Park"
                className="h-full w-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center order-2 py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Icon + Title */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <Moon className="h-7 w-7 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-300" />
              </div>

              <motion.h2
                className="mb-4 font-dinosaur text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-lg"
              >
                OFFRE SPÉCIALE RAMADAN
              </motion.h2>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-6 mx-auto lg:mx-0"
              />

              {/* Subtitle / Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8 font-montserrat text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                Célébrez ce mois sacré avec vos proches au Palooza Park ! Profitez d'une atmosphère unique et d'animations spéciales pendant tout le Ramadan, le tout à un tarif exceptionnel.
              </motion.p>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/60 to-black/60 border border-yellow-500/30 backdrop-blur-sm p-6 sm:p-8 mb-8 shadow-xl"
              >
                {/* Decorative stars */}
                <div className="absolute top-3 right-4 text-yellow-400 opacity-40 text-xl">✦</div>
                <div className="absolute bottom-3 left-4 text-yellow-400 opacity-20 text-sm">✦</div>

                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-yellow-400" />
                  <span className="font-montserrat font-bold text-yellow-400 text-sm uppercase tracking-widest">
                    Tarif Ramadan
                  </span>
                </div>

                <div className="flex items-end gap-4 mb-3">
                  {/* New price */}
                  <div>
                    <p className="font-montserrat text-xs text-gray-400 mb-1">À partir de</p>
                    <span className="font-dinosaur text-5xl sm:text-6xl text-white drop-shadow-lg">
                      69 DH
                    </span>
                  </div>
                  {/* Old price */}
                  <div className="mb-2">
                    <span className="font-montserrat text-2xl text-gray-500 line-through">
                      89 DH
                    </span>
                    <div className="mt-1 inline-block ml-2 rounded-full bg-yellow-500/20 border border-yellow-500/40 px-2 py-0.5">
                      <span className="font-montserrat font-bold text-yellow-400 text-xs">-22%</span>
                    </div>
                  </div>
                </div>

                <p className="font-montserrat text-gray-400 text-sm">
                  Valable pendant tout le mois de Ramadan
                </p>
              </motion.div>

              {/* Horaires reminder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                viewport={{ once: true }}
                className="mb-8 rounded-xl bg-white/5 border border-white/10 p-4 text-sm font-montserrat text-gray-400 space-y-1.5"
              >
                <p className="text-white font-semibold mb-2 flex items-center gap-2"><Moon className="h-4 w-4 text-yellow-400" /> Horaires</p>
                <p><span className="text-gray-300">2 premiers jours :</span> Fermeture du parc</p>
                <p><span className="text-gray-300">21 fév – 08 mars :</span> 12h00 – 17h00 &amp; 21h00 – 23h00</p>
                <p><span className="text-gray-300">09 mars – 13 mars :</span> Fermeture du parc</p>
                <p><span className="text-gray-300">14 mars – fin du Ramadan :</span> 12h00 – 17h00 &amp; 21h00 – 23h00</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RamadanSection;