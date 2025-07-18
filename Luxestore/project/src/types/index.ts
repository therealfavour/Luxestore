export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  onSale: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}