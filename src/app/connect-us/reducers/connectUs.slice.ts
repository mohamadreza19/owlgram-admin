import { createSlice } from "@reduxjs/toolkit";
import { ConnectUsResponse } from "../interfaces";
const initialState: ConnectUsResponse = [];

const connectUsSlice = createSlice({
  name: "connectUs",
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const connectUsActions = connectUsSlice.actions;
export const connectUs = connectUsSlice.reducer;
