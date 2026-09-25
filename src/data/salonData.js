export const SALON_INFO = {
  name: "TokMaster Instituto de Beleza",
  tagline: "Tradição, Beleza e Atendimento Neuroinclusivo na Asa Norte",
  experienceYears: 20,
  address: "SHC/N CL Quadra 310 Bloco E Loja 40 - Asa Norte, Brasília - DF, CEP 70756-550",
  phone: "(61) 3340-1716",
  whatsapp: "(61) 99901-2250",
  whatsappRaw: "5561999012250",
  hours: {
    weekdays: "Segunda a Sábado: 09:00 às 18:00",
    sunday: "Domingo: Fechado"
  },
  calendarLinks: {
    kidsAndMen: "https://calendar.app.google/vAjbySNphbJqsTPb7",
    femaleAndHair: "https://calendar.app.google/UwmxKN11FKPfmumW9",
    nailsAndDepil: "https://calendar.app.google/tRGWpAb4Q3SFXCu88"
  }
};

export const PROFESSIONALS = [
  {
    id: "qualquer-profissional",
    name: "Qualquer Profissional Disponível",
    role: "Primeira vaga livre",
    avatar: "/images/logo.png",
    servicesAllowed: ["corte-masculino-infantil", "corte-feminino", "tratamentos-capilares", "manicure-pedicure-gel", "design-sobrancelhas", "depilacao-cera"]
  },
  {
    id: "ney",
    name: "Ney",
    role: "Corte Masculino, Feminino & Infantil",
    avatar: "/images/corte masculino.jpg",
    servicesAllowed: ["corte-masculino-infantil", "corte-feminino"]
  },
  {
    id: "sula",
    name: "Sula",
    role: "Corte Masculino & Infantil",
    avatar: "/images/corte masculino.jpg",
    servicesAllowed: ["corte-masculino-infantil"]
  },
  {
    id: "leide",
    name: "Leide",
    role: "Corte Feminino, Mechas, Tratamentos & Sobrancelhas",
    avatar: "/images/Corte feminino.png",
    servicesAllowed: ["corte-feminino", "tratamentos-capilares", "design-sobrancelhas"]
  },
  {
    id: "celia",
    name: "Célia",
    role: "Manicure, Pedicure, Depilação & Sobrancelhas",
    avatar: "/images/Manicure.png",
    servicesAllowed: ["manicure-pedicure-gel", "depilacao-cera", "design-sobrancelhas"]
  },
  {
    id: "adriana",
    name: "Adriana",
    role: "Manicure & Pedicure (Fibra, Gel & Molde F1)",
    avatar: "/images/Manicure.png",
    servicesAllowed: ["manicure-pedicure-gel"]
  }
];

export const SERVICE_CATEGORIES = [
  { id: "todos", label: "Todos os Serviços" },
  { id: "cabelos", label: "Cabelos & Químicas" },
  { id: "unhas", label: "Manicure & Pedicure" },
  { id: "infantil", label: "Infantil & Neuroinclusivo" },
  { id: "estetica", label: "Estética & Depilação" }
];

