import { useState } from 'react';
import { Ruler, Sparkles, Mountain, Gamepad2 } from 'lucide-react';

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('toutes');

  const attractions = [
    {
      id: 1,
      name: "Dream Land / Hélicoptère",
      category: "maneges",
      description: "Envolez-vous à bord du Dreamland Hélicoptère pour une expérience enchantée!",
      image: "/gallery/dreamland.jpg",
      heightRange: "110cm+"
    },
    {
      id: 2,
      name: "Spider Mountain",
      category: "maneges",
      description: "Escaladez et explorez la Spider Montagne pour une aventure palpitante!",
      image: "/gallery/spidermountain.jpg",
      heightRange: "120-150cm"
    },
    {
      id: 3,
      name: "Apollo",
      category: "maneges",
      description: "Installez-vous confortablement et laissez Apollo vous emmener dans une expérience vertigineuse!",
      image: "/gallery/apollo.jpg",
      heightRange: "100-140cm"
    },
    {
      id: 4,
      name: "Orient Express",
      category: "maneges",
      description: "Montez à bord de l'Orient Express pour un voyage riche en sensations et en découvertes!",
      image: "/gallery/express.jpg",
      heightRange: "100-140cm"
    },
    {
      id: 5,
      name: "Trampoline",
      category: "maneges",
      description: "Sautez, tournez et éclatez-vous sur le Trampoline comme jamais auparavant!",
      image: "/gallery/trampoline.jpg",
      heightRange: "110-140cm"
    },
    {
      id: 6,
      name: "Sky Glider",
      category: "maneges",
      description: "Survolez le parc et laissez-vous porter par les sensations du Sky Glider!",
      image: "/gallery/skyglider.jpg",
      heightRange: "110-140cm"
    },
    {
      id: 7,
      name: "Looping Bike",
      category: "maneges",
      description: "Préparez-vous à des sensations fortes avec le Looping Bike qui vous fera tourner la tête!",
      image: "/gallery/loopingbike.jpg",
      heightRange: "150cm+"
    },
    {
      id: 8,
      name: "Waikiki",
      category: "maneges",
      description: "Glissez et amusez-vous sans limites sur les vagues de Waikiki!",
      image: "/gallery/waikiki.jpg",
      heightRange: "130cm+"
    },
    {
      id: 9,
      name: "Zipline",
      category: "aventures",
      description: "Foncez à toute allure et survolez le parc en toute liberté avec la Zipline!",
      image: "/gallery/zipline.jpg",
      heightRange: "140cm+"
    },
    {
      id: 10,
      name: "Free Fall",
      category: "aventures",
      description: "Lâchez prise et ressentez l'adrénaline de la chute libre avec le Free Fall!",
      image: "/gallery/jumptower.jpg",
      heightRange: "140cm+"
    },
    {
      id: 11,
      name: "Parcours Accrobranches",
      category: "aventures",
      description: "Grimpez, surmontez des défis et amusez-vous dans les arbres avec notre Parcours Accrobranches!",
      image: "/gallery/accrobranche.jpg"
    },
    {
      id: 12,
      name: "Monster Tower",
      category: "aventures",
      description: "Atteignez les sommets et relevez le défi de la Monster Tower!",
      image: "/gallery/monstertower.jpg",
      ageRange: "13 ans+"
    },
    {
      id: 13,
      name: "Spiner Bumper",
      category: "maneges",
      description: "Plongez dans l'amusement ! Montez à bord de votre bouée et éclaboussez vos amis dans une bataille aquatique pleine de fous rires!",
      image: "/gallery/spinBumper.jpg"
    },
    {
      id: 14,
      name: "Cinema 6D",
      category: "maneges",
      description: "Vivez le cinéma comme jamais ! Des effets spéciaux, des vibrations et des sensations immersives dans une expérience 6D à couper le souffle!",
      image: "/gallery/cinema4D.jpg"
    },
    {
      id: 15,
      name: "Dino Valley",
      category: "maneges",
      description: "Remontez le temps ! Explorez une vallée préhistorique peuplée de dinosaures géants et partez à l'aventure au cœur de la jungle.",
      image: "/gallery/dinovalley.jpg",
      heightRange: "100-130cm"
    },
    {
      id: 16,
      name: "Kontiki",
      category: "maneges",
      description: "Accrochez-vous ! Le légendaire bateau Kontiki vous embarque pour une traversée pleine de rebondissements et de fous rires.",
      image: "/gallery/kontiki.jpg",
      heightRange: "100-140cm"
    },
    {
      id: 17,
      name: "Crazy Cannon",
      category: "maneges",
      description: "Préparez-vous pour une aventure décoiffante ! Tourbillons, virages et vitesse dans ce manège au cœur du Far West.",
      image: "/gallery/crazycanyon.jpg",
      heightRange: "110-130cm"
    },
    {
      id: 18,
      name: "Loco Loco",
      category: "maneges",
      description: "Préparez-vous au tournis ! Montez à bord et laissez-vous emporter par cette attraction tournante pleine de rires et de sensations. Un tour dynamique et amusant pour toute la famille !",
      image: "/gallery/locoloco.jpg",
      heightRange: "100-120cm"
    },
    {
      id: 19,
      name: "Coco Piloto",
      category: "maneges",
      description: "Un tour complètement fou ! Tournez, penchez, riez… cette attraction promet un maximum de fun et de sensations!",
      image: "/gallery/cocopiloto.jpg",
      heightRange: "110-130cm"
    },
    {
      id: 20,
      name: "Cyber Truck",
      category: "vr",
      description: "Grimpez à bord du Cyber Truck et vivez une aventure électrisante comme jamais!",
      image: "/gallery/cybertruck.jpg"
    },
    {
      id: 21,
      name: "AR Car Racing",
      category: "vr",
      description: "Prenez le volant et plongez dans la course ultime avec l'AR Car Racing!",
      image: "/gallery/arcarracing.jpg"
    },
    {
      id: 22,
      name: "VR Team",
      category: "vr",
      description: "Enfilez vos casques et embarquez pour une aventure immersive avec VR Team!",
      image: "/gallery/vrteam.jpg"
    }
  ];

  const categories = [
    { id: 'toutes', name: 'Pass All Inclusive', color: 'from-orange-500 to-amber-500', icon: Sparkles },
    { id: 'maneges', name: 'Pass Manèges', color: 'from-blue-500 to-cyan-500', icon: Sparkles },
    { id: 'aventures', name: 'Pass Aventures', color: 'from-green-500 to-emerald-500', icon: Mountain },
    { id: 'vr', name: 'Pass VR', color: 'from-purple-500 to-pink-500', icon: Gamepad2 }
  ];

  const getCategoryInfo = (category) => {
    const categoryMap = {
      'maneges': { 
        name: 'Pass Manèges', 
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        textColor: 'text-blue-600',
        icon: Sparkles
      },
      'aventures': { 
        name: 'Pass Aventures', 
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
        textColor: 'text-green-600',
        icon: Mountain
      },
      'vr': { 
        name: 'Pass VR', 
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
        textColor: 'text-purple-600',
        icon: Gamepad2
      }
    };
    return categoryMap[category];
  };

  const filteredAttractions = selectedCategory === 'toutes' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            L'Odyssée Préhistorique
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <p className="font-montserrat text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed">
            22 attractions exceptionnelles vous attendent dans l'univers préhistorique de Palooza Park
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105` 
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300 shadow-md'
                }`}
              >
                <Icon size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAttractions.map((attraction) => {
            const categoryInfo = getCategoryInfo(attraction.category);
            const CategoryIcon = categoryInfo.icon;
            
            return (
              <div
                key={attraction.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 ${categoryInfo.bgColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg font-montserrat flex items-center gap-2`}>
                    <CategoryIcon size={16} />
                    {categoryInfo.name}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-dinosaur text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {attraction.name}
                  </h3>
                  <p className="font-montserrat text-gray-600 leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  
                  {/* Info Tags */}
                  {(attraction.heightRange || attraction.ageRange) && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {attraction.heightRange && (
                        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-montserrat">
                          <Ruler size={14} />
                          <span className="font-semibold">{attraction.heightRange}</span>
                        </div>
                      )}
                      {attraction.ageRange && (
                        <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-montserrat">
                          <Sparkles size={14} />
                          <span className="font-semibold">{attraction.ageRange}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">22</div>
              <div className="font-montserrat text-orange-100">Attractions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">4</div>
              <div className="font-montserrat text-orange-100">Pass Différents</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">∞</div>
              <div className="font-montserrat text-orange-100">Souvenirs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">100%</div>
              <div className="font-montserrat text-orange-100">Plaisir Garanti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;