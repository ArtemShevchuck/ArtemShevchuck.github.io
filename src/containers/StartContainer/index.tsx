import React, { FC } from 'react';
import { IStartContainer } from '../../core/types';
import styles from './index.module.scss';

export const StartContainer: FC<IStartContainer> = ({ children }) => (
  <div className={styles.page}>
    <div className={styles.container}>{children}</div>
  </div>
);
