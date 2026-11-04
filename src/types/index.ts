export type NavPage = 'home' | 'about' | 'academic' | 'phd' | 'corporate';

export interface ServiceItem {
  id: string;
  category: 'academic' | 'research' | 'corporate' | 'college' | 'career';
  categoryLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  audience: string[];
  outcomes: string[];
  formatOptions: string[];
  pricingPerHour?: string;
  bgImage?: string;
}

export interface PhDServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string[];
  pricingPerHour: string;
  iconName: string;
}

export interface JournalServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  indexingCovered: string[];
  deliverables: string[];
}

export interface CareerCounsellingItem {
  id: string;
  target: 'parents-and-students' | 'students' | 'parents';
  title: string;
  description: string;
  keyBenefits: string[];
}

export interface PricingTier {
  level: string;
  targetAudience: string;
  perHourRate: string;
  monthlyTrackNote: string;
  features: string[];
  isPopular?: boolean;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface DifferentiationFactor {
  number: string;
  title: string;
  description: string;
}

export interface MentorCategory {
  title: string;
  role: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  stage: string;
  serviceInterest: string;
  preferredMode: 'online' | 'chennai' | 'trichy';
  notes: string;
  departmentEmail?: 'faculty@pathfinder.com' | 'trainer@pathfinder.com' | 'info@pathfinder.com';
}
