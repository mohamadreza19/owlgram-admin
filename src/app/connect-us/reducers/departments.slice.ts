import { createSlice } from "@reduxjs/toolkit";
import { ConnectUsResponse, DepartmentsResponse } from "../interfaces";
const initialState: DepartmentsResponse = [];

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const departmentsActions = departmentsSlice.actions;
export const departments = departmentsSlice.reducer;
