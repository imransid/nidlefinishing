import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import {SET_LINE} from './constants';
import {IReceiveItem, LineData, type ISetLineState} from './types';
const setLineInitialState: ISetLineState = {
  finishingOrg: [],
  finishingProcessList: [],
};

export const setLineSlice = createSlice({
  name: SET_LINE,
  initialState: setLineInitialState,
  reducers: {
    setFinishOrg: (
      state: ISetLineState,
      payload: PayloadAction<LineData[]>,
    ) => {
      state.finishingOrg = payload.payload;
    },
    setProcessList: (
      state: ISetLineState,
      payload: PayloadAction<IReceiveItem[]>,
    ) => {
      state.finishingProcessList = payload.payload;
    },
  },
});

export const {setFinishOrg, setProcessList} = setLineSlice.actions;

export default setLineSlice.reducer;
