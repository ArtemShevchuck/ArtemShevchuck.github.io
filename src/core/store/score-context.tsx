/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-constructed-context-values */
// ts-ignore
import * as React from 'react';

const defaultValues = { questionId: 0 };

const CountContext = React.createContext({
  state: { questionId: 0 },
  dispatch: ({ type }: any) => type,
});

function countReducer(state: { questionId: number }, action: { type: string }) {
  switch (action.type) {
    case 'increment': {
      return { questionId: state.questionId + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountProvider({ children }: ICountProvider) {
  const [state, dispatch] = React.useReducer(countReducer, defaultValues);

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
