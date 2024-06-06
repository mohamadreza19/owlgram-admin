import { createSlice } from '@reduxjs/toolkit';
import { ContactUsResponse } from '../interfaces';
const initialState: ContactUsResponse = [];

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const contactUsActions = contactUsSlice.actions;
export const contactUs = contactUsSlice.reducer;
