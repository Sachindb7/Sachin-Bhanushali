import React from 'react';
import { BOOKS } from '../constants';

const BookList: React.FC = () => {
  return (
    <section id="books" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Published Works</h2>
          <p className="mt-4 text-xl text-slate-500">Official titles available on Amazon Kindle & Paperback.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {BOOKS.map((book) => (
            <div key={book.id} className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Strict Portrait container (2:3 Ratio) */}
              <div className="aspect-[2/3] bg-slate-50 relative overflow-hidden p-6">
                <img 
                  src={book.coverImage} 
                  alt={`Full cover for ${book.title}`} 
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="text-sm font-bold text-blue-500 mb-4 leading-snug uppercase tracking-wide">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="text-slate-600 text-base leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a 
                    href={book.amazonLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-slate-900 hover:bg-blue-700 transition-all active:scale-95"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;