// TEXT CONSTANTS
export const messages = {
  START_TITLE: 'Who wants to be a millionaire?',
  START_BUTTON: 'Start',
  START_IMAGE_ALT: 'Like icon',
  FINISH_BUTTON: 'Try again',
  TOTAL_SCORE: 'Total score',
  EARNED: 'earned',
};

// ROUTES
export const routes = {
  gameStart: '/',
  game: '/game',
  gameOver: '/gameOver',
};

export enum CountActionKind {
  INCREASE_QUESTION_ID = 'INCREASE_QUESTION_ID',
  CHANGE_TOTAL_SCORE = 'CHANGE_TOTAL_SCORE',
  CLEAR_STATE = 'CLEAR_STATE',
}
