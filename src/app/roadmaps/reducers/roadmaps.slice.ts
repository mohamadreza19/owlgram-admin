import { createSlice } from '@reduxjs/toolkit';
import { RoadmapsResponse } from '../interfaces';
const initialState: RoadmapsResponse = [];

const roadmapsSlice = createSlice({
  name: 'roadmaps',
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    remove(state, action) {},
  },
});

export const roadmapsActions = roadmapsSlice.actions;
export const roadmaps = roadmapsSlice.reducer;
