import { combineReducers } from 'redux';
import appReducer from './app.reducer';

const reducers = combineReducers({ app: appReducer });

export type State = ReturnType<typeof reducers>;

export default reducers;
