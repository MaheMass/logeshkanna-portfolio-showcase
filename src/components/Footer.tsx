import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center text-sm">
            Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
            by Logeshkanna R P
          </p>
          <p className="text-xs text-background/70 mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;