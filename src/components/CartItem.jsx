import React from 'react';

const CartItem = ({ item, dispatch, removeFromCart, increaseQty, decreaseQty }) => {
    return (
        <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-slate-200" />

            <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h3>

                {/* Quantity Controls and Display */}
                <div className="flex items-center gap-2 mt-1">
                    <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-colors"
                        title="Decrease quantity"
                    >
                        -
                    </button>

                    <span className="text-xs font-semibold text-slate-700">Qty: {item.quantity}</span>

                    <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs font-bold cursor-pointer transition-colors"
                        title="Increase quantity"
                    >
                        +
                    </button>
                </div>

                <p className="text-sm font-semibold text-indigo-600 mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>

            {/* Remove Item Icon Button */}
            <button
                title="Remove Item"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-slate-400 hover:text-red-600 p-2 transition-colors cursor-pointer"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default CartItem;