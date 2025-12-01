import { useState } from 'react';
import { GraduationCap, Ticket, Waves, Utensils, Download, X, Mail, Users, Shield, BookOpen } from 'lucide-react';

const SchoolOffersSection = () => {
  const [activeCategory, setActiveCategory] = useState('attractions');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '', contactName: '', email: '', phone: '', studentCount: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Brochure téléchargée avec succès!');
      setShowForm(false);
      setIsSubmitted(false);
      setFormData({ schoolName: '', contactName: '', email: '', phone: '', studentCount: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const attractionFeatures = [
    { title: 'PASS ALL INCLUSIVE', desc: 'Expérience Complète' },
    { title: 'PASS MANÈGES', desc: '16 attractions' },
    { title: 'PASS AVENTURES', desc: '4 aventures' },
    { title: 'PASS VR CLUB', desc: '3 expériences VR' }
  ];

  const poolFeatures = [
    { title: 'Pass Piscine Enfant', desc: 'Pour les moins de 1m20' },
    { title: 'Pass Piscine Adulte', desc: 'Pour les plus de 1m20' },
    { title: 'Surveillance', desc: 'Présence de maîtres-nageurs' },
    { title: 'Vestiaires', desc: 'Espaces dédiés aux groupes' }
  ];

  const restaurationFeatures = [
    { title: 'Menu Sandwich', desc: 'Sandwich/Panini + frites + boisson' },
    { title: 'Menu Burger', desc: 'Burger/Tacos + frites + boisson + glace' },
    { title: 'Menu Complet', desc: 'Salade + plat + frites + boisson + glace' },
    { title: 'Menu Goûter', desc: 'Viennoiseries ou crêpes + boisson' }
  ];

  const isFormValid = formData.schoolName && formData.contactName && formData.email && formData.phone;

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/30 to-orange-300/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              OFFRE SCOLAIRE
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 border-2 border-orange-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-full">
                  <GraduationCap className="w-7 h-7 text-orange-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-3">VISITES SCOLAIRES</h3>
                  <p className="font-montserrat text-gray-700 leading-relaxed">
                  Au Palooza Park, les enfants  explorent le monde des dinosaures à travers des jeux et des espaces ludiques. Choisissez nos formules ou créez  votre visite sur mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-10">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">NOS AVANTAGES</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Users, title: 'Tarifs Groupes', desc: 'Offres spéciales pour les écoles', color: 'from-orange-400 to-amber-500' },
                { icon: Shield, title: 'Sécurité', desc: 'Encadrement professionnel', color: 'from-cyan-500 to-blue-500' },
                { icon: BookOpen, title: 'Éducatif', desc: 'Découverte ludique', color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: 'Support Dédié', desc: 'Accompagnement personnalisé', color: 'from-purple-500 to-pink-500' }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">{item.title}</h4>
                  <p className="font-montserrat text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: 'attractions', label: 'Attractions', icon: Ticket, active: 'from-orange-500 to-amber-500' },
              { id: 'piscines', label: 'Piscines', icon: Waves, active: 'from-cyan-500 to-blue-500' },
              { id: 'restauration', label: 'Restauration', icon: Utensils, active: 'from-orange-500 to-amber-500' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.active} text-white shadow-lg`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300'
                }`}
              >
                <cat.icon className="inline-block w-4 h-4 mr-2" />
                {cat.label}
              </button>
            ))}
          </div>

          {activeCategory === 'attractions' && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5">
                <h3 className="font-dinosaur text-3xl text-center">OFFRES ATTRACTIONS</h3>
                <p className="text-center text-green-100 font-montserrat text-sm mt-1">Formules semaine et weekend disponibles</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {attractionFeatures.map((f, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 text-center">
                    <h4 className="font-montserrat font-bold text-gray-800 mb-1">{f.title}</h4>
                    <p className="font-montserrat text-xs text-gray-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'piscines' && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-5">
                <h3 className="font-dinosaur text-3xl text-center">OFFRES PISCINES</h3>
                <p className="text-center text-cyan-100 font-montserrat text-sm mt-1">Accès aux espaces aquatiques</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {poolFeatures.map((f, i) => (
                  <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 text-center">
                    <h4 className="font-montserrat font-bold text-gray-800 mb-1">{f.title}</h4>
                    <p className="font-montserrat text-xs text-gray-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'restauration' && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-5">
                <h3 className="font-dinosaur text-3xl text-center">OFFRES RESTAURATION</h3>
                <p className="text-center text-orange-100 font-montserrat text-sm mt-1">Menus adaptés aux groupes scolaires</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {restaurationFeatures.map((f, i) => (
                  <div key={i} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200 text-center">
                    <h4 className="font-montserrat font-bold text-gray-800 mb-1">{f.title}</h4>
                    <p className="font-montserrat text-xs text-gray-600">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-6 md:p-10 text-white text-center shadow-2xl">
            <h3 className="font-dinosaur text-4xl md:text-5xl mb-4">Téléchargez notre brochure<br></br>Offre Scolaire</h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
            Consultez notre brochure complète pour découvrir nos forfaits scolaires, tarifs et services.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              TÉLÉCHARGER LA BROCHURE
            </button>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-6 text-white relative">
              <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-dinosaur text-4xl mb-2">DEMANDE DE BROCHURE SCOLAIRE</h3>
              <p className="font-montserrat text-orange-50">Complétez le formulaire pour télécharger notre brochure</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">Nom de l'établissement *</label>
                  <input type="text" name="schoolName" value={formData.schoolName} onChange={handleInputChange}
                    className="text-gray-700 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat" placeholder="Votre école" />
                </div>
                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">Nom et prénom *</label>
                  <input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange}
                    className="text-gray-700 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat" placeholder="Votre nom complet" />
                </div>
                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="text-gray-700 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat" placeholder="email@ecole.ma" />
                </div>
                <div>
                  <label className="font-montserrat font-semibold text-gray-700 block mb-2">Téléphone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                    className="text-gray-700 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat" placeholder="+212 6XX XXX XXX" />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-montserrat font-bold hover:bg-gray-50 transition-all">
                  Annuler
                </button>
                <button onClick={handleSubmit} disabled={isSubmitted || !isFormValid}
                  className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                  {isSubmitted ? 'Téléchargement...' : <><Download className="w-4 h-4" />Télécharger</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolOffersSection;