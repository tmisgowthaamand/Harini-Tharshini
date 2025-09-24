import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ScrollToTop from '@/components/ScrollToTop';
import womanEntrepreneur from '@/assets/woman-entrepreneur.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 97893 42841', '+91 97904 49439'],
      action: 'tel:+919789342841',
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hariniandtharshinitraders@gmail.com', 'contact@hariniandtharshini.store'],
      action: 'mailto:hariniandtharshinitraders@gmail.com',
      actionText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['NO.36, Swamy Sannathi Street', 'Madurai, Tamil Nadu - 625001'],
      action: '#',
      actionText: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      action: '',
      actionText: ''
    },
  ];

  const faqs = [
    {
      question: 'What makes your oils different from others?',
      answer: 'Our oils are cold-pressed using traditional methods, ensuring maximum nutrition and authentic taste. We source directly from Tamil Nadu farms and maintain strict quality standards.'
    },
    {
      question: 'Do you offer bulk orders for businesses?',
      answer: 'Yes, we provide bulk orders for restaurants, hotels, and distributors with special pricing and flexible terms. Contact us for custom quotes.'
    },
    {
      question: 'What is your delivery policy?',
      answer: 'We offer free delivery on orders above ₹500 within Tamil Nadu. For other states, delivery charges apply. Typical delivery time is 3-5 business days.'
    },
    {
      question: 'Are your products FSSAI certified?',
      answer: 'Yes, all our products are FSSAI certified and comply with food safety standards. We maintain strict quality control throughout the production process.'
    },
    {
      question: 'Can I return products if not satisfied?',
      answer: 'We offer a 7-day return policy for unopened products. Customer satisfaction is our priority, and we stand behind the quality of our oils.'
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton className="font-semibold shadow-lg border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or services? We'd love to hear from you. 
              Reach out to our friendly team and we'll get back to you quickly.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center product-card">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <info.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-primary mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.actionText && (
                    <a href={info.action}>
                      <Button variant="outline" size="sm" className="mt-2">
                        {info.actionText}
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  For urgent inquiries, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="form-input"
                      placeholder="+91 97893 42841"
                    />
                  </div>
                </div>

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
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="bulk-order">Bulk Order</SelectItem>
                      <SelectItem value="distributor">Distributor Partnership</SelectItem>
                      <SelectItem value="quality-concern">Quality Concern</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-input"
                    placeholder="Please describe your inquiry in detail..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-hero text-lg">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info & Image */}
            <div className="space-y-8">
              {/* Image */}
              <div className="relative">
                <img 
                  src={womanEntrepreneur} 
                  alt="Harini & Tharshini - Woman entrepreneurs" 
                  className="rounded-lg shadow-deep w-full"
                />
                <div className="absolute inset-0 gradient-hero opacity-60 rounded-lg flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-playfair font-bold text-xl mb-2">
                      Harini & Tharshini
                    </h3>
                    <p className="text-white/90">
                      Proud woman entrepreneurs bringing you authentic Tamil Nadu oils
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-green/5 border-green/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle size={40} className="text-green mx-auto mb-4" />
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2">
                    Quick WhatsApp Support
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to your questions via WhatsApp. 
                    Available during business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="https://wa.me/+919789342841">
                      <Button className="bg-green hover:bg-green/90 text-white w-full sm:w-auto">
                        <MessageCircle className="mr-2" size={18} />
                        WhatsApp: +91 97893 42841
                      </Button>
                    </a>
                    <a href="https://wa.me/+919790449439">
                      <Button className="bg-green hover:bg-green/90 text-white w-full sm:w-auto">
                        <MessageCircle className="mr-2" size={18} />
                        WhatsApp: +91 97904 49439
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Business Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-4">
                    About Our Business
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Established:</span>
                      <span className="font-semibold">2020</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Type:</span>
                      <span className="font-semibold">Woman-Owned MSME</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certification:</span>
                      <span className="font-semibold">FSSAI Certified</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialization:</span>
                      <span className="font-semibold">Cold-Pressed Oils</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Area:</span>
                      <span className="font-semibold">All India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="product-card">
                <CardHeader>
                  <CardTitle className="font-playfair text-lg text-primary">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button className="btn-hero font-semibold shadow-lg">
                  <Phone className="mr-2" size={18} />
                  Call Us
                </Button>
              </a>
              <a href="mailto:hariniandtharshinitraders@gmail.com">
                <Button variant="outline" className="font-semibold shadow-lg border-primary text-primary hover:bg-primary hover:text-white">
                  <Mail className="mr-2" size={18} />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;