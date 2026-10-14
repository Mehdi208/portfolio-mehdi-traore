import React, { useState } from 'react';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MakroButton } from '../ui/MakroButton';

// Validation schema with Zod
const contactSchema = z.object({
  fullName: z.string().min(2, 'Veuillez saisir votre nom complet (au moins 2 caractères).'),
  email: z.string().email('Veuillez renseigner une adresse email valide.'),
  phone: z.string().min(8, 'Veuillez renseigner un numéro de téléphone ou WhatsApp valide.'),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet.'),
  budget: z.string().min(1, 'Veuillez sélectionner une fourchette de budget.'),
  message: z.string().min(10, 'Votre message doit contenir au moins 10 caractères pour nous permettre de cerner votre besoin.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const { addAppointment } = useApp();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Site Web Vitrine / Landing Page',
    budget: '350.000 - 600.000 FCFA',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate with Zod
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Sync to local Admin appointments database immediately
      addAppointment({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
      });

      // 2. Transmit to Web3Forms via fetch (zero white screen)
      const web3FormsPayload = {
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Can be replaced by real key or webhook
        from_name: 'Portfolio Méhdi Traoré — Nouveau Lead',
        subject: `Nouveau projet de ${formData.fullName} (${formData.projectType})`,
        ...formData,
      };

      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(web3FormsPayload),
        });
      } catch (networkErr) {
        // Even if offline/network fails, the appointment is safely booked in local admin!
        console.warn('Web3Forms external dispatch note:', networkErr);
      }

      // 3. Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d9ff5c', '#1aff75', '#ffffff'],
      });

      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Site Web Vitrine / Landing Page',
        budget: '350.000 - 600.000 FCFA',
        message: '',
      });
    } catch (err: any) {
      setSubmitError('Une erreur inattendue est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#d9ff5c]/[0.025] blur-[160px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context & Contact info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#d9ff5c] mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Direct & Réservation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Donnons vie à votre projet.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/60 leading-relaxed">
              Remplissez le formulaire ci-contre pour m'expliquer vos objectifs. Je reviens vers vous sous 24h avec une proposition sur-mesure ou une date d'échange en visio.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#101828] border border-white/10 flex items-center justify-center text-[#d9ff5c]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-white/40 block">E-mail Professionnel</span>
                <a
                  href="mailto:traoremehdi38@gmail.com"
                  className="text-sm font-semibold text-white hover:text-[#d9ff5c] transition-colors"
                >
                  traoremehdi38@gmail.com
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#101828] border border-white/10 flex items-center justify-center text-[#d9ff5c]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-white/40 block">Téléphone / WhatsApp</span>
                <a
                  href="https://wa.me/2250789609672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-[#d9ff5c] transition-colors"
                >
                  +225 07 89 60 96 72
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#101828] border border-white/10 flex items-center justify-center text-[#d9ff5c]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-white/40 block">Localisation</span>
                <span className="text-sm font-semibold text-white">
                  Abidjan, Côte d'Ivoire • Disponible Monde
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#101828]/60 border border-white/10 text-xs text-white/60 space-y-2">
            <div className="flex items-center gap-2 text-[#d9ff5c] font-semibold">
              <Clock className="w-4 h-4" />
              <span>Engagement Réactivité 24h</span>
            </div>
            <p>
              Toutes les demandes reçues sont enregistrées en temps réel et traitées personnellement par Méhdi Traoré.
            </p>
          </div>
        </div>

        {/* Right Column: High-Fidelity Connected Form */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl bg-[#101828] border border-white/15 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d9ff5c]/10 text-[#d9ff5c] border border-[#d9ff5c]/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Demande transmise avec succès !
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  Merci pour votre confiance. Vos informations ont bien été enregistrées dans mon système de rendez-vous. Je vous recontacte très rapidement.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom complet */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ex: Jean-Philippe Kouassi"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c] transition-colors ${
                        errors.fullName ? 'border-red-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Adresse E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: contact@entreprise.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c] transition-colors ${
                        errors.email ? 'border-red-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Téléphone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Téléphone ou WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: +225 07 00 00 00 00"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c] transition-colors ${
                        errors.phone ? 'border-red-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Type de projet */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                      Type de projet *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d131f] border border-white/10 text-sm text-white focus:outline-none focus:border-[#d9ff5c] transition-colors"
                    >
                      <option value="Site Web Vitrine / Landing Page">
                        Site Web Vitrine / Landing Page
                      </option>
                      <option value="Web App / SaaS sur-mesure">
                        Web App / SaaS sur-mesure
                      </option>
                      <option value="Vidéos & Réseaux (TikTok, Reels)">
                        Vidéos & Réseaux (TikTok, Reels)
                      </option>
                      <option value="Identité Graphique & Direction Artistique">
                        Identité Graphique & Direction Artistique
                      </option>
                      <option value="Autre demande spécifique">
                        Autre demande spécifique
                      </option>
                    </select>
                  </div>
                </div>

                {/* Fourchette de budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Budget estimé *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d131f] border border-white/10 text-sm text-white focus:outline-none focus:border-[#d9ff5c] transition-colors"
                  >
                    <option value="200.000 - 350.000 FCFA">
                      200.000 - 350.000 FCFA
                    </option>
                    <option value="350.000 - 600.000 FCFA">
                      350.000 - 600.000 FCFA
                    </option>
                    <option value="600.000 - 1.500.000 FCFA">
                      600.000 - 1.500.000 FCFA
                    </option>
                    <option value="1.500.000 FCFA et plus">
                      1.500.000 FCFA et plus
                    </option>
                    <option value="Abonnement mensuel (CM / Maintenance)">
                      Abonnement mensuel (CM / Maintenance)
                    </option>
                  </select>
                </div>

                {/* Message détaillé */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-2">
                    Détails de votre besoin ou objectifs *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Présentez brièvement votre entreprise, vos objectifs de vente, les fonctionnalités souhaitées ou votre délai idéal..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d9ff5c] transition-colors ${
                      errors.message ? 'border-red-500/60' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <MakroButton
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    text={isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande de projet'}
                    className="w-full justify-center"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
