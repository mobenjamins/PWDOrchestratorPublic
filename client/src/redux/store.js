import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth.slice";
import GlobalReducer from "./globals.slice";
import FormsReducer from "./forms/forms.slice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    globals: GlobalReducer,
    forms: FormsReducer,
  },
});
