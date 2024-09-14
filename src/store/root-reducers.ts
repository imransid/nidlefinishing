import {combineReducers} from '@reduxjs/toolkit';
import {usersReducer, settingsReducer} from './slices/features/index';

const rootReducers = combineReducers({
  users: usersReducer,
  settings: settingsReducer,
});

export default rootReducers;
