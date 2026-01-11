import React from 'react';
import { Link } from 'react-router-dom';
import { AUTHOR_NAME, IMPRINT_1, IMPRINT_2 } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          {AUTHOR_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-3xl mx-auto">
          Independent Author & Publisher
        </p>
        
        <div className="bg-slate-800/50 border border-slate-700 p-6 md:p-8 rounded-lg text-left md:text-center shadow-xl">
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
            <span className="text-blue-400 font-bold">{IMPRINT_1}</span> and <span className="text-blue-400 font-bold">{IMPRINT_2}</span> are independent self-publishing imprints owned by {AUTHOR_NAME}.
          </p>
          <div className="mt-4 border-t border-slate-700 pt-4">
            <p className="text-slate-400">
              All ebooks listed are original works written by {AUTHOR_NAME}. He holds full worldwide digital publishing rights.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link 
            to="/books" 
            className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
          >
            View Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;