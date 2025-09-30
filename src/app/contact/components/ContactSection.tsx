import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="contact-section" 
      className="relative py-20 px-4 md:py-28 bg-gradient-to-b from-white via-orange-50 to-amber-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="contactPattern" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="30" cy="30" r="2" fill="currentColor" className="text-orange-600" />
            <circle cx="0" cy="0" r="2" fill="currentColor" className="text-amber-600" />
            <circle cx="60" cy="60" r="2" fill="currentColor" className="text-orange-600" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contactPattern)" />
        </svg>
      </div>

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-dinosaur text-4xl md:text-5xl bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent mb-4"
        >
          CONTACTEZ-NOUS
        </motion.h2>
        <motion.div
          initial={{ width: "0%" }}
          animate={isVisible ? { width: "90%", maxWidth: "400px" } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto h-1 bg-gradient-to-r from-orange-600 to-yellow-400 mb-6"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-montserrat text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Une question ? Une suggestion ? N'hésitez pas à nous contacter !
        </motion.p>
      </div>

      {/* Main content area */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left side: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative z-10"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden border border-amber-200"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-4 px-6">
                <h3 className="font-dinosaur text-2xl text-white text-center">ENVOYEZ-NOUS UN MESSAGE</h3>
              </div>
              
              {/* Form */}
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <motion.div variants={itemVariants}>
                    <label className="font-montserrat font-semibold text-gray-700 mb-2 block">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="text-gray-700 w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="Votre nom"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div variants={itemVariants}>
                    <label className="font-montserrat font-semibold text-gray-700 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="text-gray-700 w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="votre.email@exemple.com"
                    />
                  </motion.div>

                  {/* Phone Input */}
                  <motion.div variants={itemVariants}>
                    <label className="font-montserrat font-semibold text-gray-700 mb-2 block">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-gray-700 w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div variants={itemVariants}>
                    <label className="font-montserrat font-semibold text-gray-700 mb-2 block">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="text-gray-700 w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 font-montserrat bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="reservation">Réservation</option>
                      <option value="groupe">Événement de groupe</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div variants={itemVariants}>
                    <label className="font-montserrat font-semibold text-gray-700 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="text-gray-700 w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors duration-300 font-montserrat resize-none"
                      placeholder="Écrivez votre message ici..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formStatus === 'sending'}
                      className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-4 rounded-lg font-montserrat font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </motion.button>
                  </motion.div>

                  {/* Success Message */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center gap-3"
                    >
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="font-montserrat text-green-700">
                        Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side: Map & Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-200"
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-3 px-6">
                <h3 className="font-dinosaur text-xl text-white text-center">NOTRE LOCALISATION</h3>
              </div>
              <div className="relative w-full h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.7263131910577!2d-8.014870299999998!3d31.668197099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafec39e7474169%3A0xc01dcf3c5cd50bca!2sPalooza%20Land!5e1!3m2!1sfr!2sma!4v1759242251372!5m2!1sfr!2sma" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="grid gap-4">
              {/* Address */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-1">Adresse</h4>
                    <p className="font-montserrat text-gray-600">
                      Palooza Land, Route d'Amizmiz<br />
                      Marrakech, Maroc
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-1">Téléphone</h4>
                    <p className="font-montserrat text-gray-600">
                      <a href="tel:+212661635095" className="hover:text-orange-600 transition-colors">
                      +212 661-635095
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-1">Email</h4>
                    <p className="font-montserrat text-gray-600">
                      <a href="mailto:contact@paloozaland.com" className="hover:text-orange-600 transition-colors">
                        contact@paloozaland.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg p-6">
                <h4 className="font-montserrat font-bold text-lg text-white mb-4 text-center">
                  Suivez-nous sur les réseaux sociaux
                </h4>
                <div className="flex justify-center gap-4">
                  <a href="https://www.facebook.com/Paloozapark/?locale=fr_FR%20" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/paloozapark/" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@paloozapark" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;