import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Headphones, Truck, Package, Clock, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import { useCart } from '@/contexts/CartContext';

const ShippingDeliveryPolicy = () => {
  const { state } = useCart();

  return (
    <div className="min-h-screen">
      <Navigation cartCount={state.totalItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton className="font-semibold shadow-lg border-primary text-primary hover:bg-primary hover:text-white" />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Safe, Fresh & On-Time Delivery
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              At Harini & Tharshini Traders, we take every step to ensure that our woodpress and coldpress oils reach you in perfect condition—fresh, securely packed, and delivered on time.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              
              {/* Order Processing */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Package className="mr-2" size={24} />
                  1. Order Processing
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>Orders are processed within <strong>2–4 business days</strong> of payment confirmation.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>Bulk or wholesale orders may require additional preparation time. Customers will be informed in advance.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>Orders placed on weekends or public holidays are processed on the next business day.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery Coverage */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Truck className="mr-2" size={24} />
                  2. Delivery Coverage
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">Domestic Shipping</h3>
                    <p className="text-green-700 text-sm">We deliver across India via trusted courier and logistics partners.</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h3 className="font-semibold text-amber-800 mb-2">Local Deliveries</h3>
                    <p className="text-amber-700 text-sm">Madurai & Tamil Nadu: Faster timelines may apply for regional deliveries.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-2">International Orders</h3>
                    <p className="text-purple-700 text-sm">Export or bulk orders outside India may be accepted on request.</p>
                  </div>
                </div>
              </div>

              {/* Delivery Timelines */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Clock className="mr-2" size={24} />
                  3. Estimated Delivery Timelines
                </h2>
                <div className="bg-cream p-6 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-lg">TN</span>
                      </div>
                      <h3 className="font-semibold text-primary mb-1">Tamil Nadu</h3>
                      <p className="text-muted-foreground text-sm">3–5 business days after dispatch</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-lg">IN</span>
                      </div>
                      <h3 className="font-semibold text-primary mb-1">Rest of India</h3>
                      <p className="text-muted-foreground text-sm">5–10 business days after dispatch</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-deep-red rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-lg">INT</span>
                      </div>
                      <h3 className="font-semibold text-primary mb-1">International</h3>
                      <p className="text-muted-foreground text-sm">Timelines vary based on destination</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> Delivery times are estimates and may be affected by courier delays, weather conditions, or regional restrictions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Charges */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">4. Shipping Charges</h2>
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">Charges are calculated based on:</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <Package size={16} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">Order weight and volume</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                        <MapPin size={16} className="text-secondary" />
                      </div>
                      <span className="text-muted-foreground">Delivery location</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green/20 rounded-full flex items-center justify-center">
                        <Truck size={16} className="text-green" />
                      </div>
                      <span className="text-muted-foreground">Shipping method selected</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      <strong>Free Shipping:</strong> Occasionally offered for orders above a certain value (announced via promotions).
                    </p>
                  </div>
                </div>
              </div>

              {/* Packaging & Quality Assurance */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Shield className="mr-2" size={24} />
                  5. Packaging & Quality Assurance
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Oils are packed in <strong>sealed, tamper-proof bottles/pouches</strong>.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Products are further secured with <strong>cushioning and moisture-resistant packaging</strong> to avoid leakage or damage.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Bulk and wholesale shipments are packed in <strong>corrugated boxes or drums</strong> for safe transit.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tracking & Updates */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">6. Tracking & Updates</h2>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-800 mb-4 font-medium">Once dispatched, customers will receive:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                        <Mail size={16} className="text-purple-700" />
                      </div>
                      <span className="text-purple-700">A tracking number via email or SMS</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                        <Truck size={16} className="text-purple-700" />
                      </div>
                      <span className="text-purple-700">A courier link to monitor shipment status</span>
                    </div>
                  </div>
                  <p className="text-purple-700 text-sm mt-4">
                    Tracking updates may take 24–48 hours to reflect after dispatch.
                  </p>
                </div>
              </div>

              {/* Delays & Exceptions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <AlertCircle className="mr-2" size={24} />
                  7. Delays & Exceptions
                </h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <p className="text-red-800 mb-4 font-medium">Delivery may be delayed due to:</p>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Natural calamities or extreme weather</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Courier strikes or operational backlogs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Customs clearance (for exports)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Incorrect/incomplete address details provided by the customer</span>
                    </li>
                  </ul>
                  <p className="text-red-800 mt-4 font-medium">
                    We will notify customers promptly if delays occur.
                  </p>
                </div>
              </div>

              {/* Need Help With Shipping */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                  <Headphones className="mr-2" size={24} />
                  Need Help With Shipping?
                </h2>
                <p className="text-muted-foreground mb-4">
                  For questions or assistance regarding your shipment, contact:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Harini & Tharshini Traders</p>
                      <p className="text-muted-foreground">No:36, Swamy Sannathi Street, Madurai, Tamil Nadu – 625001</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <a href="tel:+919789342841" className="text-primary hover:underline block">
                        +91 97893 42841
                      </a>
                      <a href="tel:+919790449439" className="text-primary hover:underline block">
                        +91 97904 49439
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary flex-shrink-0" />
                    <a href="mailto:hariniandtharshinitraders@gmail.com" className="text-primary hover:underline">
                      hariniandtharshinitraders@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Headphones size={20} className="text-primary flex-shrink-0" />
                    <div>
                      <span className="text-muted-foreground">Customer Support: </span>
                      <a href="mailto:contact@hariniandtharshini.store" className="text-primary hover:underline">
                        contact@hariniandtharshini.store
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-8 border-t border-border/20">
                <p className="text-sm text-muted-foreground">
                  Last Updated: August 2025
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  © 2025 Harini & Tharshini Traders. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ShippingDeliveryPolicy;
