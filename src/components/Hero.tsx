
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LeafIcon, ShieldIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-eco-tertiary to-eco-light dark:from-eco-dark dark:to-eco-primary">
      <div className="eco-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-dark dark:text-white">
              Fashion With <span className="text-eco-primary dark:text-eco-secondary">Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-eco-gray dark:text-eco-tertiary">
              Discover ethical & sustainable brands that make you look good and feel good about your choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-eco-primary hover:bg-eco-dark text-white dark:bg-eco-secondary dark:hover:bg-eco-accent dark:text-eco-dark rounded-md px-8 py-6"
                asChild
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-eco-primary text-eco-primary hover:bg-eco-tertiary dark:border-eco-secondary dark:text-eco-secondary dark:hover:bg-eco-dark/50 rounded-md px-8 py-6"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-first md:order-last flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] bg-eco-accent/30 dark:bg-eco-dark/50 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Sustainable Fashion" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-eco-dark p-4 rounded-lg shadow-md animate-slideIn">
                <div className="flex items-center space-x-2">
                  <LeafIcon className="h-5 w-5 text-eco-secondary" />
                  <span className="font-medium">100% Sustainable Materials</span>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white dark:bg-eco-dark p-4 rounded-lg shadow-md animate-slideIn delay-100">
                <div className="flex items-center space-x-2">
                  <ShieldIcon className="h-5 w-5 text-eco-primary" />
                  <span className="font-medium">Ethically Made</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
