import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ASSETS } from '@/lib/intendant-assets';

// === À MODIFIER ===
const MOTION_VIDEO_URL = ''; // ex: '/videos/intendant-motion.mp4'
const VIDEO_POSTER_URL = ASSETS.capitoleBW;
const CALENDLY_URL = 'https://calendly.com/lintendantconciergerie/30min';
const CONTACT_EMAIL = 'contact@lintendantconciergerie-toulouse.fr';
// ==================

export const Route = createFileRoute('/discutons')({
  head: () => ({
    meta: [
      { title: "Discutons de votre projet — L'Intendant Toulouse" },
      {
        name: 'description',
        content:
          "Estimation gratuite ou rendez-vous découverte avec L'Intendant : conciergerie premium à Toulouse, location courte durée.",
      },
      { property: 'og:title', content: "Discutons de votre projet — L'Intendant Toulouse" },
      {
        property: 'og:description',
        content:
          "Choisissez la manière la plus simple d'échanger avec nous : estimation personnalisée sous 48h ou rendez-vous découverte.",
      },
    ],
  }),
  component: DiscutonsPage,
});

type Choice = 'none' | 'estimation' | 'rdv';

function DiscutonsPage() {
  const [choice, setChoice] = useState<Choice>('none');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-white text-elegant-black">
      <Header />
      <main className="pt-28 sm:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* En-tête */}
          <div className="text-center mb-12 sm:mb-16 animate-[fade-in_0.6s_ease-out]">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-medium">
              L'Intendant · Toulouse
            </p>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-elegant-black">
              Parlons de votre bien
            </h1>
            <div className="h-px w-16 bg-gray-300 mx-auto mb-5" />
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Découvrez notre accompagnement et choisissez la manière la plus simple
              d'échanger avec nous.
            </p>
          </div>

          {/* Grille vidéo + choix */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Vidéo */}
            <div className="lg:sticky lg:top-28">
              <MotionVideo />
              <div className="mt-6 text-center lg:text-left">
                <h2 className="font-playfair text-xl sm:text-2xl font-bold mb-2 text-elegant-black">
                  Découvrez L'Intendant en 45 secondes
                </h2>
                <p className="text-sm text-gray-600 font-light">
                  Une gestion complète, locale et exigeante de votre bien à Toulouse.
                </p>
              </div>
            </div>

            {/* Choix / formulaire / calendly */}
            <div className="space-y-6">
              {choice === 'none' && (
                <>
                  <ChoiceCard
                    eyebrow="Option 1"
                    title="Combien votre bien peut-il réellement rapporter ?"
                    text="Transmettez-nous quelques informations sur votre logement. Nous revenons vers vous sous 48 heures avec une première analyse personnalisée."
                    cta="Demander mon estimation"
                    onClick={() => setChoice('estimation')}
                  />
                  <ChoiceCard
                    eyebrow="Option 2"
                    title="Réservez votre échange découverte"
                    text="Choisissez directement le créneau qui vous convient. 30 minutes pour comprendre votre projet, votre bien et vous présenter notre accompagnement."
                    cta="Choisir un créneau"
                    onClick={() => setChoice('rdv')}
                    variant="dark"
                  />
                </>
              )}

              {choice === 'estimation' && (
                <EstimationForm
                  onBack={() => setChoice('none')}
                  onSwitchToRdv={() => setChoice('rdv')}
                />
              )}

              {choice === 'rdv' && <CalendlyBlock onBack={() => setChoice('none')} />}

              <div className="text-center pt-2">
                <button
                  onClick={() => navigate({ to: '/' })}
                  className="text-sm text-gray-500 hover:text-elegant-black transition-colors underline-offset-4 hover:underline font-light"
                >
                  ← Retour au site
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------- Vidéo motion ------------------------- */
function MotionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-sm bg-elegant-black shadow-lg"
    >
      {MOTION_VIDEO_URL ? (
        <video
          ref={videoRef}
          src={MOTION_VIDEO_URL}
          poster={VIDEO_POSTER_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <img
            src={VIDEO_POSTER_URL}
            alt="Capitole de Toulouse"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-elegant-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-white px-6 text-center">
            <p className="font-playfair text-2xl sm:text-3xl mb-2">Motion design</p>
            <p className="text-xs sm:text-sm text-white/70 max-w-xs font-light">
              Vidéo de présentation à venir
            </p>
          </div>
        </>
      )}

      {MOTION_VIDEO_URL && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Lecture'}
            className="rounded-full bg-elegant-black/70 hover:bg-elegant-black text-white w-9 h-9 grid place-items-center backdrop-blur transition"
          >
            {playing ? '❚❚' : '▶'}
          </button>
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Activer le son' : 'Couper le son'}
            className="rounded-full bg-elegant-black/70 hover:bg-elegant-black text-white w-9 h-9 grid place-items-center backdrop-blur transition text-sm"
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ------------------------- Carte de choix ------------------------- */
function ChoiceCard({
  eyebrow,
  title,
  text,
  cta,
  onClick,
  variant = 'light',
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  onClick: () => void;
  variant?: 'light' | 'dark';
}) {
  const isDark = variant === 'dark';
  return (
    <div
      className={`group rounded-sm p-7 sm:p-9 shadow-md border transition-all duration-300 hover:shadow-xl ${
        isDark
          ? 'bg-elegant-black text-white border-elegant-black'
          : 'bg-white text-elegant-black border-gray-200'
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.25em] mb-3 font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-3 leading-snug">
        {title}
      </h3>
      <p
        className={`text-sm sm:text-base font-light mb-6 leading-relaxed ${
          isDark ? 'text-white/75' : 'text-gray-600'
        }`}
      >
        {text}
      </p>
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 border ${
          isDark
            ? 'bg-white text-elegant-black border-white hover:bg-gray-100'
            : 'bg-elegant-black text-white border-gray-800 hover:scale-[1.02]'
        }`}
      >
        <span>{cta}</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

/* ------------------------- Formulaire estimation ------------------------- */
function EstimationForm({
  onBack,
  onSwitchToRdv,
}: {
  onBack: () => void;
  onSwitchToRdv: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [typeBien, setTypeBien] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if ((fd.get('website') as string)?.length) return;

    const errs: Record<string, string> = {};
    const required = [
      'nom',
      'email',
      'telephone',
      'ville',
      'type_bien',
      'nombre_chambres',
      'deja_en_lcd',
    ];
    required.forEach((k) => {
      if (!fd.get(k)) errs[k] = 'Champ requis';
    });
    const email = (fd.get('email') as string) || '';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'E-mail invalide';
    }
    if (fd.get('type_bien') === 'Autre' && !(fd.get('type_bien_autre') as string)?.trim()) {
      errs.type_bien_autre = 'Veuillez préciser';
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-sm bg-white p-8 shadow-md border border-gray-200 text-center animate-[fade-in_0.5s_ease-out]">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3 font-medium">Merci</p>
        <h3 className="font-playfair text-2xl sm:text-3xl font-bold mb-3 text-elegant-black">
          Demande bien reçue
        </h3>
        <p className="text-gray-600 mb-6 font-light leading-relaxed">
          Merci pour votre confiance. Nous allons étudier les informations concernant votre
          logement et revenir vers vous sous 48 heures.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-sm border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition"
          >
            Retour au site
          </button>
          <button
            onClick={onSwitchToRdv}
            className="px-6 py-3 rounded-sm bg-elegant-black text-white text-sm font-semibold hover:bg-gray-900 transition"
          >
            Voir les créneaux disponibles
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm bg-white p-6 sm:p-8 shadow-md border border-gray-200 space-y-4"
      noValidate
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-playfair text-xl sm:text-2xl font-bold text-elegant-black">
          Demande d'estimation
        </h3>
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-gray-500 hover:text-elegant-black"
        >
          ← Retour
        </button>
      </div>

      <Field label="Nom complet" name="nom" error={errors.nom} required />
      <Field label="E-mail" name="email" type="email" error={errors.email} required />
      <Field label="Téléphone" name="telephone" type="tel" error={errors.telephone} required />
      <Field label="Ville ou quartier du bien" name="ville" error={errors.ville} required />

      <SelectField
        label="Type de bien"
        name="type_bien"
        error={errors.type_bien}
        required
        value={typeBien}
        onChange={(e) => setTypeBien(e.target.value)}
        options={[
          'Studio',
          'Appartement 2 pièces',
          'Appartement 3 pièces et plus',
          'Maison / Villa',
          'Autre',
        ]}
      />

      {typeBien === 'Autre' && (
        <Field
          label="Veuillez préciser"
          name="type_bien_autre"
          error={errors.type_bien_autre}
          required
        />
      )}

      <Field
        label="Nombre de chambres"
        name="nombre_chambres"
        type="number"
        min="0"
        error={errors.nombre_chambres}
        required
      />

      <fieldset>
        <legend className="text-sm font-medium mb-2 text-elegant-black">
          Êtes-vous déjà en location courte durée ?{' '}
          <span className="text-gray-500">*</span>
        </legend>
        <div className="flex gap-4">
          {['Oui', 'Non'].map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm">
              <input type="radio" name="deja_en_lcd" value={v} className="accent-elegant-black" />
              {v}
            </label>
          ))}
        </div>
        {errors.deja_en_lcd && (
          <p className="text-xs text-red-600 mt-1">{errors.deja_en_lcd}</p>
        )}
      </fieldset>

      <div>
        <label className="block text-sm font-medium mb-1 text-elegant-black">Message (facultatif)</label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm focus:border-elegant-black focus:ring-1 focus:ring-elegant-black outline-none transition"
        />
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="w-full rounded-sm bg-elegant-black text-white font-semibold py-3 hover:bg-gray-900 transition shadow-md"
      >
        Recevoir mon estimation gratuite
      </button>
      <p className="text-xs text-center text-gray-500 font-light">
        Réponse sous 48 h · Sans engagement · Vos données restent confidentielles
      </p>

      <p className="text-[11px] text-gray-500 leading-relaxed pt-3 border-t border-gray-100 font-light">
        Les informations recueillies sont utilisées par L'Intendant Toulouse afin de traiter
        votre demande et de vous recontacter. Elles ne sont pas cédées à des tiers. Vous
        pouvez exercer vos droits en écrivant à{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>
        .{' '}
        <Link to="/politique-confidentialite" className="underline">
          Politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-elegant-black">
        {label} {required && <span className="text-gray-500">*</span>}
      </label>
      <input
        name={name}
        type={type}
        className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm focus:border-elegant-black focus:ring-1 focus:ring-elegant-black outline-none transition"
        {...rest}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  error,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-elegant-black">
        {label} {required && <span className="text-gray-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={value === undefined ? '' : undefined}
        className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm bg-white focus:border-elegant-black focus:ring-1 focus:ring-elegant-black outline-none transition"
      >
        <option value="" disabled>
          Sélectionnez…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

/* ------------------------- Calendly ------------------------- */
function CalendlyBlock({ onBack }: { onBack: () => void }) {
  return (
    <div className="rounded-sm bg-white p-4 sm:p-6 shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-playfair text-xl sm:text-2xl font-bold text-elegant-black">
          Choisissez votre créneau
        </h3>
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-gray-500 hover:text-elegant-black"
        >
          ← Retour
        </button>
      </div>
      {CALENDLY_URL ? (
        <div className="rounded-sm overflow-hidden border border-gray-200">
          <iframe
            src={CALENDLY_URL}
            title="Réserver un rendez-vous"
            className="w-full"
            style={{ height: 720, border: 0 }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-sm bg-gray-50 border border-dashed border-gray-300 p-10 text-center">
          <p className="text-sm text-gray-600 font-light">
            Le calendrier de réservation s'affichera ici dès que le lien Calendly sera renseigné.
          </p>
        </div>
      )}
    </div>
  );
}
