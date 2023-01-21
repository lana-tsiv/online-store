import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch