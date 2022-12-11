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
import { questionsList } from '../../core/store';
import { AnswersWrapper } from '../AnswersWrapper';
import style from './index.module.scss';

const GameContainer = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [answerId, setAnswerId] = useState<number | undefined>(undefined);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const getVariant = (id: number) =>
    answerId === id ? getColorVariant(id) : 'inactive';

  const checkAnswer = (id: number) => {
    if (id === questionsList[currentQuestionId].correctAnswerId) {
      setScore(questionsList[currentQuestionId].cost);

      if (currentQuestionId === questionsList.length - 1) {
        setIsGameOver(true);
        return;
      }

      setAnswerId(undefined);
      setCurrentQuestionId(prev => prev + 1);
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

  const getColorVariant = (id: number) => {
    if (questionsList[currentQuestionId].correctAnswerId === id) {
      return 'correct';
    }

    return 'wrong';
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
      <QuestionText>{questionsList[currentQuestionId].question}</QuestionText>
      <AnswersWrapper>
        {questionsList[currentQuestionId].answers.map(answer => (
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
