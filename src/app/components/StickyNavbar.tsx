"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Attractions", href: "/attractions" },
    { name: "Horaires", href: "/nos-horaires" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-black/80 shadow-lg backdrop-blur-sm' 
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-12 w-48"
              >
                <Image
                  src={scrolled ? "/paloozalogowhite.png" : "/logo.png"}
                  alt="Palooza Park Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-montserrat font-bold transition-all duration-300 ${
                      scrolled 
                        ? 'text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:text-white' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="#tickets"
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-full font-montserrat font-bold text-sm shadow-lg"
                >
                  RÉSERVER
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center px-3 py-2 rounded text-white"
              >
                <div className="relative w-6 h-5">
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="absolute h-0.5 w-6 rounded-full bg-white"
                    style={{ top: 0 }}
                  ></motion.span>
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute h-0.5 w-6 rounded-full bg-white"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  ></motion.span>
                  <motion.span
                    animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="absolute h-0.5 w-6 rounded-full bg-white"
                    style={{ bottom: 0 }}
                  ></motion.span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-xl md:hidden overflow-hidden"
          >
            <div className="px-4 py-4">
              {navItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-2"
                >
                  <Link 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-gray-800 font-montserrat font-medium text-lg border-l-4 border-transparent hover:border-orange-500 hover:bg-orange-50"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4 mx-4"
              >
                <Link 
                  href="#tickets"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg font-montserrat font-bold shadow-md"
                >
                  RÉSERVER MAINTENANT
                </Link>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <svg 
              className="absolute bottom-0 left-0 right-0 text-orange-500 opacity-10"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320"
            >
              <path 
                fill="currentColor" 
                fillOpacity="1" 
                d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fancy scroll indicator - only visible when not scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-10 right-10 z-40 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-8 h-14 rounded-full border-2 border-white/80 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                className="w-1 h-3 bg-white/80 rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyNavbar;