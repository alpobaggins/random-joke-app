import { combineReducers } from 'redux';
import allReducer from './all';
import randomReducer from './random';
import withoutChuckReducer from './withoutChuck';

const rootReducer = combineReducers({
  joke: randomReducer,
  jokewc: withoutChuckReducer,
  all: allReducer,
});

export default rootReducer;
