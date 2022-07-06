import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { favourites } from './reducers/favourites';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  combineReducers({
    favourites,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
