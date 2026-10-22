import { Experience, MethodStep, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Makenley Macenat",
  headline: "Commercial B2B · Négociation & Prospection Terrain",
  subheadline: "Étudiant en Bachelor Vente, Négociation & Marketing Digital à Euridis Business School",
  school: "Euridis Business School",
  degree: "Bachelor Vente, Négociation et Marketing Digital",
  period: "2026 – 2027",
  location: "Dreux / Vernouillet, Eure-et-Loir (28)",
  mobility: "Eure-et-Loir (28), Île-de-France & Région Centre",
  email: "makenley1344@gmail.com",
  phone: "+33 6 00 00 00 00", // placeholder format with user-friendly copy/edit note
  linkedin: "https://www.linkedin.com",
  status: "À la recherche d'opportunités en développement commercial B2B",
  presentation: "Mon parcours s'articule autour du commerce, de la prospection et de la relation client. Mon expérience sur le terrain m'a permis de développer une approche concrète de la vente, de la prise de contact jusqu'au suivi client.",
  detailedBio: [
    "Chez HBM, dans le secteur exigeant de la protection incendie, j'ai appris à prospecter des professionnels en porte-à-porte B2B, à identifier leurs obligations réglementaires et à leur proposer des solutions techniques sur-mesure (extincteurs, alarmes, BAES, RIA).",
    "J'ai également participé au développement commercial et marketing de Goldbay, une marque de vêtements, en contribuant activement à son image, à sa visibilité sur les réseaux et à la mise en valeur des produits par du mannequinat éditorial.",
    "Aujourd'hui, au sein d'Euridis Business School, je renforce mes compétences en négociation complexe, en développement commercial stratégique et en marketing digital afin d'être un commercial agile, capable de créer des opportunités pérennes et de développer durablement un portefeuille clients."
  ],
  visionPillars: [
    {
      title: "Comprendre avant de vendre",
      desc: "La vente ne consiste pas à imposer une offre, mais à décrypter un besoin profond, instaurer un climat de confiance réciproque et apporter une solution réellement pertinente."
    },
    {
      title: "Écoute active & persévérance",
      desc: "Chaque refus sur le terrain est une information. Le succès commercial repose sur la résilience, la rigueur du suivi et la loyauté envers les engagements pris avec le client."
    },
    {
      title: "L'IA et le Digital comme multiplicateurs",
      desc: "Les outils numériques et l'intelligence artificielle décuplent la prospection, structurent les données et optimisent le temps, sans jamais remplacer la sincérité du contact humain."
    }
  ]
};

