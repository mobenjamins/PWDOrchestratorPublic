import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   showToast: {},
   showVideoModal: false,
   showLogoutModal: true,
   videoUrl: ''
};

export const globalSlice = createSlice({
   name: 'globals',
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
         state.videoUrl = action.payload.videoUrl;
      },
      setShowLogoutModal: (state, action) => {
         state.showLogoutModal = action.payload.value;
      }
   }
});

export const { setToast, clearToast, setShowVideoModal, setShowLogoutModal } = globalSlice.actions;

export default globalSlice.reducer;
