import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Headphones, FileText, Shield, Truck, CreditCard } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import { useCart } from '@/contexts/CartContext';

const TermsAndConditions = () => {
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Agreement with Harini & Tharshini Traders
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Welcome to Harini & Tharshini Traders. By accessing our website, placing an order, or purchasing our coldpress/woodpress oils, you agree to the following Terms & Conditions. These terms govern all transactions, product use, and services we provide.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  If you do not agree with any part of these terms, please discontinue use of our services.
                </p>
              </div>

              {/* General Use */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <FileText className="mr-2" size={24} />
                  1. General Use of the Website & Services
                </h2>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>You confirm that you are at least 18 years of age or accessing the site under the supervision of a guardian.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>You agree to use our services only for lawful purposes and in ways that do not harm our reputation or restrict others from using the site.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>We reserve the right to decline or cancel orders if fraudulent activity, misuse, or violation of these terms is detected.</span>
                  </li>
                </ul>
              </div>

              {/* Products & Authenticity */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Shield className="mr-2" size={24} />
                  2. Products & Authenticity
                </h2>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>We specialize in woodpress and coldpress edible oils. All products are manufactured under strict quality standards.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Product descriptions, packaging, and images are for representation only; natural variations may occur in texture, aroma, or color due to the traditional extraction process.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Oils are intended for personal, household, or wholesale business use only and must not be resold under false branding.</span>
                  </li>
                </ul>
              </div>

              {/* Pricing & Payments */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <CreditCard className="mr-2" size={24} />
                  3. Pricing & Payments
                </h2>
                <div className="bg-cream p-6 rounded-lg space-y-3">
                  <ul className="space-y-3 text-muted-foreground ml-6">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                      <span>All prices are listed in Indian Rupees (INR ₹) unless specified otherwise.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                      <span>Prices may change due to raw material availability, market fluctuations, or company policies.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                      <span>Payments must be made in full at the time of order.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                      <span>We accept UPI, credit/debit cards, net banking, and secure third-party payment gateways.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Shipping & Delivery */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary flex items-center">
                  <Truck className="mr-2" size={24} />
                  4. Shipping & Delivery
                </h2>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Orders are dispatched within the processing time communicated during checkout.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Delivery timelines depend on the destination, order size, and logistics partner availability.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Customers must provide accurate shipping details. We are not liable for delivery delays caused by incorrect addresses or courier issues.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Please refer to our Shipping Policy for detailed terms.</span>
                  </li>
                </ul>
              </div>

              {/* Returns & Refunds */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">5. Returns & Refunds</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <p className="text-muted-foreground font-medium">
                    Due to the consumable nature of edible oils, products cannot be returned once opened.
                  </p>
                </div>
                <p className="text-muted-foreground">Refunds or replacements are allowed only for:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Damaged or tampered packaging reported on delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Wrong product supplied against the order</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Refunds are processed as per our Cancellation & Refund Policy.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">6. Intellectual Property</h2>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-muted-foreground">
                    All logos, product names, branding, packaging designs, and website content belong to Harini & Tharshini Traders.
                  </p>
                  <p className="text-muted-foreground mt-2 font-medium">
                    Reproduction, distribution, or misuse without written permission is prohibited.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">7. Limitation of Liability</h2>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>We are not responsible for any health concerns arising from misuse, improper storage, or allergic reactions.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Our oils are produced under hygienic conditions, but customers are responsible for verifying suitability before consumption.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Liability is strictly limited to the value of the product purchased.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governing Law */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">8. Governing Law & Jurisdiction</h2>
                <p className="text-muted-foreground bg-gray-50 p-4 rounded-lg">
                  These Terms & Conditions are governed by the laws of India, with jurisdiction under the courts of Madurai, Tamil Nadu.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                  <Phone className="mr-2" size={24} />
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  For queries, concerns, or assistance, please reach out to us:
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

export default TermsAndConditions;
