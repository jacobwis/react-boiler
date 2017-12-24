import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { AppState } from './reducers';
import {
  onIncrement,
  onDecrement,
  doubleIncrement,
  CounterAction
} from './actions/counterActions';

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  doubleIncrement: () => void;
}

const App: React.StatelessComponent<Props> = props => (
  <div>
    <h1>{props.count}</h1>
    <div>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.doubleIncrement}>++</button>
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  count: state.counter.count
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
  onIncrement: () => {
    dispatch(onIncrement());
  },
  onDecrement: () => {
    dispatch(onDecrement());
  },
  doubleIncrement: () => {
    dispatch(doubleIncrement());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
