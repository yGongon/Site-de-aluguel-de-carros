export interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  features: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: 'Car' | 'Wallet' | 'Wrench' | 'Clock' | 'Phone' | 'Lock';
}