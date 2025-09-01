import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const EventsSection = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "National Hackathon 2024",
      date: "March 15-17, 2024",
      type: "Hackathon",
      participants: "500+ Participants",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      description:
        "48-hour coding marathon with industry challenges and real-world problem solving.",
    },
    {
      title: "AI/ML Workshop Series",
      date: "February 10-12, 2024",
      type: "Workshop",
      participants: "200+ Students",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      description:
        "Comprehensive machine learning workshop covering fundamentals to advanced concepts.",
    },
    {
      title: "Startup Innovation Fest",
      date: "January 20-21, 2024",
      type: "Competition",
      participants: "300+ Entrepreneurs",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
      description:
        "Platform for aspiring entrepreneurs to pitch ideas and connect with investors.",
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-yellow-500 uppercase tracking-wide mb-2">
            Events & Activities
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Events We Organize
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Engaging events that bring together students, professionals, and
            industry experts
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              onClick={() => navigate("/events")}
              className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 border-0 shadow-[inset_6px_6px_16px_#e0e0e0,inset_-6px_-6px_16px_#ffffff] dark:shadow-[inset_4px_4px_10px_#1a1a1a,inset_-4px_-4px_10px_#222222] rounded-3xl bg-white dark:bg-[#121212] cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                {/* Badge and Date */}
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200 shadow-inner"
                  >
                    {event.type}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors">
                  {event.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {event.participants}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation(); // prevents card click firing
                      navigate("/events");
                    }}
                    className="bg-yellow-100 dark:bg-yellow-700 dark:text-white text-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-600 hover:shadow-md px-4 py-1 rounded-full transition"
                  >
                    View Details
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
