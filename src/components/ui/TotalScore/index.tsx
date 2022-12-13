import React, { FC } from 'react';

import styles from './index.module.scss';
import { ITotalScore } from '../../../core/types';
import { messages } from '../../../core/constants';

const TotalScore: FC<ITotalScore> = ({ children }) => (
  <div>
    <p className={styles.title}>{`${messages.TOTAL_SCORE}:`}</p>
    <p className={styles.score}>{`$${children} ${messages.EARNED}`}</p>
  </div>
);

export default TotalScore;
