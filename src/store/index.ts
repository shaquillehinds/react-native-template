import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

export * as actionCreators from './actionCreators';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type Store = typeof store;
