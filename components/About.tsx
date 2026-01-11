import React from 'react';
import { AUTHOR_NAME, IMPRINT_1, IMPRINT_2 } from '../constants';

const About: React.FC = () => {
  return (
    <>
      {/* About Author */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About The Author</h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <p className="mb-6">
              {AUTHOR_NAME} is a passionate writer and digital creator committed to producing high-quality original content. With a focus on both fiction and non-fiction genres, Sachin aims to educate, entertain, and inspire readers globally.
            </p>
            <p>
              As a dedicated self-publisher, Sachin manages every aspect of the creative process, ensuring that each book meets professional standards while maintaining a unique voice.
            </p>
          </div>
        </div>
      </section>

      {/* About Imprints */}
      <section id="imprints" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About The Imprints</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-blue-600 mb-3">{IMPRINT_1}</h3>
              <p className="text-slate-600">
                A publishing imprint dedicated to non-fiction, educational guides, and lifestyle journals. Owned solely by {AUTHOR_NAME}.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">{IMPRINT_2}</h3>
              <p className="text-slate-600">
                A publishing imprint focused on fiction, storytelling, and creative anthologies. Owned solely by {AUTHOR_NAME}.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-800 font-medium">
              <strong>Clarification:</strong> Both names are branding/pen names used by the same author ({AUTHOR_NAME}) and do not represent different rights holders or separate corporate entities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;