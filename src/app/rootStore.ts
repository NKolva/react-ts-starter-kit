import thunkMiddleware from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import exampleReducer from 'src/store/example';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
  compose;

const rootReducer = combineReducers({
  example: exampleReducer,
});

export const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;
