import React from 'react';
import { MapPin, Mail, ArrowRight, ShieldCheck, Sparkles, Download, PhoneCall, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenPitch: () => void;
  onOpenPrintCV: () => void;
  onOpenCloudinary: () => void;
  portraitImage: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenPitch, 
  onOpenPrintCV,
  onOpenCloudinary,
  portraitImage
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Kicker (No Pill Enclosure) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <span className="text-slate-900 font-bold">{PERSONAL_INFO.school}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{PERSONAL_INFO.degree}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-blue-900 font-medium">Promo {PERSONAL_INFO.period}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              La vente commence par l'écoute, se bâtit sur la confiance.
            </h1>

            {/* Subheadline / Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Je m'appelle <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>. 
              Commercial terrain formé aux exigences du B2B et du marketing digital, j'allie le sens du contact direct, 
              la persévérance face aux objections et la maîtrise des outils numériques pour transformer chaque prise de contact 
              en relation d'affaires durable.
            </p>

            {/* Geographical Mobility & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium text-slate-800">
                <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-500">Mobilité : {PERSONAL_INFO.mobility}</span>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Proposer une opportunité</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPitch}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Pitch express en 60s</span>
              </button>

              <button
                onClick={onOpenPrintCV}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                title="Consulter le format CV standard"
              >
                <Download className="w-4 h-4" />
                <span>Consulter le CV</span>
              </button>
            </div>

            {/* Quiet Quick Contact Line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                <span>Discuter par téléphone</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Fidelity Editorial Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with Single Elevation */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-md aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] group">
                <button
                  type="button"
                  onClick={onOpenCloudinary}
                  className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xs rounded-md shadow-xs flex items-center gap-1.5 transition-colors z-10"
                  title="Gérer ou remplacer cette photo via Cloudinary"
                >
                  <Cloud className="w-3.5 h-3.5 text-blue-300" />
                  <span>Médias Cloudinary</span>
                </button>

                <img
                  src={portraitImage}
                  alt="Portrait professionnel de Makenley Macenat, commercial B2B"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback container
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-6 text-center">
                          <span class="text-3xl font-bold tracking-tight mb-2">MM</span>
                          <span class="text-sm font-semibold">${PERSONAL_INFO.name}</span>
                          <span class="text-xs text-slate-400 mt-1">${PERSONAL_INFO.headline}</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle bottom contextual gradient overlay with label */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent text-white">
                  <p className="text-sm font-bold tracking-tight">{PERSONAL_INFO.name}</p>
                  <p className="text-xs text-slate-300">{PERSONAL_INFO.headline}</p>
                </div>
              </div>

              {/* Subdued Context Highlight Box */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-900 font-semibold block mb-0.5">Expérience terrain concrète</strong>
                  14 mois de prospection B2B directe en protection incendie (HBM) et valorisation d'image de marque (Goldbay).
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Key Indicators Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              14 mois
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Prospection terrain B2B & sécurité
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              5 étapes
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Cycle de vente & méthode maîtrisée
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
              100 %
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Écoute, rigueur & suivi client
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Terrain + IA
            </div>
            <div className="text-xs font-medium text-slate-500 mt-1">
              Contact humain amplifié par le digital
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
