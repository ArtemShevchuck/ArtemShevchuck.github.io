import React, { FC } from 'react';

import styles from './index.module.scss';
import { IStartContainer } from '../../core/types';

export const StartContainer: FC<IStartContainer> = ({ children }) => (
  <div className={styles.page}>
    <div className={styles.container}>{children}</div>
  </div>
);
