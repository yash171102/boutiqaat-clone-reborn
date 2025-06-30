
import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const categories = [
    "Beauty", "Skincare", "Haircare", "Makeup", "Fragrance", "Fashion", "Wellness"
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-rose-50 text-center py-2 text-sm text-rose-800">
        Free shipping on orders over $75 | New arrivals weekly
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <h1 className="text-2xl font-bold text-rose-600">Boutique</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                {category}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-80">
            <Search size={18} className="text-gray-400 mr-3" />
            <Input
              placeholder="Search products..."
              className="border-0 bg-transparent focus:ring-0 text-sm"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search size={20} className="md:hidden" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm">
              <User size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
            <Search size={18} className="text-gray-400 mr-3" />
            <Input
              placeholder="Search products..."
              className="border-0 bg-transparent focus:ring-0 text-sm"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-700 hover:text-rose-600 transition-colors font-medium py-2"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
