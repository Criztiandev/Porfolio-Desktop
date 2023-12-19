import { WindowState } from "../slice/window.slice";

export const handleMaximize = (state: WindowState) => {
  state.isMaximize = !state.isMaximize;
};

export const handleMinimize = (state: WindowState) => {
  state.isMinimize = !state.isMinimize;
};

export const handleClose = (state: WindowState) => {
  state.isClose = !state.isClose;
};
