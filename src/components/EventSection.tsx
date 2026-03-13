import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { eventInfo, schedule, scheduleTypeColors } from "@/data/event";
import monastery from "@/assets/monastery.jpg";

// Show only key milestone days in the homepage section
const previewSchedule = [
  { date: "Dec 7", title: "Arrival & Opening Ceremony", type: "arrival" as const },
  { date: "Dec 8–22", title: "Eight Ngyungne Cycles", type: "practice" as const },
  { date: "Dec 23", title: "2nd Potala World Peace Prayers", type: "special" as const },
  { date: "Dec 24", title: "Long Life Empowerment & Closing", type: "closing" as const },
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
            Upcoming Retreat 2026
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {eventInfo.title}
          </h2>
          <p className="font-heading text-xl text-secondary mb-4">{eventInfo.subtitle}</p>
          <p className="font-body text-lg text-primary-foreground/80">
            Join practitioners from around the world for 17 days of profound spiritual practice,
            peace prayers, and transformation in the sacred Kathmandu Valley.
          </p>
        </motion.div>

        {/* Two-column: image + schedule preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img src={monastery} alt="Buddhist monastery in Kathmandu" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span className="font-sans text-sm">{eventInfo.dates}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-sans text-sm">{eventInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, value: "17", label: "Days" },
                { icon: Users, value: "500+", label: "Expected" },
                { icon: Globe, value: "20+", label: "Countries" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-primary-foreground/10 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold">{stat.value}</div>
                  <div className="font-sans text-xs text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex-1" asChild>
                <Link to="/contact">Secure Your Spot</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex-1" asChild>
                <Link to="/event">
                  Full Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="font-sans text-xs text-primary-foreground/50 mt-3">
              Limited spaces available. Early registration recommended.
            </p>
          </motion.div>

          {/* Right — schedule preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-secondary" />
              At a Glance
            </h3>

            <div className="space-y-3">
              {previewSchedule.map((item, i) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-center bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10"
                >
                  <div className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold ${scheduleTypeColors[item.type]}`}>
                    {item.date}
                  </div>
                  <p className="font-heading font-semibold text-sm">{item.title}</p>
                </motion.div>
              ))}
            </div>

            {/* View full schedule link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6"
            >
              <Link
                to="/event"
                className="inline-flex items-center gap-2 font-sans text-sm text-secondary hover:text-secondary/80 transition-colors group"
              >
                View full day-by-day schedule
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}