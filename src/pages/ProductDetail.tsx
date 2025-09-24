import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Shield, Truck, Award, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem, getItemQuantity, state } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('1L');
  const [quantity, setQuantity] = useState(1);

  // Find product by ID from the products array
  const productId = parseInt(id || '1');
  const product = products.find(p => p.id === productId) || products[0];
  
  // Create product detail structure
  const productDetail = {
    id: product.id,
    name: product.name,
    category: product.category,
    images: [product.image], // Use single image as array
    sizes: [
      { size: product.size, price: product.price, originalPrice: product.originalPrice },
    ],
    description: product.description,
    features: product.features,
    nutritionalInfo: [
      { label: 'Total Fat', value: '100g per 100g' },
      { label: 'Saturated Fat', value: '92g per 100g' },
      { label: 'Vitamin E', value: '0.11mg per 100g' },
      { label: 'No Trans Fat', value: '0g' },
    ],
    benefits: [
      'Supports heart health with MCTs',
      'Natural antimicrobial properties',
      'Perfect for high-heat cooking',
      'Traditional Ayurvedic uses',
      'Excellent for skin and hair care',
    ],
    rating: 4.8,
    reviews: 247,
  };

  const currentSize = productDetail.sizes.find(s => s.size === selectedSize) || productDetail.sizes[0];
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        category: product.category,
        size: selectedSize,
        price: currentSize.price,
        originalPrice: currentSize.originalPrice,
        image: productDetail.images[0],
        description: product.description,
        features: product.features,
      });
    }
    
    toast({
      title: "Added to cart!",
      description: `${quantity}x ${product.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  const relatedProducts = products
    .filter(p => p.id !== productId)
    .slice(0, 2)
    .map(p => ({ id: p.id, name: p.name, price: `₹${p.price}`, image: p.image }));

  return (
    <div className="min-h-screen">
      <Navigation cartCount={state.totalItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/shop">
              <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-white transition-colors">
                <ArrowLeft size={16} />
                <span>Back to Shop</span>
              </Button>
            </Link>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-cream rounded-lg p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={productDetail.images[0]} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>
              {productDetail.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {productDetail.images.map((image, index) => (
                    <div key={index} className="aspect-square bg-cream rounded-md p-2 cursor-pointer hover:ring-2 hover:ring-primary flex items-center justify-center overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${productDetail.name} view ${index + 1}`}
                        className="max-w-full max-h-full object-contain rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                    {product.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Heart size={20} />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 size={20} />
                    </Button>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(productDetail.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {productDetail.rating} ({productDetail.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-primary">₹{currentSize.price}</span>
                  {currentSize.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">₹{currentSize.originalPrice}</span>
                  )}
                  {currentSize.originalPrice && (
                    <Badge className="bg-deep-red text-white">
                      {Math.round(((currentSize.originalPrice - currentSize.price) / currentSize.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-nunito font-semibold mb-2">Select Size:</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full form-input">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {productDetail.sizes.map((size) => (
                        <SelectItem key={size.size} value={size.size}>
                          {size.size} - ₹{size.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-nunito font-semibold mb-2">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {getItemQuantity(product.id) > 0 ? (
                  <Button 
                    size="lg" 
                    className="w-full btn-hero text-lg"
                    onClick={handleAddToCart}
                  >
                    <Plus className="mr-2" size={20} />
                    Add More - ₹{currentSize.price * quantity} ({getItemQuantity(product.id)} in cart)
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    className="w-full btn-hero text-lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Add to Cart - ₹{currentSize.price * quantity}
                  </Button>
                )}
                
                <div className="grid grid-cols-2 gap-3">
                  {getItemQuantity(product.id) > 0 ? (
                    <Link to="/cart">
                      <Button size="lg" className="w-full btn-secondary-action">
                        View Cart ({state.totalItems})
                      </Button>
                    </Link>
                  ) : (
                    <Button size="lg" className="btn-secondary-action">
                      Buy Now
                    </Button>
                  )}
                  <Link to="/distributor">
                    <Button variant="outline" size="lg" className="w-full">
                      Bulk Inquiry
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-4 border-t">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-green" />
                  <span className="text-xs font-nunito">FSSAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck size={16} className="text-green" />
                  <span className="text-xs font-nunito">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={16} className="text-green" />
                  <span className="text-xs font-nunito">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-xl text-primary mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nutritional Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-xl text-primary mb-4">Nutritional Information</h3>
                <div className="space-y-3">
                  {productDetail.nutritionalInfo.map((info, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{info.label}:</span>
                      <span className="font-semibold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Benefits */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-xl text-primary mb-4">Health Benefits</h3>
                <ul className="space-y-2">
                  {productDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="product-card">
                  <div className="aspect-square bg-cream p-6">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-playfair font-bold text-lg text-primary mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{relatedProduct.price}</span>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button className="btn-hero">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;