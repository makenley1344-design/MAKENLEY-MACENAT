import React, { useState } from 'react';
import { SALES_METHOD_STEPS } from '../data/portfolioData';
import { CheckCircle2, MessageSquareQuote, Wrench, ShieldAlert, ShoppingBag, Briefcase, ChevronRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState<'hbm' | 'goldbay' | 'b2b'>('hbm');

  const activeStep = SALES_METHOD_STEPS[activeStepIndex];

  // Specific scenario practical applications
  const scenarioData = {
    hbm: {
      title: "Cas Réel : Protection Incendie B2B (HBM)",
      icon: ShieldAlert,
      badge: "Secteur Technique & Réglementaire",
      context: "Démarchage terrain d'un gérant de PME ou commerce assujetti aux normes ERP/ERT.",
      stepsDetail: [
        "Repérage des bâtiments industriels et commerces sans certificat récent. Prise de contact direct à l'accueil avec le responsable des locaux.",
        "Visite de sécurité : inspection du nombre d'extincteurs, validité de la vérification annuelle, éclairage BAES fonctionnel.",
        "Présentation du pack de mise en conformité immédiate avec rapport clair pour leur compagnie d'assurance.",
        "Réponse aux réticences budgétaires en rappelant le risque légal de fermeture administrative et le coût nul comparé à un sinistre.",
        "Signature du bon de commande, planification de la pose par les techniciens et enregistrement de la date de visite annuelle."
      ]
    },
    goldbay: {
      title: "Cas Réel : Marque & Distribution (Goldbay)",
      icon: ShoppingBag,
      badge: "Mode, Retail & Partenariats",
      context: "Développement de la notoriété et commercialisation des collections textiles auprès d'une communauté et de boutiques.",
      stepsDetail: [
        "Identification des influenceurs clés, concept-stores et cibles adeptes de streetwear qualitatif.",
        "Échange sur les attentes en matière de coupe, matières durables et positionnement tarifaire.",
        "Mise en scène des vêtements portés (shooting/mannequinat) démontrant la qualité des finitions et le tombé du tissu.",
        "Négociation des conditions de dépôt-vente, volumes de commande initiale et marge distributeur.",
        "Suivi des ventes, réassort rapide et fidélisation par des avant-premières sur les nouvelles collections."
      ]
    },
    b2b: {
      title: "Cas Prospective : Négociation Grands Comptes & Tech (Euridis)",
      icon: Briefcase,
      badge: "Vente Consultative B2B",
      context: "Vente de solutions de transformation ou services B2B à cycles de décision plus longs.",
      stepsDetail: [
        "Recherche approfondie sur LinkedIn & registre légal pour identifier les décideurs C-Level (DG, DAF, DSI).",
        "Rendez-vous de cadrage SPIN Selling pour chiffrer l'impact financier de leurs points de douleur actuels.",
        "Co-construction d'un business case personnalisé avec calcul précis du retour sur investissement (ROI).",
        "Négociation de la valeur : alignement des parties prenantes, gestion des clauses contractuelles et jalons de déploiement.",
        "Onboarding soigné, revue trimestrielle de performance (QBR) et expansion du compte vers d'autres filiales."
      ]
    }
  };

  const currentScenario = scenarioData[selectedScenario];

  return (
    <section id="methode" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Méthodologie Commerciale
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Le cycle de vente en 5 étapes structurées
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            La vente n'est pas une improvisation : c'est un processus rigoureux et reproductible 
            qui garantit la qualification de chaque opportunité et la satisfaction du client.
          </p>
        </div>

        {/* Step Selector Tabs (Zero-Pill, Segmented Bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-slate-200/70 rounded-xl mb-8">
          {SALES_METHOD_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`py-3 px-3 rounded-lg text-left transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                }`}
              >
                <div className="text-[11px] font-mono tracking-wider uppercase text-slate-400">
                  Étape {step.number}
                </div>
                <div className="text-sm truncate">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Step Narrative & Field Tactics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-blue-900 font-mono">
                  {activeStep.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeStep.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {activeStep.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-base">
                {activeStep.description}
              </p>

              {/* Field Tactics List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Mes actions concrètes sur le terrain :
                </div>
                <ul className="space-y-2.5">
                  {activeStep.fieldTactics.map((tactic, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Employed */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-slate-500" />
                  Outils & techniques :
                </span>
                {activeStep.toolsUsed.map((tool, i) => (
                  <span key={i} className="text-slate-600">
                    {i > 0 && <span className="text-slate-300 mx-1.5">·</span>}
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Quote / Key Phrasing on the field */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <MessageSquareQuote className="w-4 h-4 text-blue-900" />
                <span>Exemple de posture terrain</span>
              </div>
              
              <blockquote className="text-sm italic text-slate-800 leading-relaxed border-l-2 border-blue-900 pl-3">
                {activeStep.keyQuestionOrPitch}
              </blockquote>

              <p className="text-xs text-slate-500 leading-relaxed pt-2">
                Une formulation soignée permet de déverrouiller la discussion, 
                de désamorcer les réflexes défensifs et d'engager le prospect dans une relation collaborative.
              </p>

              <div className="pt-2 flex justify-between items-center text-xs">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : SALES_METHOD_STEPS.length - 1))}
                  className="text-slate-600 hover:text-slate-900 font-medium py-1 px-2 rounded hover:bg-slate-200 transition-colors"
                >
                  ← Étape précédente
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < SALES_METHOD_STEPS.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1 text-blue-900 hover:text-blue-950 font-bold py-1 px-2 rounded hover:bg-blue-100/50 transition-colors"
                >
                  <span>Étape suivante</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Scenario Explorer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Playbook Pratique
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Application de la méthode selon le secteur
              </h4>
            </div>

            {/* Scenario buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setSelectedScenario('hbm')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedScenario === 'hbm'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sécurité B2B (HBM)
              </button>
              <button
                onClick={() => setSelectedScenario('goldbay')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedScenario === 'goldbay'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mode & Retail (Goldbay)
              </button>
              <button
                onClick={() => setSelectedScenario('b2b')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  selectedScenario === 'b2b'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grands Comptes B2B
              </button>
            </div>
          </div>

          {/* Scenario Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                <currentScenario.icon className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900">
                  {currentScenario.title}
                </h5>
                <p className="text-xs text-slate-500">
                  {currentScenario.context}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
              {currentScenario.stepsDetail.map((detail, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                  <div className="font-bold text-blue-900 mb-1">
                    0{idx + 1}. {SALES_METHOD_STEPS[idx].title}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
