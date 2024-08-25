import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const currentCounter = createSelector(
  selectCounterState,
  (state: CounterState) => state.counter
);
