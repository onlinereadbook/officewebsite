import { combineReducers } from 'redux';
import runtime from './runtime';
import intl from './intl';
//import test from './test';
import common from './common';
import tablecs from './tablecs';

export default combineReducers({
  runtime,
  intl,
  tablecs,
  common,
  //test
});
