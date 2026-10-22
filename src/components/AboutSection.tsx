import React from 'react';
import { Target, Users, TrendingUp, Cpu, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: "Prospection & Terrain",
      text: "Capacité démontrée à aller chercher les opportunités là où elles sont, en démarchage physique B2B comme par téléphone."
    },
    {
      icon: Users,
      title: "Écoute Active & Découverte",
      text: "Diagnostiquer avant de prescrire. Poser les questions percutantes pour révéler les besoins profonds et les contraintes réelles."
    },
    {
      icon: TrendingUp,
      title: "Négociation & Closing",
      text: "Savoir traiter les objections, argumenter sur les bénéfices concrets et bâtir un accord équilibré qui préserve la valeur."
    },
    {
      icon: Cpu,
      title: "Digital & Outils IA",
      text: "Exploitation de l'IA générative et des outils modernes pour qualifier les prospects et structurer les données sans perdre l'empathie humaine."
    }
  ];

  return (
    <section id="parcours" className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Présentation & Parcours
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Un tempérament commercial forgé sur le terrain
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            De la protection incendie technique au secteur de la mode et de l'image, 
            mon parcours combine rigueur réglementaire, sens du contact et vision stratégique.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Detailed Biography Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <p className="text-lg font-medium text-slate-900 leading-relaxed">
              « Mon parcours s'articule autour du commerce, de la prospection et de la relation client. 
              Mon expérience sur le terrain m'a permis de développer une approche concrète de la vente, 
              de la prise de contact jusqu'au suivi client. »
            </p>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Award className="w-4 h-4 text-blue-900" />
                <span>Ce qui me caractérise en entreprise</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Résilience sur le terrain :</strong> Ne jamais baisser les bras face au refus et transformer chaque objection en levier de compréhension.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sens du résultat & rigueur :</strong> Planification des tournées, tenue des engagements et organisation millimétrée du fichier prospect.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Posture consultative :</strong> Être perçu comme un apporteur de solutions sécurisantes et rentables, jamais comme un vendeur insistant.</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-600">
              Actuellement en préparation du <strong>Bachelor Vente, Négociation et Marketing Digital</strong> à <strong>Euridis Business School</strong>, 
              je perfectionne les techniques de négociation grands comptes, l'inbound marketing et le social selling 
              pour accompagner les entreprises dans l'accélération de leur croissance.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-11">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
