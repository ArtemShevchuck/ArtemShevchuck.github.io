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
