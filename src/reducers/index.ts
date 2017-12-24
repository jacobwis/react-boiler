import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';

export interface AppState {
  counter: CounterState;
}

const rootReducer = combineReducers<AppState>({
  counter
});

export default rootReducer;
