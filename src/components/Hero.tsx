import { Button } from "@/components/ui/button";
import { ArrowRight, Store, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-produce.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-earth-gradient">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Connect Farmers to
                <span className="block text-primary">Fresh Food Seekers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Direct farm-to-table marketplace. Buy fresh, support local farmers, reduce waste. Quality produce delivered from verified farms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity">
                <Store className="mr-2 h-5 w-5" />
                I'm a Farmer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ShoppingBag className="mr-2 h-5 w-5" />
                I'm a Buyer
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Farmers</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">2000+</p>
                <p className="text-sm text-muted-foreground">Fresh Products</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fresh farm produce" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent-gradient text-accent-foreground rounded-2xl p-6 shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">Farm Fresh</p>
              <p className="text-sm opacity-90">Delivered Daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
