import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './index.module.scss';
import { IScoreOctagon } from '../../../core/types';

const ScoreOctagon: FC<IScoreOctagon> = ({ children, variant }) => (
  <div className={styles.container}>
    <div className={clsx(styles.line, styles[variant])} />
    <div className={clsx(styles.box, styles[variant])} />
    <div className={clsx(styles.middle, styles[variant])}>
      <p className={clsx(styles.middleLabel, styles[variant])}>{children}</p>
    </div>
    <div className={clsx(styles.box, styles[variant])} />
    <div className={clsx(styles.line, styles[variant])} />
  </div>
);

export default ScoreOctagon;
