
export enum Page {
  CHAT = 'CHAT',
  GUIDE = 'GUIDE',
  EXERCISES = 'EXERCISES',
  PROFILE = 'PROFILE',
}

export type DiscProblem = 'Nenhum' | 'Lombar' | 'Cervical' | 'Dorsal';
export type ActivityLevel = 'Sedentário' | 'Atleta';

export interface PatientProfile {
  name: string;
  age: number;
  discProblem: DiscProblem;
  activityLevel: ActivityLevel;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export interface Exercise {
  title: string;
  description: string;
  imageUrl: string;
  warning?: string;
  safe: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
