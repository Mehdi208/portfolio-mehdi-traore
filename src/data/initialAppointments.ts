import { Appointment } from '../types';

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-001',
    fullName: 'Kouassi Jean-Philippe',
    email: 'jp.kouassi@innovatech-ci.com',
    phone: '+225 07 48 12 34 56',
    projectType: 'Web App / SaaS',
    budget: '300.000 FCFA / an',
    message: 'Bonjour Méhdi, nous voulons digitaliser la gestion de nos stocks et factures avec un portail SaaS sécurisé pour nos 3 magasins à Abidjan.',
    status: 'nouveau',
    createdAt: '2026-10-14T09:30:00Z',
    notes: 'Priorité haute. Projet à lancer d’ici début novembre.'
  },
  {
    id: 'apt-002',
    fullName: 'Sarah Benali',
    email: 'sarah@lumina-agency.com',
    phone: '+33 6 12 34 56 78',
    projectType: 'Site Web Vitrine',
    budget: 'À partir de 350.000 FCFA',
    message: 'Hello Méhdi ! Nous cherchons un designer/dev talentueux pour refaire notre portfolio d’agence avec des animations Framer Motion très travaillées.',
    status: 'contacté',
    createdAt: '2026-10-13T16:15:00Z',
    notes: 'Premier échange téléphonique très positif. Devis envoyé.'
  },
  {
    id: 'apt-003',
    fullName: 'David Konan',
    email: 'david@greenroots-food.ci',
    phone: '+225 05 98 76 54 32',
    projectType: 'Vidéos & Réseaux (CM)',
    budget: '150.000 FCFA / mois',
    message: 'Nous lançons une gamme de jus bio pressés à froid et avons besoin de 12 Reels TikTok par mois avec montage percutant et direction de tournage.',
    status: 'confirmé',
    createdAt: '2026-10-12T11:00:00Z',
    notes: 'Tournage planifié pour samedi matin au labo de Cocody.'
  },
  {
    id: 'apt-004',
    fullName: 'Aïssatou Diop',
    email: 'aissatou.d@artisanat-dakar.sn',
    phone: '+221 77 123 45 67',
    projectType: 'Graphisme & Identité',
    budget: 'À partir de 200.000 FCFA',
    message: 'Besoin d’une charte graphique complète, logo vectoriel et templates pour nos réseaux sociaux avant notre salon d’artisanat.',
    status: 'terminé',
    createdAt: '2026-10-08T14:20:00Z',
    notes: 'Livrables validés et transmis sur Drive.'
  }
];
