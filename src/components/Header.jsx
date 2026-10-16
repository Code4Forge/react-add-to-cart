import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router';
import CartDrawer from './CartDrawer';
import { House } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartItemCount = useSelector((state) => state.cartSlice.cart.length);

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Left Side: Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                            <House size={28} strokeWidth='2.5' />
                            My<label className='font-black'>CART</label>
                        </Link>
                    </div>

                    {/* Right Side: Desktop Menus & Cart Icon */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Cart Button with Count Badge */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-slate-600 hover:text-indigo-600 p-2 rounded-xl transition-colors cursor-pointer"
                            aria-label="Shopping Cart"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                                {cartItemCount}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Hamburger Button & Mobile Cart Trigger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative text-slate-600 hover:text-indigo-600 p-2 rounded-xl transition-colors cursor-pointer"
                            aria-label="Shopping Cart"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                                {cartItemCount}
                            </span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 rounded-lg cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {/* {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-md">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                            }`
                        }
                    >
                        Products
                    </NavLink>
                </div>
            )} */}

            {/* Cart Slide-Over Drawer */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    );
};

export default Header;