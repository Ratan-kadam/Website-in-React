import { combineReducers } from 'redux';
import input from '../reducers/input';
import navReducer from '../reducers/NavReducer';
import footerReducer from '../reducers/NavReducer';

const rootReducer = combineReducers({
  input,
  navReducer,
  footerReducer,
});

export default rootReducer;
