// Types para o AlphaTalk

export interface User {
  id: string;
  name: string;
  email: string;
  level: number;
  xp: number;
  streak: number;
  subscription: 'free' | 'premium';
}

export interface Phrase {
  id: string;
  category: string;
  text: string;
  context: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  xpReward: number;
}

export interface MessageAnalysis {
  original: string;
  improved: string;
  suggestions: string[];
  tone: 'confident' | 'neutral' | 'insecure';
  score: number;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  completed: boolean;
}
