import React from 'react';
import { TESTIMONIALS } from '../data';
import { Icons } from './Icons';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Icons.Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-2">
            Avaliação 4.9/5 na Locação de Carros
          </h2>
          <p className="text-slate-600">
            Veja o que nossos clientes dizem sobre nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
              <div className="absolute -top-3 left-6 bg-brand-500 rounded-full p-2">
                 <span className="text-2xl leading-none text-white block h-6 w-4 font-serif">"</span>
              </div>
              <div className="mt-4">
                <p className="text-slate-600 italic mb-4">
                  "{item.text}"
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <div className="flex gap-0.5">
                     {[...Array(item.rating)].map((_, i) => (
                        <Icons.Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;