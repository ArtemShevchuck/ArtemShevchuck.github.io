import React, { FC } from 'react';
import { IAnswersWrapper } from '../../core/types';
import styles from './index.module.scss';

export const AnswersWrapper: FC<IAnswersWrapper> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
