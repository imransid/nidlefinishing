import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { SET_LINE } from './constants';
import { type IReceiveItem, type ISetLineState, type LineData } from './types';
const setLineInitialState: ISetLineState = {
  finishingOrg: [],
  finishingProcessList: [],
  selectedOrgDrop: 0,
  selectedProcessList: 0,
  totalPending: 0
};

export const setLineSlice = createSlice({
  name: SET_LINE,
  initialState: setLineInitialState,
  reducers: {
    setFinishOrg: (state: ISetLineState, payload: PayloadAction<LineData[]>) => {
      state.finishingOrg = payload.payload;
    },
    setProcessList: (state: ISetLineState, payload: PayloadAction<IReceiveItem[]>) => {
      state.finishingProcessList = payload.payload;
    },
    setDropdownOrgValue: (state: ISetLineState, payload: PayloadAction<number>) => {
      state.selectedOrgDrop = payload.payload;
    },
    setDropdownFinishValue: (state: ISetLineState, payload: PayloadAction<number>) => {
      state.selectedProcessList = payload.payload;
    },
    setPendingData: (state: ISetLineState, payload: PayloadAction<number>) => {
      state.totalPending = payload.payload;
    }
  }
});

export const {
  setFinishOrg,
  setProcessList,
  setDropdownOrgValue,
  setDropdownFinishValue,
  setPendingData
} = setLineSlice.actions;

export default setLineSlice.reducer;
