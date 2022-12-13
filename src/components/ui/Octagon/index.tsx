import { clsx } from 'clsx';
import React, { FC, useState } from 'react';

import styles from './index.module.scss';
import { IOctagon } from '../../../core/types';

export const Octagon: FC<IOctagon> = ({ children, letter, variant }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoveredColor =
    isHovered && variant === 'inactive' ? styles.hovered : styles[variant];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={clsx(styles.box, hoveredColor)} />
      <div className={clsx(styles.middle, hoveredColor)}>
        <p className={styles.middleLetter}>{letter}</p>
        <p className={styles.middleLabel}>{children}</p>
      </div>
      <div className={clsx(styles.box, hoveredColor)} />
    </div>
  );
};
