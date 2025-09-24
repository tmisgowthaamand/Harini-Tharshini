import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Headphones, RefreshCw, XCircle, AlertTriangle, CheckCircle, Clock, CreditCard, Package } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import { useCart } from '@/contexts/CartContext';

const CancellationRefundPolicy = () => {
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear, Fair & Transparent
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              At Harini & Tharshini Traders, we strive to provide high-quality woodpress and coldpress oils that reach our customers in perfect condition. Since our products are consumables, cancellations and refunds are subject to specific guidelines to maintain quality, hygiene, and customer satisfaction.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              
              {/* Order Cancellations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <XCircle className="mr-2" size={24} />
                  Order Cancellations
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3">Cancellation Window:</h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>Orders may be cancelled within <strong>2 hours of placement</strong>, provided they have not yet been processed or dispatched.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <AlertTriangle size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                      <span>Once an order is packed or shipped, cancellations are not permitted due to the perishable and consumable nature of oils.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Package size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>For bulk/wholesale orders, cancellation terms will be specified in the quotation or purchase agreement.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Returns & Replacements */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <RefreshCw className="mr-2" size={24} />
                  Returns & Replacements
                </h2>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-3">We only accept returns in the following cases:</h3>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Wrong product delivered against the order</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Damaged or tampered packaging upon delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Quality defects reported immediately upon opening</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-semibold text-amber-800 mb-3">Conditions:</h3>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start space-x-3">
                      <Clock size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                      <span>Issues must be reported within <strong>48 hours of delivery</strong> with supporting photos/videos.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Package size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                      <span>Products must remain in <strong>sealed, unused condition</strong>.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <XCircle size={16} className="text-amber-600 mt-1 flex-shrink-0" />
                      <span>Opened or partially used bottles/pouches are <strong>not eligible</strong> for return.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Non-Returnable Products */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">Non-Returnable Products</h2>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start space-x-3">
                      <XCircle size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span>Opened, used, or tampered products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <XCircle size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span>Products damaged due to improper storage after delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <XCircle size={16} className="text-red-600 mt-1 flex-shrink-0" />
                      <span>Delays caused by courier or external factors beyond our control</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Refunds */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <CreditCard className="mr-2" size={24} />
                  Refunds
                </h2>
                <div className="bg-cream p-6 rounded-lg">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Approved refunds will be initiated within <strong>5–7 business days</strong> of confirmation.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Refunds will be processed via the <strong>original payment method</strong> (UPI, card, net banking, etc.).</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Clock size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <span>Depending on your bank or provider, funds may take <strong>7–10 business days</strong> to reflect.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <RefreshCw size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span>Customers may opt for a <strong>replacement product or store credit</strong> instead of a refund.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                  <Headphones className="mr-2" size={24} />
                  Need Help?
                </h2>
                <p className="text-muted-foreground mb-4">
                  For assistance regarding cancellations or refunds, please contact:
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

export default CancellationRefundPolicy;
