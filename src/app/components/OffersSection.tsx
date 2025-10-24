"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const HalloweenSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    '/halloween1.jpg',
    '/halloween2.jpg'
  ];

  const activities = [
    {
      title: "Animations Quotidiennes",
      description: "Des animations terrifiantes tout au long de la journée"
    },
    {
      title: "Spectacles Déambulatoires",
      description: "Rencontrez des créatures effrayantes dans tout le parc"
    },
    {
      title: "Ateliers Maquillage",
      description: "Transformez-vous en créature d'Halloween"
    },
    {
      title: "Photobooth",
      description: "Capturez vos moments les plus effrayants"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="halloween-section" className="relative w-full overflow-hidden bg-gradient-to-br from-black via-orange-950 to-black py-8 md:py-12 lg:py-0 lg:h-screen">
      <div className="container mx-auto h-full px-4 sm:px-6 md:px-8">
        <div className="grid h-full grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Image Slider */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full order-2 lg:order-1">
            <div className="relative h-full w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentSlide]}
                    alt={`Halloween ${currentSlide + 1}`}
                    className="h-full w-full object-cover lg:object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-3 md:left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-orange-600/90 p-2 sm:p-3 text-white transition-all hover:bg-orange-600 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-orange-600/90 p-2 sm:p-3 text-white transition-all hover:bg-orange-600 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentSlide(index);
                    }}
                    className={`rounded-full transition-all ${
                      index === currentSlide 
                        ? 'h-2 sm:h-3 w-6 sm:w-8 bg-orange-500' 
                        : 'h-2 sm:h-3 w-2 sm:w-3 bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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
              {/* Halloween Title */}
              <motion.h2 
                className="mb-3 md:mb-4 font-dinosaur text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-2xl"
                style={{
                  background: 'linear-gradient(to right, #ff6b00, #ff8c00, #ffa500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                HALLOWEEN
              </motion.h2>

              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-orange-600 to-orange-500 mb-6 md:mb-8 mx-auto lg:mx-0"
              />

              {/* Activities Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-8 font-dinosaur text-2xl sm:text-3xl md:text-4xl text-orange-400 drop-shadow-lg"
              >
                ACTIVITÉS
              </motion.h3>

              {/* Activities List */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="bg-gradient-to-r from-orange-900/30 to-transparent backdrop-blur-sm border-l-4 border-orange-500 rounded-r-lg p-4 sm:p-5 shadow-lg hover:shadow-orange-500/20 transition-all"
                  >
                    <h4 className="mb-2 font-dinosaur text-lg sm:text-xl md:text-2xl text-orange-400">
                      {activity.title}
                    </h4>
                    <p className="font-montserrat text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      {activity.description}
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

export default HalloweenSection;