import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth.slice";
import GlobalReducer from "./globals.slice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    globals: GlobalReducer,
  },
});
