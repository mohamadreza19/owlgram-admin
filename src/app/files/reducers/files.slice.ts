import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    add(state, action) {},
    remove(state, action) {},
  },
});

export const filesActions = filesSlice.actions;

export default filesSlice.reducer;
