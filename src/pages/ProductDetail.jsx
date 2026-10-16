import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PRODUCTS } from '../productsData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/slices/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const [adding, setAdding] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const product = PRODUCTS.find((p) => p.id === id);
    const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : '');

    if (!product) {
        return (
            <div className="max-w-md mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Product Not Found</h2>
                <p className="text-slate-500 text-sm mb-6">The product you requested does not exist.</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = (e) => {
        dispatch(addToCart(product));
        setAdding(true);
        setTimeout(() => {
            setAdding(false);
        }, 2000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 mb-6 transition-colors cursor-pointer"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Products
            </button>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Side: Multiple Images Gallery */}
                <div className="space-y-4">
                    <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                        <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(img)}
                                className={`w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${selectedImage === img ? 'border-indigo-600 shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Details & Action */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="bg-indigo-50 text-indigo-600 font-semibold text-xs px-3 py-1 rounded-full">
                                {product.category}
                            </span>
                            <span className="text-sm font-medium text-slate-500">⭐ {product.rating} Rating</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{product.name}</h1>
                        <div className="text-3xl font-extrabold text-indigo-600 mb-4">${product.price.toFixed(2)}</div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {product.description}
                        </p>

                        <div className="text-xs font-medium text-slate-500 mb-6">
                            Availability: <span className="text-emerald-600 font-semibold">{product.stock} units in stock</span>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleAddToCart}
                            className={`w-full font-medium py-3 rounded-xl transition-all shadow-sm cursor-pointer text-sm ${adding
                                ? 'bg-emerald-600 text-white'
                                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                        >
                            {adding ? '✓ Added to Cart Successfully!' : 'Add to Cart'}
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetail;