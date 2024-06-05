import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    openSideBar(state) {
      state.isSidebarOpen = true;
    },
    toggleSideBar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSideBar(state) {
      state.isSidebarOpen = false;
    },
  },
});
export const themeSliceActions = themeSlice.actions;
export default themeSlice.reducer;
