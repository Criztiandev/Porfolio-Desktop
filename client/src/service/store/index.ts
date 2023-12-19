import { configureStore, Reducer, combineReducers } from "@reduxjs/toolkit";
import windowReducer, { windowInitialState } from "./slice/window.slice";

export interface RootState {
  window: windowInitialState;
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
