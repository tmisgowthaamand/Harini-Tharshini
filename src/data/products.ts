// All product images are now loaded from the public/images folder

export interface Product {
  id: number;
  name: string;
  category: string;
  size: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Coconut Oil',
    category: 'coconut',
    size: '1L',
    price: 285,
    originalPrice: 320,
    image: '/images/coconut 1ltr.jpg',
    description: 'Cold-pressed virgin coconut oil with natural aroma and taste',
    features: ['Cold-Pressed', 'Virgin Quality', 'Chemical-Free'],
  },
  {
    id: 2,
    name: 'Premium Coconut Oil',
    category: 'coconut',
    size: '5L',
    price: 1350,
    originalPrice: 1500,
    image: '/images/coconut 5.jpg',
    description: 'Bulk pack for families, same premium quality',
    features: ['Cold-Pressed', 'Virgin Quality', 'Family Pack'],
  },
  {
    id: 3,
    name: 'Cold-Pressed Sesame Oil',
    category: 'sesame',
    size: '1L',
    price: 380,
    originalPrice: 420,
    image: '/images/sesame oil (1).png',
    description: 'Traditional wood-pressed sesame oil with rich flavor',
    features: ['Wood-Pressed', 'High Vitamin E', 'Authentic Taste'],
  },
  {
    id: 4,
    name: 'Cold-Pressed Sesame Oil',
    category: 'sesame',
    size: '5L',
    price: 1800,
    originalPrice: 2000,
    image: '/images/sesame oil 5l (1).png',
    description: 'Perfect for traditional cooking and oil baths',
    features: ['Wood-Pressed', 'Bulk Size', 'Traditional'],
  },
  {
    id: 5,
    name: 'Pure Groundnut Oil',
    category: 'groundnut',
    size: '1L',
    price: 320,
    originalPrice: 350,
    image: '/images/Pure Groundnut 1l (1).png',
    description: 'Pure groundnut oil perfect for deep frying and cooking',
    features: ['High Smoke Point', 'Pure Quality', 'Versatile'],
  },
  {
    id: 6,
    name: 'Pure Groundnut Oil',
    category: 'groundnut',
    size: '5L',
    price: 1500,
    originalPrice: 1650,
    image: '/images/Pure Groundnut Oil 5l (1).png',
    description: 'Family pack for all your cooking needs',
    features: ['High Smoke Point', 'Family Pack', 'Economic'],
  },
  {
    id: 7,
    name: 'Sunflower Oil',
    category: 'sunflower',
    size: '1L',
    price: 180,
    originalPrice: 200,
    image: '/images/sunflower 1l (1).png',
    description: 'Light and healthy sunflower oil for daily cooking',
    features: ['Light Taste', 'Heart Healthy', 'Daily Use'],
  },
  {
    id: 8,
    name: 'Sunflower Oil',
    category: 'sunflower',
    size: '5L',
    price: 850,
    originalPrice: 950,
    image: '/images/sunflower 5l (1).png',
    description: 'Economical choice for regular cooking',
    features: ['Light Taste', 'Economic', 'Bulk Pack'],
  },
  {
    id: 9,
    name: 'Traditional Gingelly Oil',
    category: 'traditional',
    size: '1L',
    price: 320,
    originalPrice: 400,
    image: '/images/1.png',
    description: 'Authentic South Indian gingelly oil extracted using traditional wooden ghani method. Perfect for cooking, hair care, and oil baths. Rich in antioxidants and vitamin E.',
    features: ['Wooden Ghani Pressed', 'South Indian Traditional', 'Multi-Purpose', 'Chemical-Free'],
  },
  {
    id: 10,
    name: 'Premium Coconut Oil (Chekku)',
    category: 'traditional',
    size: '1L',
    price: 440,
    originalPrice: 520,
    image: '/images/2.png',
    description: 'Pure coconut oil extracted using traditional chekku (wooden press) method from fresh coconuts. Retains natural aroma and nutrients. Ideal for cooking and Ayurvedic practices.',
    features: ['Chekku Pressed', 'Fresh Coconut', 'Ayurvedic Quality', 'Natural Aroma'],
  },
  {
    id: 11,
    name: 'Cold-Pressed Mustard Oil',
    category: 'traditional',
    size: '1L',
    price: 240,
    originalPrice: 360,
    image: '/images/3.png',
    description: 'Traditional South Indian mustard oil cold-pressed to preserve natural pungency and nutrients. Excellent for pickles, tempering, and traditional recipes.',
    features: ['Cold-Pressed', 'Natural Pungency', 'Pickle Making', 'Traditional Recipe'],
  },
];
