import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import Routes from './routes';
import { CountProvider } from './core/store/score-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CountProvider>
      <Routes />
    </CountProvider>
  </React.StrictMode>,
);
