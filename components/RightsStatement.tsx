import React from 'react';
import { AUTHOR_NAME, IMPRINT_1, IMPRINT_2 } from '../constants';

const RightsStatement: React.FC = () => {
  return (
    <section id="rights" className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Copyright & Rights Declaration</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border-l-8 border-slate-800">
          <p className="text-slate-700 mb-6 font-medium text-lg">
            To Whom It May Concern (Google Play Books / Amazon KDP Verification):
          </p>
          
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I, <strong>{AUTHOR_NAME}</strong>, formally declare that I am the sole creator and copyright holder of all titles published under the imprints <em>{IMPRINT_1}</em> and <em>{IMPRINT_2}</em>.
            </p>
            <p>
              These imprints are trade names used exclusively by me for the purpose of categorizing my self-published works. They represent the same legal entity ({AUTHOR_NAME}).
            </p>
            <p>
              I possess full, worldwide digital and print distribution rights for all books listed on this website. No content is public domain or PLR (Private Label Rights). All covers, text, and associated assets are original or licensed for commercial use by the author.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Signed</p>
              <p className="text-xl font-serif text-slate-900 italic">{AUTHOR_NAME}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold">Date</p>
              <p className="text-md text-slate-900">20 Dec 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightsStatement;