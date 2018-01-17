import { combineReducers } from 'redux';
import connect from './connect'

const rootReducer = combineReducers({
  connected: connect
});

export default rootReducer;
