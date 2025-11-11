import { useState } from 'react';
import { GraduationCap, Ticket, Waves, Utensils, Clock, Users, Shield, BookOpen } from 'lucide-react';

const SchoolOffersSection = () => {
  const [activeCategory, setActiveCategory] = useState('attractions');

  const attractionOffers = {
    weekday: [
      {
        id: 'basic',
        title: 'accès aux attractions hors aventures en weekend et vacances scolaires',
        price: '60',
        currency: 'DH',
        description: 'Accès de base aux manèges'
      },
      {
        id: 'tower',
        title: 'accès aux attractions + monster tower ou parcours accrobranche',
        price: '80',
        currency: 'DH',
        description: 'Accès + 1 aventure au choix'
      },
      {
        id: 'both',
        title: 'accès aux attractions + monster tower ou parcours accrobranche en série',
        price: '100',
        currency: 'DH',
        description: 'Accès complet avec aventures'
      }
    ],
    weekend: [
      {
        id: 'basic-we',
        title: 'accès aux attractions hors aventures en weekend et vacances scolaires',
        price: '70',
        currency: 'DH',
        description: 'Accès de base aux manèges'
      },
      {
        id: 'tower-we',
        title: 'accès aux attractions + monster tower ou parcours accrobranche',
        price: '90',
        currency: 'DH',
        description: 'Accès + 1 aventure au choix'
      },
      {
        id: 'both-we',
        title: 'accès aux attractions + monster tower ou parcours accrobranche en série',
        price: '110',
        currency: 'DH',
        description: 'Accès complet avec aventures'
      }
    ]
  };

  const poolOffers = [
    {
      id: 'child-pool',
      title: 'Pass Piscine Enfant (-1m20)',
      price: '70',
      currency: 'DH',
      icon: Waves,
      color: 'from-cyan-400 to-blue-400'
    },
    {
      id: 'adult-pool',
      title: 'Pass Piscine Adulte (+1m20)',
      price: '125',
      currency: 'DH',
      icon: Waves,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const restaurationOffers = [
    {
      id: 'sandwich',
      title: 'Sandwich ou Panini',
      description: 'sandwich ou panini + frites + soda',
      price: '45',
      currency: 'DH',
      icon: '🥪'
    },
    {
      id: 'burger',
      title: 'Hamburger ou Tacos',
      description: 'tacos ou cheese burger + frites + soda + mini cornet de glace',
      price: '60',
      currency: 'DH',
      icon: '🍔'
    },
    {
      id: 'menu-complet',
      title: 'Menu Complet',
      description: 'mini salade + tacos ou cheese burger + frites + eau + mini cornet de glace',
      price: '85',
      currency: 'DH',
      icon: '🍽️'
    },
    {
      id: 'menu-gouter-1',
      title: 'Menu Goûter',
      description: '02 mini viennoiseries + jus ou chocolat chaud',
      price: '35',
      currency: 'DH',
      icon: '🧁'
    },
    {
      id: 'menu-gouter-2',
      title: 'Menu Goûter',
      description: 'gaufre ou crêpe + jus ou chocolat chaud, eau',
      price: '40',
      currency: 'DH',
      icon: '🧇'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-200/30 to-orange-300/30 rounded-full blur-3xl" />

      {/* Dinosaur footprints decoration */}
      <div className="absolute top-20 left-10 w-16 h-16 text-orange-200 opacity-40">
        <svg viewBox="0 0 24 36" fill="currentColor">
          <path d="M6,0 C9.3,0 12,2.7 12,6 C12,9.3 9.3,12 6,12 C2.7,12 0,9.3 0,6 C0,2.7 2.7,0 6,0 Z M18,12 C21.3,12 24,14.7 24,18 C24,21.3 21.3,24 18,24 C14.7,24 12,21.3 12,18 C12,14.7 14.7,12 18,12 Z M6,24 C9.3,24 12,26.7 12,30 C12,33.3 9.3,36 6,36 C2.7,36 0,33.3 0,30 C0,26.7 2.7,24 6,24 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            OFFRE SCOLAIRE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-full">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-left">
                <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-3">VISITES SCOLAIRES</h3>
                <p className="font-montserrat text-gray-700 leading-relaxed">
                  Palooza Park propose des jeux uniques avec des espaces ludiques pour découvrir le monde des dinosaures. À la carte ou via nos différentes formules, nous vous proposons des solutions adaptées à vos besoins et à vos budgets. Une équipe jeune, dynamique et professionnelle est à votre disposition pour vous accompagner et assurer la sécurité des enfants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('attractions')}
            className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'attractions'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 shadow-md'
            }`}
          >
            <Ticket className="inline-block w-5 h-5 mr-2" />
            Offres Attractions
          </button>
          <button
            onClick={() => setActiveCategory('piscines')}
            className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'piscines'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-cyan-300 shadow-md'
            }`}
          >
            <Waves className="inline-block w-5 h-5 mr-2" />
            Offres Piscines
          </button>
          <button
            onClick={() => setActiveCategory('restauration')}
            className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'restauration'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xl scale-105'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 shadow-md'
            }`}
          >
            <Utensils className="inline-block w-5 h-5 mr-2" />
            Offres Restauration
          </button>
        </div>

        {/* Attractions Content */}
        {activeCategory === 'attractions' && (
          <div className="space-y-12">
            {/* Weekday Offers */}
            <div>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-3xl">
                <h3 className="font-dinosaur text-3xl text-center">
                  SEMAINE
                  <span className="block text-lg font-montserrat opacity-90 mt-1">
                    (hors jours de fête et de vacances)
                  </span>
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-b-3xl shadow-xl">
                {attractionOffers.weekday.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <p className="font-montserrat text-sm text-gray-700 mb-4 leading-relaxed min-h-[60px]">
                      {offer.title}
                    </p>
                    <div className="flex items-end justify-center gap-2 bg-white rounded-xl p-4">
                      <span className="font-dinosaur text-5xl text-green-600">{offer.price}</span>
                      <span className="font-montserrat text-xl text-gray-600 mb-2">{offer.currency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekend Offers */}
            <div>
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-t-3xl">
                <h3 className="font-dinosaur text-3xl text-center">
                  WEEKEND
                  <span className="block text-lg font-montserrat opacity-90 mt-1">
                    (et jours de fêtes et jours de vacances)
                  </span>
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 bg-white p-6 rounded-b-3xl shadow-xl">
                {attractionOffers.weekend.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg"
                  >
                    <p className="font-montserrat text-sm text-gray-700 mb-4 leading-relaxed min-h-[60px]">
                      {offer.title}
                    </p>
                    <div className="flex items-end justify-center gap-2 bg-white rounded-xl p-4">
                      <span className="font-dinosaur text-5xl text-emerald-600">{offer.price}</span>
                      <span className="font-montserrat text-xl text-gray-600 mb-2">{offer.currency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="font-montserrat text-sm text-gray-700 italic">
                * monster tower / parcours accrobranche / zipline / jump tower<br />
                ** hors jours de vacances scolaires
              </p>
            </div>
          </div>
        )}

        {/* Piscines Content */}
        {activeCategory === 'piscines' && (
          <div>
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-t-3xl">
              <h3 className="font-dinosaur text-3xl text-center">OFFRES PISCINES</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-b-3xl shadow-xl">
              {poolOffers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={offer.id}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-cyan-100 hover:border-cyan-300"
                  >
                    <div className={`bg-gradient-to-r ${offer.color} p-6 text-white flex items-center justify-between`}>
                      <h4 className="font-dinosaur text-2xl">{offer.title}</h4>
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-end justify-center gap-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
                        <span className="font-dinosaur text-6xl text-cyan-600">{offer.price}</span>
                        <span className="font-montserrat text-2xl text-gray-600 mb-2">{offer.currency}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Restauration Content */}
        {activeCategory === 'restauration' && (
          <div>
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-6 rounded-t-3xl">
              <h3 className="font-dinosaur text-3xl text-center">OFFRES RESTAURATIONS</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-b-3xl shadow-xl">
              {restaurationOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{offer.icon}</span>
                    <h4 className="font-dinosaur text-2xl text-gray-800">{offer.title}</h4>
                  </div>
                  <p className="font-montserrat text-sm text-gray-700 mb-4 leading-relaxed min-h-[40px]">
                    {offer.description}
                  </p>
                  <div className="flex items-end justify-center gap-2 bg-white rounded-xl p-4">
                    <span className="font-dinosaur text-5xl text-orange-600">{offer.price}</span>
                    <span className="font-montserrat text-xl text-gray-600 mb-2">{offer.currency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
                  <div className="mt-16 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h3 className="font-dinosaur text-4xl mb-4">Organisez votre sortie scolaire !</h3>
          <p className="font-montserrat text-lg mb-6 text-orange-50 max-w-2xl mx-auto">
            Une expérience éducative et ludique inoubliable attend vos élèves à Palooza Park
          </p>
          <button className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
          CONTACTEZ-NOUS
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolOffersSection;