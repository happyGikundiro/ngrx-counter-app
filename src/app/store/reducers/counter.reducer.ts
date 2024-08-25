
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    counter: state.counter + 1
  })),

  on(CounterActions.decrement, (state) => ({
    ...state,
    counter: state.counter > 0 ? state.counter - 1 : 0
  })),

  on(CounterActions.reset, (state) => ({
    ...state,
    counter: 0
  })),

  on(CounterActions.incrementBy, (state, { value }) => ({
    ...state,
    counter: state.counter + value
  })),

  on(CounterActions.decrementBy, (state, { value }) => ({
    ...state,
    counter: state.counter - value >= 0 ? state.counter - value : 0
  })),

  on(CounterActions.setCounter, (state, { counter }) => ({
    ...state,
    counter
  }))

);
