import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Users, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import monastery from "@/assets/monastery.jpg";

const schedule = [
  { day: "Dec 28", title: "Arrival & Opening Ceremony", description: "Registration, orientation, and sacred opening rituals" },
  { day: "Dec 29-30", title: "First Ngyungne Cycle", description: "Day 1: Eight Precepts, partial fasting. Day 2: Complete fast and silence" },
  { day: "Dec 31", title: "Rest & Teaching Day", description: "Dharma teachings and preparation for the new year" },
  { day: "Jan 1", title: "World Peace Prayers", description: "Special prayers for global peace on New Year's Day" },
  { day: "Jan 2-3", title: "Second Ngyungne Cycle", description: "Deepening practice with renewed dedication" },
  { day: "Jan 4", title: "Closing Ceremony", description: "Dedication of merit, blessings, and departure" },
];

const highlights = [
  "Guidance from authentic Tibetan Buddhist masters",
  "Traditional Ngyungne practice with 1000-arm Avalokiteshvara",
  "World Peace Prayers for global harmony",
  "Vegetarian meals provided (non-fasting days)",
  "Accommodation arrangements available",
  "Certificate of participation",
];

export function EventSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="event" className="py-24 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            Upcoming Retreat 2025
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            A Historic <span className="text-secondary">International</span> Gathering
          </h2>
          <p className="font-body text-lg text-primary-foreground/80">
            Join practitioners from around the world for eight days of profound spiritual practice,
            peace prayers, and transformation in the sacred setting of Kathmandu, Nepal.
          </p>
        </motion.div>

        {/* Event Details Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={monastery}
                alt="Buddhist monastery in Kathmandu"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span className="font-sans text-sm">Dec 28 - Jan 4</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-sans text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Clock, value: "8", label: "Days" },
                { icon: Users, value: "500+", label: "Expected" },
                { icon: Globe, value: "20+", label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-primary-foreground/10 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold">{stat.value}</div>
                  <div className="font-sans text-xs text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-secondary" />
              Retreat Schedule
            </h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10"
                >
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="font-heading text-lg font-bold text-secondary">{item.day}</div>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                    <p className="font-body text-sm text-primary-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">What's Included</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="flex items-center gap-3 bg-primary-foreground/5 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-sans text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans font-semibold px-12 py-6 text-lg"
            asChild
          >
            <a href="#register">Secure Your Spot</a>
          </Button>
          <p className="font-sans text-sm text-primary-foreground/60 mt-4">
            Limited spaces available. Early registration recommended.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
