import { combineReducers } from 'redux';
import templateReducer from './template.reducer';

const reducers = combineReducers({ template: templateReducer });

export type State = ReturnType<typeof reducers>;

export default reducers;
