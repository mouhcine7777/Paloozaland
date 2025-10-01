import { useState } from 'react';

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attractions = [
    {
      id: 1,
      name: "Accrobranche",
      category: "adventure",
      image: "/gallery/acrrobranche.jpg"
    },
    {
      id: 2,
      name: "Le Jump Tower",
      category: "extreme",
      image: "/gallery/image4.jpg"
    },
    {
      id: 3,
      name: "Le Monster Tower",
      category: "extreme",
      image: "/gallery/image5.jpg"
    },
    {
      id: 4,
      name: "Zipline",
      category: "adventure",
      image: "/gallery/image6.jpg"
    },
    {
      id: 5,
      name: "Dino Valley",
      category: "family",
      image: "/gallery/dinovalley.jpg"
    },
    {
      id: 6,
      name: "Loco Loco",
      category: "family",
      image: "/gallery/locoloco.jpg"
    },
    {
      id: 7,
      name: "Coco Piloto",
      category: "thrill",
      image: "/gallery/cocopiloto.jpg"
    },
    {
      id: 8,
      name: "Cinema 6D",
      category: "thrill",
      image: "/gallery/6d.jpg"
    },
    {
      id: 9,
      name: "Spider Mountain",
      category: "thrill",
      image: "/gallery/spidermountain.jpg"
    },
    {
      id: 10,
      name: "Dream Land & Mini Hélicoptère",
      category: "family",
      image: "/gallery/dreamland.jpg"
    },
    {
      id: 11,
      name: "Apollo",
      category: "extreme",
      image: "/gallery/apollo.jpg"
    },
    {
      id: 12,
      name: "Orient Express",
      category: "thrill",
      image: "/gallery/express.jpg"
    },
    {
      id: 13,
      name: "Sky Glider",
      category: "adventure",
      image: "/gallery/glider.jpg"
    },
    {
      id: 14,
      name: "Waikiki",
      category: "family",
      image: "/gallery/image9.jpg"
    },
    {
      id: 15,
      name: "Looping Bike",
      category: "extreme",
      image: "/gallery/loopingbike.jpg"
    },
    {
      id: 16,
      name: "Trampoline",
      category: "extreme",
      image: "/gallery/trampoline.jpg"
    },
    {
      id: 17,
      name: "Cyber Truck",
      category: "tech",
      image: "/gallery/cybertruck.jpg"
    },
    {
      id: 18,
      name: "Ar Car Racing",
      category: "tech",
      image: "/gallery/arcarracing.jpg"
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
          <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            L'Odyssée Préhistorique
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <p className="font-montserrat text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            18 attractions exceptionnelles vous attendent dans l'univers préhistorique de Palooza Park
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image with Overlay Text */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-dinosaur text-3xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
                    {attraction.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">18</div>
              <div className="font-montserrat text-orange-100">Attractions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">4</div>
              <div className="font-montserrat text-orange-100">Niveaux de Sensations</div>
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