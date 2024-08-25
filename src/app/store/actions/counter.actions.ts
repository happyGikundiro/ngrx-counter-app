import { createAction,props } from '@ngrx/store';

export const increment = createAction('[Counter Increment] Increment');

export const decrement = createAction('[Counter Decrement] Decrement');

export const reset = createAction('[Counter Reset] Reset');

export const incrementBy = createAction(
    '[Counter] Increment By',
    props<{ value: number }>()
  );

export const decrementBy = createAction(
    '[Counter] Decrement By',
    props<{ value: number }>()
  );

export const undoLastAction = createAction('[Counter] Undo Last Action');

export const setCounter = createAction(
    '[Counter] Set Counter',
    props<{ counter: number }>()
  );