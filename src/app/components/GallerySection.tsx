"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the image type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GallerySection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated) return; // Don't run if already animated
      
      const section = document.getElementById('gallery-section');
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

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/gallery/image1.jpg",
      alt: "Aventure dinosaure 1",
      title: "Monde Jurassique",
      description: "Explorez notre incroyable monde préhistorique"
    },
    {
      id: 2,
      src: "/gallery/image2.jpg",
      alt: "Aventure dinosaure 2",
      title: "Dinosaures Animés",
      description: "Rencontrez nos créatures réalistes"
    },
    {
      id: 3,
      src: "/gallery/image3.jpg",
      alt: "Aventure dinosaure 3",
      title: "Aire de Jeux",
      description: "Amusement garanti pour tous les âges"
    },
    {
      id: 4,
      src: "/gallery/image4.jpg",
      alt: "Aventure dinosaure 4",
      title: "Parcours Aventure",
      description: "Défis et découvertes passionnants"
    },
    {
      id: 5,
      src: "/gallery/image5.jpg",
      alt: "Aventure dinosaure 5",
      title: "Espace Éducatif",
      description: "Apprenez tout sur l'ère des dinosaures"
    },
    {
      id: 6,
      src: "/gallery/image6.jpg",
      alt: "Aventure dinosaure 6",
      title: "Spectacles Live",
      description: "Shows interactifs et divertissants"
    },
    {
      id: 7,
      src: "/gallery/image7.jpg",
      alt: "Aventure dinosaure 7",
      title: "Zone Fouilles",
      description: "Devenez paléontologue d'un jour"
    },
    {
      id: 8,
      src: "/gallery/image8.jpg",
      alt: "Aventure dinosaure 8",
      title: "Expérience VIP",
      description: "Moments inoubliables en famille"
    },
    {
        id: 9,
        src: "/gallery/image9.jpg",
        alt: "Aventure dinosaure 9",
        title: "Expérience VIP",
        description: "Moments inoubliables en famille"
      }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section 
      id="gallery-section" 
      className="relative py-20 bg-gradient-to-b from-amber-50 to-orange-50 w-full"
    >
      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-dinosaur text-4xl md:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4"
        >
          GALERIE PHOTOS
        </motion.h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={hasAnimated ? { width: "90%", maxWidth: "400px" } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto h-1 bg-gradient-to-r from-amber-600 to-orange-400 mb-6"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-montserrat text-amber-900 text-lg max-w-2xl mx-auto"
        >
          Découvrez l'univers magique de Palooza Park à travers ces moments inoubliables
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <div className="w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredImage(image.id)}
              onHoverEnd={() => setHoveredImage(null)}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                index % 4 === 0 || index % 4 === 3 ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Always visible gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Always visible text content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-dinosaur text-xl mb-1">{image.title}</h3>
                  <p className="font-montserrat text-sm opacity-90">{image.description}</p>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Dino paw print decoration */}
                <div className="absolute top-2 left-2 w-6 h-6 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg viewBox="0 0 24 36" fill="currentColor">
                    <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
                  </svg>
                </div>
              </div>
              
              {/* Click handler */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="font-dinosaur text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="font-montserrat text-lg opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;