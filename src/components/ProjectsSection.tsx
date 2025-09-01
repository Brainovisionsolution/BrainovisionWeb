import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Complete online marketplace with payment integration, inventory management, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      outcome: "300% increase in sales",
    },
    {
      title: "Learning Management System",
      description:
        "Comprehensive LMS for educational institutions with video streaming, assignment tracking, and progress analytics.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Express", "PostgreSQL", "AWS"],
      category: "Education",
      outcome: "50,000+ active users",
    },
   
    {
      title: "AI-Powered Analytics Tool",
      description:
        "Machine learning platform for business intelligence with predictive analytics and automated insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      technologies: ["Python", "TensorFlow", "React", "Docker"],
      category: "AI/ML",
      outcome: "40% efficiency gain",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-2">
            Our Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories & Case Studies
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-900"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300">
                    {project.category}
                  </Badge>
                  <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                    {project.outcome}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-yellow-50 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition"
                  onClick={() => navigate("/projects")}
                >
                  View Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 dark:border-yellow-400 text-orange-600 dark:text-yellow-400 hover:bg-orange-600 hover:text-white dark:hover:text-white px-8 py-3 transition"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
