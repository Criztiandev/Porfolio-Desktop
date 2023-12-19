import { configureStore, Reducer, combineReducers } from "@reduxjs/toolkit";
import windowReducer, { windowInitialState } from "./slice/window.slice";
import browserReducer, { browserInitialState } from "./slice/browser.slice";

export interface RootState {
  window: windowInitialState;
  browser: browserInitialState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  window: windowReducer,
  browser: browserReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
