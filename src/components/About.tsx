import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Languages } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating meaningful digital experiences through thoughtful design and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Engineering Student & Creative Developer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an engineering student with a passion for UI/UX design and foundational programming skills. 
              My journey combines technical expertise with creative problem-solving to build intuitive interfaces 
              that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to bring creativity and technical skills to impactful projects that make a difference 
              in people's lives through thoughtful design and robust development.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Interests</h4>
                  <p className="text-muted-foreground">DevOps and UI/UX Design</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                  <Languages className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Languages</h4>
                  <p className="text-muted-foreground">English, Tamil</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;