import React from "react";
import { clearCart, removeFromCart, increaseQty, decreaseQty } from "../app/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartSlice.cart);

    const cartTotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            ></div>

            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">

                    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                        <h2 className="text-lg font-bold text-slate-800">Shopping Cart</h2>
                        <div className="flex items-center gap-3">
                            <button
                                title="Clear Cart"
                                onClick={() => dispatch(clearCart())}
                                className="text-slate-400 hover:text-red-600 transition-colors p-1 rounded-lg cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-slate-500 py-10 text-sm">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} dispatch={dispatch} removeFromCart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                            ))
                        )}
                    </div>

                    <div className="border-t border-slate-200 px-6 py-6 bg-slate-50">
                        <div className="flex justify-between items-center mb-4 text-base font-bold text-slate-900">
                            <span>Subtotal</span>
                            <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            onClick={() => console.log("Dispatch Checkout")}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors text-sm shadow-sm cursor-pointer"
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CartDrawer;