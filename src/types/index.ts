export type NavPage = 'home' | 'about' | 'services' | 'workshops' | 'contact';

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
  bgImage?: string;
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

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  academicStage: string;
  serviceInterest: string;
  preferredMode: 'online' | 'chennai' | 'trichy';
  notes: string;
}
