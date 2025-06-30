
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-rose-50 to-pink-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your
              <span className="text-rose-600 block">Beauty</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium beauty products from world-renowned brands. 
              Curated collection of skincare, makeup, and wellness essentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white">
                Shop Now <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                View Collections
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=600&fit=crop"
                alt="Beauty products"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-rose-100 rounded-xl p-4 shadow-lg">
              <p className="text-sm font-semibold text-rose-800">New Arrivals</p>
              <p className="text-xs text-rose-600">50+ Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
