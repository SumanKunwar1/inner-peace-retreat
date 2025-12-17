import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Moon, 
  Volume2, 
  Hand, 
  RotateCcw, 
  Heart, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const practices = [
  {
    icon: Moon,
    title: "Fasting (Upavasa)",
    tibetan: "བཅས་གནས",
    shortDesc: "Purifying attachment through restraint",
    fullDesc: "The fasting aspect of Ngyungne consists of two phases: On day one, practitioners take only one vegetarian meal before noon. On day two, complete abstinence from food and water is observed. This practice helps purify attachment to physical pleasures and develops self-discipline.",
    benefits: [
      "Purifies negative karma related to food and consumption",
      "Develops mental clarity and focus",
      "Creates the cause for rebirth in pure lands",
      "Generates merit for all beings"
    ],
    color: "from-purple-500/10 to-purple-600/5"
  },
  {
    icon: Volume2,
    title: "Noble Silence (Mauna)",
    tibetan: "སྨྲ་བཅད",
    shortDesc: "Turning inward through stillness",
    fullDesc: "Practitioners maintain complete silence throughout the retreat, except during group prayers and mantras. This silence extends to avoiding unnecessary communication through gestures or writing. Noble silence helps turn the mind inward and develop introspection.",
    benefits: [
      "Purifies negative karma of speech",
      "Develops mindfulness and awareness",
      "Reduces mental agitation",
      "Deepens meditation practice"
    ],
    color: "from-blue-500/10 to-blue-600/5"
  },
  {
    icon: Hand,
    title: "Prostrations (Phyag 'tshal)",
    tibetan: "ཕྱག་འཚལ",
    shortDesc: "Physical devotion and purification",
    fullDesc: "Full-body prostrations are performed throughout the practice, typically 100 or more per session. Each prostration involves touching the forehead, throat, and heart to the ground while visualizing Avalokiteshvara and all enlightened beings.",
    benefits: [
      "Purifies physical negative karma",
      "Develops humility and devotion",
      "Creates merit through physical offering",
      "Improves physical health and flexibility"
    ],
    color: "from-green-500/10 to-green-600/5"
  },
  {
    icon: RotateCcw,
    title: "Mantra Recitation",
    tibetan: "སྔགས་བཟླས",
    shortDesc: "The six-syllable jewel of compassion",
    fullDesc: "The heart of Ngyungne practice is the recitation of Om Mani Padme Hum, the mantra of Avalokiteshvara. Practitioners aim to complete thousands of recitations during the retreat, often using mala beads to count.",
    benefits: [
      "Purifies the six realms of existence",
      "Develops connection with Avalokiteshvara",
      "Cultivates compassion for all beings",
      "Creates causes for liberation"
    ],
    color: "from-amber-500/10 to-amber-600/5"
  },
  {
    icon: Heart,
    title: "Compassion Meditation",
    tibetan: "སྙིང་རྗེ་སྒོམ",
    shortDesc: "Awakening the heart of enlightenment",
    fullDesc: "Throughout the practice, meditators cultivate boundless compassion for all sentient beings. Visualization of Avalokiteshvara sending healing light to all beings is combined with the aspiration to free all from suffering.",
    benefits: [
      "Develops bodhicitta - the awakening mind",
      "Reduces self-centered thoughts",
      "Creates profound spiritual merit",
      "Opens the heart to universal love"
    ],
    color: "from-rose-500/10 to-rose-600/5"
  },
  {
    icon: Sparkles,
    title: "Awakening Mind (Bodhicitta)",
    tibetan: "བྱང་ཆུབ་སེམས",
    shortDesc: "The ultimate purpose of practice",
    fullDesc: "All merit generated during Ngyungne is dedicated to the welfare of all sentient beings. Practitioners cultivate the intention to attain enlightenment not for themselves alone, but to help liberate all beings from suffering.",
    benefits: [
      "Creates the cause for full enlightenment",
      "Transforms all actions into the path",
      "Multiplies the power of all merit",
      "Fulfills the ultimate purpose of practice"
    ],
    color: "from-indigo-500/10 to-indigo-600/5"
  }
];

const Practices = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                The Six Pillars
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Sacred <span className="text-primary">Practices</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground">
                Discover the interconnected practices that form the complete Ngyungne retreat, 
                each designed to purify body, speech, and mind.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mantra Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl text-primary mb-2">
                ॐ मणि पद्मे हूँ
              </p>
              <p className="font-body text-lg text-muted-foreground italic">
                Om Mani Padme Hum — The six-syllable mantra of Avalokiteshvara
              </p>
            </motion.div>
          </div>
        </section>

        {/* Practices List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {practices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-r ${practice.color} rounded-2xl overflow-hidden shadow-soft border border-border/50`}
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full p-6 flex items-center gap-4 text-left"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <practice.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">
                          {practice.title}
                        </h3>
                        <span className="font-heading text-sm text-muted-foreground">
                          {practice.tibetan}
                        </span>
                      </div>
                      <p className="font-body text-muted-foreground">
                        {practice.shortDesc}
                      </p>
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-border/50">
                        <p className="font-body text-foreground mb-6">
                          {practice.fullDesc}
                        </p>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground mb-3">
                            Benefits:
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {practice.benefits.map((benefit) => (
                              <li 
                                key={benefit}
                                className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                              >
                                <span className="text-secondary mt-1">✦</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="text-primary">Begin</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Join us for the 2nd International Ngyungne Retreat and experience 
                these transformative practices firsthand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/event"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-sans font-semibold hover:bg-primary/90 transition-colors"
                >
                  View Event Details
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-sans font-semibold hover:bg-primary/10 transition-colors"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Practices;
