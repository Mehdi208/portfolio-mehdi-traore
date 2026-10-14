export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels sont vos délais habituels de conception et livraison ?",
    answer: "Pour un site vitrine ou une landing page sur-mesure, le délai moyen est de 2 à 3 semaines, incluant la phase de maquettage UI/UX, les retours et l'intégration animée. Pour une application web SaaS plus dense, comptez entre 4 et 8 semaines selon la complexité des modules métiers et des intégrations d'API."
  },
  {
    question: "Comment se déroule le processus de révision et de validation ?",
    answer: "Chaque projet intègre 2 cycles complets de révisions à chaque étape clé (après validation de la maquette interactive sous Figma, puis après la mise en ligne de la version pré-production). Nous échangeons directement par WhatsApp, Google Meet et Loom pour des ajustements rapides et sans friction."
  },
  {
    question: "Quelles sont les modalités de paiement acceptées ?",
    answer: "Le règlement s'effectue généralement en deux temps : un acompte de 50% au lancement du projet pour sécuriser le planning, puis le solde de 50% à la livraison finale après vos tests et validation. Pour la Côte d'Ivoire et l'Afrique, les paiements via Wave, Orange Money et virements bancaires sont acceptés. À l'international, les virements SWIFT et cartes bancaires sont pris en charge."
  },
  {
    question: "Quelles technologies utilisez-vous pour garantir la vitesse et le SEO ?",
    answer: "J'utilise un stack moderne et ultra-véloce : React 18/19, TypeScript, Next.js ou Vite, Tailwind CSS et Framer Motion pour les animations. Tous les sites sont optimisés pour un score Google PageSpeed supérieur à 90, avec un balisage SEO complet (OpenGraph, schema.org) et un temps de chargement inférieur à 1 seconde."
  },
  {
    question: "Puis-je modifier mes contenus et mes projets en toute autonomie après livraison ?",
    answer: "Absolument. Selon vos préférences, nous configurons un espace administrateur dédié intuitif (comme sur ce site) ou un CMS moderne (WordPress headless, Strapi, Sanity). Vous bénéficiez d'une session de formation vidéo personnalisée pour gérer vos textes, visuels et articles en totale indépendance."
  },
  {
    question: "Proposez-vous un accompagnement de maintenance après la mise en ligne ?",
    answer: "Oui ! Tous mes projets bénéficient d'une garantie technique offerte de 30 jours pour tout ajustement post-lancement. Par la suite, je propose des formules de maintenance mensuelle ou annuelle pour assurer les sauvegardes, la sécurité continue et l'ajout de nouvelles fonctionnalités."
  }
];
