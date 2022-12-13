import React from 'react';

import LikeImage from '../../assets/images/like.svg';
import TotalScore from '../../components/ui/TotalScore';
import { messages, routes } from '../../core/constants';
import { useCount } from '../../core/store/score-context';
import { StartContainer } from '../../containers/StartContainer';
import NavigationButton from '../../components/ui/NavigationButton';
import StartContentWrapper from '../../containers/StartContentWrapper';

export const GameOver = () => {
  const {
    state: { score },
  } = useCount();

  return (
    <StartContainer>
      <img src={LikeImage} alt={messages.START_IMAGE_ALT} />

      <StartContentWrapper>
        <TotalScore>{score}</TotalScore>
        <NavigationButton path={routes.gameStart}>
          {messages.FINISH_BUTTON}
        </NavigationButton>
      </StartContentWrapper>
    </StartContainer>
  );
};
