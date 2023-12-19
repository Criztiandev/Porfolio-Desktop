import { configureStore, Reducer, combineReducers } from "@reduxjs/toolkit";
import windowReducer, { WindowState } from "./slice/window.slice";

export interface RootState {
  window: WindowState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  window: windowReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
