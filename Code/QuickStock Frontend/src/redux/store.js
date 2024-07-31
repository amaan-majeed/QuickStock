import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice"
import productReducer from "../redux/features/product/productService"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer
    }
})


