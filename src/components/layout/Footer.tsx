import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Phone, Mail, ArrowUpRight, Shield } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070709] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d9ff5c]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              Concepteur Web & Créatif Digital. Je conçois des expériences digitales qui captivent & convertissent : sites vitrines, applications SaaS, création de contenu vidéo et identités de marque.
            </p>
            <div className="pt-2">
              <Badge text="Disponible pour de nouvelles missions" />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-white/70 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#piliers" className="text-white/70 hover:text-white transition-colors">
                  Les 4 Piliers
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-white/70 hover:text-white transition-colors">
                  Showcase interactif
                </a>
              </li>
              <li>
                <Link to="/projets" className="text-[#d9ff5c] hover:underline flex items-center gap-1">
                  Catalogue Projets <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a href="#tarifs" className="text-white/70 hover:text-white transition-colors">
                  Formules & Tarifs
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  Questions fréquentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Coordonnées */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact Direct
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:traoremehdi38@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-[#d9ff5c] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#d9ff5c]" />
                  <span>traoremehdi38@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250789609672"
                  className="flex items-center gap-2 text-white/70 hover:text-[#d9ff5c] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d9ff5c]" />
                  <span>+225 07 89 60 96 72</span>
                </a>
              </li>
              <li className="text-xs text-white/40 pt-1">
                Abidjan, Côte d'Ivoire & Missions à l'International
              </li>
              <li className="pt-2">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors bg-white/5 px-2.5 py-1 rounded-md border border-white/5 hover:border-white/10"
                >
                  <Shield className="w-3.5 h-3.5 text-[#d9ff5c]" />
                  <span>Espace Administrateur</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Méhdi Traoré. Tous droits réservés.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/2250789609672"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d9ff5c] hover:underline"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
