import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cart = () => {
  const { state, updateQuantity, removeItem } = useCart();
  const cartItems = state.items;
  
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
      setDiscount(0.1); // 10% discount
    } else if (promoCode.toLowerCase() === 'bulk20') {
      setDiscount(0.2); // 20% discount
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    const itemSavings = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return sum + itemSavings;
  }, 0);
  const discountAmount = subtotal * discount;
  const deliveryCharge = subtotal >= 500 ? 0 : 50;
  const tax = (subtotal - discountAmount) * 0.05; // 5% tax
  const total = subtotal - discountAmount + deliveryCharge + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation cartCount={state.totalItems} />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto space-y-6">
              <ShoppingBag size={80} className="mx-auto text-muted-foreground" />
              <h1 className="text-3xl font-playfair font-bold text-primary">Your Cart is Empty</h1>
              <p className="text-muted-foreground">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop">
                <Button size="lg" className="btn-hero">
                  Start Shopping <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation cartCount={state.totalItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-24 bg-cream rounded-md p-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-playfair font-bold text-lg text-primary">
                              {item.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">{item.size}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-primary">₹{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-3">
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus size={12} />
                            </Button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus size={12} />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-primary">₹{item.price * item.quantity}</p>
                            {item.originalPrice && (
                              <p className="text-xs text-green">
                                Save ₹{(item.originalPrice - item.price) * item.quantity}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-lg text-primary mb-4">
                    Promo Code
                  </h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="form-input"
                    />
                    <Button onClick={applyPromoCode} variant="outline">
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-green text-sm mt-2">
                      ✓ {discount * 100}% discount applied!
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair font-bold text-lg text-primary">
                    Order Summary
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>₹{subtotal}</span>
                    </div>
                    
                    {savings > 0 && (
                      <div className="flex justify-between text-green">
                        <span>Product Discounts</span>
                        <span>-₹{savings}</span>
                      </div>
                    )}
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green">
                        <span>Promo Discount ({discount * 100}%)</span>
                        <span>-₹{Math.round(discountAmount)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Delivery Charges</span>
                      <span className={deliveryCharge === 0 ? 'text-green' : ''}>
                        {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Tax (5%)</span>
                      <span>₹{Math.round(tax)}</span>
                    </div>
                    
                    <div className="border-t pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">₹{Math.round(total)}</span>
                    </div>
                  </div>

                  {subtotal < 500 && (
                    <div className="bg-cream p-3 rounded-md text-sm text-center">
                      Add ₹{500 - subtotal} more to get FREE delivery!
                    </div>
                  )}

                  <div className="space-y-3">
                    <Link to="/checkout">
                      <Button size="lg" className="w-full btn-hero text-lg">
                        Proceed to Checkout <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                    
                    <Link to="/shop">
                      <Button variant="outline" size="lg" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;