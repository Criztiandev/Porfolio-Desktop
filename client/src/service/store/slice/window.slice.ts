import { createSlice } from "@reduxjs/toolkit";
import {
  handleClose,
  handleMaximize,
  handleMinimize,
} from "../reducer/window.reducer";

export interface WindowState {
  isMaximize: boolean;
  isClose: boolean;
  isMinimize: boolean;
}

export interface windowInitialState {
  [key: string]: WindowState;
}

const initialState: windowInitialState = {};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    toggleMaximize: handleMaximize,
    toggleMinimize: handleMinimize,
    toggleClose: handleClose,
  },
});
export const { toggleMaximize, toggleClose, toggleMinimize } =
  windowSlice.actions;
export default windowSlice.reducer;
