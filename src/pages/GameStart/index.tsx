import React from 'react';

import styles from './index.module.scss';
import LikeImage from '../../assets/images/like.svg';
import { routes, messages } from '../../core/constants';
import { StartContainer } from '../../containers/StartContainer';
import NavigationButton from '../../components/ui/NavigationButton';
import StartContentWrapper from '../../containers/StartContentWrapper';

export const GameStart = () => (
  <StartContainer>
    <img src={LikeImage} alt={messages.START_IMAGE_ALT} />

    <StartContentWrapper>
      <div className={styles.containerTitle}>{messages.START_TITLE}</div>
      <NavigationButton path={routes.game}>
        {messages.START_BUTTON}
      </NavigationButton>
    </StartContentWrapper>
  </StartContainer>
);
