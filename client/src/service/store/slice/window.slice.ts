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

const initialState: WindowState = {
  isMaximize: false,
  isClose: false,
  isMinimize: false,
};

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
