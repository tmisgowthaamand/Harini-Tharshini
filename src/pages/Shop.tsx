import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, ShoppingCart, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import { products } from '@/data/products';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const { addItem, getItemQuantity, state } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      size: product.size,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      description: product.description,
      features: product.features,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} (${product.size}) has been added to your cart.`,
    });
  };


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || product.category === filterBy;
    return matchesSearch && matchesFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen">
      <Navigation cartCount={state.totalItems} />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton className="font-semibold shadow-lg border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-4">
              Premium Oil Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our range of authentic, pure edible oils crafted with traditional methods 
              for modern families.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 form-input"
              />
            </div>
            
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-full md:w-48 form-input">
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="coconut">Coconut Oil</SelectItem>
                <SelectItem value="sesame">Sesame Oil</SelectItem>
                <SelectItem value="groundnut">Groundnut Oil</SelectItem>
                <SelectItem value="sunflower">Sunflower Oil</SelectItem>
                <SelectItem value="traditional">Traditional Oils</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48 form-input">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="product-card overflow-hidden h-full flex flex-col">
                <div className="aspect-square bg-cream p-4 relative flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain rounded-md"
                    />
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-deep-red text-white px-2 py-1 rounded text-sm font-semibold">
                      ₹{product.originalPrice - product.price} OFF
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex-1 space-y-4">
                    <div className="min-h-[4rem]">
                      <h3 className="font-playfair font-bold text-xl text-primary line-clamp-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{product.size} • {product.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 min-h-[3rem]">
                      {product.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-nunito font-semibold"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Buttons section - always at bottom */}
                  <div className="mt-4 pt-4 border-t border-border/20">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      {getItemQuantity(product.id) > 0 ? (
                        <Button 
                          className="btn-hero flex-1" 
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          <Plus size={16} className="mr-1" />
                          Add More ({getItemQuantity(product.id)})
                        </Button>
                      ) : (
                        <Button 
                          className="btn-hero flex-1" 
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Looking for Bulk Orders?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Get special pricing for restaurants, hotels, and large families. 
            Custom packaging and delivery options available.
          </p>
          <Link to="/distributor">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Bulk Pricing
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Shop;