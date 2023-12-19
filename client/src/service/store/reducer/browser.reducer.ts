import { PayloadAction } from "@reduxjs/toolkit";
import { browserInitialState } from "../slice/browser.slice";

interface browserPayload {
  id: string;
  search: string;
}

export const handleSearchReducer = (
  state: browserInitialState,
  action: PayloadAction<browserPayload>
) => {
  const id = action.payload?.id;
  state[id] = { ...state[id], search: action.payload?.search };
};
