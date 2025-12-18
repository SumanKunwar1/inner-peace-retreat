import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const templateParams = {
      form_type: "Homepage Contact Form",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      country: formData.get('country') || 'Not provided',
      inquiryType: formData.get('inquiryType'),
      message: formData.get('message'),
      roles: 'N/A',
    };

    try {
      await emailjs.send(
        'service_nrpjlk2',
        'template_5ivkjpi',
        templateParams,
        '6uTaZNVAqe2im1A5W'
      );
      
      toast.success("Thank you for your message! We'll respond shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again or email us directly at info@ngyungne.org");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Questions? <span className="text-primary">We're Here</span> to Help
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Whether you have questions about the retreat, registration, or how you can
                contribute, our team is ready to assist you on your spiritual journey.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Location</h4>
                    <p className="font-body text-muted-foreground">
                      Jorpati, Kathmandu, Nepal
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@ngyungne.org" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      info@ngyungne.org
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+9771234567890" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      +977 1 234 567 890
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social/Additional Info */}
              <div className="p-6 bg-muted/50 rounded-xl">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Office Hours:</strong> Monday - Saturday, 9:00 AM - 5:00 PM (Nepal Time)
                </p>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="register"
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Register or Inquire
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

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
                        placeholder="Your name"
                        required
                        className="pl-10 bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="pl-10 bg-background"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="pl-10 bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Country
                    </label>
                    <Input
                      name="country"
                      placeholder="Your country"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="registration">Retreat Registration</option>
                    <option value="accommodation">Accommodation Inquiry</option>
                    <option value="sponsorship">Sponsorship/Donation</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your interest in the retreat..."
                      required
                      rows={4}
                      className="pl-10 bg-background resize-none"
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
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}