import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Calendar,
  Globe,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<"register" | "contact">("register");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const templateParams: any = {
      form_type: formType === "register" ? "Retreat Registration" : "General Inquiry",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      country: formData.get('country'),
      inquiryType: formData.get('inquiryType') || formData.get('accommodation') || 'Registration',
      message: formData.get('message') || 'Not provided',
      roles: 'N/A',
    };

    // Add registration-specific fields
    if (formType === "register") {
      const accommodation = formData.get('accommodation');
      const dietary = formData.get('dietary');
      const experience = formData.get('experience');
      
      templateParams.message = `
Accommodation: ${accommodation}
Dietary Requirements: ${dietary}
Meditation Experience: ${experience}

Additional Information:
${formData.get('message') || 'None provided'}
      `.trim();
    }

    try {
      await emailjs.send(
        'service_nrpjlk2',
        'template_5ivkjpi',
        templateParams,
        '6uTaZNVAqe2im1A5W'
      );
      
      if (formType === "register") {
        toast.success("Registration submitted! We'll contact you with confirmation details shortly.");
      } else {
        toast.success("Thank you for your message! We'll respond within 24 hours.");
      }
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to submit. Please try again or contact us directly at info@ngyungne.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Register or <span className="text-primary">Contact Us</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Ready to join the 2nd International Ngyungne Retreat? Register below or 
                send us a message with any questions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Left - Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">Location</h4>
                        <p className="font-body text-muted-foreground">
                          Jorpati, Kathmandu, Nepal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                        <a href="mailto:info@ngyungne.org" className="font-body text-muted-foreground hover:text-primary transition-colors">
                          info@ngyungne.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                        <a href="tel:+9771234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">
                          +977 1 234 567 890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">Office Hours</h4>
                        <p className="font-body text-muted-foreground">
                          Mon - Sat: 9:00 AM - 5:00 PM (NPT)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Quick Info */}
                  <div className="bg-primary/5 rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Event Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-secondary" />
                        <span className="font-body text-sm text-muted-foreground">
                          December 28, 2025 - January 4, 2026
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-secondary" />
                        <span className="font-body text-sm text-muted-foreground">
                          Jorpati, Kathmandu, Nepal
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-secondary" />
                        <span className="font-body text-sm text-muted-foreground">
                          Multi-language translation available
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-3"
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card">
                    {/* Form Type Toggle */}
                    <div className="flex gap-2 mb-8 p-1 bg-muted rounded-lg">
                      <button
                        type="button"
                        onClick={() => setFormType("register")}
                        className={`flex-1 py-2 px-4 rounded-md font-sans font-medium transition-all ${
                          formType === "register"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Register for Retreat
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormType("contact")}
                        className={`flex-1 py-2 px-4 rounded-md font-sans font-medium transition-all ${
                          formType === "contact"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        General Inquiry
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              name="name"
                              placeholder="Your full name"
                              required
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              name="phone"
                              type="tel"
                              placeholder="+1 234 567 890"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Country *
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                              name="country"
                              placeholder="Your country"
                              required
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      {formType === "register" && (
                        <>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="font-sans text-sm font-medium text-foreground">
                                Accommodation Preference
                              </label>
                              <select
                                name="accommodation"
                                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                              >
                                <option value="shared">Shared Room</option>
                                <option value="private">Private Room</option>
                                <option value="own">Own Accommodation</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="font-sans text-sm font-medium text-foreground">
                                Dietary Requirements
                              </label>
                              <select
                                name="dietary"
                                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                              >
                                <option value="none">No Special Requirements</option>
                                <option value="vegan">Vegan</option>
                                <option value="gluten-free">Gluten Free</option>
                                <option value="other">Other (specify below)</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="font-sans text-sm font-medium text-foreground">
                              Previous Meditation Experience
                            </label>
                            <select
                              name="experience"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="beginner">Beginner - New to meditation</option>
                              <option value="intermediate">Intermediate - Some experience</option>
                              <option value="advanced">Advanced - Regular practitioner</option>
                              <option value="ngyungne">Have done Ngyungne before</option>
                            </select>
                          </div>
                        </>
                      )}

                      {formType === "contact" && (
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Inquiry Type
                          </label>
                          <select
                            name="inquiryType"
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="general">General Question</option>
                            <option value="sponsorship">Sponsorship/Donation</option>
                            <option value="volunteer">Volunteer Opportunity</option>
                            <option value="media">Media/Press Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-foreground">
                          {formType === "register" ? "Additional Information" : "Message *"}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <Textarea
                            name="message"
                            placeholder={formType === "register" 
                              ? "Any special requests, health concerns, or questions..."
                              : "Your message..."
                            }
                            required={formType === "contact"}
                            rows={4}
                            className="pl-10 resize-none"
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            {formType === "register" ? "Submitting..." : "Sending..."}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            {formType === "register" ? "Submit Registration" : "Send Message"}
                          </span>
                        )}
                      </Button>

                      {formType === "register" && (
                        <p className="font-sans text-xs text-center text-muted-foreground">
                          By registering, you agree to our terms and conditions. 
                          We'll send confirmation details to your email.
                        </p>
                      )}
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;