import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// === À MODIFIER ===
const MOTION_VIDEO_URL = ''; // ex: '/videos/intendant-motion.mp4'
const VIDEO_POSTER_URL = '/__l5e/assets-v1/d3efe234-b92e-463d-baaf-f03c7eed352a/upload-939f160b.png';
const CALENDLY_URL = ''; // ex: 'https://calendly.com/votre-compte/30min'
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
    <div className="min-h-screen bg-[#f5f1ea] text-elegant-black">
      <Header />
      <main className="pt-28 sm:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* En-tête */}
          <div className="text-center mb-10 sm:mb-14 animate-[fade-in_0.6s_ease-out]">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#941101] mb-3 font-medium">
              L'Intendant · Toulouse
            </p>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Parlons de votre bien
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light">
              Découvrez notre accompagnement et choisissez la manière la plus simple
              d'échanger avec nous.
            </p>
          </div>

          {/* Grille vidéo + choix */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Vidéo */}
            <div className="lg:sticky lg:top-28">
              <MotionVideo />
              <div className="mt-5 text-center lg:text-left">
                <h2 className="font-playfair text-xl sm:text-2xl font-semibold mb-1">
                  Découvrez L'Intendant en 45 secondes
                </h2>
                <p className="text-sm text-gray-600">
                  Une gestion complète, locale et exigeante de votre bien à Toulouse.
                </p>
              </div>
            </div>

            {/* Choix / formulaire / calendly */}
            <div className="space-y-5">
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
                  className="text-sm text-gray-500 hover:text-elegant-black transition-colors underline-offset-4 hover:underline"
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
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
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
      className="relative aspect-video w-full overflow-hidden rounded-2xl bg-elegant-black shadow-sm ring-1 ring-black/5"
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 px-6 text-center">
          <img
            src={VIDEO_POSTER_URL}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative">
            <p className="font-playfair text-2xl sm:text-3xl mb-2">Motion design</p>
            <p className="text-xs sm:text-sm text-white/60 max-w-xs">
              Renseignez <code className="px-1 bg-white/10 rounded">MOTION_VIDEO_URL</code> dans
              <code className="px-1 bg-white/10 rounded ml-1">src/routes/discutons.tsx</code>.
            </p>
          </div>
        </div>
      )}

      {MOTION_VIDEO_URL && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Lecture'}
            className="rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 grid place-items-center backdrop-blur transition"
          >
            {playing ? '❚❚' : '▶'}
          </button>
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Activer le son' : 'Couper le son'}
            className="rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 grid place-items-center backdrop-blur transition text-sm"
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
      className={`group rounded-2xl p-6 sm:p-8 shadow-sm ring-1 transition-all duration-300 hover:shadow-md ${
        isDark
          ? 'bg-elegant-black text-white ring-black/20'
          : 'bg-white ring-black/5'
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.2em] mb-3 ${
          isDark ? 'text-[#e9a89d]' : 'text-[#941101]'
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-3 leading-snug">
        {title}
      </h3>
      <p
        className={`text-sm sm:text-base font-light mb-5 leading-relaxed ${
          isDark ? 'text-white/80' : 'text-gray-600'
        }`}
      >
        {text}
      </p>
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 group-hover:translate-x-0.5 ${
          isDark
            ? 'bg-white text-elegant-black hover:bg-[#f5f1ea]'
            : 'bg-[#941101] text-white hover:bg-[#7a0d01]'
        }`}
      >
        {cta} <span aria-hidden>→</span>
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot
    if ((fd.get('website') as string)?.length) return;

    const errs: Record<string, string> = {};
    const required = ['nom', 'email', 'ville', 'type_bien', 'nombre_chambres', 'deja_en_lcd'];
    required.forEach((k) => {
      if (!fd.get(k)) errs[k] = 'Champ requis';
    });
    const email = (fd.get('email') as string) || '';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'E-mail invalide';
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // TODO: brancher l'envoi côté serveur dans une 2e étape (Cloud + Resend).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 text-center animate-[fade-in_0.5s_ease-out]">
        <p className="text-xs uppercase tracking-[0.2em] text-[#941101] mb-3">Merci</p>
        <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-3">
          Demande bien reçue
        </h3>
        <p className="text-gray-600 mb-6 font-light">
          Merci pour votre confiance. Nous allons étudier les informations concernant votre
          logement et revenir vers vous sous 48 heures.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onBack}
            className="px-5 py-3 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition"
          >
            Retour au site
          </button>
          <button
            onClick={onSwitchToRdv}
            className="px-5 py-3 rounded-lg bg-[#941101] text-white text-sm font-medium hover:bg-[#7a0d01] transition"
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
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/5 space-y-4"
      noValidate
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-playfair text-xl sm:text-2xl font-semibold">
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
      <Field label="Téléphone (facultatif)" name="telephone" type="tel" />
      <Field label="Ville ou quartier du bien" name="ville" error={errors.ville} required />

      <SelectField
        label="Type de bien"
        name="type_bien"
        error={errors.type_bien}
        required
        options={[
          'Studio',
          'Appartement 2 pièces',
          'Appartement 3 pièces et plus',
          'Maison / Villa',
          'Autre',
        ]}
      />

      <Field
        label="Nombre de chambres"
        name="nombre_chambres"
        type="number"
        min="0"
        error={errors.nombre_chambres}
        required
      />

      <fieldset>
        <legend className="text-sm font-medium mb-2">
          Êtes-vous déjà en location courte durée ?{' '}
          <span className="text-[#941101]">*</span>
        </legend>
        <div className="flex gap-4">
          {['Oui', 'Non'].map((v) => (
            <label key={v} className="flex items-center gap-2 text-sm">
              <input type="radio" name="deja_en_lcd" value={v} className="accent-[#941101]" />
              {v}
            </label>
          ))}
        </div>
        {errors.deja_en_lcd && (
          <p className="text-xs text-[#941101] mt-1">{errors.deja_en_lcd}</p>
        )}
      </fieldset>

      <div>
        <label className="block text-sm font-medium mb-1">Message (facultatif)</label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#941101] focus:ring-1 focus:ring-[#941101] outline-none"
        />
      </div>

      {/* Honeypot */}
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
        className="w-full rounded-lg bg-[#941101] text-white font-medium py-3 hover:bg-[#7a0d01] transition"
      >
        Recevoir mon estimation gratuite
      </button>
      <p className="text-xs text-center text-gray-500">
        Réponse sous 48 h · Sans engagement · Vos données restent confidentielles
      </p>

      <p className="text-[11px] text-gray-500 leading-relaxed pt-3 border-t border-gray-100">
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
      <label className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-[#941101]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#941101] focus:ring-1 focus:ring-[#941101] outline-none"
        {...rest}
      />
      {error && <p className="text-xs text-[#941101] mt-1">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} {required && <span className="text-[#941101]">*</span>}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white focus:border-[#941101] focus:ring-1 focus:ring-[#941101] outline-none"
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
      {error && <p className="text-xs text-[#941101] mt-1">{error}</p>}
    </div>
  );
}

/* ------------------------- Calendly ------------------------- */
function CalendlyBlock({ onBack }: { onBack: () => void }) {
  return (
    <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-playfair text-xl sm:text-2xl font-semibold">
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
        <div className="rounded-xl overflow-hidden ring-1 ring-black/5">
          <iframe
            src={CALENDLY_URL}
            title="Réserver un rendez-vous"
            className="w-full"
            style={{ height: 720, border: 0 }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-xl bg-[#f5f1ea] border border-dashed border-gray-300 p-8 text-center">
          <p className="text-sm text-gray-600">
            Renseignez <code className="px-1 bg-white rounded">CALENDLY_URL</code> dans
            <code className="px-1 bg-white rounded ml-1">src/routes/discutons.tsx</code> pour
            afficher le calendrier ici.
          </p>
        </div>
      )}
    </div>
  );
}
