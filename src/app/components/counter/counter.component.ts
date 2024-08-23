import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../../store/actions/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counts$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counts$ = store.select('counter');
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

}
