import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Palette, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "HTML & CSS"],
      description: "Core programming languages for backend and frontend development"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL"],
      description: "Database design and management"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["User Interface Design", "User Experience", "Responsive Design"],
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      title: "Development Tools",
      icon: Server,
      skills: ["OpenCV", "TensorFlow/Keras", "Flask/Django", "React Native/Flutter"],
      description: "Modern frameworks and tools for development"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern applications and solving complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;