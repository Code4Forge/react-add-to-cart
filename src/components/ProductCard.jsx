import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({ product, handleAddToCart }) => {
    return (
        <NavLink
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
        >
            <div className="relative overflow-hidden h-44 bg-slate-100">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-indigo-600 font-semibold text-[10px] px-2.5 py-0.5 rounded-full">
                    {product.category}
                </span>
            </div>

            <div className="p-4 flex flex-col grow">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>⭐ {product.rating}</span>
                    <span>Stock: {product.stock}</span>
                </div>

                <h2 className="text-sm font-bold text-slate-800 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                </h2>

                <p className="text-slate-600 text-[11px] mb-3 grow line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                    <span className="text-sm font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                    <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer shadow-sm"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </NavLink>
    )
}

export default ProductCard