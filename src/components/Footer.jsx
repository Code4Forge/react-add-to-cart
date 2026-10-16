import { House } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-2 font-bold text-indigo-600">
                    <House size={28} strokeWidth='2.5' />
                    My<label className='font-black'>CART</label>
                </div>
                <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} EduPortal. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;