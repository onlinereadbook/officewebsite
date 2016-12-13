import { combineReducers } from 'redux';
import runtime from './runtime';
import intl from './intl';
import test from './test';
import common from './common';

export default combineReducers({
  runtime,
  intl,
  test,
  common
});
