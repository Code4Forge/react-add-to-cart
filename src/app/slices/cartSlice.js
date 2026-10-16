import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../productsData";

const initialState = {
    products: PRODUCTS,
    cart: [],
};

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let item = state.cart.find((item) => item.id == action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload,
            );
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
