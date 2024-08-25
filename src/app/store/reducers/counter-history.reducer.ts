  
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export interface CounterHistoryState {
  history: number[];
}

export const initialHistory: CounterHistoryState = {
  history: [0]
};

export const counterHistoryReducer = createReducer(
  initialHistory,
  on(CounterActions.increment, (state) => ({
    ...state,
    history: [...state.history, state.history[state.history.length - 1] + 1]
  })),

  on(CounterActions.decrement, (state) => ({
    ...state,
    history: [...state.history, state.history[state.history.length - 1] - 1]
  })),

  on(CounterActions.reset, (state) => ({
    ...state,
    history: [...state.history, 0]
  })),

  on(CounterActions.incrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.history[state.history.length - 1] + value]
  })),

  on(CounterActions.decrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.history[state.history.length - 1] - value]
  })),

  on(CounterActions.undoLastAction, (state) => {
    if (state.history.length > 1) {
      const previousHistory = state.history.slice(0, -1);
      return {
        ...state,
        history: previousHistory
      };
    }
    return state;
  })
);
