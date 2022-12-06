import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

import { INavigationButton } from '../../../core/types';

const NavigationButton: FC<INavigationButton> = ({ path, children }) => (
  <Link to={path} className={styles.NavigationButton}>
    {children}
  </Link>
);

export default NavigationButton;
