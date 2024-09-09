import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './slices/features/users/slice';

const rootReducers = combineReducers({
  users: usersReducer
});

export default rootReducers;
