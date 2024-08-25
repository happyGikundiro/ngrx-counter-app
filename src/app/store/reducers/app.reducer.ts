import { Action } from '@ngrx/store';
import { counterReducer, CounterState, initialState } from './counter.reducer';
import { counterHistoryReducer, CounterHistoryState, initialHistory } from './counter-history.reducer';

export interface AppState {
  counterState: CounterState;
  counterHistoryState: CounterHistoryState;
}

export const initialAppState: AppState = {
  counterState: initialState,
  counterHistoryState: initialHistory,
};

export function appReducer(state: AppState = initialAppState, action: Action): AppState {
  return {
    counterState: counterReducer(state.counterState, action),
    counterHistoryState: counterHistoryReducer(state.counterHistoryState, action),
  };
}
