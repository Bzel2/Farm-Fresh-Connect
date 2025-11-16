import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sprout className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">FreshHarvest</span>
            </div>
            <p className="text-sm text-background/70">
              Connecting farmers and buyers for a sustainable, transparent agricultural marketplace.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-background transition-colors">For Farmers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">For Buyers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Seller Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} FreshHarvest. All rights reserved. Built with care for farmers and consumers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
