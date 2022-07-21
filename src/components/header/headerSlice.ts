import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  showDrawer: boolean;
}

const initialState: HeaderState = {
  showDrawer: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleDrawerState: (state) => {
      state.showDrawer = !state.showDrawer;
    },
  },
});

export const { toggleDrawerState } = headerSlice.actions;

export default headerSlice.reducer;
