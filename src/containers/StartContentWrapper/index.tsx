import React, { FC } from 'react';

import styles from './index.module.scss';
import { IStartContentWrapper } from '../../core/types';

const StartContentWrapper: FC<IStartContentWrapper> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default StartContentWrapper;
