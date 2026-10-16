import { useEffect, useState } from "react";
import { PRODUCTS } from "../productsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = PRODUCTS.filter(item => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

        const matchesSearch = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        dispatch(addToCart(product));
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <SearchBar onSearch={(query) => setSearchQuery(query)} />

            {/* Header with Cart Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Explore Catalog</h1>
                    <p className="text-slate-500 mt-1 text-sm">Showing {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products</p>
                </div>
            </div>

            {/* Category Tabs Filter Component */}
            <CategoryTabs
                selectedCategory={selectedCategory}
                onSelectCategory={(value) => setSelectedCategory(value)}
            />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {currentProducts.map((product) => (
                    <ProductCard product={product} handleAddToCart={(e, product) => handleAddToCart(e, product)} key={product.id} />
                ))}
            </div>

            {/* Pagination Controls */}
            <Pagination onSetCurrentPage={(value) => setCurrentPage(value)} currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default Products;