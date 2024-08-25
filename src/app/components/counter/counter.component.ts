
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CounterHistoryState } from '../../store/reducers/counter-history.reducer'; 
import * as CounterActions from '../../store/actions/counter.actions';
import { currentCounter } from '../../store/selectors/counter.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

  form!: FormGroup;
  counts$!: Observable<number>;
  history$!: Observable<number[]>;

  constructor(private fb: FormBuilder, private store: Store<{ counterHistory: CounterHistoryState }>) {}

  ngOnInit() {
    this.form = this.fb.group({
      inputValue: [null, [Validators.required, Validators.min(0)]]
    });

    this.counts$ = this.store.select(currentCounter);
    this.history$ = this.store.select('counterHistory').pipe(map(state => state.history));
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

  incrementBy() {
    const value = this.form.get('inputValue')?.value;
    if (this.form.valid && value !== null) {
      this.store.dispatch(CounterActions.incrementBy({ value }));
    }
  }

  decrementBy() {
    const value = this.form.get('inputValue')?.value;
    if (this.form.valid && value !== null) {
      this.store.dispatch(CounterActions.decrementBy({ value }));
    }
  }

  undoLastAction() {
    this.store.dispatch(CounterActions.undoLastAction());
    this.history$.subscribe(history => {
      const lastValue = history[history.length - 1];
      this.store.dispatch(CounterActions.setCounter({ counter: lastValue }));
    });
  }
  
  onSubmit() {
    const value = this.form.get('inputValue')?.value;
    if (this.form.valid && value !== null) {
      console.log('Form submitted with value:', value);
    }
  }
}

