
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export const PromoBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Gift className="text-yellow-300" size={32} />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Limited Time Offer
              </span>
            </div>
            
            <h2 className="text-5xl font-bold leading-tight">
              Up to 50% Off
              <span className="block text-yellow-300">Summer Sale</span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Discover amazing deals on premium beauty products. 
              Shop now and save big on your favorite brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Shop Sale <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Deals
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-white/75">On orders over $75</p>
              </div>
              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-white/75">30-day return policy</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop"
                alt="Sale products"
                className="w-full h-80 object-cover rounded-lg"
              />
              
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg transform rotate-12">
                50%<br/>OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
