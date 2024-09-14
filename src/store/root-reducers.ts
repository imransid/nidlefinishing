import {combineReducers} from '@reduxjs/toolkit';
import {
  usersReducer,
  settingsReducer,
  setLineReducer,
} from './slices/features/index';

const rootReducers = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
  setLine: setLineReducer,
});

export default rootReducers;
