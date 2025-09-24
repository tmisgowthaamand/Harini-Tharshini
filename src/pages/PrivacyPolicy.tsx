import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Headphones } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import { useCart } from '@/contexts/CartContext';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Privacy, Our Commitment
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
              
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Harini & Tharshini Traders, your privacy is our priority. Whether you purchase our woodpress/coldpress oils online, place wholesale orders, or connect with us for inquiries, we are committed to protecting the personal information you share with us. We ensure that your data is handled with transparency, care, and compliance with applicable Indian IT laws and globally recognized data protection standards.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This Privacy Policy explains the type of information we collect, how we use it, the measures we take to protect it, and your rights as our customer.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">Information We Collect</h2>
                <p className="text-muted-foreground">When you interact with us, we may collect the following:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Full Name / Business Name</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Email Address & Phone Number</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Billing & Shipping Address</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Order & Transaction Details</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Payment Information (processed via secure third-party gateways)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>GST/Tax Information (for wholesale/B2B orders)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Device & Browser Information (for website visits)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Cookies & Analytics Data (to improve site performance)</span>
                  </li>
                </ul>
                <p className="text-muted-foreground font-medium">
                  We only collect information necessary for smooth operations, order fulfillment, and customer support.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">How We Use Your Information</h2>
                <p className="text-muted-foreground">We use your data solely for:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Processing and fulfilling customer orders</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Coordinating delivery and logistics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Providing after-sales support and resolving queries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Managing wholesale/B2B transactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Sending updates, promotions, or offers (only if you opt in)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Ensuring compliance with taxation and legal requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Improving website experience and product offerings</span>
                  </li>
                </ul>
              </div>

              {/* How We Protect Your Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">How We Protect Your Information</h2>
                <p className="text-muted-foreground">We implement strong safeguards to ensure your data remains secure:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-cream p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">SSL Encryption</h3>
                    <p className="text-sm text-muted-foreground">All online transactions are encrypted.</p>
                  </div>
                  <div className="bg-cream p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Secure Payments</h3>
                    <p className="text-sm text-muted-foreground">We never store sensitive payment details; transactions are processed via trusted third-party providers.</p>
                  </div>
                  <div className="bg-cream p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Access Controls</h3>
                    <p className="text-sm text-muted-foreground">Only authorized personnel can access sensitive information.</p>
                  </div>
                  <div className="bg-cream p-4 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Regular Reviews</h3>
                    <p className="text-sm text-muted-foreground">Security protocols and systems are updated regularly to prevent misuse.</p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">Your Rights</h2>
                <p className="text-muted-foreground">As our customer, you have the right to:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                    <span>Request access to the information we hold about you</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                    <span>Ask for corrections or updates to your data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                    <span>Request deletion of your personal data (where legally permissible)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                    <span>Withdraw consent from promotional communications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green rounded-full mt-2 flex-shrink-0" />
                    <span>Raise privacy-related concerns at any time</span>
                  </li>
                </ul>
                <p className="text-muted-foreground font-medium">
                  We respond to such requests within 30 business days.
                </p>
              </div>

              {/* Third-Party Sharing */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">Third-Party Sharing</h2>
                <p className="text-muted-foreground">Your data is never sold. It is shared only with:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Logistics partners (for delivery of orders)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Payment gateways (for secure processing)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-deep-red rounded-full mt-2 flex-shrink-0" />
                    <span>Regulatory authorities (if legally required)</span>
                  </li>
                </ul>
              </div>

              {/* Policy Updates */}
              <div className="space-y-4">
                <h2 className="text-2xl font-playfair font-bold text-primary">Policy Updates</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically to reflect business, legal, or technological changes. The most recent version will always be available on our website with the updated date.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                <h2 className="text-2xl font-playfair font-bold text-primary mb-4 flex items-center">
                  <Phone className="mr-2" size={24} />
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  For privacy-related questions, requests, or complaints, please reach out to us:
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

export default PrivacyPolicy;
