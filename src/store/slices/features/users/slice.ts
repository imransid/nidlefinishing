import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AccessTokenInfo } from '@/store/types/types';

import { USERS } from './constants';
import { type ILogInPayload, type UsersStateType } from './types';
const usersInitialState: UsersStateType = {
  user: {
    data: null,
    isLoading: false,
    errors: '',
    loginStatus: false
  }
};

export const usersSlice = createSlice({
  name: USERS,
  initialState: usersInitialState,
  reducers: {
    getUserAction: (
      state: UsersStateType,
      { payload: ILogInPayload }: PayloadAction<ILogInPayload>
    ) => {
      state.user.isLoading = true;
      state.user.errors = '';
      state.user.loginStatus = false;
    },
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    getUserSuccessAction: (state: UsersStateType, payload: PayloadAction<AccessTokenInfo>) => {
      state.user.isLoading = false;
      state.user.data = payload.payload;
      state.user.loginStatus = true;
      state.user.errors = ''; // Clear any previous errors
    },
    logoutUser: (state: UsersStateType) => {
      state.user.isLoading = false;
      state.user.errors = '';
      state.user.loginStatus = false;
      state.user.data = null;
    }
  }
});

export const { getUserAction, getUserErrorAction, getUserSuccessAction, logoutUser } =
  usersSlice.actions;

export default usersSlice.reducer;
