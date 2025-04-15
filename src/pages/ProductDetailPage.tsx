
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Share2, 
  ShoppingBag, 
  ChevronRight,
  Leaf,
  Award,
  Recycle
} from 'lucide-react';
import { productsData, brandsData } from "@/data/mockData";
import ProductCard from '@/components/ProductCard';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productsData.find(p => p.id === productId);
  
  // If product not found, return a message
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="eco-container text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(product.isFavorite || false);
  
  // Related products - products from same brand or category
  const relatedProducts = productsData
    .filter(p => p.id !== product.id && 
      (p.brandId === product.brandId || 
        p.categories.some(cat => product.categories.includes(cat))))
    .slice(0, 4);
  
  // Brand info
  const brand = brandsData.find(b => b.id === product.brandId);
  
  const toggleFavorite = () => setFavorite(!favorite);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="eco-container">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6 text-eco-gray dark:text-eco-tertiary">
            <Link to="/" className="hover:text-eco-primary dark:hover:text-eco-secondary">Home</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/products" className="hover:text-eco-primary dark:hover:text-eco-secondary">Products</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span className="text-eco-dark dark:text-white">{product.name}</span>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-eco-tertiary dark:bg-eco-dark/30 rounded-md overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="aspect-square bg-eco-tertiary dark:bg-eco-dark/30 rounded-md overflow-hidden cursor-pointer"
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <Link 
                  to={`/brand/${brand?.id}`} 
                  className="text-eco-primary dark:text-eco-secondary hover:underline text-sm font-medium"
                >
                  {brand?.name || product.brand}
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold mt-1 text-eco-dark dark:text-white">{product.name}</h1>
                <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
                
                {product.badges && product.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="bg-eco-accent text-eco-dark">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <p className="text-eco-gray dark:text-eco-tertiary mb-6">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color: <span className="text-eco-primary dark:text-eco-secondary">{selectedColor.name}</span></h3>
                <div className="flex space-x-2">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor.name === color.name 
                          ? 'border-eco-primary dark:border-eco-secondary' 
                          : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select ${color.name} color`}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Size: <span className="text-eco-primary dark:text-eco-secondary">{selectedSize}</span></h3>
                  <button className="text-sm text-eco-primary dark:text-eco-secondary hover:underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        px-4 py-2 border rounded-md text-sm 
                        ${selectedSize === size 
                          ? 'bg-eco-primary dark:bg-eco-secondary text-white dark:text-eco-dark border-eco-primary dark:border-eco-secondary' 
                          : 'border-eco-border dark:border-eco-dark hover:border-eco-primary dark:hover:border-eco-secondary'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Quantity:</h3>
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 border border-eco-border dark:border-eco-dark rounded-l-md flex items-center justify-center hover:bg-eco-tertiary dark:hover:bg-eco-dark/50"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-10 border-y border-eco-border dark:border-eco-dark text-center bg-white dark:bg-eco-dark"
                  />
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 border border-eco-border dark:border-eco-dark rounded-r-md flex items-center justify-center hover:bg-eco-tertiary dark:hover:bg-eco-dark/50"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart & Wishlist */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button className="flex-grow bg-eco-primary hover:bg-eco-dark text-white dark:bg-eco-secondary dark:hover:bg-eco-accent dark:text-eco-dark">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className={`
                    ${favorite 
                      ? 'bg-eco-tertiary text-eco-primary border-eco-primary dark:bg-eco-dark/50 dark:text-eco-secondary dark:border-eco-secondary' 
                      : 'border-eco-border dark:border-eco-dark'
                    }
                  `}
                  onClick={toggleFavorite}
                >
                  <Heart className={`h-5 w-5 mr-2 ${favorite ? 'fill-eco-primary text-eco-primary dark:fill-eco-secondary dark:text-eco-secondary' : ''}`} />
                  {favorite ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline" className="border-eco-border dark:border-eco-dark px-3 sm:px-4">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:ml-2">Share</span>
                </Button>
              </div>
              
              {/* Sustainability Highlights */}
              <div className="bg-eco-tertiary dark:bg-eco-dark/30 p-4 rounded-md space-y-3 mb-6">
                <h3 className="font-medium flex items-center text-eco-dark dark:text-white">
                  <Leaf className="h-5 w-5 text-eco-primary dark:text-eco-secondary mr-2" />
                  Sustainability Highlights
                </h3>
                <ul className="space-y-2">
                  {product.sustainability.map((point, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-eco-secondary mr-2">•</span>
                      <span className="text-eco-gray dark:text-eco-tertiary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mb-12">
            <TabsList className="w-full border-b border-eco-border dark:border-eco-dark bg-transparent justify-start">
              <TabsTrigger 
                value="details"
                className="data-[state=active]:text-eco-primary data-[state=active]:border-eco-primary dark:data-[state=active]:text-eco-secondary dark:data-[state=active]:border-eco-secondary data-[state=active]:border-b-2 rounded-none"
              >
                Details
              </TabsTrigger>
              <TabsTrigger 
                value="sustainability"
                className="data-[state=active]:text-eco-primary data-[state=active]:border-eco-primary dark:data-[state=active]:text-eco-secondary dark:data-[state=active]:border-eco-secondary data-[state=active]:border-b-2 rounded-none"
              >
                Sustainability
              </TabsTrigger>
              <TabsTrigger 
                value="brand"
                className="data-[state=active]:text-eco-primary data-[state=active]:border-eco-primary dark:data-[state=active]:text-eco-secondary dark:data-[state=active]:border-eco-secondary data-[state=active]:border-b-2 rounded-none"
              >
                Brand
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="pt-6">
              <div className="max-w-3xl">
                <h3 className="font-semibold mb-4 text-eco-dark dark:text-white">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-eco-secondary mr-2">•</span>
                      <span className="text-eco-gray dark:text-eco-tertiary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="sustainability" className="pt-6">
              <div className="max-w-3xl">
                <h3 className="font-semibold mb-4 text-eco-dark dark:text-white">Sustainability Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-eco-dark p-4 rounded-md flex flex-col items-center text-center">
                    <Leaf className="h-8 w-8 text-eco-primary dark:text-eco-secondary mb-2" />
                    <h4 className="font-medium">Eco-Friendly Materials</h4>
                    <p className="text-sm text-eco-gray dark:text-eco-tertiary mt-1">Made with sustainable resources</p>
                  </div>
                  <div className="bg-white dark:bg-eco-dark p-4 rounded-md flex flex-col items-center text-center">
                    <Award className="h-8 w-8 text-eco-primary dark:text-eco-secondary mb-2" />
                    <h4 className="font-medium">Ethical Production</h4>
                    <p className="text-sm text-eco-gray dark:text-eco-tertiary mt-1">Fair wages & safe conditions</p>
                  </div>
                  <div className="bg-white dark:bg-eco-dark p-4 rounded-md flex flex-col items-center text-center">
                    <Recycle className="h-8 w-8 text-eco-primary dark:text-eco-secondary mb-2" />
                    <h4 className="font-medium">Low Impact</h4>
                    <p className="text-sm text-eco-gray dark:text-eco-tertiary mt-1">Reduced water & energy use</p>
                  </div>
                </div>
                
                <h4 className="font-medium mb-3 text-eco-dark dark:text-white">Environmental Impact</h4>
                <ul className="space-y-2 mb-6">
                  {product.sustainability.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-eco-secondary mr-2">•</span>
                      <span className="text-eco-gray dark:text-eco-tertiary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="brand" className="pt-6">
              {brand && (
                <div className="max-w-3xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-white dark:bg-eco-dark flex items-center justify-center rounded-md">
                      <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-eco-dark dark:text-white">{brand.name}</h3>
                      <p className="text-eco-gray dark:text-eco-tertiary">{brand.location} • Est. {brand.founded}</p>
                      <Link to={`/brand/${brand.id}`} className="text-eco-primary dark:text-eco-secondary text-sm hover:underline mt-1 inline-block">
                        View all products from {brand.name}
                      </Link>
                    </div>
                  </div>
                  
                  <p className="text-eco-gray dark:text-eco-tertiary mb-4">{brand.longDescription}</p>
                  
                  {brand.certifications && brand.certifications.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-eco-dark dark:text-white">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="bg-eco-tertiary dark:bg-eco-dark/50 text-eco-dark dark:text-eco-tertiary border-eco-accent dark:border-eco-primary/30">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {brand.website && (
                    <Button 
                      variant="outline" 
                      className="text-eco-primary dark:text-eco-secondary border-eco-primary dark:border-eco-secondary mt-2"
                      asChild
                    >
                      <a href={brand.website} target="_blank" rel="noopener noreferrer">
                        Visit Brand Website
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-6 text-eco-dark dark:text-white">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
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
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
