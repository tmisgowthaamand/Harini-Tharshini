import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Phone, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/utils/taxCalculations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  const location = useLocation();
  const { clearCart } = useCart();
  const orderData = location.state || {};
  const { 
    orderId = 'HT' + Date.now(), 
    total = 2240, 
    items = [], 
    customerInfo = {},
    paymentMethod = 'upi',
    country = { code: 'IN', currencySymbol: '₹' }
  } = orderData;

  useEffect(() => {
    // Clear cart after successful order
    clearCart();
    console.log('Order placed successfully:', orderId);
  }, [orderId, clearCart]);

  const orderDetails = {
    id: orderId,
    total,
    items: items.map((item: any) => ({
      name: item.name,
      size: item.size,
      quantity: item.quantity,
      price: item.price * item.quantity
    })),
    shippingAddress: {
      name: `${customerInfo.firstName || ''} ${customerInfo.lastName || ''}`.trim() || 'Customer Name',
      address: `${customerInfo.address || ''}, ${customerInfo.city || ''}, ${customerInfo.state || ''} - ${customerInfo.pincode || ''}`,
      phone: customerInfo.phone || '+91 97893 42841',
      email: customerInfo.email || '',
    },
    paymentMethod: paymentMethod === 'upi' ? 'UPI Payment' : 
                   paymentMethod === 'card' ? 'Credit/Debit Card' :
                   paymentMethod === 'netbanking' ? 'Net Banking' : 
                   'Cash on Delivery',
    estimatedDelivery: country.code === 'IN' ? '3-5 business days' : '7-14 business days',
    trackingNumber: 'TRK' + Date.now(),
  };

  const orderSteps = [
    { 
      icon: CheckCircle, 
      title: 'Order Confirmed', 
      description: 'Your order has been received and confirmed',
      status: 'completed',
      time: 'Just now'
    },
    { 
      icon: Package, 
      title: 'Preparing for Dispatch', 
      description: 'Our team is carefully packaging your oils',
      status: 'current',
      time: 'Within 24 hours'
    },
    { 
      icon: Truck, 
      title: 'Out for Delivery', 
      description: 'Your order is on the way to your address',
      status: 'upcoming',
      time: '2-3 business days'
    },
    { 
      icon: CheckCircle, 
      title: 'Delivered', 
      description: 'Enjoy your premium oils!',
      status: 'upcoming',
      time: '3-5 business days'
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thank you for choosing Harini & Tharshini Traders. Your order has been confirmed 
              and will be delivered fresh to your doorstep.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-playfair font-bold text-primary mb-2">
                        Order #{orderId}
                      </h2>
                      <p className="text-muted-foreground">
                        Placed on {new Date().toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="text-right mt-4 sm:mt-0">
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-2xl font-bold text-primary">{formatCurrency(total, country.code)}</p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4">
                    <h3 className="font-nunito font-semibold text-primary">Order Items</h3>
                    {orderDetails.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border/50">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.size} × {item.quantity}</p>
                        </div>
                        <p className="font-bold text-primary">{formatCurrency(item.price, country.code)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Address */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-nunito font-semibold text-primary mb-3">Shipping Address</h3>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="font-semibold">{orderDetails.shippingAddress.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {orderDetails.shippingAddress.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {orderDetails.shippingAddress.phone}
                      </p>
                      {orderDetails.shippingAddress.email && (
                        <p className="text-sm text-muted-foreground">
                          {orderDetails.shippingAddress.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-nunito font-semibold text-primary mb-3">Payment Method</h3>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="font-semibold">{orderDetails.paymentMethod}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Payment will be processed securely
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Tracking */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-6">
                    Order Status
                  </h3>
                  
                  <div className="space-y-6">
                    {orderSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          step.status === 'completed' 
                            ? 'bg-green border-green text-white' 
                            : step.status === 'current'
                            ? 'bg-primary border-primary text-white'
                            : 'border-muted text-muted-foreground'
                        }`}>
                          <step.icon size={16} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className={`font-nunito font-semibold ${
                              step.status === 'completed' || step.status === 'current' 
                                ? 'text-primary' 
                                : 'text-muted-foreground'
                            }`}>
                              {step.title}
                            </h4>
                            <Badge variant={
                              step.status === 'completed' ? 'default' :
                              step.status === 'current' ? 'secondary' : 'outline'
                            }>
                              {step.time}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t bg-cream p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-nunito font-semibold text-primary">Tracking Number</p>
                        <p className="text-sm text-muted-foreground">{orderDetails.trackingNumber}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Track Package
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair font-bold text-primary">Quick Actions</h3>
                  
                  <Button className="w-full btn-hero">
                    <Download className="mr-2" size={16} />
                    Download Invoice
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Package className="mr-2" size={16} />
                    Track Order
                  </Button>
                  
                  <div className="space-y-2">
                    <a 
                      href="https://wa.me/+919789342841" 
                      className="w-full block"
                    >
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2" size={16} />
                        WhatsApp: +91 97893 42841
                      </Button>
                    </a>
                    <a 
                      href="https://wa.me/+919790449439" 
                      className="w-full block"
                    >
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2" size={16} />
                        WhatsApp: +91 97904 49439
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-primary mb-4">Delivery Information</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Estimated Delivery:</span>
                      <span className="font-semibold text-green">{orderDetails.estimatedDelivery}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping Method:</span>
                      <span className="font-semibold">Standard Delivery</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Delivery Charge:</span>
                      <span className="font-semibold text-green">FREE</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-cream rounded-lg text-center text-sm">
                    <Truck size={16} className="inline mr-1" />
                    {country.code === 'IN' ? 'Free delivery on orders above ₹500' : 'International shipping rates apply'}
                  </div>
                </CardContent>
              </Card>

              {/* Continue Shopping */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-playfair font-bold text-primary">What's Next?</h3>
                  
                  <p className="text-sm text-muted-foreground">
                    Explore more premium oils for your family's health and wellness.
                  </p>
                  
                  <div className="space-y-2">
                    <Link to="/shop">
                      <Button className="w-full btn-hero">
                        Continue Shopping <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                    
                    <Link to="/distributor">
                      <Button variant="outline" className="w-full">
                        Bulk Orders
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mt-12 text-center bg-cream p-8 rounded-lg">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
              Thank You for Your Trust!
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a woman-owned MSME enterprise from Madurai, we're grateful for your support. 
              Your order helps us continue our mission of bringing pure, authentic oils to families across Tamil Nadu.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSuccess;