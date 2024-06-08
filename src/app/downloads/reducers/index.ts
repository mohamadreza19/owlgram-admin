import { combineReducers } from "@reduxjs/toolkit";
import { downloads } from "./downloads.slice";

export default combineReducers({
  downloads: downloads,
});
