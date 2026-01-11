export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  amazonLink: string;
  googlePlayLink?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}