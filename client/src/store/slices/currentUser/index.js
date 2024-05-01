import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalState = {
  currentUser: null,
};
const CurrentUserSlice = createSlice({
  name: "currentUser",
  initialState: initalState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const CURRENT_USER_ACTIONS = CurrentUserSlice.actions;
export default CurrentUserSlice;
