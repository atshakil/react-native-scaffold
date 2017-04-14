import { combineReducers } from "redux";
import nav from './nav';
import message from './message';

export default combineReducers({
  nav,
  message
});
