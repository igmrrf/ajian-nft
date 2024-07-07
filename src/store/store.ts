import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./features/shop/shopSlice";
import cartSlice from "./features/cart/cartSlice";
import authSlice from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      shop: shopSlice,
      cart: cartSlice,
      auth: authSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
