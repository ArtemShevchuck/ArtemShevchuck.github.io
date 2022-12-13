import React from 'react';

import styles from './index.module.scss';
import GameContainer from '../../containers/GameContainer';
import ScoreContainer from '../../containers/ScoreContainer';

export const Game = () => (
  <div className={styles.container}>
    <GameContainer />
    <ScoreContainer />
  </div>
);
