import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;