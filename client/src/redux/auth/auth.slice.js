import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
