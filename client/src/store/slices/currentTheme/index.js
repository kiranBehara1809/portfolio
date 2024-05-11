import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalState = {
  value: null,
};
const CurrentThemeSlice = createSlice({
  name: "currentTheme",
  initialState: initalState,
  reducers: {
    setCurrentTheme: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const CURRENT_THEME_ACTIONS = CurrentThemeSlice.actions;
export default CurrentThemeSlice;
