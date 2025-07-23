import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Logeshkanna R P
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-white/90">
            Full Stack & UI/UX Developer
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed">
            Engineering student with a passion for UI/UX design and foundational programming skills. 
            Experienced in creating intuitive interfaces and solving real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')} 
              size="lg"
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white/80 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;