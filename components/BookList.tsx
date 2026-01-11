import React from 'react';
import { BOOKS } from '../constants';

const BookList: React.FC = () => {
  return (
    <section id="books" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Original Books</h2>
          <p className="mt-4 text-xl text-slate-500">A selection of published works.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BOOKS.map((book) => (
            <div key={book.id} className="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[2/3] bg-slate-100 relative overflow-hidden group">
                <img 
                  src={book.coverImage} 
                  alt={`Cover for ${book.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{book.title}</h3>
                  {book.subtitle && (
                    <p className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wider">{book.subtitle}</p>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a 
                    href={book.amazonLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-slate-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
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