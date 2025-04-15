
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  badges?: string[];
  isFavorite?: boolean;
}

const ProductCard = ({ id, name, brand, price, image, badges = [], isFavorite = false }: ProductCardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <div className="product-card group">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden">
          <div className="aspect-[3/4] overflow-hidden bg-eco-tertiary">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <Button
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 bg-white/80 dark:bg-black/50 rounded-full p-1.5 hover:bg-white dark:hover:bg-black z-10"
            onClick={toggleFavorite}
          >
            <Heart 
              className={`h-5 w-5 ${favorite ? 'fill-eco-primary text-eco-primary' : 'text-eco-gray'}`} 
            />
          </Button>
          
          {badges.length > 0 && (
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="bg-eco-accent text-eco-dark text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-3">
          <p className="text-sm text-eco-primary font-medium">{brand}</p>
          <h3 className="font-medium mt-1 line-clamp-1">{name}</h3>
          <p className="mt-1 font-semibold">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
