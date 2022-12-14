import * as React from 'react';

import { CountActionKind } from '../constants';
import { CountAction, CountState } from '../types';

const initialState = { questionId: 0, score: 0 };

const CountContext = React.createContext({
  state: { questionId: 0, score: 0 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: ({ type }: any) => type,
});

function countReducer(prevState: CountState, action: CountAction) {
  const { type, payload } = action;

  switch (type) {
    case CountActionKind.NEXT_QUESTION: {
      return {
        ...prevState,
        questionId: prevState.questionId + 1,
        score: payload,
      };
    }
    case CountActionKind.CLEAR_STATE: {
      return { ...prevState, questionId: 0, score: 0 };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountProvider({ children }: ICountProvider) {
  const [state, dispatch] = React.useReducer(countReducer, initialState);

  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { CountProvider, useCount };

interface ICountProvider {
  children: React.ReactNode;
}
