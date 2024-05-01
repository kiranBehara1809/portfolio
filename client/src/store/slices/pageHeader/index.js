import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalState = {
  name: "Dashboard",
};
const PageHeaderSlice = createSlice({
  name: "pageHeader",
  initialState: initalState,
  reducers: {
    setPageHeader: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const PAGE_HEADER_ACTIONS = PageHeaderSlice.actions;
export default PageHeaderSlice;
