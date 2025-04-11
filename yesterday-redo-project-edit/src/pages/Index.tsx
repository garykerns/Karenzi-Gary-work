
import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import FilterPanel, { FilterOptions } from '../components/FilterPanel';
import ShoppingCart from '../components/ShoppingCart';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const Index: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showCart, setShowCart] = useState(false);
  
  // Get all unique categories from products
  const allCategories = [...new Set(products.map((product) => product.category))];
  
  // Get the maximum price from products
  const maxPrice = Math.max(...products.map((product) => product.price));
  
  // Initialize filter options
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: [0, maxPrice],
    minRating: 0,
  });

  // Update filtered products when filters change
  useEffect(() => {
    const updatedProducts = products.filter((product) => {
      // Filter by category if there are selected categories
      const categoryMatch = 
        filters.categories.length === 0 || 
        filters.categories.includes(product.category);
      
      // Filter by price range
      const priceMatch = 
        product.price >= filters.priceRange[0] && 
        product.price <= filters.priceRange[1];
      
      // Filter by minimum rating
      const ratingMatch = product.rating >= filters.minRating;
      
      return categoryMatch && priceMatch && ratingMatch;
    });
    
    setFilteredProducts(updatedProducts);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, maxPrice],
      minRating: 0,
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar toggleCart={toggleCart} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <FilterPanel
                  categories={allCategories}
                  maxPrice={maxPrice}
                  selectedFilters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </main>
        
        {/* Mobile Cart Slide-in */}
        <div 
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity z-50 ${
            showCart ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleCart}
        />
        
        <div 
          className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            showCart ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <Button variant="ghost" size="icon" onClick={toggleCart}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="h-full overflow-auto p-4 pb-32">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default Index;
