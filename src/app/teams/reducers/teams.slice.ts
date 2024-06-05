import { createSlice } from '@reduxjs/toolkit';
import { TeamsResponse } from '../interfaces';
const initialState: TeamsResponse = [];

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    set(state, action) {
      console.log(action);
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const teamsActions = teamsSlice.actions;
export const teamsreducer = teamsSlice.reducer;

export default teamsreducer;
