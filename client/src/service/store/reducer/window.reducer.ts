import { PayloadAction } from "@reduxjs/toolkit";
import { windowInitialState } from "../slice/window.slice";

export const handleMaximize = (
  state: windowInitialState,
  action: PayloadAction<string>
) => {
  console.log(action.payload);
  const id = action.payload;
  state[id] = { ...state[id], isMaximize: !state[id]?.isMaximize };
};

export const handleMinimize = (
  state: windowInitialState,
  action: PayloadAction<string>
) => {
  const id = action.payload;
  state[id] = { ...state[id], isMinimize: !state[id]?.isMinimize };
};

export const handleClose = (
  state: windowInitialState,
  action: PayloadAction<string>
) => {
  const id = action.payload;
  state[id] = { ...state[id], isClose: !state[id]?.isClose };
};
