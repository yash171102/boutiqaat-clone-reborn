
import { Card, CardContent } from "@/components/ui/card";

export const CategoryShowcase = () => {
  const categories = [
    {
      title: "Skincare",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop",
      description: "Nourish your skin",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Makeup",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
      description: "Express yourself",
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Fragrance",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      description: "Signature scents",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Haircare",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop",
      description: "Healthy hair",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-xl text-gray-600">Discover our curated collections</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0 relative overflow-hidden rounded-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{category.title}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
