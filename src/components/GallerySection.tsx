import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Image as ImageIcon, Calendar } from "lucide-react";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder items for future gallery
  const galleryPlaceholders = [
    { type: "video", label: "Event Highlights Coming Soon" },
    { type: "image", label: "Retreat Photos" },
    { type: "image", label: "Ceremony Images" },
    { type: "image", label: "Meditation Sessions" },
    { type: "video", label: "Teachings & Talks" },
    { type: "image", label: "Community Moments" },
  ];

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
            Media Gallery
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Moments of <span className="text-primary">Transformation</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Photos and videos from our sacred retreats will be shared here. 
            Register to receive updates when new content is available.
          </p>
        </motion.div>

        {/* Gallery Grid - Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryPlaceholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-video bg-gradient-to-br from-primary/5 to-muted rounded-xl overflow-hidden border border-border"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.type === "video" ? (
                    <Play className="w-8 h-8 text-primary" />
                  ) : (
                    <ImageIcon className="w-8 h-8 text-primary" />
                  )}
                </div>
                <p className="font-heading text-lg font-semibold text-foreground text-center">
                  {item.label}
                </p>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-sans text-sm">Coming December 2025</span>
                </div>
              </div>

              {/* Decorative Pattern */}
              <div className="absolute inset-0 lotus-pattern opacity-30" />
            </motion.div>
          ))}
        </div>

        {/* Upload Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-sm text-muted-foreground">
            <span className="text-primary">✦</span> Photos and videos will be uploaded after the retreat concludes <span className="text-primary">✦</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