export const SALES_METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "Prospecter",
    subtitle: "Cibler avec acuité & initier le premier contact",
    description: "Identifier les entreprises et les interlocuteurs décideurs pertinents, cartographier les secteurs géographiques et déclencher une prise de contact engageante.",
    fieldTactics: [
      "Cartographie géographique et sectorielle pour optimiser les tournées terrain.",
      "Identification des décideurs clés (Gérants, Responsables Sécurité, Directeurs Généraux).",
      "Approche directe en porte-à-porte ou phoning avec un pitch d'accroche percutant."
    ],
    keyQuestionOrPitch: "« Bonjour, je réalise une tournée de veille sécurité sur la zone artisanale : quand avez-vous effectué votre dernier contrôle réglementaire de conformité ? »",
    toolsUsed: ["Prospection terrain B2B", "Google Maps / Cadastre d'entreprises", "Téléphone & scripts ciblés"]
  },
  {
    number: "02",
    title: "Découvrir",
    subtitle: "Écouter activement & cartographier les besoins réels",
    description: "Poser les bonnes questions pour comprendre les impératifs, les contraintes budgétaires, les risques réglementaires et les attentes réelles du client.",
    fieldTactics: [
      "Questionnement ouvert (méthodes SPIN Selling & SONCAS) pour faire émerger les points de douleur.",
      "Visite et audit in situ des locaux, comptage des équipements et détection des failles.",
      "Prise de notes rigoureuse des besoins spécifiques de l'interlocuteur."
    ],
    keyQuestionOrPitch: "« Quels sont vos plus grands défis actuels concernant la mise aux normes de votre établissement et l'accueil sécurisé de vos salariés et visiteurs ? »",
    toolsUsed: ["Méthode SPIN", "Audit terrain sur tablette/carnet", "Écoute active"]
  },
  {
    number: "03",
    title: "Argumenter",
    subtitle: "Présenter une solution sur-mesure & valoriser ses bénéfices",
    description: "Démontrer la valeur concrète de l'offre en traduisant chaque caractéristique technique en gain tangible de sécurité, de sérénité ou de rentabilité pour l'entreprise.",
    fieldTactics: [
      "Application de la méthode CAB (Caractéristiques · Avantages · Bénéfices concrets pour l'entreprise).",
      "Démonstration de conformité légale (normes ERP, Code du Travail, exigences d'assurance).",
      "Projection claire sur l'installation, les délais d'intervention et le calendrier."
    ],
    keyQuestionOrPitch: "« En installant ces extincteurs à eau pulvérisée et ce bloc BAES connecté, vous sécurisez immédiatement votre certificat d'assurance tout en évitant toute sanction administrative. »",
    toolsUsed: ["Méthode CAB", "Devis chiffré sur-mesure", "Fiches techniques produits"]
  },
  {
    number: "04",
    title: "Négocier",
    subtitle: "Traiter les objections & co-construire un accord équilibré",
    description: "Accueillir chaque objection avec bienveillance, défendre la valeur ajoutée sans brader le prix et chercher une solution gagnant-gagnant équilibrée.",
    fieldTactics: [
      "Isolement et reformulation des objections (prix, délais, contrat existant).",
      "Mise en balance du coût de l'inaction (risques d'amende, fermeture, incendie non couvert).",
      "Défense de la marge par l'apport de services additionnels (formation, maintenance prioritaire)."
    ],
    keyQuestionOrPitch: "« Je comprends votre vigilance budgétaire. Si nous échelonnons la révision de votre parc sur deux phases avec le contrat de maintenance inclus, pouvons-nous valider aujourd'hui ? »",
    toolsUsed: ["Matrice de traitement des objections", "Négociation raisonnée", "Calcul de TCO (Coût global)"]
  },
  {
    number: "05",
    title: "Conclure & Fidéliser",
    subtitle: "Sécuriser le closing & bâtir une relation pérenne",
    description: "Concrétiser la vente au bon moment, assurer un suivi d'exécution impeccable et entretenir un contact régulier pour générer du réachat et des recommandations.",
    fieldTactics: [
      "Signature du bon de commande ou devis avec validation des dates d'installation.",
      "Appel de courtoisie post-installation à J+7 pour vérifier la parfaite satisfaction.",
      "Planification anticipée des visites de vérification annuelle et demande active de recommandation."
    ],
    keyQuestionOrPitch: "« Tout est conforme à vos attentes. Je programme dès maintenant notre point de contrôle semestriel dans votre agenda pour que vous n'ayez plus jamais à vous soucier de ces dates. »",
    toolsUsed: ["Suivi CRM", "Relance proactive", "Programme de parrainage / réseau local"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "hbm-securite-incendie",
    role: "Commercial Terrain B2B",
    company: "HBM",
    period: "Octobre 2024 – Novembre 2025",
    type: "Alternance (14 mois)",
    sector: "Protection Incendie & Sécurité des Entreprises",
    summary: "Prospection terrain intensive auprès des professionnels (PME, commerces, industries), audits de conformité réglementaire, commercialisation d'équipements de sécurité incendie et fidélisation de portefeuille.",
    bullets: [
      "Prospection commerciale B2B active auprès des professionnels, menée en face-à-face et organisée par secteurs géographiques définis.",
      "Identification précise des besoins et des obligations légales des entreprises en matière de sécurité et de conformité incendie (ERP, ERT).",
      "Présentation et commercialisation d'une gamme complète de solutions : extincteurs (eau, poudre, CO2), alarmes incendie type 4, BAES (éclairage de sécurité) et RIA (robinets d'incendie armés).",
      "Prise de rendez-vous qualifiés, réalisation des relevés techniques sur site et établissement de devis chiffrés sur-mesure.",
      "Participation active au suivi commercial, à la coordination de mise en conformité des installations et à la fidélisation durable des clients.",
      "Accompagnement continu des clients tout au long du cycle de vente : de la première prise de contact jusqu'au service après-vente et renouvellement."
    ],
    keyWins: [
      "Déploiement méthodique d'un secteur géographique complet en démarchage direct.",
      "Maîtrise des normes strictes de sécurité incendie et du Code du Travail.",
      "Forte capacité de résilience et d'adaptation aux interlocuteurs exigeants (chefs d'entreprise, directeurs d'usine, commerçants)."
    ],
    skillsApplied: [
      "Prospection physique B2B",
      "Négociation en face-à-face",
      "Audit de conformité ERP/ERT",
      "Élaboration de devis",
      "Gestion des objections",
      "Suivi client & SAV"
    ],
    imagePath: "/src/assets/images/fire_safety_b2b_1792678691643.jpg",
    imageAlt: "Contrôle technique et équipement de sécurité incendie en entreprise",
    badge: "Protection Incendie B2B"
  },
  {
    id: "goldbay-fashion",
    role: "Commercial et Marketing",
    company: "Goldbay",
    period: "Expérience pratique",
    type: "Développement & Image",
    sector: "Mode & Prêt-à-porter",
    summary: "Développement commercial de la marque, promotion des collections, contribution à la stratégie marketing, visibilité digitale et activité de mannequin pour valoriser l'univers de la marque.",
    bullets: [
      "Participation active au développement commercial de la marque et à la conquête de nouveaux clients et prescripteurs.",
      "Contribution aux actions de marketing opérationnel et à la mise en valeur attractive des pièces et collections.",
      "Participation structurée à la création de l'image de marque (branding, ton de communication, univers visuel) et au développement de sa visibilité.",
      "Activité de mannequin pour incarner la marque, présenter et sublimer les vêtements lors de séances photo et supports de communication.",
      "Contribution continue à la promotion des produits, à l'animation des canaux digitaux et au renforcement de l'attractivité générale de la marque."
    ],
    keyWins: [
      "Double regard commercial et créatif : comprendre le produit pour mieux le vendre.",
      "Valorisation directe de l'offre auprès de la communauté et clients cibles.",
      "Développement de compétences en marketing digital, storytelling de marque et communication visuelle."
    ],
    skillsApplied: [
      "Marketing opérationnel & digital",
      "Storytelling & Branding",
      "Mise en valeur produit",
      "Mannequinat & Présentation",
      "Relation client & Ambassadeur",
      "Développement commercial"
    ],
    imagePath: "/src/assets/images/goldbay_fashion_1792678691429.jpg",
    imageAlt: "Showroom et studio de présentation de la marque Goldbay",
    badge: "Mode & Marketing Digital"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Commercial & Terrain",
    description: "Force de frappe opérationnelle sur le terrain et en B2B",
    skills: [
      "Prospection physique en face-à-face",
      "Phoning & qualification de fichiers",
      "Organisation des tournées par zone",
      "Audits de besoins in situ",
      "Gestion du non et résilience terrain",
      "Vente consultative technique"
    ]
  },
  {
    title: "Négociation & Closing",
    description: "Techniques de persuasion éthique et défense de la valeur",
    skills: [
      "Méthode SPIN Selling & SONCAS",
      "Argumentation CAB (Bénéfices concrets)",
      "Traitement systématique des objections",
      "Défense des marges & conditions",
      "Closing assertif et bienveillant",
      "Fidélisation & contrats pluriannuels"
    ]
  },
  {
    title: "Digital, Outils & IA",
    description: "Leviers modernes pour amplifier l'efficacité commerciale",
    skills: [
      "Organisation et hygiène des données CRM",
      "Exploitation de l'IA pour la prospection",
      "Social Selling & visibilité LinkedIn",
      "Marketing digital & stratégie de marque",
      "Génération de leads qualifiés",
      "Automatisation des relances commerciales"
    ]
  },
  {
    title: "Savoir-Être & Posture",
    description: "Qualités humaines qui créent une confiance durable",
    skills: [
      "Écoute active et empathie client",
      "Persévérance et rigueur de suivi",
      "Sens du contact et aisance relationnelle",
      "Autonomie & prise d'initiative",
      "Esprit d'équipe et loyauté",
      "Ponctualité et professionnalisme"
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor Vente, Négociation et Marketing Digital",
  school: "Euridis Business School",
  period: "2026 – 2027",
  location: "Campus Euridis",
  description: "Formation d'excellence dédiée à la vente complexe en B2B, au cycle de négociation stratégique, au développement commercial de grands comptes et au marketing digital omnicanal.",
  modules: [
    "Vente B2B de solutions complexes & grands comptes",
    "Techniques avancées de négociation commerciale",
    "Prospection multicanale & Social Selling",
    "Marketing digital, acquisition & inbound sales",
    "Management commercial & pilotage de portefeuille",
    "Outils CRM, data commerciale & intelligence artificielle appliquée"
  ]
};
