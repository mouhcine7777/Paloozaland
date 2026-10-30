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
        setError(data.message || "An error occurred. Please try again.");
        setIsLoading(false);
      }
    } catch {
      setError('Unable to reach the server. Please try again.');
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
    { title: 'ALL INCLUSIVE PASS', desc: 'Complete Experience' },
    { title: 'MAXI FUN PASS',      desc: '15 attractions' },
    { title: 'ADVENTURE PASS',     desc: '4 adventures' },
    { title: 'VR CLUB PASS',       desc: '3 VR experiences' },
  ];
  const poolPasses = [
    {
      title: 'Kids Pool Pass',
      items: [
        { name: 'Kids pool access (-120cm)', price: '80 dh' },
        { name: 'Kids membership (-120cm)', price: '750 dh' },
        { name: 'Kids pool access (-120cm) Partner / School group', price: '70 dh' },
        { name: 'Kids pool access (-120cm) + lunch + snack', price: '144 dh' },
        { name: 'Kids pool access (-120cm) + attractions', price: '150 dh' },
      ],
    },
    {
      title: 'Adult Pool Pass',
      items: [
        { name: 'Adult pool access (+120cm)', price: '145 dh' },
        { name: 'Adult membership (+120cm)', price: '1500 dh' },
        { name: 'Adult pool access (+120cm) Partner / School group', price: '125 dh' },
        { name: 'Adult pool access (+120cm) + attractions', price: '210 dh' },
      ],
    },
    {
      title: 'Family Pass',
      items: [
        { name: 'Family Pass: 2 adults + 2 kids (-120cm)', price: '410 dh' },
      ],
    },
    {
      title: 'Friends Pass',
      items: [
        { name: 'Group of friends (4+ adults)', price: '520 dh' },
        { name: 'Extra friend in group', price: '130 dh' },
      ],
    },
  ];
  const restaurationFeatures = [
    { title: 'Sandwich Menu', desc: 'Sandwich/Panini + fries + drink' },
    { title: 'Burger Menu',   desc: 'Burger/Tacos + fries + drink + ice cream' },
    { title: 'Full Menu',     desc: 'Salad + main dish + fries + drink + ice cream' },
    { title: 'Snack Menu',    desc: 'Pastries or crepes + drink' },
  ];

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              SCHOOL OFFER
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 border-2 border-orange-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-full">
                  <GraduationCap className="w-7 h-7 text-orange-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-3">SCHOOL VISITS</h3>
                  <p className="font-montserrat text-gray-700 leading-relaxed">
                    At Palooza Park, children explore the world of dinosaurs through games and play areas. Choose one of our packages or create your own tailor-made visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-10">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">OUR ADVANTAGES</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Users,    title: 'Group Rates',        desc: 'Special offers for schools',   color: 'from-orange-400 to-amber-500' },
                { icon: Shield,   title: 'Safety',              desc: 'Professional supervision',      color: 'from-cyan-500 to-blue-500' },
                { icon: BookOpen, title: 'Educational',         desc: 'Fun learning experience',       color: 'from-green-500 to-emerald-500' },
                { icon: Mail,     title: 'Dedicated Support',   desc: 'Personalized assistance',       color: 'from-purple-500 to-pink-500' },
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
              { id: 'piscines',     label: 'Pools',        icon: Waves,    active: 'from-cyan-500 to-blue-500' },
              { id: 'restauration', label: 'Dining',        icon: Utensils, active: 'from-orange-500 to-amber-500' },
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
                <h3 className="font-dinosaur text-3xl text-center">ATTRACTION OFFERS</h3>
                <p className="text-center text-green-100 font-montserrat text-sm mt-1">Weekday and weekend packages available</p>
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
                <h3 className="font-dinosaur text-3xl text-center">POOL OFFERS</h3>
                <p className="text-center text-cyan-100 font-montserrat text-sm mt-1">Access to the water areas</p>
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
                <h3 className="font-dinosaur text-3xl text-center">DINING OFFERS</h3>
                <p className="text-center text-orange-100 font-montserrat text-sm mt-1">Menus adapted for school groups</p>
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
              Download our brochure<br />School Offer
            </h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              Check out our complete brochure to discover our school packages, rates and services.
            </p>
            <button onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3">
              <Download className="w-5 h-5" />DOWNLOAD THE BROCHURE
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
              <h3 className="font-dinosaur text-4xl mb-2">SCHOOL BROCHURE REQUEST</h3>
              <p className="font-montserrat text-orange-50">Fill out the form to download our brochure</p>
            </div>

            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-dinosaur text-3xl text-gray-800 mb-2">DOWNLOAD IN PROGRESS</h4>
                <p className="font-montserrat text-gray-600">Thank you! Your brochure has been downloaded and we have received your information.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { label: 'School name *',            name: 'schoolName',   type: 'text',   placeholder: 'Your school' },
                    { label: 'Full name *',               name: 'contactName', type: 'text',   placeholder: 'Your full name' },
                    { label: 'Email *',                   name: 'email',       type: 'email',  placeholder: 'email@school.com' },
                    { label: 'Phone *',                   name: 'phone',       type: 'tel',    placeholder: '+212 6XX XXX XXX' },
                    { label: 'Number of students (optional)', name: 'studentCount', type: 'number', placeholder: 'e.g. 30' },
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
                    Cancel
                  </button>
                  <button onClick={handleSubmit} disabled={isLoading || !isFormValid}
                    className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                    {isLoading ? (
                      <><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Sending...</>
                    ) : (
                      <><Download className="w-4 h-4" />Download</>
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
