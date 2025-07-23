import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      type: "education",
      icon: GraduationCap,
      title: "B.E - Computer Science and Engineering",
      institution: "Engineering College",
      score: "CGPA: 8.2",
      period: "Current",
      description: "Pursuing Bachelor's degree with focus on software development and UI/UX design"
    },
    {
      type: "education",
      icon: Award,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Kongu Kalvi Nilayam Matric Higher Secondary School, Erode",
      score: "84.6%",
      period: "Completed",
      description: "Strong foundation in mathematics and science"
    },
    {
      type: "education",
      icon: BookOpen,
      title: "Secondary School Leaving Certificate (SSLC)",
      institution: "Nandha Matric Hr Sec School, Erode",
      score: "82.4%",
      period: "Completed",
      description: "Excellent academic performance with well-rounded education"
    },
    {
      type: "internship",
      icon: Briefcase,
      title: "Mobile Application Development Intern",
      institution: "Kaashiv Infotech, Chennai",
      score: "Completed",
      period: "Internship",
      description: "Gained strong skills in building responsive and user-friendly apps using Flutter, React Native. Focused on optimizing performance, UI/UX design, and API integration."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Education & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic excellence and practical experience in technology and design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-lg text-white group-hover:shadow-glow transition-all duration-300 ${
                      item.type === 'internship' ? 'bg-gradient-to-r from-purple-500 to-pink-600' : 'bg-gradient-primary'
                    }`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-lg text-muted-foreground">{item.institution}</p>
                        </div>
                        <div className="md:text-right mt-2 md:mt-0">
                          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {item.score}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;