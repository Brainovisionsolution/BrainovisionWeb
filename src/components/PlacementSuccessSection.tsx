import { Card, CardContent } from "@/components/ui/card";

export const PlacementSuccessSection = () => {
  const companies = [
    "Microsoft", "Google", "Amazon", "Meta", "IBM", "Accenture",
    "TCS", "Infosys", "Wipro", "HCL", "Cognizant", "Capgemini"
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      story:
        "Brainovision's training helped me land my dream job at Google. The hands-on projects were invaluable.",
    },
    {
      name: "Rahul Kumar",
      role: "Data Scientist at Microsoft",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      story:
        "The AI/ML program gave me the skills I needed to become a successful data scientist.",
    },
    {
      name: "Sneha Patel",
      role: "Full Stack Developer at Amazon",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      story:
        "From zero coding knowledge to Amazon engineer - Brainovision made it possible.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Students Placed At
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating the success of our students in top companies worldwide
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="mb-16">
          <h4 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-8">
            Trusted by Leading Companies
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Success Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg border-0 hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {story.name}
                </h5>
                <p className="text-blue-600 dark:text-yellow-400 font-medium mb-4">
                  {story.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{story.story}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
