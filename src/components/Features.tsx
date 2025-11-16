import { Shield, TrendingUp, Clock, MapPin, Star, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Farmers",
    description: "All farmers undergo KYC verification ensuring authenticity and quality standards.",
  },
  {
    icon: TrendingUp,
    title: "Fair Pricing",
    description: "Direct connection means better prices for buyers and fair profits for farmers.",
  },
  {
    icon: Clock,
    title: "Fresh Guarantee",
    description: "Track harvest dates and ensure maximum freshness from farm to your table.",
  },
  {
    icon: MapPin,
    title: "Local First",
    description: "Support local agriculture with location-based matching and delivery.",
  },
  {
    icon: Star,
    title: "Quality Ratings",
    description: "Transparent reviews help you find the best produce and trusted sellers.",
  },
  {
    icon: Package,
    title: "Secure Payments",
    description: "M-Pesa and Stripe integration for safe, convenient transactions.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose FreshHarvest?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for the modern agricultural marketplace with features that benefit both farmers and buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
