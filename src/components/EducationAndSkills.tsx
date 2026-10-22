import React from 'react';
import { EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import { GraduationCap, BookOpen, Check, Award, Compass } from 'lucide-react';

export const EducationAndSkills: React.FC = () => {
  return (
    <section id="competences" className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Formation & Compétences
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Socle académique & boîte à outils opérationnelle
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Un cursus sélectif dédié aux métiers de la vente complexe, complété par 
            une pratique quotidienne des techniques de négociation et des outils digitaux.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 mb-16 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Grande École de Commerce B2B</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {EDUCATION.degree}
              </h3>
              <div className="text-sm font-semibold text-slate-700">
                {EDUCATION.school} · <span className="text-slate-500 font-normal">{EDUCATION.period}</span>
              </div>
            </div>

            <div className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 self-start">
              Cycle Professionnalisant
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 text-sm text-slate-600 leading-relaxed">
              {EDUCATION.description}
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Enseignements & compétences développées :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDUCATION.modules.map((module, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/60">
                    <Check className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Skill Categories Grid */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Matrice des compétences
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 min-h-[32px]">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" aria-hidden="true" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-mono">
                  Pratique confirmée
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
