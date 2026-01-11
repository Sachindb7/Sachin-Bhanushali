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
    title: 'AI Side Hustles That Actually Work in 2026',
    subtitle: 'Practical, Zero-Budget Ways to Make Money with AI',
    description: 'A comprehensive guide to leveraging artificial intelligence for modern income streams. Learn practical, actionable strategies to build sustainable side hustles using the latest AI tools without any upfront investment.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0G7FSCVTQ.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0G7FSCVTQ'
  },
  {
    id: 'B0GDQKW9YC',
    title: 'How to Be the Funniest Person in the Room',
    subtitle: 'Simple Wit, Humor Skills, and Conversation Shortcuts for Introverts',
    description: 'Unlock the secrets of charismatic communication. This book breaks down humor into simple, repeatable shortcuts that help introverts navigate social situations with confidence and wit.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0GDQKW9YC.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0GDQKW9YC'
  },
  {
    id: 'B0GDZ3L1RZ',
    title: 'How to Stay Calm in 2026',
    subtitle: 'Simple Ways to Think Clearly in a Noisy World',
    description: 'In an era of constant digital noise, mental clarity is a superpower. Discover practical methods to maintain your composure, reduce stress, and think with precision regardless of external chaos.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0GDZ3L1RZ.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0GDZ3L1RZ'
  },
  {
    id: 'B0DYJHJ79X',
    title: 'Never Run Out of Things to Say',
    subtitle: '100+ Conversation Starters & Scripts for Introverts',
    description: 'The ultimate social survival guide for those who find small talk draining. Packed with over 100 proven scripts and conversation starters to ensure you always have something meaningful to contribute.',
    coverImage: 'https://images-na.ssl-images-amazon.com/images/P/B0DYJHJ79X.01._SCLZZZZZZZ_SX500_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0DYJHJ79X'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Are these books original works?",
    answer: `Yes. All books listed on this website are 100% original works created and published by ${AUTHOR_NAME}.`
  },
  {
    question: "Who owns Simple Pages Studio & Stellar Pages Studio?",
    answer: `Both ${IMPRINT_1} and ${IMPRINT_2} are self-publishing imprints owned and operated exclusively by ${AUTHOR_NAME}.`
  },
  {
    question: "Do you hold the publishing rights?",
    answer: `Yes, ${AUTHOR_NAME} holds full, worldwide digital and print publishing rights for all titles mentioned on this site.`
  }
];