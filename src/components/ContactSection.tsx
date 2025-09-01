import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, PhoneCall } from "lucide-react";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "support@brainovision.in",
      description: "Send us your queries anytime",
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 9676369360",
      description: "Mon–Fri 9:00 AM – 6:00 PM",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Visit Us",
      details: " Hi-tech city , Hyderabad, India",
      description: "Schedule an appointment",
    },
  ];

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  const formData = new FormData();
  formData.append("firstName", form.firstName.value);
  formData.append("lastName", form.lastName.value);
  formData.append("email", form.email.value);
  formData.append("subject", form.subject.value);
  formData.append("message", form.message.value);

  try {
    setLoading(true);
    const res = await fetch("https://script.google.com/macros/s/AKfycbyMXztx9EtMiVfiDc_pT-BA0-pzTn92g_MzMsZQ4x93pFpFPZjOTzfbcwKEpPod2lqcGQ/exec", {
      method: "POST",
      body: formData, // ✅ No headers = avoid CORS preflight
    });

    if (res.ok) {
      alert("✅ Message submitted successfully!");
      form.reset();
    } else {
      alert("❌ Submission failed. Try again.");
    }
  } catch (err) {
    console.error("🚫 Error:", err);
    alert("🚫 Network or script error. Try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Helmet>
        <title>Contact Us | Brainovision Solutions</title>
        <meta name="description" content="Reach out to Brainovision for project consultations, collaborations, or AI-driven innovations." />
        <meta name="keywords" content="Brainovision, Contact, Support, Hyderabad, AI Consultation" />
        <meta name="author" content="Brainovision Solutions" />
        <meta property="og:title" content="Contact Brainovision Solutions" />
        <meta property="og:description" content="Drop us a message or visit our office in Hyderabad." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brainovision.in/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Brainovision Solutions" />
        <meta name="twitter:description" content="Ready to transform your ideas? Connect with Brainovision." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" />
      </Helmet>

      <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let’s Start Your Next Project</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Ready to transform your ideas into reality? Get in touch with our experts today.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="rounded-3xl bg-white dark:bg-[#111] shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] dark:shadow-[4px_4px_12px_#000,-4px_-4px_12px_#1a1a1a]">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                      <Input name="firstName" placeholder="John" required className="bg-white dark:bg-black shadow-inner rounded-xl border-none px-4 py-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                      <Input name="lastName" placeholder="Doe" required className="bg-white dark:bg-black shadow-inner rounded-xl border-none px-4 py-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input name="email" type="email" placeholder="john@example.com" required className="bg-white dark:bg-black shadow-inner rounded-xl border-none px-4 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input name="subject" placeholder="" className="bg-white dark:bg-black shadow-inner rounded-xl border-none px-4 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea name="message" placeholder="..." rows={5} className="bg-white dark:bg-black shadow-inner rounded-xl border-none px-4 py-2" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="rounded-3xl bg-white dark:bg-[#111] px-6 py-4 shadow-[6px_6px_14px_#d1d1d1,-6px_-6px_14px_#ffffff] dark:shadow-[3px_3px_10px_#000,-3px_-3px_10px_#1a1a1a] transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-xl">{info.icon}</div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h5>
                        <p className="text-yellow-600 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

    <Card className="rounded-3xl overflow-hidden shadow-md border-none">
  <CardContent className="p-0">
    <iframe
      title="Brainovision Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027811420927!2d78.38817117505961!3d17.44109810141588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d13bdf50c3%3A0xa44315311d0fd837!2sBrainovision%20Solutions%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1722426439570!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-64 rounded-3xl"
    ></iframe>
  </CardContent>
</Card>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};
