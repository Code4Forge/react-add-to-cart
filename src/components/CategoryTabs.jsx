import React from 'react';
import { PRODUCTS } from '../productsData';

const CategoryTabs = ({ selectedCategory, onSelectCategory }) => {
    const categories = [...new Set(['All', ...PRODUCTS.map(item => item.category)])];

    return (
        <div className="w-full overflow-x-auto mb-6 scrollbar-none">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
                {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryTabs;