import { ReactNode } from 'react';

export interface INavigationButton {
  path: string;
  children: ReactNode;
}

export interface IStartContainer {
  children: ReactNode;
}

export interface IStartContentWrapper {
  children: ReactNode;
}

export interface IOctagon {
  children: ReactNode;
  letter: string;
  variant: 'inactive' | 'correct' | 'wrong' | 'selected' | 'hovered';
}
export interface IAnswersWrapper {
  children: ReactNode;
}

export interface IQuestionText {
  children: ReactNode;
}

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  correctAnswerId: number;
  cost: number;
}

export interface IAnswer {
  id: number;
  letter: string;
  text: string;
}
