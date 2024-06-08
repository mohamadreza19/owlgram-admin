import { createSlice } from "@reduxjs/toolkit";
import { DownloadsResponse } from "../interfaces";
const initialState: DownloadsResponse = [];

const downloadsSlice = createSlice({
  name: "downloads",
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const downloadsActions = downloadsSlice.actions;
export const downloads = downloadsSlice.reducer;
