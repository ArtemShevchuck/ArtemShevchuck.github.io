import React from 'react';

import styles from './index.module.scss';
import { StartContainer } from '../../containers/StartContainer';

export const NotFound = () => (
  <StartContainer>
    <div className={styles.label}>Page Not Found</div>
  </StartContainer>
);
