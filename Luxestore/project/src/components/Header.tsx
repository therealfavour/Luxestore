import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Store } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartItemsCount, 
  onCartClick, 
  searchTerm, 
  onSearchChange 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LuxeStore
            </span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="hidden md:block p-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount > 99 ? '99+' : cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-4">
              <a href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Home
              </a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Products
              </a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Categories
              </a>
              <a href="#" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                About
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};