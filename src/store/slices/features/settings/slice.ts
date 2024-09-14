import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import {SETTING} from './constants';
import {type IPayload, type ISettingState} from './types';
import {AccessTokenInfo} from '@/store/types/types';
const settingsInitialState: ISettingState = {
  isLoading: false,
};

export const settingSlice = createSlice({
  name: SETTING,
  initialState: settingsInitialState,
  reducers: {
    setGlobalLoaderAction: (
      state: ISettingState,
      payload: PayloadAction<IPayload>,
    ) => {
      state.isLoading = payload.payload.status;
    },
  },
});

export const {setGlobalLoaderAction} = settingSlice.actions;

export default settingSlice.reducer;
