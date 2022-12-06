import React from 'react';

import styles from './index.module.scss';
import LikeImage from '../../assets/images/like.svg';
import NavigationButton from '../../components/ui/NavigationButton';
import {
  routes,
  START_BUTTON,
  START_IMAGE_ALT,
  START_TITLE,
} from '../../core/constants';
import { StartContainer } from '../../containers/StartContainer';
import StartContentWrapper from '../../containers/StartContentWrapper';

const GameStart = () => (
  <StartContainer>
    <img src={LikeImage} alt={START_IMAGE_ALT} />

    <StartContentWrapper>
      <div className={styles.containerTitle}>{START_TITLE}</div>
      <NavigationButton path={routes.game}>{START_BUTTON}</NavigationButton>
    </StartContentWrapper>
  </StartContainer>
);

export default GameStart;
