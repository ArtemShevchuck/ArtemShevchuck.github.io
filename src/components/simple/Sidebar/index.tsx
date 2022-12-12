/* eslint-disable arrow-parens */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useCount } from '../../../core/store/score-context';
import data from '../../../core/config/data.json';

import style from './index.module.scss';

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
      <ul>
        {questionsList
          .slice(0)
          .reverse()
          .map(question => (
            <li key={question.id}>
              {`${question.cost} ${getVariant(question.id)}`}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default sideBar;
