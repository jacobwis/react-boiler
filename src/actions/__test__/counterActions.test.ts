import { onIncrement, onDecrement } from './../counterActions';

describe('counter actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: 'ON_INCREMENT'
    };

    expect(onIncrement()).toEqual(expectedAction);
  });

  it('should create an action to decrement the counter', () => {
    const expectedAction = {
      type: 'ON_DECREMENT'
    };

    expect(onDecrement()).toEqual(expectedAction);
  });
});
