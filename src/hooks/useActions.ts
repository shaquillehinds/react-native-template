import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

export const useActions = () => {
  const dispatch = useDispatch();

  // binds the actionCreators to dispatch and returns an object with the bound actionCreators
  // All we have to do is call the bound action creator and it's automatically dispatched
  // { searchRepositories: (term: string) => dispatch(actionCreators.searchRepositories(term))}
  return bindActionCreators(actionCreators, dispatch);
};
