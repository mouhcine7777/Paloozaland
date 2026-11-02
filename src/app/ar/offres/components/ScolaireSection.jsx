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
        setError(data.message || "وقع شي خطأ. عاود المحاولة.");
        setIsLoading(false);
      }
    } catch {
      setError('ما قدرناش نتواصلو مع السيرفر. عاود المحاولة.');
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
    { title: 'العرض الشامل',   desc: 'تجربة كاملة' },
    { title: 'PASS MAXI FUN',  desc: '14 لعبة' },
    { title: 'PASS AVENTURES', desc: '4 مغامرات' },
    { title: 'PASS VR CLUB',   desc: '3 تجارب فالواقع الافتراضي' },
  ];
  const poolPasses = [
    {
      title: 'پاس مسبح الأطفال',
      items: [
        { name: 'دخول المسبح للأطفال (-120 سم)', price: '80 درهم' },
        { name: 'اشتراك الأطفال (-120 سم)', price: '750 درهم' },
        { name: 'دخول المسبح للأطفال (-120 سم) شريك / مجموعة مدرسية', price: '70 درهم' },
        { name: 'دخول المسبح للأطفال (-120 سم) + غداء + وجبة خفيفة', price: '144 درهم' },
        { name: 'دخول المسبح للأطفال (-120 سم) + الألعاب', price: '150 درهم' },
      ],
    },
    {
      title: 'پاس مسبح الكبار',
      items: [
        { name: 'دخول المسبح للكبار (+120 سم)', price: '145 درهم' },
        { name: 'اشتراك الكبار (+120 سم)', price: '1500 درهم' },
        { name: 'دخول المسبح للكبار (+120 سم) شريك / مجموعة مدرسية', price: '125 درهم' },
        { name: 'دخول المسبح للكبار (+120 سم) + الألعاب', price: '210 درهم' },
      ],
    },
    {
      title: 'پاس العائلة',
      items: [
        { name: 'پاس العائلة: بابا وماما + ولدين (-120 سم)', price: '410 درهم' },
      ],
    },
    {
      title: 'پاس الأصدقاء',
      items: [
        { name: 'مجموعة أصدقاء (+4 كبار)', price: '520 درهم' },
        { name: 'زيادة فمجموعة الأصدقاء', price: '130 درهم' },
      ],
    },
  ];
  const restaurationFeatures = [
    { title: 'مينو ساندويتش', desc: 'ساندويتش/بانيني + فريت + مشروب' },
    { title: 'مينو برغر',     desc: 'برغر/تاكوس + فريت + مشروب + جلاس' },
    { title: 'مينو كامل',     desc: 'سلطة + طبق + فريت + مشروب + جلاس' },
    { title: 'مينو الوجبة الخفيفة', desc: 'فيينوازري ولا كريب + مشروب' },
  ];

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              العروض المدرسية
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 border-2 border-orange-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-full">
                  <GraduationCap className="w-7 h-7 text-orange-600" />
                </div>
                <div className="text-right">
                  <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-3">الزيارات المدرسية</h3>
                  <p className="font-montserrat text-gray-700 leading-relaxed">
                    فبالوزا بارك، كيكتاشفو الأطفال عالم الديناصورات من خلال ألعاب وأنشطة ترفيهية وتعليمية. اختاروا العرض اللي كيناسبكم أو صمّموا زيارة خاصة بكم.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-10">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">مميزاتنا</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Users,    title: 'أسعار خاصة بالمجموعات', desc: 'عروض خاصة بالمدارس',        color: 'from-orange-400 to-amber-500' },
                { icon: Shield,   title: 'السلامة',                desc: 'تأطير وإشراف احترافي',        color: 'from-cyan-500 to-blue-500' },
                { icon: BookOpen, title: 'تعليمي',                 desc: 'تعلم بطريقة ممتعة',           color: 'from-green-500 to-emerald-500' },
                { icon: Mail,     title: 'دعم مخصص',               desc: 'مواكبة خاصة حسب احتياجاتكم',  color: 'from-purple-500 to-pink-500' },
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
              { id: 'attractions',  label: 'الألعاب',   icon: Ticket,   active: 'from-orange-500 to-amber-500' },
              { id: 'piscines',     label: 'المسبح',     icon: Waves,    active: 'from-cyan-500 to-blue-500' },
              { id: 'restauration', label: 'المطعم',     icon: Utensils, active: 'from-orange-500 to-amber-500' },
            ].map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-4 rounded-full font-montserrat font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.active} text-white shadow-lg`
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300'
                }`}>
                <cat.icon className="inline-block w-4 h-4 ml-2" />{cat.label}
              </button>
            ))}
          </div>

          {/* Category panels */}
          {activeCategory === 'attractions' && (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5">
                <h3 className="font-dinosaur text-3xl text-center">عروض الألعاب</h3>
                <p className="text-center text-green-100 font-montserrat text-sm mt-1">عروض متوفرة طوال الأسبوع والويكاند</p>
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
                <h3 className="font-dinosaur text-3xl text-center">عروض المسبح</h3>
                <p className="text-center text-cyan-100 font-montserrat text-sm mt-1">دخول الفضاءات المائية</p>
              </div>
              <div className="p-6 space-y-4">
                {poolPasses.map((pass, i) => {
                  const isOpen = openPool === i;
                  return (
                    <div key={i} className="rounded-xl border border-cyan-200 overflow-hidden">
                      <button
                        onClick={() => setOpenPool(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-colors">
                        <span className="font-montserrat font-bold text-gray-800 text-right">{pass.title}</span>
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
                <h3 className="font-dinosaur text-3xl text-center">عروض المطعم</h3>
                <p className="text-center text-orange-100 font-montserrat text-sm mt-1">مينوهات مناسبة للمجموعات المدرسية</p>
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
              تنزيل منشور تعريفي لعروض مدرسية ديالنا
            </h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              اكتشف جميع العروض المدرسية، الأثمنة والخدمات فبروشور واحد، وخطط لزيارة مدرسية ما كتتنساش.
            </p>
            <button onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3">
              <Download className="w-5 h-5" />تنزيل المنشور التعريفي
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
                className="absolute top-3 left-3 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center disabled:opacity-50">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-dinosaur text-4xl mb-2">طلب منشور</h3>
              <p className="font-montserrat text-orange-50">عمّر الاستمارة لتنزيل البروشور ديال العروض المدرسية</p>
            </div>

            {isSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-dinosaur text-3xl text-gray-800 mb-2">التنزيل جاري</h4>
                <p className="font-montserrat text-gray-600">شكرا! تم تنزيل البروشور ديالك وتوصلنا بالمعلومات ديالك.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { label: 'اسم المؤسسة *',              name: 'schoolName',   type: 'text',   placeholder: 'المدرسة ديالك' },
                    { label: 'الاسم الكامل *',              name: 'contactName', type: 'text',   placeholder: 'سميتك الكاملة' },
                    { label: 'البريد الإلكتروني *',         name: 'email',       type: 'email',  placeholder: 'email@school.ma' },
                    { label: 'رقم الهاتف *',                name: 'phone',       type: 'tel',    placeholder: '+212 6XX XXX XXX' },
                    { label: 'عدد التلاميذ (اختياري)',      name: 'studentCount', type: 'number', placeholder: 'مثلا: 30' },
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
                    إلغاء
                  </button>
                  <button onClick={handleSubmit} disabled={isLoading || !isFormValid}
                    className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                    {isLoading ? (
                      <><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>كنصيفطو...</>
                    ) : (
                      <><Download className="w-4 h-4" />تنزيل</>
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
