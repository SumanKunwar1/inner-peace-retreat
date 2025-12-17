import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background lotus-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={avalokiteshvara}
                alt="Avalokiteshvara - Bodhisattva of Compassion"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary to-amber rounded-full blur-2xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary to-crimson-deep rounded-full blur-xl opacity-40" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
              The Sacred Practice
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              What is <span className="text-primary">Ngyungne</span>?
            </h2>
            <div className="space-y-4 font-body text-lg text-muted-foreground">
              <p>
                Ngyungne (Nyungne) is a profound Tibetan Buddhist purification practice dedicated to
                Avalokiteshvara, the Bodhisattva of Compassion. This ancient retreat combines{" "}
                <strong className="text-foreground">fasting</strong>,{" "}
                <strong className="text-foreground">silence</strong>,{" "}
                <strong className="text-foreground">prostrations</strong>, and{" "}
                <strong className="text-foreground">mantra recitation</strong> to purify negative
                karma accumulated over lifetimes.
              </p>
              <p>
                Originating in 11th-century Tibet through the enlightened nun Gelongma Palmo,
                who was healed of leprosy through this practice, Ngyungne offers practitioners
                a path to spiritual purification, physical healing, and the cultivation of
                boundless compassion for all sentient beings.
              </p>
              <p>
                The practice spans two days: the first day involves taking the Eight Mahayana
                Precepts and limited fasting, while the second day requires complete fasting
                from food and water along with maintaining noble silence.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🪷", label: "Purification of karma" },
                { icon: "🙏", label: "Development of compassion" },
                { icon: "✨", label: "Spiritual awakening" },
                { icon: "🕊️", label: "Inner peace & healing" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-soft"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-sans font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
