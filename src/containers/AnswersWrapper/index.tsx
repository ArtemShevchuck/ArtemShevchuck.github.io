import React, { FC } from 'react';

import styles from './index.module.scss';
import { IAnswersWrapper } from '../../core/types';

export const AnswersWrapper: FC<IAnswersWrapper> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
