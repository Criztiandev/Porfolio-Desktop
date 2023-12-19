import { createSlice } from "@reduxjs/toolkit";
import { handleSearchReducer } from "../reducer/browser.reducer";

export interface browserState {
  name: string;
  search: string;
}

export interface browserInitialState {
  [key: string]: browserState;
}

const initialState: browserInitialState = {};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    handleSearch: handleSearchReducer,
  },
});
export const { handleSearch } = browserSlice.actions;
export default browserSlice.reducer;
