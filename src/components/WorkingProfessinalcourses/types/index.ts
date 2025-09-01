export interface Program {
  id: string;
  title: string;
  duration: string;
  mode: string;
  fees: string;
  emi: string;
  description: string;
}

export interface Mentor {
  id: string;
  name: string;
  company: string;
  previousCompany: string;
  expertise: string;
  image: string;
  tagline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  previousRole: string;
  currentRole: string;
  previousCompany: string;
  currentCompany: string;
  quote: string;
  rating: number;
  image: string;
}

export interface Batch {
  course: string;
  startDate: string;
  batchTime: string;
  availability: string;
  status: 'available' | 'limited' | 'full';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}