import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AboutOwlgramByLanguageIdResponse } from "../interfaces";

const initialState: AboutOwlgramByLanguageIdResponse = [];

const aboutLanguageSlice = createSlice({
  name: "aboutLanguage",
  initialState,
  reducers: {
    set(state, action: PayloadAction<AboutOwlgramByLanguageIdResponse>) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const aboutActions = aboutLanguageSlice.actions;

const aboutLanguage = aboutLanguageSlice.reducer;
export default aboutLanguage;
