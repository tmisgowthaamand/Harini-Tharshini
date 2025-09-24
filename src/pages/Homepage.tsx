import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import heroImage from '@/assets/hero-oil-pour.jpg';
import oilCollection from '@/assets/oil-bottles-collection.jpg';
import womanEntrepreneur from '@/assets/woman-entrepreneur.jpg';
import kitchenLifestyle from '@/assets/kitchen-lifestyle.jpg';

const Homepage = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Coconut Oil',
      size: '1L',
      price: '₹285',
      image: '/images/coconut 1ltr.jpg',
    },
    {
      id: 2,
      name: 'Cold-Pressed Sesame Oil',
      size: '5L',
      price: '₹1,250',
      image: '/images/sesame oil 5l (1).png',
    },
    {
      id: 3,
      name: 'Pure Groundnut Oil',
      size: '1L',
      price: '₹320',
      image: '/images/Pure Groundnut 1l (1).png',
    },
  ];

  const trustBadges = [
    { icon: Shield, title: 'FSSAI Certified', desc: 'Food safety compliant' },
    { icon: Award, title: 'MSME Registered', desc: 'Government recognized' },
    { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹500' },
    { icon: Star, title: '4.8 Rating', desc: '500+ happy customers' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto stagger-children">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
              Pure Oils, Trusted in Madurai
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Premium edible oils from our woman-owned MSME enterprise. 
              Authentic flavors for your family's health and prosperity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Shop Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/distributor">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <badge.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-primary">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-nunito font-semibold">
                Proudly Woman-Owned MSME Enterprise
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                From Our Heart to Your Kitchen
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Rooted in the rich traditions of Madurai, we are Harini & Tharshini – 
                  two women entrepreneurs committed to bringing you the purest, 
                  most authentic edible oils.
                </p>
                <p>
                  Our journey began with a simple belief: every family deserves 
                  access to premium, unadulterated oils that enhance both flavor 
                  and health. From careful sourcing to traditional extraction methods, 
                  we ensure every drop meets our exacting standards.
                </p>
              </div>
              <Link to="/shop">
                <Button size="lg" className="btn-hero">
                  Explore Our Products <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={womanEntrepreneur} 
                alt="Woman entrepreneur portrait" 
                className="rounded-lg shadow-deep w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Premium Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium edible oils from Madurai's trusted woman-owned MSME enterprise. Pure oils for your family's health and prosperity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card key={product.id} className="product-card overflow-hidden">
                <div className="aspect-square bg-white p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-primary">{product.name}</h3>
                    <p className="text-muted-foreground">{product.size}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Link to={`/product/${product.id}`}>
                      <Button className="btn-hero">Add to Cart</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Products <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={kitchenLifestyle} 
                alt="Traditional Indian kitchen cooking" 
                className="rounded-lg shadow-deep w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                Bringing Tradition to Modern Kitchens
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Every meal tells a story, and our oils help you tell yours with 
                  authentic flavors that connect generations. From the aromatic 
                  sesame oil for your morning prayers to the rich coconut oil 
                  for festive sweets.
                </p>
                <p>
                  Trusted by families across Tamil Nadu, our oils maintain the 
                  traditional taste while meeting modern purity standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor CTA */}
      <section className="py-20 gradient-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">
              Partner With Us
            </h2>
            <p className="text-xl text-white/90">
              Join our network of distributors and bring premium oils to your community. 
              Attractive margins, reliable supply, and dedicated support.
            </p>
            <Link to="/distributor">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Become a Distributor <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Homepage;