import React from 'react';
import { AUTHOR_NAME, AUTHOR_EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate-300 mb-8 text-lg">
          For rights inquiries, verification requests, or reader feedback.
        </p>
        
        <div className="inline-block bg-slate-800 p-6 rounded-lg border border-slate-700">
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-2 font-semibold">Email Address</p>
          <a 
            href={`mailto:${AUTHOR_EMAIL}`} 
            className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            {AUTHOR_EMAIL}
          </a>
          <p className="mt-4 text-slate-400 text-sm">
            Addressed to: {AUTHOR_NAME}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;