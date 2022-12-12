import React from 'react';
import Sidebar from '../../components/simple/Sidebar';

import GameContainer from '../../containers/GameContainer';
import styles from './index.module.scss';

export const Game = () => (
  <div className={styles.container}>
    <GameContainer />
    <Sidebar />
  </div>
);
