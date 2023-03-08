import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: {},
};

export const globalSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.showToast = action.payload;
    },
    clearToast: (state, action) => {
      state.showToast = {};
    },
  },
});

export const { setToast, clearToast } = globalSlice.actions;

export default globalSlice.reducer;
