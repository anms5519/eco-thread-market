
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeaturedBrands from "@/components/FeaturedBrands";
import { Button } from "@/components/ui/button";
import { Leaf, Shield, Truck, MessageSquare } from 'lucide-react';
import { productsData, brandsData } from "@/data/mockData";

const Index = () => {
  const featuredProducts = productsData.slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Products */}
        <section className="py-12">
          <div className="eco-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-eco-dark dark:text-white">Featured Products</h2>
              <p className="text-eco-gray dark:text-eco-tertiary mt-2">Discover our curated selection of sustainable fashion</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
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
            
            <div className="text-center mt-10">
              <Button 
                className="bg-eco-primary hover:bg-eco-dark text-white dark:bg-eco-secondary dark:hover:bg-eco-accent dark:text-eco-dark"
                asChild
              >
                <a href="/products">View All Products</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Sustainable Fashion Values */}
        <section className="py-12 bg-eco-light dark:bg-card">
          <div className="eco-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-eco-dark dark:text-white">Why Choose Sustainable Fashion?</h2>
              <p className="text-eco-gray dark:text-eco-tertiary mt-2">Small choices that make a big difference</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-eco-dark p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-tertiary dark:bg-eco-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-eco-primary dark:text-eco-secondary" />
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Eco-Friendly Materials</h3>
                <p className="text-eco-gray dark:text-eco-tertiary text-sm">Made with organic, recycled, and low-impact materials that reduce environmental harm.</p>
              </div>
              
              <div className="bg-white dark:bg-eco-dark p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-tertiary dark:bg-eco-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-eco-primary dark:text-eco-secondary" />
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Ethical Production</h3>
                <p className="text-eco-gray dark:text-eco-tertiary text-sm">Supporting brands that ensure fair wages and safe working conditions.</p>
              </div>
              
              <div className="bg-white dark:bg-eco-dark p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-tertiary dark:bg-eco-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-eco-primary dark:text-eco-secondary" />
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Carbon-Neutral Shipping</h3>
                <p className="text-eco-gray dark:text-eco-tertiary text-sm">Minimizing the carbon footprint of getting fashion from brands to your doorstep.</p>
              </div>
              
              <div className="bg-white dark:bg-eco-dark p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-eco-tertiary dark:bg-eco-primary/20 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-eco-primary dark:text-eco-secondary" />
                </div>
                <h3 className="font-semibold mb-2 dark:text-white">Transparency</h3>
                <p className="text-eco-gray dark:text-eco-tertiary text-sm">Clear information about where, how, and by whom your clothes are made.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Brands */}
        <FeaturedBrands brands={brandsData} />
        
        {/* Newsletter */}
        <section className="py-12 bg-eco-primary dark:bg-eco-dark text-white">
          <div className="eco-container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Join Our Community</h2>
              <p className="mt-2 text-eco-tertiary">Subscribe to receive updates on new sustainable brands, products, and exclusive offers.</p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md flex-grow text-eco-dark dark:text-white dark:bg-eco-dark dark:border-eco-secondary focus:outline-none focus:ring-2 focus:ring-eco-secondary"
                />
                <Button className="bg-eco-secondary hover:bg-eco-accent text-eco-dark px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
