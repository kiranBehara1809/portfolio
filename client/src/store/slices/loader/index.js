import { createSlice, configureStore } from "@reduxjs/toolkit";


const initalState = {
  loading: false,
};
const loaderSlice = createSlice({
  name: "loading",
  initialState: initalState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const LOADER_ACTIONS = loaderSlice.actions;
export default loaderSlice;
