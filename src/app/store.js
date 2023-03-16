import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../feature/api/apiSlice";
import authSlice from "../feature/auth/authSlice";
import basketSlice from "../feature/basket/basketSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    basket: basketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
