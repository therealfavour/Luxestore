import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true,
    onSale: true,
    tags: ["wireless", "noise-cancelling", "premium"]
  },
  {
    id: 2,
    name: "Designer Leather Handbag",
    price: 189.99,
    category: "Fashion",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Elegant handcrafted leather handbag perfect for any occasion. Features multiple compartments and premium Italian leather.",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    featured: false,
    onSale: false,
    tags: ["leather", "designer", "handbag"]
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 329.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life. Perfect for active lifestyles.",
    rating: 4.7,
    reviews: 2156,
    inStock: true,
    featured: true,
    onSale: true,
    tags: ["smartwatch", "fitness", "GPS"]
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    category: "Home",
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for work and study environments.",
    rating: 4.6,
    reviews: 543,
    inStock: true,
    featured: false,
    onSale: false,
    tags: ["LED", "adjustable", "modern"]
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Fashion",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Soft, comfortable organic cotton t-shirt available in multiple colors. Sustainable and ethically made.",
    rating: 4.5,
    reviews: 789,
    inStock: true,
    featured: false,
    onSale: false,
    tags: ["organic", "cotton", "sustainable"]
  },
  {
    id: 6,
    name: "Professional Camera Lens",
    price: 899.99,
    originalPrice: 1199.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Professional-grade camera lens with superior optical quality. Perfect for portrait and landscape photography.",
    rating: 4.9,
    reviews: 324,
    inStock: true,
    featured: true,
    onSale: true,
    tags: ["camera", "lens", "professional"]
  },
  {
    id: 7,
    name: "Luxury Scented Candle Set",
    price: 59.99,
    category: "Home",
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Set of 3 luxury scented candles with natural soy wax. Creates a relaxing ambiance for any space.",
    rating: 4.7,
    reviews: 456,
    inStock: true,
    featured: false,
    onSale: false,
    tags: ["candles", "luxury", "soy wax"]
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4219653/pexels-photo-4219653.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    rating: 4.4,
    reviews: 1089,
    inStock: true,
    featured: false,
    onSale: true,
    tags: ["wireless", "charging", "Qi-compatible"]
  }
];

export const categories = ["All", "Electronics", "Fashion", "Home"];