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
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventInfo, schedule, inclusions, scheduleTypeColors } from "@/data/event";
import monastery from "@/assets/monastery.jpg";

const typeLabel: Record<string, string> = {
  arrival: "Arrival",
  practice: "Practice",
  special: "Special",
  closing: "Closing",
};

const Event = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(eventInfo.countdownTarget).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--secondary))_0%,_transparent_55%)]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Historic International Event
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {eventInfo.title}
              </h1>
              <h2 className="font-heading text-xl md:text-2xl text-primary mb-4">
                {eventInfo.subtitle}
              </h2>
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-10">
                {eventInfo.dates} &bull; {eventInfo.location}
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-sm mx-auto mb-10">
                {[
                  { label: "Days",    value: timeLeft.days },
                  { label: "Hours",   value: timeLeft.hours },
                  { label: "Mins",    value: timeLeft.minutes },
                  { label: "Secs",    value: timeLeft.seconds },
                ].map((c) => (
                  <div key={c.label} className="bg-card rounded-xl p-3 md:p-4 shadow-soft text-center">
                    <div className="font-heading text-2xl md:text-4xl font-bold text-primary">
                      {c.value.toString().padStart(2, "0")}
                    </div>
                    <div className="font-sans text-xs text-muted-foreground">{c.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                  <Link to="/contact"><Heart className="w-5 h-5 mr-2" />Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link to="/donate">Support This Event</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A <span className="text-primary">Transformative</span> Experience
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-5">
                  Join practitioners from around the world for an intensive 17-day spiritual
                  retreat featuring eight complete Ngyungne cycles and the historic 2nd
                  Potala World Peace Prayers.
                </p>
                <p className="font-body text-muted-foreground mb-8">
                  Under the guidance of qualified Tibetan Buddhist masters, participants engage
                  in purification practices, receive teachings and empowerments, and generate
                  boundless merit for world peace and the benefit of all sentient beings.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Calendar,  label: "17 Days",        desc: "Intensive Retreat" },
                    { icon: Users,     label: "Global Sangha",  desc: "International Community" },
                    { icon: Globe,     label: "Multi-language", desc: "Translation Available" },
                    { icon: Sparkles,  label: "8 Cycles",       desc: "Complete Ngyungne" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                  <img src={monastery} alt="Retreat venue" className="w-full h-full object-cover" />
                </div>
                <div className="bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">Venue Location</h4>
                      <p className="font-body text-muted-foreground">
                        Jorpati, Kathmandu, Nepal<br />
                        Nestled in the sacred Kathmandu Valley, home to centuries of Buddhist practice and pilgrimage.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Full Schedule ─────────────────────────────────────────────── */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Day-by-Day <span className="text-primary">Schedule</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground">17 days of intensive practice and transformation</p>
            </motion.div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {(["arrival", "practice", "special", "closing"] as const).map((t) => (
                <span key={t} className={`px-3 py-1 rounded-full text-xs font-sans font-semibold ${scheduleTypeColors[t]}`}>
                  {typeLabel[t]}
                </span>
              ))}
            </div>

            <div className="max-w-3xl mx-auto space-y-0">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex gap-4 pb-8 relative"
                >
                  {/* Timeline line */}
                  {index < schedule.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
                  )}

                  {/* Dot */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${scheduleTypeColors[item.type]}`}>
                    <Clock className="w-4 h-4" />
                  </div>

                  {/* Card */}
                  <div className="bg-card p-5 rounded-xl shadow-soft flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-semibold ${scheduleTypeColors[item.type]}`}>
                        {item.date}
                      </span>
                      <span className="text-xs text-muted-foreground font-sans">{typeLabel[item.type]}</span>
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included ───────────────────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
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
              {inclusions.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-soft"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Secure Your Place</h2>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Limited spaces available. Register early to join this historic international gathering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                  <Link to="/contact">Register Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link to="/donate"><Heart className="w-5 h-5 mr-2" />Support the Event</Link>
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