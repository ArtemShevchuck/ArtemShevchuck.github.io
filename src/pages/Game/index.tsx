import React from 'react';
import { Octagon } from '../../components/ui/Octagon';
import styles from './index.module.scss';

export const Game = () => (
  <div className={styles.container}>
    <Octagon letter="A" variant="inactive">
      1 question
    </Octagon>
    <Octagon letter="B" variant="correct">
      2 question
    </Octagon>
    <Octagon letter="C" variant="wrong">
      3 question
    </Octagon>
    <Octagon letter="D" variant="selected">
      4 question
    </Octagon>
  </div>
);
