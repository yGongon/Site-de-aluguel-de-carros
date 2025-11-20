import React from 'react';
import { WHATSAPP_LINK } from '../data';
import { Icons } from './Icons';

const StickyWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      aria-label="Falar no WhatsApp"
    >
      <Icons.Phone className="text-white w-7 h-7 group-hover:animate-pulse" />
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Alugue agora
      </span>
    </a>
  );
};

export default StickyWhatsApp;