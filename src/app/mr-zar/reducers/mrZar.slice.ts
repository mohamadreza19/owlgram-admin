import { createSlice } from "@reduxjs/toolkit";
import { MrZarResponse } from "../interfaces";
const initialState:MrZarResponse = {
   
  };

const mrZarSlice = createSlice({
  name: "mrZar",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const mrZarActions = mrZarSlice.actions;

export default mrZarSlice.reducer;