/* eslint-disable arrow-parens */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useCount } from '../../../core/store/score-context';
import data from '../../../core/config/data.json';

import style from './index.module.scss';
import ScoreOctagon from '../../ui/ScoreOctagon';

const sideBar = () => {
  const questionsList = data;
  const {
    state: { questionId },
  } = useCount();

  const getVariant = (id: number) => {
    if (id === questionId) {
      return 'current';
    }

    if (id <= questionId) {
      return 'finished';
    }

    return 'inactive';
  };

  return (
    <div className={style.sidebar}>
      <div className={style.list}>
        {questionsList
          .slice(0)
          .reverse()
          .map(question => (
            <ScoreOctagon key={question.id} variant={getVariant(question.id)}>
              {`$${question.cost}`}
            </ScoreOctagon>
          ))}
      </div>
    </div>
  );
};

export default sideBar;
