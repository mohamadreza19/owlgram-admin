import { combineReducers } from "redux";
import { questionAnswer } from "./questionAnswer.slice";

export default combineReducers({
  questionAnswer: questionAnswer,
});
