import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import { userApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
