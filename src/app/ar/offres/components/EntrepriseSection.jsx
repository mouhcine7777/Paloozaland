"use client";
import { useState } from 'react';
import { Users, PartyPopper, Download, X, Mail, Building } from 'lucide-react';

const SUBMIT_URL    = 'https://www.paloozaland.com/submit_form.php';
const BROCHURE_PATH = '/brochure-entreprise.pdf';

const BusinessOffersSection = () => {
  const [showForm, setShowForm]       = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState('');
  const [formData, setFormData]       = useState({
    companyName: '', contactName: '', email: '', phone: '', message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = BROCHURE_PATH;
    link.download = 'Brochure-Entreprise-PaloozaPark.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res  = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'business', ...formData }),
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        triggerDownload();
        setTimeout(() => {
          setShowForm(false);
          setIsSubmitted(false);
          setIsLoading(false);
          setFormData({ companyName: '', contactName: '', email: '', phone: '', message: '' });
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
      setFormData({ companyName: '', contactName: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-dinosaur text-5xl md:text-6xl mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              عرض الشركات
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6" />
            <p className="font-montserrat text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              قدّم لفرق العمل ديالك تجربة ما كتنساش Palooza Park. اكتشف العروض المصممة خصيصًا لفعاليات الشركات، وأنشطة بناء الفريق والندوات.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16">
            <h3 className="font-dinosaur text-4xl text-center mb-8 text-gray-800">المزايا ديالنا</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users,       title: 'عروض خاصة بالمجموعات', desc: 'أثمنة مناسبة على حسب عدد أفراد المجموعة',    color: 'from-orange-400 to-amber-500' },
                { icon: Building,    title: 'فضاءات خاصة',           desc: 'فضاءات محجوزة خصيصًا لفعالياتكم الخاصة',      color: 'from-cyan-500 to-blue-500' },
                { icon: PartyPopper, title: 'أنشطة مخصصة',           desc: 'برنامج مهيأ حسب الأهداف ديالكم',              color: 'from-green-500 to-emerald-500' },
                { icon: Mail,        title: 'مواكبة مخصصة',          desc: 'شخص مكلّف كيرافقكم فالتنظيم من البداية للنهاية', color: 'from-purple-500 to-pink-500' },
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-montserrat font-bold text-lg text-gray-800 mb-2">{title}</h4>
                  <p className="font-montserrat text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h3 className="font-dinosaur text-4xl md:text-5xl mb-4">
              نزّل البروشور ديال <br />عرض الشركات
            </h3>
            <p className="font-montserrat text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              اكتشف جميع العروض، الأثمنة والخدمات ديالنا للشركات فبروشور واحد.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-orange-600 font-montserrat font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              تنزيل المنشور التعريفي
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 p-8 text-white relative">
              <button onClick={closeModal} disabled={isLoading}
                className="absolute top-4 left-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all disabled:opacity-50">
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-dinosaur text-4xl mb-2">طلب منشور</h3>
              <p className="font-montserrat text-orange-50">عمّر الاستمارة تحت باش تنزّل البروشور ديال عرض الشركات</p>
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
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  {[
                    { label: 'اسم الشركة *',          name: 'companyName', type: 'text',  placeholder: 'الشركة ديالك' },
                    { label: 'الاسم الكامل *',         name: 'contactName', type: 'text',  placeholder: 'سميتك الكاملة' },
                    { label: 'البريد الإلكتروني *',    name: 'email',       type: 'email', placeholder: 'email@company.com' },
                    { label: 'رقم الهاتف *',           name: 'phone',       type: 'tel',   placeholder: '+212 6XX XXX XXX' },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="font-montserrat font-semibold text-gray-700 block mb-2">{label}</label>
                      <input type={type} name={name} value={formData[name]} onChange={handleInputChange} required
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
                  <button type="button" onClick={closeModal} disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-montserrat font-bold hover:bg-gray-50 transition-all disabled:opacity-50">
                    إلغاء
                  </button>
                  <button type="submit" disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-montserrat font-bold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2">
                    {isLoading ? (
                      <><svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>كنصيفطو...</>
                    ) : (
                      <><Download className="w-5 h-5" />تنزيل</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessOffersSection;
