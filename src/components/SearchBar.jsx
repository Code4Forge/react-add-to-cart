import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Set a timer to delay the search execution (Amazon-style debouncing)
        const handler = setTimeout(() => {
            onSearch(searchTerm);
        }, 500); // Wait 500ms after user stops typing before triggering search

        // Clear timeout on every keystroke to reset the delay timer
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleClear = () => {
        setSearchTerm('');
        onSearch(''); // Reset search results immediately
    };

    return (
        <div className="w-full max-w-7xl mx-auto mb-6 sticky z-5 top-20">
            <div className="relative flex items-center">
                {/* Search Icon */}
                <div className="absolute left-4 text-slate-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Search Input Field with Debounce */}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-12 pr-10 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-800 placeholder-slate-400 text-sm transition-all"
                />

                {/* Clear Button */}
                {searchTerm && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                        title="Clear search"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;