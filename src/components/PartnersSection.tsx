import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Tv, Plane, Laptop } from "lucide-react";

const partners = [
  {
    icon: Building2,
    name: "BTMC Foundation",
    role: "Organizer",
    description: "The Buddhist Teaching & Meditation Center Foundation, dedicated to preserving and sharing authentic Buddhist teachings.",
  },
  {
    icon: Tv,
    name: "Dharma Television HD",
    role: "Media Partner",
    description: "Broadcasting Buddhist teachings and spiritual content to viewers worldwide.",
  },
  {
    icon: Plane,
    name: "Pure Land Tours & Travels",
    role: "Travel & Event Partner",
    description: "Facilitating sacred pilgrimages and spiritual journeys across Nepal and Tibet.",
  },
  {
    icon: Laptop,
    name: "WAS Media Marketing",
    role: "Technology Partner",
    description: "Providing digital solutions and marketing support for spiritual organizations.",
  },
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            Our Partners
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Working Together for <span className="text-primary">World Peace</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            This historic event is made possible through the collaboration of dedicated organizations
            committed to spreading Buddhist wisdom and compassion.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-soft transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-crimson-deep flex items-center justify-center mx-auto mb-4 shadow-soft">
                <partner.icon className="w-10 h-10 text-secondary" />
              </div>

              {/* Role Badge */}
              <span className="inline-block bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-xs font-sans font-medium mb-3">
                {partner.role}
              </span>

              {/* Name */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-muted-foreground mb-4">
            Interested in supporting this sacred event?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans text-primary font-medium hover:text-secondary transition-colors"
          >
            Become a Partner
            <span className="text-secondary">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
