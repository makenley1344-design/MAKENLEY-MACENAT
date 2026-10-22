import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ShieldAlert, ShoppingBag, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Cloud } from 'lucide-react';

interface ExperienceSectionProps {
  images: {
    hbm: string;
    goldbay: string;
  };
  onOpenCloudinary: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ images, onOpenCloudinary }) => {
  const [expandedId, setExpandedId] = useState<string | null>('hbm-securite-incendie');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experiences" className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Expériences Professionnelles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Des résultats concrets sur le terrain et en entreprise
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Chaque mission a forgé des compétences opérationnelles fortes : la rigueur technique 
            et la résilience chez HBM, la vision de marque et le sens client chez Goldbay.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={exp.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
              >
                {/* Header Strip of the Experience */}
                <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    {/* Unboxed Metadata Line (No Pills) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="font-bold text-blue-900">{exp.company}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{exp.type}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-700">{exp.sector}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {exp.role} — <span className="text-slate-600">{exp.company}</span>
                    </h3>
                  </div>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shrink-0 self-start md:self-auto"
                  >
                    <span>{isExpanded ? "Réduire les détails" : "Voir tous les détails"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Main Content: Split with Visual Asset */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                  
                  {/* Left Column: Visual Asset */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[16/10] bg-slate-100 border border-slate-200 group">
                      {(() => {
                        const currentSrc = exp.id === 'hbm-securite-incendie' ? images.hbm : images.goldbay;
                        return (
                          <>
                            <button
                              type="button"
                              onClick={onOpenCloudinary}
                              className="absolute top-2.5 right-2.5 px-2 py-1 text-[11px] font-semibold text-white bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xs rounded-md shadow-xs flex items-center gap-1 transition-colors z-10"
                              title="Personnaliser via Cloudinary"
                            >
                              <Cloud className="w-3 h-3 text-blue-300" />
                              <span>Cloudinary</span>
                            </button>
                            <img 
                              src={currentSrc} 
                              alt={exp.imageAlt || exp.company}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                  target.parentElement.innerHTML = `
                                    <div class="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-white p-6 text-center">
                                      <span class="text-lg font-bold">${exp.company}</span>
                                      <span class="text-xs text-slate-300 mt-1">${exp.sector}</span>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </>
                        );
                      })()}
                      
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-[11px] font-medium text-white rounded">
                        {exp.sector}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Summary & Wins */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="text-slate-700 text-base leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Wins Box */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Points forts & enseignements clés :
                      </div>
                      <ul className="space-y-2">
                        {exp.keyWins.map((win, wIdx) => (
                          <li key={wIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                            <span>{win}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills tags rendered as clean unboxed text */}
                    <div className="pt-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-800">Compétences mobilisées : </span>
                      {exp.skillsApplied.join(' · ')}
                    </div>
                  </div>

                </div>

                {/* Expandable Full Detailed Missions */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 pt-4">
                      Détail exhaustif des missions réalisées :
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0 mt-2" aria-hidden="true" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
