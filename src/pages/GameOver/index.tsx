import React from 'react';

import LikeImage from '../../assets/images/like.svg';
import { StartContainer } from '../../containers/StartContainer';
import NavigationButton from '../../components/ui/NavigationButton';
import StartContentWrapper from '../../containers/StartContentWrapper';
import { FINISH_BUTTON, routes, START_IMAGE_ALT } from '../../core/constants';

export const GameOver = () => (
  <StartContainer>
    <img src={LikeImage} alt={START_IMAGE_ALT} />

    <StartContentWrapper>
      <NavigationButton path={routes.gameStart}>
        {FINISH_BUTTON}
      </NavigationButton>
    </StartContentWrapper>
  </StartContainer>
);
