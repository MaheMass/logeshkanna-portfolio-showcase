import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bird Species Prediction System",
      description: "A deep learning system designed to classify bird species from images using machine learning techniques. Features advanced image processing and accurate species identification.",
      icon: Brain,
      technologies: ["OpenCV", "TensorFlow", "Keras", "Python", "Flask", "Pandas", "NumPy"],
      features: [
        "Image processing with OpenCV",
        "Deep learning model training",
        "Real-time species classification",
        "Web-based interface"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Grocery Store Management App",
      description: "A comprehensive mobile/web application designed to manage grocery inventory, track orders, and provide a seamless shopping experience for both customers and store owners.",
      icon: ShoppingCart,
      technologies: ["React Native", "Flutter", "Node.js", "MongoDB", "Express.js", "Stripe"],
      features: [
        "Inventory management system",
        "Order tracking and management",
        "Payment integration with Stripe",
        "Cross-platform mobile app"
      ],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that combine creativity with technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white group-hover:shadow-glow transition-all duration-300`}>
                    <project.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;