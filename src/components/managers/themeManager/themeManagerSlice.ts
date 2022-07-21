import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  themeMode: "inherited" | "custom";
  themeStyle: "dark" | "light";
}

const initialState: themeState = {
  themeMode: "inherited",
  themeStyle: "dark",
};

export const themeManagerSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeThemeMode: (state) => {
      state.themeMode =
        state.themeMode === "inherited" ? "custom" : "inherited";
    },
    changeThemeStyle: (state) => {
      state.themeStyle = state.themeStyle === "light" ? "dark" : "light";
    },
  },
});

export const { changeThemeMode, changeThemeStyle } = themeManagerSlice.actions;

export default themeManagerSlice.reducer;
