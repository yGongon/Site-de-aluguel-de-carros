import React from 'react';
import { BENEFITS } from '../data';
import { Icons } from './Icons';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Por Que Escolher Nossa Locadora de Carros?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oferecemos a melhor experiência de locação da região com vantagens exclusivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = Icons[benefit.iconName];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6 text-brand-600">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;