"use client";

import { useState } from 'react';
import { Ruler, Sparkles, Mountain, Gamepad2 } from 'lucide-react';

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('toutes');

  const attractions = [
    {
      id: 1,
      name: "Dream Land / هيليكوبطير",
      category: "maneges",
      description: "حلّق واستمتع بتجربة ممتعة!",
      image: "/gallery/dreamland.jpg",
      heightRange: "110 سم+"
    },
    {
      id: 2,
      name: "Spider Mountain",
      category: "maneges",
      description: "تسلق واستمتع بمغامرة مليانة حماس!",
      image: "/gallery/spidermountain.jpg",
      heightRange: "120-150 سم"
    },
    {
      id: 3,
      name: "Apollo",
      category: "maneges",
      description: "شد بلاصتك وخلي أبولو ياخذك فجولة مليانة حماس وإثارة!",
      image: "/gallery/apollo.jpg",
      heightRange: "100-140 سم+"
    },
    {
      id: 4,
      name: "Orient Express",
      category: "maneges",
      description: "طلع فأوريونت إكسبريس واستمتع برحلة مليانة حماس واكتشافات!",
      image: "/gallery/express.jpg",
      heightRange: "100-140 سم"
    },
    {
      id: 5,
      name: "Trampoline",
      category: "maneges",
      description: "دور واستمتع فوق الترامبولين فتجربة كلها متعة وحماس!",
      image: "/gallery/trampoline.jpg",
      heightRange: "110-140 سم"
    },
    {
      id: 6,
      name: "Sky Glider",
      category: "maneges",
      description: "حلّق فوق البارك واستمتع بالإثارة ديال سكاي غلايدر!",
      image: "/gallery/skyglider.jpg",
      heightRange: "110-140 سم"
    },
    {
      id: 7,
      name: "Looping Bike",
      category: "maneges",
      description: "وجد راسك للإثارة مع لوبينغ بايك، غادي تعيش تجربة تخليك تدور من الحماس!",
      image: "/gallery/loopingbike.jpg",
      heightRange: "150 سم+"
    },
    {
      id: 8,
      name: "Waikiki",
      category: "maneges",
      description: "استمتع بالإثارة والمرح بلا حدود مع وايكيكي!",
      image: "/gallery/waikiki.jpg",
      heightRange: "130 سم+"
    },
    {
      id: 9,
      name: "Zipline",
      category: "aventures",
      description: "حلّق فوق البارك بسرعة واستمتع بتجربة الزيبلاين بكل حرية!",
      image: "/gallery/ziplinee.jpg",
      heightRange: "140 سم+"
    },
    {
      id: 10,
      name: "Free Fall",
      category: "aventures",
      description: "استعد لجرعة قوية من الأدرينالين مع تجربة السقوط الحر!",
      image: "/gallery/jumptower.jpg",
      heightRange: "140 سم+"
    },
    {
      id: 11,
      name: "مسار الأكروبراش",
      category: "aventures",
      description: "تسلق، تجاوز التحديات واستمتع بمغامرة وسط الأشجار فمسار الأكروبراش!",
      image: "/gallery/accrobranche.jpg"
    },
    {
      id: 12,
      name: "Monster Tower",
      category: "aventures",
      description: "وصل للقمة وتحدى نفسك فمونستر تاور!",
      image: "/gallery/monstertower.jpg",
      ageRange: "13 سنة+"
    },
    {
      id: 13,
      name: "Spider Bumper",
      category: "maneges",
      description: "استمتع بمعركة مائية مليانة ضحك، ورش صحابك بالماء وعِيش أجواء كلها متعة!",
      image: "/gallery/spinBumper.jpg"
    },
    {
      id: 15,
      name: "Dino Valley",
      category: "maneges",
      description: "سافر عبر الزمن، اكتشف واد الديناصورات وعِيش مغامرة وسط الطبيعة والديناصورات العملاقة!",
      image: "/gallery/dinovalley.jpg",
      heightRange: "100-130 سم+"
    },
    {
      id: 16,
      name: "Kontiki",
      category: "maneges",
      description: "شد مزيان! سفينة كونتيكي غادي تاخذك فجولة مليانة حماس، مفاجآت وضحك.",
      image: "/gallery/kontiki.jpg",
      heightRange: "100-140 سم+"
    },
    {
      id: 17,
      name: "Crazy Cannon",
      category: "maneges",
      description: "وجد راسك لمغامرة مليانة دوران، سرعة وحماس فهاد اللعبة المستوحاة من أجواء الغرب الأمريكي!",
      image: "/gallery/crazycannon.jpg",
      heightRange: "110-130 سم+"
    },
    {
      id: 18,
      name: "Loco Loco",
      category: "maneges",
      description: "وجد راسك للدوران! طلع واستمتع بجولة مليانة ضحك، حماس وإثارة، مناسبة لجميع أفراد العائلة.",
      image: "/gallery/locoloco.jpg",
      heightRange: "100-120 سم+"
    },
    {
      id: 19,
      name: "Coco Piloto",
      category: "maneges",
      description: "استعد لجولة مجنونة! دور، ميل واستمتع بلحظات مليانة ضحك، متعة وإثارة!",
      image: "/gallery/cocopiloto.jpg",
      heightRange: "110-130 سم+"
    },
    {
      id: 20,
      name: "Cyber Truck",
      category: "vr",
      description: "طلع فسايبر تراك وعِيش مغامرة استثنائية مليانة إثارة وتشويق!",
      image: "/gallery/cybertruck.jpg"
    },
    {
      id: 21,
      name: "AR Car Racing",
      category: "vr",
      description: "شد المقود واستعد لأقوى سباق فالواقع المعزز، مليان حماس وتشويق!",
      image: "/gallery/arcarracing.jpg"
    },
    {
      id: 22,
      name: "VR Team",
      category: "vr",
      description: "دخل لعالم الواقع الافتراضي، تعاون مع فريقك وعِيش مغامرة ما كتتنساش!",
      image: "/gallery/vrteam.jpg"
    },
    {
      id: 23,
      name: "Space Loop",
      category: "maneges",
      description: "تحدى الجاذبية مع سبيس لوب واستعد لجولة مليانة حماس، دوران وإثارة!",
      image: "/gallery/spaceloop.jpg"
    }
  ];

  const categories = [
    { id: 'toutes', name: 'العرض الشامل', color: 'from-orange-500 to-amber-500', icon: Sparkles },
    { id: 'maxi fun', name: 'PASS MAXI FUN', color: 'from-blue-500 to-cyan-500', icon: Sparkles },
    { id: 'aventures', name: 'PASS AVENTURES', color: 'from-green-500 to-emerald-500', icon: Mountain },
    { id: 'vr', name: 'PASS VR CLUB', color: 'from-purple-500 to-pink-500', icon: Gamepad2 }
  ];

  const getCategoryInfo = (category) => {
    const categoryMap = {
      'maneges': {
        name: 'PASS MAXI FUN',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        textColor: 'text-blue-600',
        icon: Sparkles
      },
      'aventures': {
        name: 'PASS AVENTURES',
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
        textColor: 'text-green-600',
        icon: Mountain
      },
      'vr': {
        name: 'PASS VR CLUB',
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
            رحلة إلى عالم ما قبل التاريخ
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
          <p className="font-montserrat text-xl text-gray-600 max-w-7xl mx-auto leading-relaxed">
            ألعاب استثنائية كتسناك فعالم الديناصورات فبالوزا بارك!
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
                  <div className={`absolute top-4 right-4 ${categoryInfo.bgColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg font-montserrat flex items-center gap-2`}>
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
              <div className="font-montserrat text-orange-100">لعبة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">4</div>
              <div className="font-montserrat text-orange-100">عروض مختلفة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">∞</div>
              <div className="font-montserrat text-orange-100">ذكريات</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-dinosaur mb-2">100%</div>
              <div className="font-montserrat text-orange-100">متعة مضمونة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
