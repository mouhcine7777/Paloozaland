import { useState } from 'react';
import { motion } from 'framer-motion';

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attractions = [
    {
      id: 1,
      name: "Accrobranche",
      category: "adventure",
      description: "Parcours dans les arbres avec des défis acrobatiques pour toute la famille",
      icon: "🌳"
    },
    {
      id: 2,
      name: "Le Jump Tower",
      category: "extreme",
      description: "Chute libre depuis 40 mètres de hauteur pour les plus courageux",
      icon: "🗼"
    },
    {
      id: 3,
      name: "Le Monster Tower",
      category: "extreme",
      description: "Tour de 35 mètres avec vue panoramique et descente spectaculaire",
      icon: "👹"
    },
    {
      id: 4,
      name: "Zipline",
      category: "adventure",
      description: "Tyrolienne géante au-dessus de la vallée des dinosaures",
      icon: "🪂"
    },
    {
      id: 5,
      name: "Dino Valley",
      category: "family",
      description: "Voyage immersif dans la vallée des dinosaures avec animatroniques",
      icon: "🦕"
    },
    {
      id: 6,
      name: "Bateau Pirate",
      category: "family",
      description: "Balancier géant pour des sensations aquatiques inoubliables",
      icon: "🏴‍☠️"
    },
    {
      id: 7,
      name: "Spinning Coaster",
      category: "thrill",
      description: "Montagnes russes avec wagons tournoyants et virages serrés",
      icon: "🎢"
    },
    {
      id: 8,
      name: "Tagada",
      category: "thrill",
      description: "Manège disco avec rebonds et rotations au rythme de la musique",
      icon: "🎪"
    },
    {
      id: 9,
      name: "Spider Mountain",
      category: "thrill",
      description: "Araignée géante qui vous élève et vous fait tournoyer",
      icon: "🕷️"
    },
    {
      id: 10,
      name: "Dream Land & Mini Hélicoptère",
      category: "family",
      description: "Espace dédié aux plus jeunes avec mini hélicoptères et attractions douces",
      icon: "🚁"
    },
    {
      id: 11,
      name: "Apollo",
      category: "extreme",
      description: "Fusée spatiale avec accélération et apesanteur simulée",
      icon: "🚀"
    },
    {
      id: 12,
      name: "Orient Express",
      category: "thrill",
      description: "Train à grande vitesse à travers tunnels et ponts suspendus",
      icon: "🚂"
    },
    {
      id: 13,
      name: "Sky Glider",
      category: "adventure",
      description: "Télésiège panoramique avec vue imprenable sur tout le parc",
      icon: "🚠"
    },
    {
      id: 14,
      name: "Waikiki",
      category: "family",
      description: "Attraction aquatique avec toboggans et jeux d'eau tropicaux",
      icon: "🌊"
    },
    {
      id: 15,
      name: "Looping Bike",
      category: "extreme",
      description: "Vélo acrobatique sur circuit avec looping et figures aériennes",
      icon: "🚴"
    },
    {
      id: 16,
      name: "Jeux d'Équipe en VR",
      category: "tech",
      description: "Expérience de réalité virtuelle collaborative dans l'univers des dinosaures",
      icon: "🥽"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes', color: 'from-orange-500 to-amber-500' },
    { id: 'family', name: 'Familial', color: 'from-green-500 to-emerald-500' },
    { id: 'adventure', name: 'Aventure', color: 'from-blue-500 to-cyan-500' },
    { id: 'thrill', name: 'Sensations', color: 'from-purple-500 to-pink-500' },
    { id: 'extreme', name: 'Extrême', color: 'from-red-500 to-orange-600' },
    { id: 'tech', name: 'Tech', color: 'from-indigo-500 to-purple-600' }
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent"
          >
            L'Odyssée Préhistorique
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            16 attractions exceptionnelles vous attendent dans l'univers préhistorique de Palooza Park
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105` 
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Attractions List */}
        <motion.div layout className="space-y-4">
          {filteredAttractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              layout
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 md:min-w-0 md:flex-1">
                    <div className="text-4xl md:text-5xl">{attraction.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-dinosaur text-2xl md:text-3xl text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {attraction.name}
                      </h3>
                      <p className="font-montserrat text-gray-600 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-dinosaur mb-2">16</div>
              <div className="font-montserrat text-orange-100">Attractions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-dinosaur mb-2">4</div>
              <div className="font-montserrat text-orange-100">Niveaux de Sensations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-dinosaur mb-2">∞</div>
              <div className="font-montserrat text-orange-100">Souvenirs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-dinosaur mb-2">100%</div>
              <div className="font-montserrat text-orange-100">Plaisir Garanti</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsSection;