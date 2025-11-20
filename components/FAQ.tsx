import React, { useState } from 'react';
import { FAQS } from '../data';
import { Icons } from './Icons';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas sobre o aluguel de veículos.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-brand-600">
                  {openIndex === index ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                </span>
              </button>
              
              <div 
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;