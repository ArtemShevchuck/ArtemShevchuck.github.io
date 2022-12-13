import React from 'react';

import styles from './index.module.scss';
import data from '../../core/config/data.json';
import { useCount } from '../../core/store/score-context';
import ScoreOctagon from '../../components/ui/ScoreOctagon';
import { getScoreOctagonVariant } from '../../core/services';

const ScoreContainer = () => {
  const questionsList = data;
  const {
    state: { questionId },
  } = useCount();

  return (
    <div className={styles.menu}>
      <input className={styles.menuBtn} type="checkbox" id="menuBtn" />
      <div className={styles.sidebar}>
        <div className={styles.list}>
          {questionsList
            .slice(0)
            .reverse()
            .map(question => (
              <ScoreOctagon
                key={question.id}
                variant={getScoreOctagonVariant(question.id, questionId)}>
                {`$${question.cost}`}
              </ScoreOctagon>
            ))}
        </div>
      </div>

      <label className={styles.menuIcon} htmlFor="menuBtn">
        <span className={styles.menuIconNav} />
      </label>
    </div>
  );
};

export default ScoreContainer;
