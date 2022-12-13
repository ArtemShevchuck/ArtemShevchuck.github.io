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

// ACTIONS
export enum CountActionKind {
  CLEAR_STATE = 'CLEAR_STATE',
  NEXT_QUESTION = 'NEXT_QUESTION',
}
