import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import tomatoesImg from "@/assets/product-tomatoes.jpg";
import greensImg from "@/assets/product-greens.jpg";
import carrotsImg from "@/assets/product-carrots.jpg";

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    farmer: "John Kamau Farm",
    location: "Kiambu County",
    price: "KSh 120/kg",
    rating: 4.8,
    image: tomatoesImg,
    tag: "Fresh Today",
  },
  {
    id: 2,
    name: "Farm Fresh Kale",
    farmer: "Green Valley Co-op",
    location: "Nakuru County",
    price: "KSh 80/bunch",
    rating: 4.9,
    image: greensImg,
    tag: "Certified Organic",
  },
  {
    id: 3,
    name: "Rainbow Carrots",
    farmer: "Highland Farms",
    location: "Nyandarua County",
    price: "KSh 150/kg",
    rating: 4.7,
    image: carrotsImg,
    tag: "Premium Quality",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Fresh Produce
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse premium quality products from verified local farmers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent-gradient border-0">
                  {product.tag}
                </Badge>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.farmer}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {product.location}
                </div>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
