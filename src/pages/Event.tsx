import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Heart,
  CheckCircle,
  Globe,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import monastery from "@/assets/monastery.jpg";

const eventSchedule = [
  { date: "Dec 28", title: "Arrival & Registration", desc: "Welcome ceremony and orientation" },
  { date: "Dec 29-30", title: "First Ngyungne Cycle", desc: "First two-day purification retreat" },
  { date: "Dec 31-Jan 1", title: "Second Ngyungne Cycle", desc: "New Year blessing & second cycle" },
  { date: "Jan 2-3", title: "Third Ngyungne Cycle", desc: "Deepening practice & third cycle" },
  { date: "Jan 4", title: "Potala World Peace Prayers", desc: "Grand closing ceremony & dedication" },
];

const inclusions = [
  "All teachings and empowerments",
  "Practice materials and sadhanas",
  "Accommodation (shared/private options)",
  "Vegetarian meals during eating days",
  "Airport transfers (Kathmandu)",
  "Translation services (multiple languages)",
  "Guided meditation sessions",
  "Certificate of completion"
];

const Event = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-28T00:00:00+05:45");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--secondary))_0%,_transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Historic International Event
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                2nd International Ngyungne Retreat
              </h1>
              <h2 className="font-heading text-xl md:text-2xl text-primary mb-6">
                & 1st Potala World Peace Prayers 2025
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
                December 28, 2025 — January 4, 2026 • Jorpati, Kathmandu, Nepal
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-md mx-auto mb-10">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-xl p-3 md:p-4 shadow-soft">
                    <div className="font-heading text-2xl md:text-4xl font-bold text-primary">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="font-sans text-xs md:text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                  <Link to="/contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Register Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link to="/donate">
                    Support This Event
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A <span className="text-primary">Transformative</span> Experience
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-6">
                  Join practitioners from around the world for an intensive 8-day spiritual 
                  retreat featuring three complete Ngyungne cycles and the historic first 
                  Potala World Peace Prayers.
                </p>
                <p className="font-body text-muted-foreground mb-8">
                  Under the guidance of qualified teachers, participants will engage in 
                  purification practices, receive teachings and empowerments, and generate 
                  merit for world peace and the benefit of all beings.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: "8 Days", desc: "Intensive Retreat" },
                    { icon: Users, label: "Global", desc: "International Sangha" },
                    { icon: Globe, label: "Multi-language", desc: "Translation Available" },
                    { icon: Sparkles, label: "3 Cycles", desc: "Complete Ngyungne" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-foreground">{item.label}</div>
                        <div className="font-sans text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-card mb-6">
                  <img
                    src={monastery}
                    alt="Retreat venue in Kathmandu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Venue Location
                      </h4>
                      <p className="font-body text-muted-foreground">
                        Jorpati, Kathmandu, Nepal<br />
                        Nestled in the sacred Kathmandu Valley, home to centuries of Buddhist practice.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Event <span className="text-primary">Schedule</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                8 days of intensive practice and transformation
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {eventSchedule.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 pb-8 relative"
                >
                  {index < eventSchedule.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft flex-1">
                    <div className="font-sans text-sm font-medium text-secondary mb-1">
                      {item.date}
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What's <span className="text-primary">Included</span>
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-soft"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-body text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Secure Your Place
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Limited spaces available. Register early to join this historic 
                international gathering of practitioners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                  <Link to="/contact">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/donate">
                    <Heart className="w-5 h-5 mr-2" />
                    Support the Event
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Event;
