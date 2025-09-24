import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, TrendingUp, Award, Phone, Mail, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import womanEntrepreneur from '@/assets/woman-entrepreneur.jpg';
import oilCollection from '@/assets/oil-bottles-collection.jpg';

const Distributor = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstin: '',
    businessType: '',
    location: '',
    experience: '',
    estimatedVolume: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Distributor inquiry:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  const downloadBrochure = () => {
    const brochureContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Madurai Golden Oils - Partnership Brochure</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #8B4513; padding-bottom: 20px; }
        .company-name { color: #8B4513; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .tagline { color: #666; font-style: italic; }
        .section { margin: 25px 0; }
        .section-title { color: #8B4513; font-size: 20px; font-weight: bold; margin-bottom: 15px; border-left: 4px solid #8B4513; padding-left: 15px; }
        .highlight { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0; }
        .contact-info { background-color: #8B4513; color: white; padding: 20px; border-radius: 5px; margin-top: 30px; }
        .benefits { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .benefit-item { background: #f5f5f5; padding: 15px; border-radius: 5px; }
        .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <div class="company-name">MADURAI GOLDEN OILS</div>
        <div class="tagline">Premium Edible Oils • Woman-Owned MSME Enterprise</div>
    </div>

    <div class="section">
        <div class="section-title">About Us</div>
        <p>Rooted in the rich traditions of Madurai, we are Harini & Tharshini – two women entrepreneurs committed to bringing you the purest, most authentic edible oils. Our journey began with a simple belief: every family deserves access to premium, unadulterated oils that enhance both flavor and health.</p>
    </div>

    <div class="section">
        <div class="section-title">Partnership Benefits</div>
        <div class="benefits">
            <div class="benefit-item">
                <strong>Attractive Margins</strong><br>
                Up to 25% profit margins for distribution partners
            </div>
            <div class="benefit-item">
                <strong>Dedicated Support</strong><br>
                Personal relationship manager and marketing support
            </div>
            <div class="benefit-item">
                <strong>Flexible Orders</strong><br>
                No minimum order quantity restrictions
            </div>
            <div class="benefit-item">
                <strong>Premium Quality</strong><br>
                FSSAI certified products with consistent quality
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Partnership Tiers</div>
        <div class="highlight">
            <strong>Retail Partner:</strong> 50-200L/month • 15-20% margin<br>
            <strong>Area Distributor:</strong> 200-500L/month • 20-25% margin<br>
            <strong>Regional Partner:</strong> 500L+/month • 25-30% margin
        </div>
    </div>

    <div class="section">
        <div class="section-title">Our Products</div>
        <p>• Premium Coconut Oil (Cold-Pressed, Virgin Quality)<br>
        • Cold-Pressed Sesame Oil (Traditional Wood-Pressed)<br>
        • Pure Groundnut Oil (High Smoke Point)<br>
        • Sunflower Oil (Light & Heart Healthy)</p>
    </div>

    <div class="section">
        <div class="section-title">Why Choose Us?</div>
        <p>✓ FSSAI Certified Products<br>
        ✓ Woman-Owned MSME Enterprise<br>
        ✓ Traditional Extraction Methods<br>
        ✓ Direct Farm Sourcing from Tamil Nadu<br>
        ✓ Consistent Quality Standards<br>
        ✓ Authentic Taste & Nutrition</p>
    </div>

    <div class="contact-info">
        <div class="section-title" style="color: white; border-left-color: white;">Contact Information</div>
        <p><strong>Phone:</strong> +91 97893 42841 / +91 97904 49439<br>
        <strong>Email:</strong> hariniandtharshinitraders@gmail.com<br>
        <strong>Location:</strong> NO.36, Swamy Sannathi Street, Madurai, Tamil Nadu - 625001</p>
        <p><strong>Business Hours:</strong> Mon-Sat: 9:00 AM - 6:00 PM</p>
    </div>

    <div class="footer">
        <p>© 2024 Madurai Golden Oils. All rights reserved. | FSSAI Certified | MSME Registered</p>
    </div>
</body>
</html>`;

    const blob = new Blob([brochureContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Madurai-Golden-Oils-Partnership-Brochure.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Attractive Margins',
      description: 'Competitive pricing with excellent profit margins for our distribution partners.',
      highlight: 'Up to 25% margin'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal relationship manager and marketing support for your business growth.',
      highlight: 'Personal RM'
    },
    {
      icon: Building,
      title: 'Flexible Orders',
      description: 'No minimum order quantity restrictions. Order as per your market demand.',
      highlight: 'No MOQ'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'FSSAI certified products with consistent quality and authentic taste.',
      highlight: 'FSSAI Certified'
    },
  ];

  const pricingTiers = [
    {
      tier: 'Retail Partner',
      volume: '50-200L/month',
      margin: '15-20%',
      benefits: ['Direct delivery', 'Marketing materials', 'Product training'],
      color: 'border-secondary'
    },
    {
      tier: 'Area Distributor',
      volume: '200-500L/month',
      margin: '20-25%',
      benefits: ['Territory rights', 'Dedicated support', 'Custom packaging', 'Credit terms'],
      color: 'border-primary',
      featured: true
    },
    {
      tier: 'Regional Partner',
      volume: '500L+/month',
      margin: '25-30%',
      benefits: ['Exclusive territory', 'Joint marketing', 'Custom branding', 'Extended credit'],
      color: 'border-brown'
    },
  ];

  const testimonials = [
    {
      name: 'Ravi Kumar',
      business: 'Kumar Stores, Chennai',
      quote: 'Amazing product quality and great support. Sales have increased by 40% since partnering with them.',
      rating: 5
    },
    {
      name: 'Meera Devi',
      business: 'Traditional Foods, Coimbatore',
      quote: 'As a woman entrepreneur myself, I love supporting other women-owned businesses. Quality is exceptional.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-gold text-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton variant="outline" className="bg-white border-white text-primary hover:bg-white/90 hover:text-primary font-semibold shadow-lg" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/20">
                Partnership Opportunity
              </Badge>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                Partner With Us
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Join our growing network of distributors and bring premium, authentic 
                edible oils to your community. Attractive margins, dedicated support, 
                and quality products that customers trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                  <Phone className="mr-2" size={18} />
                  Call Now: +91 97893 42841
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white border-white text-primary hover:bg-white/90 hover:text-primary font-semibold shadow-lg"
                  onClick={downloadBrochure}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={womanEntrepreneur} 
                alt="Business partnership" 
                className="rounded-lg shadow-deep w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a trusted brand that values quality, authenticity, and mutual growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center product-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-primary/10 text-primary">
                      {benefit.highlight}
                    </Badge>
                    <h3 className="font-playfair font-bold text-xl text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Partnership Tiers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the partnership level that suits your business size and growth ambitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative ${tier.color} ${tier.featured ? 'border-2 scale-105' : 'border'} product-card flex flex-col h-full`}
              >
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-playfair text-2xl text-primary">
                    {tier.tier}
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{tier.volume}</p>
                    <p className="text-3xl font-bold text-primary">{tier.margin}</p>
                    <p className="text-sm text-muted-foreground">profit margin</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Check size={16} className="text-green" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.featured ? 'btn-hero' : 'btn-secondary-action'}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
                  Apply for Partnership
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with more details about our partnership program.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gstin">GSTIN</Label>
                    <Input
                      id="gstin"
                      value={formData.gstin}
                      onChange={(e) => handleInputChange('gstin', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail Store</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="supermarket">Supermarket</SelectItem>
                        <SelectItem value="online">Online Store</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Hotel</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="form-input"
                      placeholder="City, State"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedVolume">Estimated Monthly Volume</Label>
                  <Select value={formData.estimatedVolume} onValueChange={(value) => handleInputChange('estimatedVolume', value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select estimated volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100L">50-100 Liters</SelectItem>
                      <SelectItem value="100-200L">100-200 Liters</SelectItem>
                      <SelectItem value="200-500L">200-500 Liters</SelectItem>
                      <SelectItem value="500-1000L">500-1000 Liters</SelectItem>
                      <SelectItem value="1000L+">1000+ Liters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-input"
                    placeholder="Tell us about your business goals, target market, or any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero text-lg">
                  Submit Application <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-4">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold">Call Us</p>
                        <div>
                          <a href="tel:+919789342841" className="text-primary hover:underline block">
                            +91 97893 42841
                          </a>
                          <a href="tel:+919790449439" className="text-primary hover:underline block">
                            +91 97904 49439
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <a href="mailto:hariniandtharshinitraders@gmail.com" className="text-primary hover:underline">
                          hariniandtharshinitraders@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-4">
                    Application Process
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <p className="font-semibold">Submit Application</p>
                        <p className="text-muted-foreground">Fill out the form with your business details</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <p className="font-semibold">Initial Review</p>
                        <p className="text-muted-foreground">Our team reviews your application within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <p className="font-semibold">Discussion Call</p>
                        <p className="text-muted-foreground">Detailed discussion about partnership terms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <div>
                        <p className="font-semibold">Agreement & Launch</p>
                        <p className="text-muted-foreground">Sign agreement and start your journey with us</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Image */}
              <div className="relative">
                <img 
                  src={oilCollection} 
                  alt="Premium oil collection" 
                  className="rounded-lg shadow-soft w-full"
                />
                <div className="absolute inset-0 gradient-hero opacity-80 rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="font-playfair font-bold text-lg mb-2">Premium Product Range</h4>
                    <p className="text-sm text-white/90">
                      High-quality oils that customers love and trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Success stories from our growing network of distributors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="product-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Distributor;