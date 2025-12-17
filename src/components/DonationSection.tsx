import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Gift, BookOpen, Home, Utensils, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const donationPurposes = [
  { icon: BookOpen, label: "Dharma Teachings", amount: "$25" },
  { icon: Utensils, label: "Meals for Participants", amount: "$50" },
  { icon: Home, label: "Accommodation Support", amount: "$100" },
  { icon: Users, label: "Sponsor a Practitioner", amount: "$250" },
];

export function DonationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-24 bg-gradient-to-br from-secondary/10 via-background to-amber/10" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Support the Dharma
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Generosity Creates <span className="text-primary">Merit</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6">
                Dana (generosity) is the first of the Six Perfections. By supporting this sacred
                retreat, you help spread the Dharma and create causes for happiness and liberation
                for countless beings.
              </p>
              <p className="font-body text-muted-foreground mb-8">
                All donations directly support:
              </p>

              {/* Donation Purposes */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {donationPurposes.map((purpose, index) => (
                  <motion.div
                    key={purpose.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 bg-card rounded-lg p-3 shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <purpose.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-sans text-sm font-medium text-foreground">{purpose.label}</div>
                      <div className="font-sans text-xs text-muted-foreground">{purpose.amount}+</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold"
                asChild
              >
                <a href="#donate-form">
                  <Heart className="w-5 h-5 mr-2" />
                  Make a Donation
                </a>
              </Button>
            </motion.div>

            {/* Right - Donation Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-amber flex items-center justify-center mx-auto mb-4 shadow-glow animate-glow">
                  <Gift className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Choose Your Offering
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Every contribution, regardless of size, creates merit
                </p>
              </div>

              {/* Amount Options */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$25", "$50", "$100", "$250", "$500", "Custom"].map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 rounded-lg border-2 border-border font-sans font-medium text-foreground hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Frequency */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 py-3 px-4 rounded-lg bg-primary text-primary-foreground font-sans font-medium">
                  One-time
                </button>
                <button className="flex-1 py-3 px-4 rounded-lg border-2 border-border font-sans font-medium text-foreground hover:border-primary transition-all">
                  Monthly
                </button>
              </div>

              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans font-semibold py-6"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>

              <p className="text-center font-sans text-xs text-muted-foreground mt-4">
                Secure payment processing. Tax-deductible where applicable.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
