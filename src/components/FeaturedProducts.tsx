
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

export const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Vitamin C Serum",
      brand: "GlowLab",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 234,
      isNew: true
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      brand: "PureSkin",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 156,
      isSale: true
    },
    {
      id: 3,
      name: "Luxury Face Mask",
      brand: "RadiantGlow",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=300&h=300&fit=crop",
      rating: 4.9,
      reviews: 89,
      isNew: true
    },
    {
      id: 4,
      name: "Anti-Aging Cream",
      brand: "YouthLux",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 312,
      isSale: true
    },
    {
      id: 5,
      name: "Cleansing Oil",
      brand: "PureBeauty",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 198
    },
    {
      id: 6,
      name: "Eye Cream",
      brand: "LuxeCare",
      price: 95.99,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 167
    }
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Handpicked favorites from our collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-0 relative">
                {/* Product Badges */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 z-20 bg-white/80 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  <Heart 
                    size={18} 
                    className={wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"} 
                  />
                </Button>

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingBag size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{product.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    
                    {product.originalPrice && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
