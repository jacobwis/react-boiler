import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { onIncrement, onDecrement, doubleIncrement } from './../counterActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

  it('doubleIncrement dispatches an increment action twice', () => {
    const expectedActions = [
      { type: 'ON_INCREMENT' },
      { type: 'ON_INCREMENT' }
    ];

    const store = mockStore({});
    store.dispatch(doubleIncrement());
    const actions = store.getActions();

    expect(actions).toEqual(expectedActions);
  });
});
