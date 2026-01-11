import { Book, FAQItem, NavItem } from './types';

export const AUTHOR_NAME = "Sachin Bhanushali";
export const AUTHOR_EMAIL = "sachinbhanu2020@gmail.com";
export const IMPRINT_1 = "Simple Pages Studio";
export const IMPRINT_2 = "Stellar Pages Studio";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Books', href: '/books' },
  { label: 'Rights', href: '/rights' },
  { label: 'Contact', href: '/contact' },
];

export const BOOKS: Book[] = [
  {
    id: 'B0G7FSCVTQ',
    title: 'AI Side Hustles That Actually Work in 2025',
    subtitle: 'Financial Freedom in the AI Era',
    description: 'A comprehensive guide to leveraging artificial intelligence for modern income streams. Learn practical, actionable strategies to build sustainable side hustles using the latest AI tools.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0G7FSCVTQ.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0G7FSCVTQ'
  },
  {
    id: 'B0DYJHJ79X',
    title: '100+ Conversation Starters & Scripts for Introverts',
    subtitle: 'The Ultimate Guide to Social Success',
    description: 'Master the art of small talk and meaningful connection. This book provides ready-to-use scripts and strategies specifically designed for introverts to navigate social situations with ease.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0DYJHJ79X.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0DYJHJ79X'
  },
  {
    id: 'B0GDQKW9YC',
    title: 'Conversation Shortcuts for Introverts',
    subtitle: 'Timing, Pause, Wit, Listen, Clarity',
    description: 'Break through social barriers with five essential pillars of communication. Learn how to use silence, timing, and clarity to command respect and build better relationships.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0GDQKW9YC.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0GDQKW9YC'
  },
  {
    id: 'B0GDZ3L1RZ',
    title: 'Social Intelligence for Introverts',
    subtitle: 'Mastering Social Skills and Confidence',
    description: 'Unlock your hidden social potential. This guide explores the psychology of social intelligence and provides a roadmap for introverts to thrive in a world that can\'t stop talking.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0GDZ3L1RZ.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0GDZ3L1RZ'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Are these books original works?",
    answer: `Yes. All books listed on this website are 100% original works created and published by ${AUTHOR_NAME}.`
  },
  {
    question: "Who owns Simple Pages Studio?",
    answer: `${IMPRINT_1} is a self-publishing imprint owned and operated exclusively by ${AUTHOR_NAME}.`
  },
  {
    question: "Who owns Stellar Pages Studio?",
    answer: `${IMPRINT_2} is a self-publishing imprint owned and operated exclusively by ${AUTHOR_NAME}.`
  },
  {
    question: "What is the focus of these books?",
    answer: "The publications focus on personal development, social skills for introverts, and modern productivity strategies including AI-driven entrepreneurship."
  }
];