import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: {},
  showVideoModal: false,
  videoUrl: "",
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
    setShowVideoModal: (state, action) => {
      state.showVideoModal = action.payload.value;
      state.videoUrl = action.payload.videoUrl
    }
  },
});

export const { setToast, clearToast, setShowVideoModal } = globalSlice.actions;

export default globalSlice.reducer;
