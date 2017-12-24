import { TypeKeys } from './../constants';
import { CounterAction } from './../actions/counterActions';

export interface CounterState {
  count: number;
}

const intialState = {
  count: 0
};

const counter = (state: CounterState = intialState, action: CounterAction) => {
  switch (action.type) {
    case TypeKeys.ON_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case TypeKeys.ON_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default counter;
