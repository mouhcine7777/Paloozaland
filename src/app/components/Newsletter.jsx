"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SUBSCRIBE_URL = "https://www.paloozaland.com/subscribe.php";

// ── Defined OUTSIDE to prevent re-mount on every parent render (fixes focus loss bug)
const NewsletterForm = ({ email, setEmail, consent, setConsent, error, submitted, loading, onSubmit, inputId }) => (
  <>
    {!submitted ? (
      <form onSubmit={onSubmit} noValidate>
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            disabled={loading}
            className="flex-1 rounded-full border border-yellow-300/50 bg-white/10 px-5 py-2.5 font-montserrat text-sm text-white placeholder-white/50 outline-none focus:border-yellow-400 focus:bg-white/15 transition-all disabled:opacity-60"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
            className="rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-2.5 font-montserrat font-bold text-sm text-white shadow-lg whitespace-nowrap disabled:opacity-60"
          >
            {loading ? '...' : "S'inscrire"}
          </motion.button>
        </div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 flex-shrink-0 accent-amber-400"
          />
          <span className="font-montserrat text-xs text-white/55 leading-relaxed">
            J'accepte de recevoir des communications marketing et les actualités de Sunset Hospitality.
          </span>
        </label>
        {error && (
          <p className="mt-1.5 font-montserrat text-xs text-red-300">{error}</p>
        )}
      </form>
    ) : (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-dinosaur text-xl text-yellow-300 mb-1">Bienvenue dans la tribu !</p>
        <p className="font-montserrat text-sm text-white/70">
          Restez à l'affût des dernières nouvelles de Palooza Park.
        </p>
      </motion.div>
    )}
  </>
);

const NewsletterSection = () => {
  // ── Popup state
  const [popupVisible, setPopupVisible]   = useState(false);
  const [popupEmail, setPopupEmail]       = useState('');
  const [popupConsent, setPopupConsent]   = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [popupLoading, setPopupLoading]   = useState(false);
  const [popupError, setPopupError]       = useState('');

  // ── Footer state
  const [footerEmail, setFooterEmail]       = useState('');
  const [footerConsent, setFooterConsent]   = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [footerLoading, setFooterLoading]   = useState(false);
  const [footerError, setFooterError]       = useState('');

  // Newsletter popup disabled for now
  useEffect(() => {
    return;
  }, []);

  const closePopup = () => setPopupVisible(false);

  const subscribe = async (email, source, setLoading, setError, setSubmitted, onSuccess) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res  = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        onSuccess?.();
      } else {
        setError(data.message || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      setError('Impossible de joindre le serveur. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    if (!popupConsent) { setPopupError('Vous devez accepter de recevoir nos communications.'); return; }
    subscribe(popupEmail, 'popup', setPopupLoading, setPopupError, setPopupSubmitted, () => {
      setTimeout(() => closePopup(), 3000);
    });
  };

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    if (!footerConsent) { setFooterError('Vous devez accepter de recevoir nos communications.'); return; }
    subscribe(footerEmail, 'section', setFooterLoading, setFooterError, setFooterSubmitted);
  };

  return (
    <>
      {/* ── POPUP ── */}
      <AnimatePresence>
        {popupVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-md rounded-2xl p-7 text-white pointer-events-auto"
                style={{
                  background: 'linear-gradient(150deg, #1c0a00 0%, #3b1a00 50%, #1c0a00 100%)',
                  border: '1.5px solid rgba(253,186,20,0.35)',
                }}
              >
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-5 text-white/40 hover:text-white/80 text-xl leading-none transition-colors"
                >
                  ✕
                </button>

                <p className="font-montserrat text-xs font-semibold tracking-widest text-amber-500 uppercase mb-2">
                  Newsletter
                </p>
                <h2 className="font-dinosaur text-2xl md:text-3xl text-yellow-300 mb-2 leading-tight">
                  Inscrivez-vous à notre newsletter
                </h2>
                <p className="font-montserrat text-sm text-white/70 leading-relaxed mb-1">
                  Plongez dans l'univers Palooza Park et recevez directement toutes nos actualités, offres et surprises.
                </p>
                <p className="font-montserrat text-sm font-semibold text-yellow-300 mb-5">
                  Votre prochaine expérience commence ici.
                </p>

                <NewsletterForm
                  email={popupEmail}        setEmail={setPopupEmail}
                  consent={popupConsent}    setConsent={setPopupConsent}
                  error={popupError}
                  submitted={popupSubmitted}
                  loading={popupLoading}
                  onSubmit={handlePopupSubmit}
                  inputId="popup-email"
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── FOOTER NEWSLETTER BLOC ── */}
      <section
        className="relative overflow-hidden py-10"
        style={{
          background: 'linear-gradient(135deg, #1c0a00 0%, #3b1a00 50%, #1c0a00 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #ea580c 0px, #ea580c 1px, transparent 1px, transparent 24px)',
          }}
        />

        <div className="relative z-10 w-full px-8 md:px-16 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">

            {/* Left: text */}
            <div className="mb-6 md:mb-0 md:w-2/5">
              <p className="font-montserrat text-xs font-semibold tracking-widest text-amber-500 uppercase mb-2">
                Newsletter
              </p>
              <h2 className="font-dinosaur text-3xl md:text-4xl text-yellow-300 leading-tight mb-2">
                Inscrivez-vous à notre newsletter
              </h2>
              <p className="font-montserrat text-sm text-white/65 leading-relaxed mb-1">
                Plongez dans l'univers Palooza Park et recevez toutes nos actualités, offres et surprises.
              </p>
              <p className="font-montserrat text-sm font-semibold text-yellow-300">
                Votre prochaine expérience commence ici.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-white/10" />

            {/* Right: form */}
            <div className="md:flex-1">
              <NewsletterForm
                email={footerEmail}        setEmail={setFooterEmail}
                consent={footerConsent}    setConsent={setFooterConsent}
                error={footerError}
                submitted={footerSubmitted}
                loading={footerLoading}
                onSubmit={handleFooterSubmit}
                inputId="footer-email"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSection;
