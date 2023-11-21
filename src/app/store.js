import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Product/ProductSlice";
import authReducer from "../features/auth/authSlice"
import cartReducer from "../features/cart/CartSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
  },
});