export const SERVICES = [
  {
    id: "corte-masculino-infantil",
    title: "Corte Masculino & Infantil (Inclusivo)",
    category: "infantil",
    price: "A partir de R$ 60",
    duration: "40 min",
    image: "/images/corte masculino.jpg",
    calendarUrl: SALON_INFO.calendarLinks.kidsAndMen,
    popular: true,
    badge: "Especialidade da Casa",
    description: "Atendimento acolhedor e paciente, preparado para crianças neurodivergentes (autistas e TDAH). Ambiente calmo e sem pressão.",
    iconName: "Smile"
  },
  {
    id: "corte-feminino",
    title: "Corte Feminino & Modelagem",
    category: "cabelos",
    price: "A partir de R$ 90",
    duration: "60 min",
    image: "/images/Corte feminino.png",
    calendarUrl: SALON_INFO.calendarLinks.femaleAndHair,
    popular: true,
    badge: "Mais Pedido",
    description: "Análise visagista, lavatório com massagem capilar relaxante, corte moderno e finalização com escova modelada.",
    iconName: "Scissors"
  },
  {
    id: "tratamentos-capilares",
    title: "Tratamentos, Mechas & Coloração",
    category: "cabelos",
    price: "A partir de R$ 150",
    duration: "120 min",
    image: "/images/Procedimentos.png",
    calendarUrl: SALON_INFO.calendarLinks.femaleAndHair,
    popular: false,
    badge: "Transformação",
    description: "Técnicas avançadas de Iluminação, Balayage, Morena Iluminada, Coloração global, Progressiva e Nutrição profunda.",
    iconName: "Sparkles"
  },
  {
    id: "manicure-pedicure-gel",
    title: "Manicure & Pedicure (Fibra, Gel, Molde F1)",
    category: "unhas",
    price: "A partir de R$ 50",
    duration: "50 min",
    image: "/images/Manicure.png",
    calendarUrl: SALON_INFO.calendarLinks.nailsAndDepil,
    popular: true,
    badge: "Alta Durabilidade",
    description: "Alongamento em Fibra de Vidro, Gel moldado, Molde F1, Blindagem de unhas naturais e esmaltação em gel com acabamento impecável.",
    iconName: "Heart"
  },
  {
    id: "design-sobrancelhas",
    title: "Design de Sobrancelhas & Henna",
    category: "estetica",
    price: "A partir de R$ 45",
    duration: "35 min",
    image: "/images/Sobrancelhas.png",
    calendarUrl: SALON_INFO.calendarLinks.femaleAndHair,
    popular: false,
    badge: "Harmonização",
    description: "Mapeamento facial para sobrancelhas simétricas, alinhamento dos fios, aplicação de Henna ou Tintura específica.",
    iconName: "Eye"
  },
  {
    id: "depilacao-cera",
    title: "Depilação Completa com Cera Suave",
    category: "estetica",
    price: "A partir de R$ 40",
    duration: "30 min",
    image: "/images/Depilação.png",
    calendarUrl: SALON_INFO.calendarLinks.nailsAndDepil,
    popular: false,
    badge: "Pele Macia",
    description: "Método com cera morna hipoalergênica, reduzindo o incômodo. Higienização e finalização com gel pós-depilatório calmante.",
    iconName: "Feather"
  }
];

export const TIME_SLOTS = [
  "09:00", "09:45", "10:30", "11:15", "13:00", "13:45", "14:30", "15:15", "16:00", "16:45", "17:30"
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento Neuroinclusivo",
    description: "Espaço calmo e acolhedor, com equipe treinada para atender crianças autistas, TDAH e com sensibilidade sensorial com total paciência.",
    icon: "HeartHandshake"
  },
  {
    title: "+20 Anos de Tradição na Asa Norte",
    description: "Referência estabelecida na Quadra 310 Norte, construindo relações de confiança com gerações de famílias em Brasília.",
    icon: "Award"
  },
  {
    title: "Técnicas de Unhas de Última Geração",
    description: "Especialistas em alongamentos de Fibra de Vidro, Gel e Molde F1, garantindo naturalidade, resistência e estética refinada.",
    icon: "Sparkles"
  },
  {
    title: "Produtos de Marca Premium",
    description: "Utilizamos as melhores marcas de cosméticos capilares e esmaltes para proteger a saúde da sua pele e cabelo.",
    icon: "ShieldCheck"
  }
];

export const TESTIMONIALS = [
  {
    name: "Mariana Vasconcelos",
    role: "Cliente na Asa Norte há 6 anos",
    comment: "Eu levo meu filho autista para cortar o cabelo no TokMaster e fico emocionada com a paciência da equipe. Eles respeitam o tempo dele como nenhum outro salão!",
    rating: 5
  },
  {
    name: "Carolina Ribeiro",
    role: "Cliente de Alongamento de Unhas",
    comment: "Minhas unhas de fibra duram quase um mês inteirinho perfeitas! Além de o atendimento ser super pontual, o ambiente é super agradável.",
    rating: 5
  },
  {
    name: "Eduardo Camargo",
    role: "Cliente de Corte Masculino",
    comment: "Corte masculino impecável e rápido. Moro na 310 Norte e para mim é de longe a melhor opção da região. Recomendadíssimo!",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Como funciona o atendimento para crianças autistas ou neurodivergentes?",
    answer: "Trabalhamos com agendamentos em horários mais tranquilos, sem ruídos excessivos. O profissional conversa com os pais antes para saber o que a criança mais gosta e respeita os limites dela, sem pressa."
  },
  {
    question: "Como funciona o agendamento no site?",
    answer: "Você seleciona o procedimento e o profissional de sua preferência (Ney, Sula, Leide, Célia, Adriana ou Qualquer Profissional). O horário escolhido é reservado no sistema e confirmado com o salão."
  },
  {
    question: "Posso agendar mais de um serviço no mesmo dia?",
    answer: "Sim! No nosso sistema de agendamento você pode agendar múltiplos procedimentos."
  },
  {
    question: "Onde o salão fica localizado?",
    answer: "Estamos localizados no coração da Asa Norte: SHC/N CL Quadra 310 Bloco E Loja 40 - Brasília / DF."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos Pix, cartões de crédito e débito de todas as bandeiras, além de dinheiro em espécie."
  }
];
