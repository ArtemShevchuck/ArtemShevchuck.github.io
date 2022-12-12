import React from 'react';
import Sidebar from '../../components/simple/Sidebar';

import GameContainer from '../../containers/GameContainer';
import { CountProvider } from '../../core/store/score-context';
import styles from './index.module.scss';

export const Game = () => (
  <CountProvider>
    <div className={styles.container}>
      <GameContainer />
      <Sidebar />
    </div>
  </CountProvider>
);
