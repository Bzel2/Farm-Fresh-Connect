import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import farmerImg from "@/assets/farmer-portrait.jpg";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Farmers */}
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 lg:p-12 text-primary-foreground">
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-sm font-medium opacity-90 mb-2">FOR FARMERS</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Reach More Customers, Grow Your Business
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  List your products, set your prices, and connect directly with buyers. No middlemen, better profits.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Zero commission on first 30 days</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Free KYC verification support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Real-time sales dashboard</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Selling Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          </div>

          {/* For Buyers */}
          <div className="relative overflow-hidden rounded-3xl bg-card border-2 border-primary p-8 lg:p-12">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary mb-2">FOR BUYERS</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Fresh Produce, Delivered to Your Door
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Browse verified farms, compare prices, and order fresh produce with confidence. Support local agriculture.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm text-primary">✓</span>
                  </div>
                  <span className="text-foreground">100% freshness guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm text-primary">✓</span>
                  </div>
                  <span className="text-foreground">Track harvest to delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm text-primary">✓</span>
                  </div>
                  <span className="text-foreground">Secure payment options</span>
                </li>
              </ul>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
