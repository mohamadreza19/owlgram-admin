import { createSlice } from "@reduxjs/toolkit";
import { QuestionAnswerResponse } from "../interfaces";
const initialState: QuestionAnswerResponse = [];

const questionAnswerSlice = createSlice({
  name: "questionAnswer",
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const questionAnswerActions = questionAnswerSlice.actions;
export const questionAnswer = questionAnswerSlice.reducer;
