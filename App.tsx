import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CarCatalog from './components/CarCatalog';
import Testimonials from './components/Testimonials';
import LocalSeo from './components/LocalSeo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import SchemaMarkup from './components/SchemaMarkup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
      {/* SEO Schema Injection */}
      <SchemaMarkup />
      
      <header className="absolute top-0 left-0 w-full z-50 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tighter">
            Locadora<span className="text-brand-500">VIP</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium text-slate-200">
              <li><a href="#catalogo" className="hover:text-white transition-colors">Frota</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas</a></li>
              <li>
                <a href="#contato" className="bg-brand-600 text-white px-4 py-2 rounded-md hover:bg-brand-700 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <CarCatalog />
        <Testimonials />
        <LocalSeo />
        <FAQ />
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default App;