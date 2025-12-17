import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Utensils, 
  VolumeX, 
  Brain, 
  Heart, 
  Sparkles, 
  Sunrise,
  ChevronRight
} from "lucide-react";

const practices = [
  {
    id: "fasting",
    icon: Utensils,
    title: "Fasting",
    subtitle: "Purifying the Body",
    description: "Abstain from food and water for 24 hours, allowing the body to rest and the mind to focus on spiritual practice. This physical discipline helps break attachment to material comforts.",
    benefits: ["Detoxification", "Mental clarity", "Breaking attachments"],
  },
  {
    id: "silence",
    icon: VolumeX,
    title: "Noble Silence",
    subtitle: "Quieting the Mind",
    description: "Observe complete silence to foster deep introspection and mindfulness. Words are the carriers of our karma; by restraining speech, we prevent the creation of negative verbal karma.",
    benefits: ["Inner peace", "Self-reflection", "Mindful awareness"],
  },
  {
    id: "meditation",
    icon: Brain,
    title: "Meditation",
    subtitle: "Focusing the Mind",
    description: "Engage in extended periods of meditation, visualizing Avalokiteshvara and generating compassion. This practice develops concentration and insight into the nature of mind.",
    benefits: ["Concentration", "Emotional balance", "Spiritual insight"],
  },
  {
    id: "mantra",
    icon: Heart,
    title: "Mantra Recitation",
    subtitle: "Purifying Speech",
    description: "Recite the six-syllable mantra 'Om Mani Padme Hum' thousands of times. Each syllable purifies a different realm and negative emotion, transforming the practitioner's speech.",
    benefits: ["Speech purification", "Blessing accumulation", "Compassion cultivation"],
  },
  {
    id: "compassion",
    icon: Sparkles,
    title: "Compassion Practice",
    subtitle: "Opening the Heart",
    description: "Develop boundless compassion (karuna) for all sentient beings without exception. Through meditation on suffering and the wish for liberation, the heart naturally opens.",
    benefits: ["Empathy development", "Loving-kindness", "Universal love"],
  },
  {
    id: "awakening",
    icon: Sunrise,
    title: "Awakening",
    subtitle: "Realizing Buddha Nature",
    description: "The ultimate goal of Ngyungne is spiritual awakening—recognizing our inherent Buddha nature. Through purification and merit accumulation, obstacles to enlightenment are removed.",
    benefits: ["Karma purification", "Merit accumulation", "Enlightenment path"],
  },
];

export function PracticesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePractice, setActivePractice] = useState(practices[0]);

  return (
    <section id="practices" className="py-24 bg-gradient-warm" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            The Six Pillars
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sacred <span className="text-primary">Practices</span> of Ngyungne
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Each practice in Ngyungne serves a unique purpose in purifying body, speech, and mind,
            leading practitioners toward compassion and spiritual awakening.
          </p>
        </motion.div>

        {/* Interactive Practices Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Practice Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-3"
          >
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              const isActive = activePractice.id === practice.id;
              
              return (
                <motion.button
                  key={practice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => setActivePractice(practice)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-card hover:bg-muted shadow-card"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isActive ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${isActive ? "text-secondary" : "text-primary"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-heading text-lg font-semibold ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {practice.title}
                    </h3>
                    <p className={`font-sans text-sm ${
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {practice.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isActive ? "rotate-90 text-secondary" : "text-muted-foreground"
                  }`} />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Active Practice Detail */}
          <motion.div
            key={activePractice.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-crimson-deep flex items-center justify-center shadow-soft">
                <activePractice.icon className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {activePractice.title}
                </h3>
                <p className="font-sans text-secondary font-medium">{activePractice.subtitle}</p>
              </div>
            </div>

            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              {activePractice.description}
            </p>

            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                Key Benefits
              </h4>
              <div className="flex flex-wrap gap-3">
                {activePractice.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full font-sans text-sm font-medium"
                  >
                    <Sparkles className="w-4 h-4 text-secondary" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border">
              <p className="font-body italic text-muted-foreground text-center">
                "Through {activePractice.title.toLowerCase()}, we transform ordinary actions into
                a path of liberation, accumulating merit and wisdom for the benefit of all beings."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
