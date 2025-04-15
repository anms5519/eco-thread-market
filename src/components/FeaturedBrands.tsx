
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

interface FeaturedBrandsProps {
  brands: Brand[];
}

const FeaturedBrands = ({ brands }: FeaturedBrandsProps) => {
  return (
    <section className="py-12 bg-eco-light dark:bg-card">
      <div className="eco-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-eco-dark dark:text-white">Featured Brands</h2>
            <p className="text-eco-gray dark:text-eco-tertiary mt-2">Discover ethical brands making a difference</p>
          </div>
          <Button 
            variant="link" 
            className="text-eco-primary dark:text-eco-secondary mt-4 md:mt-0"
            asChild
          >
            <Link to="/brands" className="flex items-center">
              View all brands
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="bg-white dark:bg-eco-dark rounded-lg p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <h3 className="font-semibold mb-2 text-eco-dark dark:text-white">{brand.name}</h3>
              <p className="text-eco-gray dark:text-eco-tertiary text-sm">{brand.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
