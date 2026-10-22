import React from 'react';
import { X, Printer, Download, Mail, MapPin, Phone, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SALES_METHOD_STEPS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-2xl border border-slate-300 shadow-2xl max-w-4xl w-full my-auto overflow-hidden flex flex-col max-h-[95vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <h3 id="cv-modal-title" className="text-sm font-bold">
              Format CV Imprimable — Makenley Macenat
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / Enregistrer en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-white text-slate-900 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm sm:text-base font-bold text-blue-900">
                {PERSONAL_INFO.headline}
              </div>
              <div className="text-xs text-slate-600">
                {EDUCATION.school} · {EDUCATION.degree} ({EDUCATION.period})
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold text-slate-900">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="text-slate-500">
                Mobilité : {PERSONAL_INFO.mobility}
              </div>
            </div>
          </div>

          {/* Profil Professionnel */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Profil & Objectif
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.presentation} Fort de 14 mois de prospection directe B2B dans le secteur exigeant de la sécurité incendie (HBM) et d'une contribution commerciale et d'image pour la marque Goldbay, j'intègre Euridis Business School en Bachelor Vente, Négociation et Marketing Digital pour créer des opportunités concrètes et développer un portefeuille clients pérenne.
            </p>
          </div>

          {/* Expériences Professionnelles */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Expériences Professionnelles
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm font-bold text-slate-900">
                    {exp.role} — <span className="text-blue-900">{exp.company}</span>
                    <span className="text-xs font-normal text-slate-500 ml-2">({exp.sector})</span>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {exp.period} · {exp.type}
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 leading-relaxed pl-1">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="leading-snug">
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Méthode de Travail Commerciale */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Méthodologie Commerciale en 5 Étapes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
              {SALES_METHOD_STEPS.map((s) => (
                <div key={s.number} className="p-2 rounded bg-slate-50 border border-slate-200">
                  <div className="font-bold text-blue-900">{s.number}. {s.title}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5 leading-tight">{s.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Formation & Compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Formation
              </h2>
              <div className="text-xs space-y-1">
                <div className="font-bold text-slate-900">{EDUCATION.degree}</div>
                <div className="text-blue-900 font-semibold">{EDUCATION.school} · {EDUCATION.period}</div>
                <p className="text-slate-600 text-[11px] leading-relaxed pt-1">
                  Vente complexe B2B, négociation stratégique, prospection omnicanale, marketing digital & data CRM.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Compétences Clés
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <div><strong>Terrain & B2B :</strong> Prospection directe, identification décideurs, études de site.</div>
                <div><strong>Négociation :</strong> Méthodes SPIN & CAB, traitement des objections, closing.</div>
                <div><strong>Digital :</strong> Outils IA pour la prospection, CRM, marketing & image de marque.</div>
                <div><strong>Atouts :</strong> Écoute active, persévérance, rigueur de suivi et autonomie.</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="no-print p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Pour toute question ou opportunité : {PERSONAL_INFO.email}</span>
          <button
            onClick={handlePrint}
            className="text-blue-900 font-bold hover:underline"
          >
            Lancer l'impression
          </button>
        </div>

      </div>

    </div>
  );
};
