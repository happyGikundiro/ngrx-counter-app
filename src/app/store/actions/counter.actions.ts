import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Increment] Increment');
export const decrement = createAction('[Counter Decrement] Decrement');
export const reset = createAction('[Counter Reset] Reset');