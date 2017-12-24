import { Dispatch } from 'redux';
import { TypeKeys } from '../constants';

interface OnIncrement {
  type: TypeKeys.ON_INCREMENT;
}

interface OnDecrement {
  type: TypeKeys.ON_DECREMENT;
}

export type CounterAction = OnIncrement | OnDecrement;

export const onIncrement = (): OnIncrement => ({
  type: TypeKeys.ON_INCREMENT
});

export const onDecrement = (): OnDecrement => ({
  type: TypeKeys.ON_DECREMENT
});

export const doubleIncrement = () => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch(onIncrement());
    dispatch(onIncrement());
  };
};
