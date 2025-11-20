import React from 'react';
import { CITY_NAME } from '../data';

const LocalSeo: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Aluguel de Carros em {CITY_NAME}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Somos a melhor opção de <strong className="text-slate-800 font-semibold">aluguel de carros em {CITY_NAME}</strong> e região. 
          Realizamos entrega no aeroporto, hotéis, rodoviária e em qualquer bairro da cidade. 
          Trabalhamos com carros compactos, sedans e SUVs, todos revisados e prontos para uso.
        </p>
        <p className="text-sm text-slate-500">
          Atendemos também bairros vizinhos e cidades adjacentes, garantindo mobilidade para você onde quer que esteja.
        </p>
      </div>
    </section>
  );
};

export default LocalSeo;