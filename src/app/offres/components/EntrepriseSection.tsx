import { useState } from 'react';
import { Users, Calendar, Waves, Trophy, Clock, DollarSign } from 'lucide-react';

const BusinessOffersSection = () => {
  const [activeTab, setActiveTab] = useState('attractions');

  const attractionOffers = [
    {
      id: 'weekday',
      type: 'SEMAINE',
      subtitle: '(hors jours de fête et de vacances)',
      title: 'Forfait Semaine',
      included: 'Parc + Attractions (sauf Monster Tower)',
      price: '50',
      currency: 'DH',
      icon: Calendar,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'weekend',
      type: 'WEEKEND',
      subtitle: '(et jours de fêtes et jours de vacances)',
      title: 'Forfait Weekend',
      included: 'Parc + Attractions (sauf Monster Tower)',
      price: '70',
      currency: 'DH',
      icon: Trophy,
      gradient: 'from-orange-500 to-amber-500'
    }
  ];
  const poolOffers = [
    {
      id: 'adult-pass',
      title: 'Pass Piscine Adulte',
      subtitle: '(+1m20)',
      price: '125',
      currency: 'DH',
      icon: Waves,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'child-pass',
      title: 'Pass Piscine Enfant',
      subtitle: '(-1m20)',
      price: '70',
      currency: 'DH',
      icon: Waves,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'child-subscription',
      title: 'Abonnement Enfant',
      price: '750',
      currency: 'DH par mois',
      icon: Calendar,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'adult-subscription',
      title: 'Abonnement Adulte',
      price: '1500',
      currency: 'DH par mois',
      icon: Calendar,
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative dinosaur footprints */}
      <div className="absolute top-10 left-10 w-16 h-16 text-orange-200 opacity-30 transform rotate-12">
        <svg viewBox="0 0 24 36" fill="currentColor">
          <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-20 w-20 h-20 text-amber-200 opacity-30 transform -rotate-12">
        <svg viewBox="0 0 24 36" fill="currentColor">
          <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            OFFRE ENTREPRISE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <div className="max-w-3xl mx-auto">
            <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-4">CONVENTIONS</h3>
            <p className="font-montserrat text-lg text-gray-700 leading-relaxed">
              Offrez à vos collaborateurs l'accès au Palooza Park avec ses différentes attractions, piscines, animation et restauration sur place. Nous avons la formule que vous recherchez avec des tarifs entreprises avantageux et flexibles.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('attractions')}
            className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'attractions'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 shadow-md'
            }`}
          >
            Offres Attractions
          </button>
          <button
            onClick={() => setActiveTab('piscines')}
            className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'piscines'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-cyan-300 shadow-md'
            }`}
          >
            Offres Piscines
          </button>
        </div>

        {/* Attractions Tab Content */}
        {activeTab === 'attractions' && (
          <div className="space-y-12">
            {/* Main Packages */}
            <div className="grid md:grid-cols-2 gap-8">
              {attractionOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={offer.id}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-orange-200 group"
                  >
                    <div className={`bg-gradient-to-r ${offer.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-dinosaur text-3xl">{offer.type}</h3>
                        <Icon className="w-10 h-10" />
                      </div>
                      <p className="font-montserrat text-sm opacity-90">{offer.subtitle}</p>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="font-montserrat font-bold text-2xl text-gray-800 mb-4">
                        {offer.title}
                      </h4>
                      <p className="font-montserrat text-gray-600 mb-6 leading-relaxed">
                        {offer.included}
                      </p>
                      
                      <div className="flex items-end justify-center gap-2 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6">
                        <span className="font-dinosaur text-6xl text-orange-600">{offer.price}</span>
                        <span className="font-montserrat text-2xl text-gray-600 mb-2">{offer.currency}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Piscines Tab Content */}
        {activeTab === 'piscines' && (
          <div>
            <h3 className="font-dinosaur text-3xl text-center mb-8 text-gray-800">Accès Piscine & Abonnements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {poolOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={offer.id}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-cyan-200"
                  >
                    <div className={`bg-gradient-to-r ${offer.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-dinosaur text-3xl mb-1">{offer.title}</h4>
                          {offer.subtitle && (
                            <p className="font-montserrat text-sm opacity-90">{offer.subtitle}</p>
                          )}
                        </div>
                        <Icon className="w-12 h-12" />
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-end justify-center gap-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
                        <span className="font-dinosaur text-6xl text-cyan-600">{offer.price}</span>
                        <span className="font-montserrat text-xl text-gray-600 mb-2">{offer.currency}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="font-dinosaur text-4xl mb-4">Prêt à organiser votre événement d'entreprise ?</h3>
          <p className="font-montserrat text-lg mb-6 text-orange-50 max-w-2xl mx-auto">
            Contactez-nous pour personnaliser votre offre et créer une expérience inoubliable pour vos équipes
          </p>
          <button className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            CONTACTEZ-NOUS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessOffersSection;