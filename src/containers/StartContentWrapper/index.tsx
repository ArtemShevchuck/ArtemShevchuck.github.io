import React, { FC } from 'react';
import { IStartContentWrapper } from '../../core/types';
import styles from './index.module.scss';

const StartContentWrapper: FC<IStartContentWrapper> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default StartContentWrapper;
