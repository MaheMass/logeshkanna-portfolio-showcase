import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "logeshkanna161@gmail.com",
      href: "mailto:logeshkanna161@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9342633492",
      href: "tel:+919342633492"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring creativity and technical skills to your next project. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's discuss how we can work together.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 text-white/90 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-200">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-300 hover:shadow-glow"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;