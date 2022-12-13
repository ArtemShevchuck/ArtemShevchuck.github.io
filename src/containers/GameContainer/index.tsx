import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './index.module.scss';
import data from '../../core/config/data.json';
import { AnswersWrapper } from '../AnswersWrapper';
import { Octagon } from '../../components/ui/Octagon';
import { useCount } from '../../core/store/score-context';
import QuestionText from '../../components/ui/QuestionText';
import { CountActionKind, routes } from '../../core/constants';

const GameContainer = () => {
  const [answerId, setAnswerId] = useState<number | undefined>(undefined);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    dispatch({
      type: CountActionKind.CLEAR_STATE,
    });
  }, []);

  const questionsList = data;
  const {
    state: { questionId },
    dispatch,
  } = useCount();
  const navigate = useNavigate();

  const getVariant = (id: number) =>
    answerId === id ? getColorVariant(id) : 'inactive';

  const getColorVariant = (id: number) => {
    if (questionsList[questionId].correctAnswerId === id) {
      return 'correct';
    }

    return 'wrong';
  };

  const checkAnswer = (id: number) => {
    if (id === questionsList[questionId].correctAnswerId) {
      dispatch({
        type: CountActionKind.CHANGE_TOTAL_SCORE,
        payload: questionsList[questionId].cost,
      });

      if (questionId === questionsList.length - 1) {
        setIsGameOver(true);
        return;
      }

      setAnswerId(undefined);
      dispatch({ type: CountActionKind.INCREASE_QUESTION_ID });
    } else {
      setIsGameOver(true);
    }
  };

  const handleClick = (id: number) => {
    setAnswerId(id);
    setTimeout(() => {
      checkAnswer(id);
    }, 2000);
  };

  if (isGameOver) {
    navigate(routes.gameOver);
  }

  return (
    <div className={style.content}>
      <QuestionText>{questionsList[questionId].question}</QuestionText>
      <AnswersWrapper>
        {questionsList[questionId].answers.map(answer => (
          <div key={answer.id} onClick={() => handleClick(answer.id)}>
            <Octagon letter={answer.letter} variant={getVariant(answer.id)}>
              {answer.text}
            </Octagon>
          </div>
        ))}
      </AnswersWrapper>
    </div>
  );
};

export default GameContainer;
