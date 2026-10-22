import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrintCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrintCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <a href="#" className="text-lg font-bold tracking-tight text-slate-900">
              {PERSONAL_INFO.name}
            </a>
            <p className="text-xs text-slate-500 mt-1">
              {PERSONAL_INFO.headline} · {PERSONAL_INFO.school}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
            <a href="#parcours" className="hover:text-slate-900 transition-colors">Parcours</a>
            <a href="#methode" className="hover:text-slate-900 transition-colors">Méthode</a>
            <a href="#experiences" className="hover:text-slate-900 transition-colors">Expériences</a>
            <a href="#vision" className="hover:text-slate-900 transition-colors">Vision</a>
            <a href="#competences" className="hover:text-slate-900 transition-colors">Compétences</a>
            <button 
              onClick={onOpenPrintCV}
              className="hover:text-slate-900 transition-colors underline underline-offset-4"
            >
              CV Imprimable
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors self-end md:self-auto"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-3">
            <span>{PERSONAL_INFO.location}</span>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-600 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
