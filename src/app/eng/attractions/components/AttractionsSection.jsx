"use client";

import { useState } from 'react';
import { Ruler, Sparkles, Mountain, Gamepad2 } from 'lucide-react';

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('toutes');

  const attractions = [
    {
      id: 1,
      name: "Dream Land / Helicopter",
      category: "maneges",
      description: "Take off aboard the Dreamland Helicopter for an enchanted experience!",
      image: "/gallery/dreamland.jpg",
      heightRange: "110cm+"
    },
    {
      id: 2,
      name: "Spider Mountain",
      category: "maneges",
      description: "Climb and explore Spider Mountain for a thrilling adventure!",
      image: "/gallery/spidermountain.jpg",
      heightRange: "120-150cm"
    },
    {
      id: 3,
      name: "Apollo",
      category: "maneges",
      description: "Get comfortable and let Apollo take you on a dizzying experience!",
      image: "/gallery/apollo.jpg",
      heightRange: "100-140cm+"
    },
    {
      id: 4,
      name: "Orient Express",
      category: "maneges",
      description: "Hop aboard the Orient Express for a journey full of thrills and discoveries!",
      image: "/gallery/express.jpg",
      heightRange: "100-140cm"
    },
    {
      id: 5,
      name: "Trampoline",
      category: "maneges",
      description: "Jump, spin and have a blast on the Trampoline like never before!",
      image: "/gallery/trampoline.jpg",
      heightRange: "110-140cm"
    },
    {
      id: 6,
      name: "Sky Glider",
      category: "maneges",
      description: "Soar over the park and let yourself be carried away by the thrills of the Sky Glider!",
      image: "/gallery/skyglider.jpg",
      heightRange: "110-140cm"
    },
    {
      id: 7,
      name: "Looping Bike",
      category: "maneges",
      description: "Get ready for thrills with the Looping Bike, which will make your head spin!",
      image: "/gallery/loopingbike.jpg",
      heightRange: "150cm+"
    },
    {
      id: 8,
      name: "Waikiki",
      category: "maneges",
      description: "Slide and have unlimited fun on the waves of Waikiki!",
      image: "/gallery/waikiki.jpg",
      heightRange: "130cm+"
    },
    {
      id: 9,
      name: "Zipline",
      category: "aventures",
      description: "Race at full speed and soar over the park in complete freedom with the Zipline!",
      image: "/gallery/ziplinee.jpg",
      heightRange: "140cm+"
    },
    {
      id: 10,
      name: "Free Fall",
      category: "aventures",
      description: "Let go and feel the adrenaline of the free fall with Free Fall!",
      image: "/gallery/jumptower.jpg",
      heightRange: "140cm+"
    },
    {
      id: 11,
      name: "Ropes Course",
      category: "aventures",
      description: "Climb, overcome challenges and have fun in the trees on our Ropes Course!",
      image: "/gallery/accrobranche.jpg"
    },
    {
      id: 12,
      name: "Monster Tower",
      category: "aventures",
      description: "Reach the summits and take on the challenge of the Monster Tower!",
      image: "/gallery/monstertower.jpg",
      ageRange: "13 years+"
    },
    {
      id: 13,
      name: "Spinner Bumper",
      category: "maneges",
      description: "Dive into the fun! Hop aboard your ring and splash your friends in a water battle full of laughter!",
      image: "/gallery/spinBumper.jpg"
    },
    {
      id: 15,
      name: "Dino Valley",
      category: "maneges",
      description: "Travel back in time! Explore a prehistoric valley filled with giant dinosaurs and set off on an adventure at the heart of the jungle.",
      image: "/gallery/dinovalley.jpg",
      heightRange: "100-130cm+"
    },
    {
      id: 16,
      name: "Kontiki",
      category: "maneges",
      description: "Hold on tight! The legendary Kontiki boat takes you on a crossing full of twists and laughter.",
      image: "/gallery/kontiki.jpg",
      heightRange: "100-140cm+"
    },
    {
      id: 17,
      name: "Crazy Cannon",
      category: "maneges",
      description: "Get ready for a wild adventure! Twists, turns and speed in this ride at the heart of the Wild West.",
      image: "/gallery/crazycannon.jpg",
      heightRange: "110-130cm+"
    },
    {
      id: 18,
      name: "Loco Loco",
      category: "maneges",
      description: "Get ready to spin! Climb aboard and let yourself be swept away by this spinning attraction full of laughter and thrills. A dynamic and fun ride for the whole family!",
      image: "/gallery/locoloco.jpg",
      heightRange: "100-120cm+"
    },
    {
      id: 19,
      name: "Coco Piloto",
      category: "maneges",
      description: "A completely crazy ride! Spin, tilt, laugh… this attraction promises maximum fun and thrills!",
      image: "/gallery/cocopiloto.jpg",
      heightRange: "110-130cm+"
    },
    {
      id: 20,
      name: "Cyber Truck",
      category: "vr",
      description: "Climb aboard the Cyber Truck and experience an electrifying adventure like never before!",
      image: "/gallery/cybertruck.jpg"
    },
    {
      id: 21,
      name: "AR Car Racing",
      category: "vr",
      description: "Take the wheel and dive into the ultimate race with AR Car Racing!",
      image: "/gallery/arcarracing.jpg"
    },
    {
      id: 22,
      name: "VR Team",
      category: "vr",
      description: "Put on your headsets and embark on an immersive adventure with VR Team!",
      image: "/gallery/vrteam.jpg"
    },
    {
      id: 23,
      name: "Space Loop",
      category: "maneges",
      description: "Defy gravity! The Space Loop takes you on a whirlwind of thrills",
      image: "/gallery/spaceloop.jpg"
    }
  ];

  const categories = [
    { id: 'toutes', name: 'All Inclusive Pass', color: 'from-orange-500 to-amber-500', icon: Sparkles },
    { id: 'maxi fun', name: 'Maxi Fun Pass', color: 'from-blue-500 to-cyan-500', icon: Sparkles },
    { id: 'aventures', name: 'Adventure Pass', color: 'from-green-500 to-emerald-500', icon: Mountain },
    { id: 'vr', name: 'VR Pass', color: 'from-purple-500 to-pink-500', icon: Gamepad2 }
  ];

  const getCategoryInfo = (category) => {
    const categoryMap = {
      'maneges': {
        name: 'Maxi Fun Pass',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        textColor: 'text-blue-600',
        icon: Sparkles
      },
      'aventures': {
        name: 'Adventure Pass',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
        textColor: 'text-green-600',
        icon: Mountain
      },
      'vr': {
        name: 'VR Pass',
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
            The Prehistoric Odyssey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <p className="font-montserrat text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed">
            Exceptional attractions await you in the prehistoric world of Palooza Park!
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
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">23</div>
              <div className="font-montserrat text-orange-100">Attractions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">4</div>
              <div className="font-montserrat text-orange-100">Different Passes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">∞</div>
              <div className="font-montserrat text-orange-100">Memories</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">100%</div>
              <div className="font-montserrat text-orange-100">Guaranteed Fun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
