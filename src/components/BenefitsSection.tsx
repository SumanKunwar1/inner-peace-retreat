import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Shield, 
  Leaf, 
  Sun,
  Zap,
  Users
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Karma Purification",
    description: "One Ngyungne practice is said to purify the negative karma of 40,000 lifetimes, clearing obstacles to happiness and enlightenment.",
    color: "from-amber to-gold",
  },
  {
    icon: Heart,
    title: "Compassion Development",
    description: "By focusing on Avalokiteshvara, practitioners naturally develop boundless compassion for all sentient beings.",
    color: "from-lotus to-primary",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "The combination of fasting and meditation creates profound mental clarity and insight into the nature of mind.",
    color: "from-primary to-crimson-deep",
  },
  {
    icon: Shield,
    title: "Protection & Blessings",
    description: "Practitioners receive the blessings and protection of Avalokiteshvara, the embodiment of all buddhas' compassion.",
    color: "from-secondary to-amber",
  },
  {
    icon: Leaf,
    title: "Physical Healing",
    description: "The practice originated when Gelongma Palmo was healed of leprosy. Many practitioners report physical health benefits.",
    color: "from-sage to-primary",
  },
  {
    icon: Sun,
    title: "Spiritual Progress",
    description: "Ngyungne accelerates spiritual development, creating causes for liberation and enlightenment.",
    color: "from-gold to-secondary",
  },
  {
    icon: Zap,
    title: "Merit Accumulation",
    description: "The practice rapidly accumulates merit through prostrations, offerings, prayers, and the cultivation of compassion.",
    color: "from-amber to-lotus",
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Join a worldwide sangha of practitioners dedicated to peace, compassion, and the welfare of all beings.",
    color: "from-primary to-secondary",
  },
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 bg-background lotus-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            Transform Your Life
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Benefits of <span className="text-primary">Ngyungne</span> Practice
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            This profound practice offers transformative benefits for body, speech, and mind,
            both in this life and for countless future lifetimes.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-soft`}>
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-crimson-deep rounded-2xl p-8 md:p-12 text-primary-foreground text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/10 rounded-full blur-2xl" />
            
            <div className="relative">
              <span className="text-6xl text-secondary/50 font-serif">"</span>
              <p className="font-body text-xl md:text-2xl italic mb-6 -mt-8">
                When you practice Ngyungne, even for one day, the merit and purification
                are inconceivable. This practice is like a wish-fulfilling jewel for
                attaining both temporary and ultimate happiness.
              </p>
              <div className="font-heading font-semibold text-secondary">
                — Traditional Teaching
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
