import React from 'react';
import { WHATSAPP_LINK, CITY_NAME } from '../data';
import { Icons } from './Icons';

const Hero: React.FC = () => {
  const scrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?blur=2" 
          alt="Frota de carros novos para aluguel" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 text-brand-500 text-sm font-semibold mb-6 border border-brand-500/30">
            <Icons.MapPin size={16} className="mr-2" />
            Atendemos {CITY_NAME} e região
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Aluguel de Carros com <span className="text-brand-500">Preço Justo</span>, Frota Nova e Sem Burocracia
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Alugue seu carro hoje mesmo com retirada rápida e pagamento facilitado.
          </h2>

          <p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Trabalhamos com os melhores modelos de carros compactos, sedans e SUVs para aluguel diário, semanal ou mensal. Atendimento rápido e seguro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-all transform hover:scale-105 shadow-lg shadow-brand-600/30"
            >
              <Icons.Phone className="mr-2" size={20} />
              Reservar Agora no WhatsApp
            </a>
            <a 
              href="#catalogo"
              onClick={scrollToCatalog}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-200 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-all backdrop-blur-sm cursor-pointer"
            >
              Ver Veículos Disponíveis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;