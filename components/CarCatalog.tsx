import React from 'react';
import { CARS, WHATSAPP_LINK } from '../data';
import { Icons } from './Icons';

const CarCatalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Catálogo de Carros para Alugar
          </h2>
          <p className="text-lg text-slate-600">
            Escolha o modelo ideal para sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <div key={car.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {car.name}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {car.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <Icons.Check size={16} className="text-brand-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-end justify-between mb-4">
                    <span className="text-slate-500 text-sm">A partir de</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-slate-900">R$ {car.price}</span>
                      <span className="text-slate-500 text-sm">/dia</span>
                    </div>
                  </div>
                  
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors"
                  >
                    <Icons.Phone size={18} className="mr-2" />
                    Reservar no WhatsApp
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

export default CarCatalog;