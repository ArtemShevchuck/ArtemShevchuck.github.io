import React from 'react';

import GameContainer from '../../containers/GameContainer';
import styles from './index.module.scss';
import ScoreContainer from '../../containers/ScoreContainer';

export const Game = () => (
  <div className={styles.container}>
    <GameContainer />
    <ScoreContainer />
  </div>
);
