import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetServiceResponse, ServicesResponse } from "../interfaces";
const initialState: GetServiceResponse = [];

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    set(state, action: PayloadAction<GetServiceResponse>) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const servicesActions = servicesSlice.actions;
const services = servicesSlice.reducer;

export default services;
