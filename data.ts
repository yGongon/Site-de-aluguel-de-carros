import { Car, FaqItem, Testimonial, Benefit } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Fiat Argo 1.0 para Aluguel',
    category: 'Econômico',
    price: 139,
    image: 'https://picsum.photos/600/400?random=1',
    features: ['5 lugares', 'Ar-condicionado', 'Baixo consumo', 'Direção Elétrica'],
    description: 'Modelo econômico, ideal para quem busca aluguel de carro barato com conforto.',
  },
  {
    id: '2',
    name: 'Hyundai HB20 Sedan para Aluguel',
    category: 'Sedan',
    price: 169,
    image: 'https://picsum.photos/600/400?random=2',
    features: ['Porta-malas grande', 'Multimídia', 'Automático', '4 Portas'],
    description: 'Perfeito para viagens em família ou trabalho. Espaço e conforto garantidos.',
  },
  {
    id: '3',
    name: 'Jeep Renegade SUV para Alugar',
    category: 'SUV',
    price: 249,
    image: 'https://picsum.photos/600/400?random=3',
    features: ['Alto desempenho', 'Automático', 'Espaçoso', 'Segurança Total'],
    description: 'SUV robusto para quem não abre mão de estilo e potência na estrada.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Maria A.',
    rating: 5,
    text: 'Aluguel de carro rápido e sem complicação. Carro limpo e novo. Recomendo muito!',
  },
  {
    id: 't2',
    name: 'Diego R.',
    rating: 5,
    text: 'Melhor locadora de carros da região. Atendimento excelente e o preço foi o melhor que encontrei.',
  },
  {
    id: 't3',
    name: 'Fernanda S.',
    rating: 5,
    text: 'O processo foi super simples pelo WhatsApp. Retirada imediata e sem burocracia desnecessária.',
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'É necessário cartão de crédito para alugar um carro?',
    answer: 'Não. Aceitamos Pix, débito e crédito. Facilitamos o pagamento para você sair dirigindo hoje.',
  },
  {
    question: 'Posso alugar carro com CNH provisória?',
    answer: 'Sim, desde que a CNH esteja válida e original. Consulte nossas condições especiais.',
  },
  {
    question: 'O seguro está incluso no valor do aluguel?',
    answer: 'Sim, seguro básico (proteção contra terceiros e colisão) já incluso na diária.',
  },
  {
    question: 'Como funciona a política de combustível?',
    answer: 'Entregamos o tanque cheio e o cliente deve devolver da mesma forma, ou pagar a diferença na devolução.',
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Frota nova para aluguel',
    description: 'Veículos do ano, revisados e higienizados para sua segurança.',
    iconName: 'Car',
  },
  {
    title: 'Melhores preços',
    description: 'Garantimos o aluguel de carro mais barato da região com qualidade.',
    iconName: 'Wallet',
  },
  {
    title: 'Carros 100% revisados',
    description: 'Manutenção preventiva rigorosa em todos os veículos.',
    iconName: 'Wrench',
  },
  {
    title: 'Entrega e retirada rápida',
    description: 'Sem filas. Processo ágil para você não perder tempo.',
    iconName: 'Clock',
  },
  {
    title: 'Atendimento WhatsApp 24h',
    description: 'Suporte total antes, durante e depois da sua locação.',
    iconName: 'Phone',
  },
  {
    title: 'Sem taxas escondidas',
    description: 'Transparência total no contrato. O valor combinado é o valor final.',
    iconName: 'Lock',
  },
];

export const CITY_NAME = "[Sua Cidade]";
export const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20reservar%20um%20carro";