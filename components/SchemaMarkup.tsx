import React from 'react';
import { CARS, FAQS, CITY_NAME } from '../data';

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Aluguel de Carros Top",
    "image": "https://picsum.photos/1200/600",
    "description": `Aluguel de carros em ${CITY_NAME} com frota nova e preços baixos.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Principal, 1000",
      "addressLocality": CITY_NAME,
      "addressRegion": "SP",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "priceRange": "$$",
    "telephone": "+5500000000000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const productSchemas = CARS.map(car => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": car.name,
    "image": car.image,
    "description": car.description,
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "BRL",
      "price": car.price,
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SchemaMarkup;