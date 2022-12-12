import { ReactNode } from 'react';
import { CountActionKind } from '../constants';

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

export interface IScoreOctagon {
  children: ReactNode;
  variant: string;
}

export interface ITotalScore {
  children: ReactNode;
}

export interface CountAction {
  type: CountActionKind;
  payload: number;
}

export interface CountState {
  questionId: number;
  score: number;
}
