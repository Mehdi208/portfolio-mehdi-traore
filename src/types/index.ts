export type ProjectCategory = 'all' | 'web' | 'video' | 'design';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  fullDescription?: string;
  coverImage: string;
  featured: boolean; // Mis en avant sur la landing page ("menu promotionnel")
  order: number;
  tags: string[];
  metrics?: string;
  client?: string;
  year?: string;
  liveUrl?: string;
  videoUrl?: string;
}

export type AppointmentStatus = 'nouveau' | 'contacté' | 'confirmé' | 'terminé' | 'annulé';

export interface Appointment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  status: AppointmentStatus;
  createdAt: string;
  notes?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly?: string;
  priceYearly?: string;
  priceFixed?: string;
  billingType: 'fixed' | 'subscription';
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  targetId: string;
}
