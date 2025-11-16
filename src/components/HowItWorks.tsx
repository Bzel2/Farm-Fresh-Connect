import { UserPlus, Search, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account as a farmer or buyer. Quick verification for sellers.",
    number: "01",
  },
  {
    icon: Search,
    title: "Browse or List",
    description: "Farmers list products, buyers browse fresh produce with smart filters.",
    number: "02",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Securely",
    description: "Complete transactions with M-Pesa or Stripe. Transparent pricing.",
    number: "03",
  },
  {
    icon: Truck,
    title: "Track & Receive",
    description: "Real-time order tracking and delivery updates to your doorstep.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple steps to connect farmers and buyers in a transparent marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-20 h-20 bg-primary/10 rounded-full" />
                <div className="relative w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
