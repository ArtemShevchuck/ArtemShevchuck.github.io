/* eslint-disable import/namespace */
/* eslint-disable no-confusing-arrow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { Octagon } from '../../components/ui/Octagon';
import QuestionText from '../../components/ui/QuestionText';
import { AnswersWrapper } from '../AnswersWrapper';
import style from './index.module.scss';
import data from '../../core/config/data.json';
import { useCount } from '../../core/store/score-context';

const GameContainer = () => {
  const [answerId, setAnswerId] = useState<number | undefined>(undefined);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const questionsList = data;
  const {
    state: { questionId },
    dispatch,
  } = useCount();

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
      setScore(questionsList[questionId].cost);

      if (questionId === questionsList.length - 1) {
        setIsGameOver(true);
        return;
      }

      setAnswerId(undefined);
      dispatch({ type: 'increment' });
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
    return (
      <div>
        <p>Game over</p>
        <p>You result: {score}$</p>
      </div>
    );
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
