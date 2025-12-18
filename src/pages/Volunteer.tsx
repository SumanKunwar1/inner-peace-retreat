import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Users, 
  Clock, 
  CheckCircle,
  Mail,
  User,
  Phone,
  Globe,
  MessageSquare,
  Send,
  Utensils,
  Camera,
  Languages,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const volunteerRoles = [
  {
    icon: Utensils,
    title: "Kitchen & Meals",
    desc: "Help prepare and serve vegetarian meals",
    commitment: "4-6 hours/day"
  },
  {
    icon: Users,
    title: "Registration Desk",
    desc: "Welcome participants and assist with check-in",
    commitment: "Flexible shifts"
  },
  {
    icon: Languages,
    title: "Translation",
    desc: "Assist with translation services",
    commitment: "During teachings"
  },
  {
    icon: Camera,
    title: "Photography/Video",
    desc: "Document the retreat experience",
    commitment: "Flexible"
  },
  {
    icon: HeartHandshake,
    title: "General Support",
    desc: "Assist wherever needed",
    commitment: "Flexible"
  },
  {
    icon: Clock,
    title: "Logistics",
    desc: "Help with setup and coordination",
    commitment: "Pre & during event"
  }
];

const benefits = [
  "Free accommodation during the retreat",
  "Vegetarian meals provided",
  "Participate in teachings and practices",
  "Create powerful merit through service",
  "Connect with international sangha",
  "Certificate of service"
];

const Volunteer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

  const toggleRole = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (selectedRoles.length === 0) {
      toast.error("Please select at least one volunteer role");
      return;
    }
    
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    const templateParams = {
      form_type: "Volunteer Application",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || 'Not provided',
      country: formData.get('country'),
      roles: selectedRoles.join(', '),
      message: formData.get('experience') || 'Not provided',
      inquiryType: 'Volunteer',
    };

    try {
      await emailjs.send(
        'service_nrpjlk2',
        'template_5ivkjpi',
        templateParams,
        '6uTaZNVAqe2im1A5W'
      );
      
      toast.success("Thank you for volunteering! We'll be in touch soon with more details.");
      setSelectedRoles([]);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to submit application. Please try again or contact us directly.");
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Seva - Selfless Service
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Volunteer With <span className="text-primary">Us</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Seva (selfless service) is a powerful practice that creates merit while 
                supporting the Dharma. Join our volunteer team for the 2nd International 
                Ngyungne Retreat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Volunteer <span className="text-primary">Roles</span>
                </h2>
                <p className="font-body text-muted-foreground">
                  Select one or more roles that interest you
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {volunteerRoles.map((role, index) => (
                  <motion.button
                    key={role.title}
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => toggleRole(role.title)}
                    className={`p-6 rounded-xl text-left transition-all relative ${
                      selectedRoles.includes(role.title)
                        ? "bg-primary/10 border-2 border-primary shadow-soft"
                        : "bg-card border-2 border-transparent shadow-soft hover:border-primary/30"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      selectedRoles.includes(role.title) ? "bg-primary/20" : "bg-muted"
                    }`}>
                      <role.icon className={`w-6 h-6 ${
                        selectedRoles.includes(role.title) ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {role.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      {role.desc}
                    </p>
                    <span className="font-sans text-xs text-secondary">
                      {role.commitment}
                    </span>
                    {selectedRoles.includes(role.title) && (
                      <CheckCircle className="absolute top-4 right-4 w-5 h-5 text-primary" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Volunteer Benefits
                  </h2>
                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="font-body text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3">
                      The Power of Seva
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      In the Buddhist tradition, seva (selfless service) is considered one of 
                      the most powerful ways to accumulate merit. By volunteering at a spiritual 
                      retreat, you support the Dharma and benefit countless beings while 
                      deepening your own practice.
                    </p>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                      Volunteer Application
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input name="name" required className="pl-10" placeholder="Your name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input name="email" type="email" required className="pl-10" placeholder="your@email.com" />
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
                            <Input name="phone" type="tel" className="pl-10" placeholder="+1 234 567 890" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="font-sans text-sm font-medium text-foreground">
                            Country *
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input name="country" required className="pl-10" placeholder="Your country" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-foreground">
                          Selected Roles
                        </label>
                        <div className="p-3 bg-muted rounded-lg min-h-[60px]">
                          {selectedRoles.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {selectedRoles.map(role => (
                                <span key={role} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                  {role}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className="font-sans text-sm text-muted-foreground">
                              Select roles from the options above
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-sans text-sm font-medium text-foreground">
                          Availability & Experience
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                          <Textarea
                            name="experience"
                            className="pl-10 resize-none"
                            rows={4}
                            placeholder="Tell us about your availability during the retreat (Dec 28 - Jan 4), relevant experience, and why you'd like to volunteer..."
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Submit Application
                          </span>
                        )}
                      </Button>
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

export default Volunteer;