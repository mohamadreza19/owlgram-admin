import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguagesResponse } from "../interfaces";
const initialState: LanguagesResponse = [];

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    add(state, action: PayloadAction<LanguagesResponse>) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const languagesActions = languagesSlice.actions;

const languages = languagesSlice.reducer;
export default languages;
