"use client";
import { useState } from 'react';
import { GraduationCap, Ticket, Waves, Utensils, Download, X, Mail, Users, Shield, BookOpen, ChevronDown } from 'lucide-react';

const SUBMIT_URL    = 'https://www.paloozaland.com/submit_form.php';
const BROCHURE_PATH = '/brochure-scolaire.pdf';

const SchoolOffersSection = () => {
  const [activeCategory, setActiveCategory] = useState('attractions');
  const [openPool, setOpenPool]       = useState(null);
  const [showForm, setShowForm]       = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState('');
  const [formData, setFormData]       = useState({
    schoolName: '', contactName: '', email: '', phone: '', studentCount: '', message: ''
  });

  const isFormValid = formData.schoolName && formData.contactName && formData.email && formData.phone;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = BROCHURE_PATH;
    link.download = 'Brochure-Scolaire-PaloozaPark.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    setError('');

    try {
      const res  = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'school', ...formData }),
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        triggerDownload();
        setTimeout(() => {
          setShowForm(false);
          setIsSubmitted(false);
          setIsLoading(false);
          setFormData({ schoolName: '', contactName: '', email: '', phone: '', studentCount: '', message: '' });
        }, 2500);
      } else {
        setError(data.message || "Une erreur s'est produite. Veuillez réessayer.");
        setIsLoading(false);
      }
    } catch {
      setError('Impossible de joindre le serveur. Veuillez réessayer.');
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    if (!isLoading) {
      setShowForm(false);
      setError('');
      setIsSubmitted(false);
      setFormData({ schoolName: '', contactName: '', email: '', phone: '', studentCount: '', message: '' });
    }
  };

  const attractionFeatures  = [
    { title: 'PASS ALL INCLUSIVE', desc: 'Expérience Complète' },
    { title: 'PASS MAXI FUN',       desc: '15 attractions' },
    { title: 'PASS AVENTURES',     desc: '4 aventures' },
    { title: 'PASS VR CLUB',       desc: '3 expériences VR' },
  ];
  const poolPasses = [
    {
      title: 'Pass Piscine Enfant',
      items: [
        { name: 'Accès piscine enfant (-120cm)', price: '80 dh' },
        { name: 'Abonnement enfant (-120cm)', price: '750 dh' },
        { name: 'Accès piscine enfant (-120cm) Partenaire / Groupe scolaire', price: '70 dh' },
        { name: 'Accès piscine enfant (-120cm) + déj + goûter', price: '144 dh' },
        { name: 'Accès piscine enfant (-120cm) + attractions', price: '150 dh' },
      ],
    },
    {
      title: 'Pass Piscine Adulte',
      items: [
        { name: 'Accès piscine adulte (+120cm)', price: '145 dh' },
        { name: 'Abonnement adulte (+120cm)', price: '1500 dh' },
        { name: 'Accès piscine adulte (+120cm) Partenaire / Groupe scolaire', price: '125 dh' },
        { name: 'Accès piscine adulte (+120cm) + attractions', price: '210 dh' },
      ],
    },
    {
      title: 'Pass Famille',
      items: [
        { name: 'Pass Family : 2 adultes + 2 enfants (-120cm)', price: '410 dh' },
      ],
    },
    {
      title: 'Pass Amis',
      items: [
        { name: "Groupe d'amis (+4 adultes)", price: '520 dh' },
        { name: 'Extra groupe amis', price: '130 dh' },
      ],
    },
  ];
  const restaurationFeatures = [
    { title: 'Menu Sandwich', desc: 'Sandwich/Panini + frites + boisson' },
    { title: 'Menu Burger',   desc: 'Burger/Tacos + frites + boisson + glace' },
    { title: 'Menu Complet',  desc: 'Salade + plat + frites + boisson + glace' },
    { title: 'Menu Goûter',   desc: 'Viennoiseries ou crêpes + boisson' },
  ];

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          {/* Header */}
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
                    Au Palooza Park, les enfants explorent le monde des dinosaures à travers des jeux et des espaces ludiques. Choisissez nos formules ou créez votre visite sur mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-10">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">NOS AVANTAGES</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Users,    title: 'Tarifs Groupes', desc: 'Offres spéciales pour les écoles',  color: 'from-orange-400 to-amber-500' },
                { icon: Shield,   title: 'Sécurité',       desc: 'Encadrement professionnel',          color: 'from-cyan-500 to-blue-500' },
                { icon: BookOpen, title: 'Éducatif',       desc: 'Découverte ludique',                 color: 'from-green-500 to-emerald-500' },
                { icon: Mail,     title: 'Support Dédié',  desc: 'Accompagnement personnalisé',        color: 'from-purple-500 to-pink-500' },
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <div key={i} className="text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">{title}</h4>
                  <p className="font-montserrat text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { id: 'attractions',  label: 'Attractions',  icon: Ticket,   active: 'from-orange-500 to-amber-500' },
              { id: 'piscines',     label: 'Piscines',     icon: Waves,    active: 'from-cyan-500 to-blue-500' },
              { id: 'restauration', label: 'Restauration', icon: Utensils, active: 'from-orange-500 to-amber-500' },
            ].map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.active} text-white shadow-lg`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300'
                }`}>
                <cat.icon className="inline-block w-4 h-4 mr-2" />{cat.label}
              </button>
            ))}
          </div>

          {/* Category panels */}
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
              <div className="p-6 space-y-4">
                {poolPasses.map((pass, i) => {
                  const isOpen = openPool === i;
                  return (
                    <div key={i} className="rounded-xl border border-cyan-200 overflow-hidden">
                      <button
                        onClick={() => setOpenPool(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-colors">
                        <span className="font-montserrat font-bold text-gray-800 text-left">{pass.title}</span>
                        <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                        <ul className="divide-y divide-cyan-100 bg-white">
                          {pass.items.map((item, j) => (
                            <li key={j} className="flex items-center justify-between gap-4 px-5 py-3">
                              <span className="font-montserrat text-sm text-gray-700">{item.name}</span>
                              <span className="font-montserrat font-bold text-sm text-cyan-700 whitespace-nowrap">{item.price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
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

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-6 md:p-10 text-white text-center shadow-2xl">
            <h3 className="font-dinosaur text-4xl md:text-5xl mb-4">
              Téléchargez notre brochure<br />Offre Scolaire
            </h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              Consultez notre brochure complète pour découvrir nos forfaits scolaires, tarifs et services.
            </p>
            <button onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3">
              <Download className="w-5 h-5" />TÉLÉCHARGER LA BROCHURE
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-6 text-white relative">
              <button onClick={closeModal} disabled={isLoading}
                className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center disabled:opacity-50">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-dinosaur text-4xl mb-2">DEMANDE DE BROCHURE SCOLAIRE</h3>
              <p className="font-montserrat text-orange-50">Complétez le formulaire pour télécharger notre brochure</p>
            </div>

            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-dinosaur text-3xl text-gray-800 mb-2">TÉLÉCHARGEMENT EN COURS</h4>
                <p className="font-montserrat text-gray-600">Merci ! Votre brochure a été téléchargée et nous avons bien reçu vos informations.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { label: "Nom de l'établissement *", name: 'schoolName',   type: 'text',   placeholder: 'Votre école' },
                    { label: 'Nom et prénom *',           name: 'contactName', type: 'text',   placeholder: 'Votre nom complet' },
                    { label: 'Email *',                   name: 'email',       type: 'email',  placeholder: 'email@ecole.ma' },
                    { label: 'Téléphone *',               name: 'phone',       type: 'tel',    placeholder: '+212 6XX XXX XXX' },
                    { label: "Nombre d'élèves (optionnel)", name: 'studentCount', type: 'number', placeholder: 'Ex: 30' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="font-montserrat font-semibold text-gray-700 block mb-2">{label}</label>
                      <input type={type} name={name} value={formData[name]} onChange={handleInputChange}
                        placeholder={placeholder}
                        className="text-gray-700 w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors font-montserrat" />
                    </div>
                  ))}
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="font-montserrat text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="mt-8 flex gap-4">
                  <button onClick={closeModal} disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-montserrat font-bold hover:bg-gray-50 transition-all disabled:opacity-50">
                    Annuler
                  </button>
                  <button onClick={handleSubmit} disabled={isLoading || !isFormValid}
                    className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                    {isLoading ? (
                      <><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Envoi...</>
                    ) : (
                      <><Download className="w-4 h-4" />Télécharger</>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolOffersSection;