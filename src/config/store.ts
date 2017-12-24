import { createStore } from 'redux';
import rootReducer, { AppState } from '../reducers';

const store = createStore<AppState>(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
