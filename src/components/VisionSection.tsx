import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeartHandshake, Eye, Sparkles, Brain, Check, ShieldCheck } from 'lucide-react';

export const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Philosophie Commerciale
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Ma vision de la vente
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Une approche éthique et pérenne où l'humain reste au centre, 
            épaulé par la précision des technologies modernes.
          </p>
        </div>

        {/* Featured Quote Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-12 shadow-md">
          <blockquote className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed italic border-l-2 border-blue-400 pl-4 sm:pl-6">
            « Pour moi, la vente ne consiste pas simplement à vendre un produit ou un service. 
            Elle consiste à <strong className="text-white font-semibold not-italic">comprendre un besoin</strong>, 
            à <strong className="text-white font-semibold not-italic">instaurer une relation de confiance</strong> et 
            à <strong className="text-white font-semibold not-italic">apporter une solution pertinente</strong>. »
          </blockquote>
          <div className="mt-4 pl-4 sm:pl-6 text-xs text-slate-400 font-medium">
            — Makenley Macenat · Vision de la relation client
          </div>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PERSONAL_INFO.visionPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors"
            >
              <div className="text-xs font-mono text-blue-400 font-bold mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Role of AI & Digital Tools Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/90 border border-blue-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                <Brain className="w-4 h-4" />
                <span>Le rôle de l'IA & du digital dans mon quotidien commercial</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Multiplier la productivité sans déshumaniser l'échange
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                J'utilise l'intelligence artificielle pour préparer mes rendez-vous, synthétiser les enjeux sectoriels des entreprises cibles, 
                structurer les comptes-rendus de prospection et enrichir le CRM. 
                Mais face au client, c'est l'empathie, le regard et la parole tenue qui scellent la signature.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-700 pt-4 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Qualification pré-terrain accélérée</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hygiène et actualisation des données CRM</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% de temps utile réinvesti en face-à-face</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
