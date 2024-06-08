import { createSlice } from "@reduxjs/toolkit";
import { SocialNetworksResponse } from "../interfaces";
const initialState:SocialNetworksResponse = {
   
  };

const socialNetworksSlice = createSlice({
  name: "socialNetworks",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const socialNetworksActions = socialNetworksSlice.actions;

export default socialNetworksSlice.reducer;