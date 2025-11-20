// Constantes e dados do AlphaTalk

import { Phrase, Achievement, DailyChallenge } from './types';

export const PHRASES: Phrase[] = [
  // Iniciar Conversa
  {
    id: '1',
    category: 'Iniciar Conversa',
    text: 'Ei, percebi que você tem um estilo único. De onde você tira inspiração?',
    context: 'Para iniciar conversa de forma genuína',
    difficulty: 'beginner'
  },
  {
    id: '2',
    category: 'Iniciar Conversa',
    text: 'Você parece ser alguém interessante. O que te trouxe aqui hoje?',
    context: 'Abertura direta e confiante',
    difficulty: 'intermediate'
  },
  {
    id: '3',
    category: 'Iniciar Conversa',
    text: 'Tenho que admitir, sua energia chamou minha atenção. Qual é sua história?',
    context: 'Elogio + curiosidade genuína',
    difficulty: 'advanced'
  },
  
  // Manter Conversa
  {
    id: '4',
    category: 'Manter Conversa',
    text: 'Isso é fascinante! Conte-me mais sobre como você chegou nisso.',
    context: 'Demonstrar interesse genuíno',
    difficulty: 'beginner'
  },
  {
    id: '5',
    category: 'Manter Conversa',
    text: 'Adoro pessoas apaixonadas pelo que fazem. O que te motiva nisso?',
    context: 'Aprofundar conexão emocional',
    difficulty: 'intermediate'
  },
  {
    id: '6',
    category: 'Manter Conversa',
    text: 'Você tem uma perspectiva única sobre isso. Já pensou em [conexão criativa]?',
    context: 'Mostrar que está prestando atenção',
    difficulty: 'advanced'
  },
  
  // Marcar Encontro
  {
    id: '7',
    category: 'Marcar Encontro',
    text: 'Estou curtindo nossa conversa. Que tal continuarmos tomando um café?',
    context: 'Convite casual e direto',
    difficulty: 'beginner'
  },
  {
    id: '8',
    category: 'Marcar Encontro',
    text: 'Conheço um lugar incrível que combina com você. Topa conhecer comigo?',
    context: 'Personalizado e confiante',
    difficulty: 'intermediate'
  },
  {
    id: '9',
    category: 'Marcar Encontro',
    text: 'Vamos fazer o seguinte: [dia] à noite, eu te levo em um lugar especial. Pode ser?',
    context: 'Assumir liderança com charme',
    difficulty: 'advanced'
  },
  
  // Flerte
  {
    id: '10',
    category: 'Flerte',
    text: 'Você tem um sorriso que ilumina o ambiente. É sempre assim?',
    context: 'Elogio genuíno e leve',
    difficulty: 'beginner'
  },
  {
    id: '11',
    category: 'Flerte',
    text: 'Cuidado, você está sendo perigosamente interessante.',
    context: 'Flerte com humor',
    difficulty: 'intermediate'
  },
  {
    id: '12',
    category: 'Flerte',
    text: 'Se continuar assim, vou ter que te convidar para algo mais especial.',
    context: 'Criar tensão sexual sutil',
    difficulty: 'advanced'
  },
  
  // Recuperar Conversa
  {
    id: '13',
    category: 'Recuperar Conversa',
    text: 'Ei! Lembrei de você hoje. Como andam as coisas?',
    context: 'Retomar contato de forma leve',
    difficulty: 'beginner'
  },
  {
    id: '14',
    category: 'Recuperar Conversa',
    text: 'Estava pensando naquela conversa sobre [tópico]. Você já [ação relacionada]?',
    context: 'Mostrar que lembrou de detalhes',
    difficulty: 'intermediate'
  },
  {
    id: '15',
    category: 'Recuperar Conversa',
    text: 'Sumida! Aposto que está ocupada sendo incrível. Vamos marcar aquele encontro?',
    context: 'Confiante e direto ao ponto',
    difficulty: 'advanced'
  },
  
  // Confiança
  {
    id: '16',
    category: 'Confiança',
    text: 'Eu sei o que quero, e você definitivamente chamou minha atenção.',
    context: 'Demonstrar segurança',
    difficulty: 'intermediate'
  },
  {
    id: '17',
    category: 'Confiança',
    text: 'Não costumo fazer isso, mas você é uma exceção que vale a pena.',
    context: 'Mostrar seletividade',
    difficulty: 'advanced'
  },
  {
    id: '18',
    category: 'Confiança',
    text: 'Vou ser direto: gostei de você e quero te conhecer melhor.',
    context: 'Honestidade confiante',
    difficulty: 'advanced'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_message',
    title: 'Primeira Mensagem',
    description: 'Analisou sua primeira mensagem com IA',
    icon: 'MessageSquare',
    unlocked: false,
    xpReward: 50
  },
  {
    id: 'week_streak',
    title: 'Sequência de 7 Dias',
    description: 'Manteve engajamento por 7 dias seguidos',
    icon: 'Flame',
    unlocked: false,
    xpReward: 200
  },
  {
    id: 'phrase_master',
    title: 'Mestre das Frases',
    description: 'Usou 50 frases prontas',
    icon: 'BookOpen',
    unlocked: false,
    xpReward: 300
  },
  {
    id: 'confident_king',
    title: 'Rei da Confiança',
    description: 'Atingiu nível 10',
    icon: 'Crown',
    unlocked: false,
    xpReward: 500
  },
  {
    id: 'daily_warrior',
    title: 'Guerreiro Diário',
    description: 'Completou 30 desafios diários',
    icon: 'Target',
    unlocked: false,
    xpReward: 400
  },
  {
    id: 'smooth_talker',
    title: 'Conversador Nato',
    description: 'Obteve 10 análises com score acima de 90',
    icon: 'TrendingUp',
    unlocked: false,
    xpReward: 350
  }
];

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    id: 'challenge_1',
    title: 'Iniciar 3 Conversas',
    description: 'Use frases prontas para iniciar 3 conversas hoje',
    xpReward: 100,
    completed: false
  },
  {
    id: 'challenge_2',
    title: 'Análise de Mensagem',
    description: 'Analise uma mensagem com a IA e implemente as sugestões',
    xpReward: 150,
    completed: false
  },
  {
    id: 'challenge_3',
    title: 'Marcar um Encontro',
    description: 'Use técnicas aprendidas para marcar um encontro',
    xpReward: 200,
    completed: false
  }
];

export const CATEGORIES = [
  'Iniciar Conversa',
  'Manter Conversa',
  'Marcar Encontro',
  'Flerte',
  'Recuperar Conversa',
  'Confiança'
];

export const TIPS = [
  {
    title: 'Seja Autêntico',
    description: 'Confiança genuína é mais atraente que qualquer técnica decorada.'
  },
  {
    title: 'Escute Ativamente',
    description: 'Preste atenção real no que ela diz. Pessoas adoram ser ouvidas.'
  },
  {
    title: 'Linguagem Corporal',
    description: 'Mantenha contato visual, postura aberta e sorria naturalmente.'
  },
  {
    title: 'Timing é Tudo',
    description: 'Saiba quando avançar e quando dar espaço. Leia os sinais.'
  },
  {
    title: 'Seja Interessante',
    description: 'Tenha hobbies, paixões e histórias para compartilhar.'
  },
  {
    title: 'Confiança Calma',
    description: 'Não seja arrogante. Confiança verdadeira é tranquila e segura.'
  }
];
