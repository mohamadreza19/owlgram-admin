import { combineReducers } from "redux";
import { connectUs } from "./connectUs.slice";
import { departments } from "./departments.slice";

export default combineReducers({
  connectUs: connectUs,
  departments: departments,
});
