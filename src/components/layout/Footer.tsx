
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerLinks = {
    "Shop": ["All Products", "New Arrivals", "Best Sellers", "Sale Items", "Gift Cards"],
    "Categories": ["Skincare", "Makeup", "Haircare", "Fragrance", "Wellness"],
    "Support": ["Contact Us", "FAQs", "Shipping Info", "Returns", "Size Guide"],
    "Company": ["About Us", "Careers", "Press", "Sustainability", "Blog"]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-rose-400 mb-4">Boutique</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for luxury beauty products. 
              Curated collections from the world's most trusted brands.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-rose-400" />
                <span>123 Beauty Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-rose-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-rose-400" />
                <span>hello@boutique.com</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-rose-400">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-rose-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Boutique. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                Cookie Policy
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Secure payments</span>
              <div className="flex gap-2">
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">VISA</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">MC</div>
                <div className="bg-white rounded px-2 py-1 text-xs font-bold text-gray-900">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
