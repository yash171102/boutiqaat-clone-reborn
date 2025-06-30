
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Star } from "lucide-react";

export const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-rose-600 rounded-full p-4">
              <Mail size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know about new arrivals, exclusive offers, and beauty tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 border-0 h-12"
            />
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 h-12">
              Subscribe
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              <span>Exclusive deals</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              <span>Beauty tips</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={16} />
              <span>New arrivals</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-6">
            By subscribing, you agree to our privacy policy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
