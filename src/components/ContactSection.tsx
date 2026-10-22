import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Download, Building } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    recruiterName: '',
    company: '',
    opportunityType: "Alternance / Opportunité commerciale",
    customMessage: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${PERSONAL_INFO.name}
N:Macenat;Makenley;;;
TITLE:Commercial B2B & Négociation
ORG:Euridis Business School
EMAIL;TYPE=INTERNET,WORK:${PERSONAL_INFO.email}
ADR;TYPE=WORK:;;Dreux / Vernouillet;Eure-et-Loir;28;France
NOTE:Étudiant en Bachelor Vente, Négociation et Marketing Digital. Expérience HBM et Goldbay.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Makenley_Macenat_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(`[Opportunité] ${formData.opportunityType} - ${formData.company || 'Échange professionnel'}`);
    const bodyContent = `Bonjour Makenley,

Je vous contacte suite à la consultation de votre portfolio.

Entreprise : ${formData.company || 'Non renseignée'}
Contact : ${formData.recruiterName || 'Non renseigné'}
Type d'opportunité : ${formData.opportunityType}

Message :
${formData.customMessage || "Nous souhaitons échanger avec vous concernant vos compétences en prospection B2B et négociation commerciale."}

Bien cordialement,
${formData.recruiterName || ''}`;

    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
            Contact & Disponibilité
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Créons ensemble de nouvelles opportunités
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Vous recherchez un profil engagé, résilient sur le terrain et doté d'une vraie méthodologie de vente ? 
            Échangeons dès maintenant sur vos projets commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Coordinates & vCard */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Coordonnées directes
              </h3>

              <div className="space-y-4">
                {/* Email item */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Adresse e-mail</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-md transition-colors shrink-0"
                    title="Copier l'e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Localisation & Périmètre</div>
                    <div className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.location}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{PERSONAL_INFO.mobility}</div>
                  </div>
                </div>

                {/* School item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Formation en cours</div>
                    <div className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.school}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{PERSONAL_INFO.degree} ({PERSONAL_INFO.period})</div>
                  </div>
                </div>
              </div>

              {/* vCard Download Button */}
              <button
                onClick={handleDownloadVCard}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Enregistrer le contact (vCard .vcf)</span>
              </button>

            </div>

            {/* Quick response commitment */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-950 leading-relaxed">
              <strong className="font-semibold block mb-1">Engagement de réactivité</strong>
              Réponse garantie sous 24h pour toute proposition relative à un poste, une alternance ou une opportunité commerciale.
            </div>

          </div>

          {/* Right Column: Proposal & Message Builder */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Envoyer une proposition ou un message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Ce formulaire prépare votre courriel prêt à l'envoi directement vers {PERSONAL_INFO.email}.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Votre nom / Titre
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Alexandre Dubois (Directeur Commercial)"
                      value={formData.recruiterName}
                      onChange={(e) => setFormData({ ...formData, recruiterName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Groupe B2B Solutions"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Objet de la prise de contact
                  </label>
                  <select
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-all text-slate-900"
                  >
                    <option value="Alternance / Opportunité commerciale">Opportunité en Alternance / Poste commercial</option>
                    <option value="Entretien d'embauche">Proposition d'entretien</option>
                    <option value="Échange téléphonique informel">Échange téléphonique informel sur le parcours</option>
                    <option value="Mission de prospection ou marketing">Projet de développement commercial ou marketing</option>
                    <option value="Autre demande">Autre demande professionnelle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Votre message ou précision sur le poste
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez ici les détails du poste, vos attentes commerciales ou vos disponibilités..."
                    value={formData.customMessage}
                    onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={buildMailtoUrl()}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ouvrir dans votre messagerie</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                    <span>{copiedEmail ? "Email copié !" : "Copier l'email"}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
