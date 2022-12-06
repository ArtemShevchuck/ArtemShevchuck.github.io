import React from 'react';
import { StartContainer } from '../../containers/StartContainer';
import styles from './index.module.scss';

export const NotFound = () => (
  <StartContainer>
    <div className={styles.label}>Page Not Found</div>
  </StartContainer>
);
