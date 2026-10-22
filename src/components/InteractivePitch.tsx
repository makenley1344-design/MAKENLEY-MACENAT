import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InteractivePitchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractivePitch: React.FC<InteractivePitchProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    {
      time: "00:00 - 00:15",
      title: "1. Qui suis-je ?",
      highlight: "Étudiant Bachelor Euridis & Commercial B2B",
      content: "Bonjour ! Je suis Makenley Macenat, étudiant en Bachelor Vente, Négociation et Marketing Digital à Euridis Business School. Mon objectif : devenir le commercial qui allie l'énergie de la prospection terrain, la rigueur de la négociation et l'agilité des outils digitaux."
    },
    {
      time: "00:15 - 00:30",
      title: "2. Mon expérience terrain",
      highlight: "14 mois de confrontation directe au marché B2B",
      content: "Chez HBM en protection incendie, j'ai sillonné le terrain en porte-à-porte auprès de chefs d'entreprise et d'industriels. J'y ai appris à encaisser les refus, diagnostiquer les obligations réglementaires et conclure des devis d'équipement de sécurité."
    },
    {
      time: "00:30 - 00:45",
      title: "3. La double compétence Vente & Marque",
      highlight: "Protection technique + Image & Marketing",
      content: "Chez Goldbay, j'ai contribué au développement commercial et à l'image de marque, y compris en tant que mannequin pour valoriser les produits. Cette expérience m'a appris qu'une vente réussie démarre toujours par la désirabilité et la confiance inspirée."
    },
    {
      time: "00:45 - 01:00",
      title: "4. Ce que je vous apporte demain",
      highlight: "Persévérance, méthode en 5 étapes & force de frappe",
      content: "Je ne vends pas pour vendre : je découvre les vrais besoins, je défends la valeur sans casser les prix, et j'assure un suivi irréprochable. Prêt à enrichir vos opportunités commerciales, rencontrons-nous !"
    }
  ];

  // Auto-play timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev < slides.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen, slides.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pitch-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="pitch-title" className="text-base font-bold text-slate-900">
                Mon Pitch Express en 60 secondes
              </h3>
              <p className="text-xs text-slate-500">
                Synthèse pour recruteurs et managers commerciaux
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="grid grid-cols-4 gap-1 p-3 bg-slate-50 border-b border-slate-100">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                setIsPlaying(false);
              }}
              className="h-1.5 rounded-full overflow-hidden bg-slate-200 transition-colors"
              title={slide.title}
            >
              <div 
                className={`h-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-blue-900 w-full' 
                    : idx < currentSlide 
                    ? 'bg-blue-900/60 w-full' 
                    : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>{slides[currentSlide].time}</span>
            <span className="font-semibold text-blue-900 uppercase">Étape {currentSlide + 1}/4</span>
          </div>

          <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
            {slides[currentSlide].title}
          </h4>

          <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs font-semibold text-blue-950">
            {slides[currentSlide].highlight}
          </div>

          <p className="text-base text-slate-700 leading-relaxed font-normal pt-1">
            {slides[currentSlide].content}
          </p>
        </div>

        {/* Player Controls & Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "Pause" : "Lecture auto"}</span>
            </button>

            <button
              onClick={() => {
                setCurrentSlide(0);
                setIsPlaying(false);
              }}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors"
              title="Recommencer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {currentSlide < slides.length - 1 ? (
              <button
                onClick={() => {
                  setCurrentSlide(prev => prev + 1);
                  setIsPlaying(false);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Suivant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors"
              >
                <span>Échanger avec Makenley</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
