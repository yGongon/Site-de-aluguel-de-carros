import React from 'react';
import { WHATSAPP_LINK, CITY_NAME } from '../data';
import { Icons } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Final CTA Section */}
      <div className="bg-brand-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de um carro ainda hoje?
          </h2>
          <p className="text-brand-100 mb-8 text-lg">
            Não perca tempo com burocracia. Fale conosco agora mesmo.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-700 font-bold py-4 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            <Icons.Phone className="mr-2" size={20} />
            Fale agora no WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Locadora de Veículos</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            Especialistas em aluguel de carros em {CITY_NAME}. Oferecemos a frota mais nova da região com as melhores taxas do mercado.
          </p>
        </div>
        
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#catalogo" className="hover:text-white transition-colors">Carros Disponíveis</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Icons.MapPin size={16} className="mr-2 text-brand-500" />
              {CITY_NAME}, Centro
            </li>
            <li className="flex items-center">
              <Icons.Phone size={16} className="mr-2 text-brand-500" />
              (00) 0000-0000
            </li>
            <li className="flex items-center">
              <Icons.Clock size={16} className="mr-2 text-brand-500" />
              Seg a Sab: 08h às 18h
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <p>&copy; {currentYear} Aluguel de Carros {CITY_NAME}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;