
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, ChevronUp, X } from 'lucide-react';
import { productsData, filterCategories } from "@/data/mockData";

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  
  // Handle filter changes
  const handleFilterChange = (category: string, optionId: string, checked: boolean) => {
    setFilters(prevFilters => {
      const categoryFilters = prevFilters[category] || [];
      
      if (checked) {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, optionId]
        };
      } else {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter(id => id !== optionId)
        };
      }
    });
  };
  
  // Apply filters to products
  useEffect(() => {
    // Flatten all active filters for display
    const allActiveFilters: string[] = [];
    Object.entries(filters).forEach(([category, options]) => {
      options.forEach(option => {
        allActiveFilters.push(`${category}-${option}`);
      });
    });
    setActiveFilters(allActiveFilters);
    
    // Filter the products
    let filteredProducts = [...productsData];
    
    Object.entries(filters).forEach(([category, selectedOptions]) => {
      if (selectedOptions.length === 0) return;
      
      switch(category) {
        case "Category":
          filteredProducts = filteredProducts.filter(product => 
            selectedOptions.some(option => 
              product.categories.some(cat => cat.toLowerCase() === option.toLowerCase())
            )
          );
          break;
        case "Brand":
          filteredProducts = filteredProducts.filter(product => 
            selectedOptions.includes(product.brandId)
          );
          break;
        case "Sustainable Features":
          filteredProducts = filteredProducts.filter(product => 
            selectedOptions.some(option => 
              product.tags.includes(option) || 
              (product.badges && product.badges.some(badge => badge.toLowerCase() === option.toLowerCase()))
            )
          );
          break;
        case "Price":
          filteredProducts = filteredProducts.filter(product => {
            return selectedOptions.some(option => {
              if (option === "under-50") return product.price < 50;
              if (option === "50-100") return product.price >= 50 && product.price <= 100;
              if (option === "100-200") return product.price >= 100 && product.price <= 200;
              if (option === "over-200") return product.price > 200;
              return false;
            });
          });
          break;
      }
    });
    
    // Apply sorting
    if (sortOption === "price-low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    // featured sorting is default, no need to sort
    
    setProducts(filteredProducts);
  }, [filters, sortOption]);
  
  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  // Remove a specific filter
  const removeFilter = (filterId: string) => {
    const [category, option] = filterId.split('-');
    
    setFilters(prevFilters => {
      const categoryFilters = prevFilters[category] || [];
      return {
        ...prevFilters,
        [category]: categoryFilters.filter(id => id !== option)
      };
    });
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setFilters({});
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="eco-container">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-eco-dark dark:text-white">Sustainable Products</h1>
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button 
              onClick={() => setFiltersVisible(!filtersVisible)} 
              variant="outline"
              className="w-full flex items-center justify-center border-eco-primary text-eco-primary"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {filtersVisible ? 
                <ChevronUp className="h-4 w-4 ml-2" /> : 
                <ChevronDown className="h-4 w-4 ml-2" />
              }
            </Button>
          </div>
          
          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 items-center">
              <span className="text-sm font-medium text-eco-gray dark:text-eco-tertiary">Active Filters:</span>
              {activeFilters.map(filter => {
                const [category, option] = filter.split('-');
                const filterOption = filterCategories
                  .find(cat => cat.name === category)
                  ?.options.find(opt => opt.id === option);
                  
                return (
                  <Button 
                    key={filter}
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 text-xs bg-eco-tertiary dark:bg-eco-dark border-eco-accent text-eco-dark dark:text-eco-tertiary"
                    onClick={() => removeFilter(filter)}
                  >
                    {category}: {filterOption?.label || option}
                    <X className="h-3 w-3" />
                  </Button>
                );
              })}
              <Button 
                size="sm"
                variant="ghost"
                className="text-eco-primary dark:text-eco-secondary text-xs"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <aside className={`w-full md:w-64 shrink-0 ${!filtersVisible && 'hidden md:block'}`}>
              <CategoryFilter 
                categories={filterCategories} 
                onFilterChange={handleFilterChange} 
              />
            </aside>
            
            {/* Products Grid */}
            <div className="flex-grow">
              {/* Sort Options */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-eco-gray dark:text-eco-tertiary text-sm">
                  Showing {products.length} products
                </p>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</label>
                  <select 
                    id="sort" 
                    value={sortOption}
                    onChange={handleSortChange}
                    className="text-sm py-2 pl-3 pr-8 border border-eco-accent rounded-md bg-white dark:bg-eco-dark focus:outline-none focus:ring-2 focus:ring-eco-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      brand={product.brand}
                      price={product.price}
                      image={product.images[0]}
                      badges={product.badges}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-eco-gray dark:text-eco-tertiary mb-4">No products match your selected filters.</p>
                  <Button 
                    variant="outline" 
                    className="border-eco-primary text-eco-primary"
                    onClick={clearAllFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
