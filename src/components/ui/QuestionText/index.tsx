import React, { FC } from 'react';

import styles from './index.module.scss';
import { IQuestionText } from '../../../core/types';

const QuestionText: FC<IQuestionText> = ({ children }) => (
  <div className={styles.text}>{children}</div>
);

export default QuestionText;
