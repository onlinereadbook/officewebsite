import { combineReducers } from 'redux';
import runtime from './runtime';
import intl from './intl';
import test from './test';

export default combineReducers({
  runtime,
  intl,
  test
});
