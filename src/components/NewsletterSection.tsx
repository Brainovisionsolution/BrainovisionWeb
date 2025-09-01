import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell, CheckCircle } from "lucide-react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw4hwLePRvjuqPEZnl5ktNnzLwvZpKKGyZhUELMHnzCiT6kXU8aOR3kPiBBJh3Fq4fz/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail(""); // Clear input
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 relative overflow-hidden dark:from-yellow-600 dark:via-yellow-800 dark:to-orange-700">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/20 dark:bg-white/10 backdrop-blur-lg border-0 shadow-2xl border border-white/30 dark:border-white/20">
          <CardContent className="p-8 text-center">
            {/* Icon */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Brainovision
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest updates on new courses, events, and industry insights delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/90 dark:bg-gray-100 border-white/40 text-gray-800 placeholder-gray-500 focus:bg-white pl-10 py-3 rounded-md shadow-lg focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-white text-yellow-700 hover:bg-yellow-50 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
              </Button>
            </form>

            {status === "success" && (
              <div className="flex items-center justify-center text-green-100 bg-green-600 rounded-md px-4 py-2 mb-4 max-w-md mx-auto text-sm font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                Subscribed successfully! 🎉
              </div>
            )}
            {status === "error" && (
              <div className="text-red-100 bg-red-600 rounded-md px-4 py-2 mb-4 max-w-md mx-auto text-sm font-medium">
                ❌ Something went wrong. Please try again later.
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-2 text-sm text-white/80">
              <span>✨ Join 10,000+ subscribers</span>
              <span className="hidden sm:inline">•</span>
              <span>🔒 No spam, unsubscribe anytime</span>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
