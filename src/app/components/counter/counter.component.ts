
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../../store/actions/counter.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterState } from '../../store/reducers/counter.reducer';
import { CounterHistoryState } from '../../store/reducers/counter-history.reducer'; 

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counts$: Observable<number>;
  history$: Observable<number[]>;

  constructor(private store: Store<{ counter: CounterState, counterHistory: CounterHistoryState }>) {
    this.counts$ = store.select('counter').pipe(map(state => state.counter));
    this.history$ = store.select('counterHistory').pipe(map(state => state.history));
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  incrementBy(value: number) {
    this.store.dispatch(CounterActions.incrementBy({ value }));
  }

  decrementBy(value: number) {
    this.store.dispatch(CounterActions.decrementBy({ value }));
  }

  undoLastAction() {
    this.store.dispatch(CounterActions.undoLastAction());
    this.history$.subscribe(history => {
      const lastValue = history[history.length - 1];
      this.store.dispatch(CounterActions.setCounter({ counter: lastValue }));
    });
  }
}
