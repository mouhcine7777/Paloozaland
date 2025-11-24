import { useState } from 'react';
import { Users, Building2, PartyPopper, Download, X, Mail, Phone, Building } from 'lucide-react';

const BusinessOffersSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and download
    setIsSubmitted(true);
    setTimeout(() => {
      // Here you would trigger the actual PDF download
      alert('Brochure téléchargée avec succès!');
      setShowForm(false);
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 text-orange-200 opacity-30 transform rotate-12">
          <svg viewBox="0 0 24 36" fill="currentColor">
            <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              OFFRES ENTREPRISES
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
            <p className="font-montserrat text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Offrez à vos collaborateurs une expérience inoubliable au Palooza Park. Découvrez nos formules sur mesure pour vos événements d'entreprise, team-building et séminaires.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">NOS AVANTAGES</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">Forfaits Groupe</h4>
                <p className="font-montserrat text-sm text-gray-600">Tarifs avantageux adaptés à la taille de votre groupe</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">Espaces Privatifs</h4>
                <p className="font-montserrat text-sm text-gray-600">Zones réservées pour vos événements exclusifs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">Animations Sur Mesure</h4>
                <p className="font-montserrat text-sm text-gray-600">Programme personnalisé selon vos objectifs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">Support Dédié</h4>
                <p className="font-montserrat text-sm text-gray-600">Un interlocuteur unique pour votre événement</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h3 className="font-dinosaur text-4xl md:text-5xl mb-4">TÉLÉCHARGEZ NOTRE BROCHURE</h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              Découvrez tous nos forfaits entreprises, tarifs et services dans notre brochure complète. Remplissez le formulaire pour recevoir votre brochure immédiatement.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              TÉLÉCHARGER LA BROCHURE
            </button>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-8 text-white relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-dinosaur text-4xl mb-2">DEMANDE DE BROCHURE</h3>
              <p className="font-montserrat text-orange-50">Complétez le formulaire ci-dessous pour télécharger notre brochure entreprise</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">
                    Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat"
                    placeholder="Votre entreprise"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat"
                    placeholder="email@entreprise.com"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-montserrat font-bold hover:bg-gray-50 transition-all"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>Téléchargement...</>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Télécharger
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessOffersSection;