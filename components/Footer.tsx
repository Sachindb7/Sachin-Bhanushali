import React from 'react';
import { Link } from 'react-router-dom';
import { AUTHOR_NAME, IMPRINT_1, IMPRINT_2 } from '../constants';

const Footer: React.FC = () => {
  const currentYear = 2026; 

  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            &copy; {currentYear} {AUTHOR_NAME}
          </p>
          <p className="text-xs mt-1 text-slate-600">
            {IMPRINT_1} / {IMPRINT_2}
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <Link to="/rights" className="hover:text-slate-300 transition-colors">Rights</Link>
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;