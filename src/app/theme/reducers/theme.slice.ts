import { createSlice } from "@reduxjs/toolkit";
import { ThemeResponse } from "../interfaces";
const initialState:ThemeResponse = {
   
  };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;