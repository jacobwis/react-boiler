import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from '../reducers';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore<AppState>(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
