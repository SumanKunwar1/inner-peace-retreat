import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Image, Camera, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import monastery from "@/assets/monastery.jpg";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Gallery = () => {
  // Placeholder images using our existing assets
  const images = [
    { src: heroBg, alt: "Meditation at sunrise", category: "Meditation" },
    { src: avalokiteshvara, alt: "Avalokiteshvara statue", category: "Sacred Art" },
    { src: monastery, alt: "Buddhist monastery", category: "Venue" },
    { src: heroBg, alt: "Group practice session", category: "Retreat" },
    { src: monastery, alt: "Temple interior", category: "Venue" },
    { src: avalokiteshvara, alt: "Prayer wheels", category: "Sacred Art" },
  ];

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
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Visual Journey
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Photo & Video <span className="text-primary">Gallery</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Explore moments of peace, devotion, and transformation from our retreats 
                and spiritual gatherings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {["All", "Meditation", "Sacred Art", "Venue", "Retreat"].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all ${
                    filter === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Photos
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-sans rounded mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-sans text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Videos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Video Placeholder 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-card bg-muted"
              >
                <img
                  src={heroBg}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-heading font-semibold text-white">Introduction to Ngyungne</h4>
                  <p className="font-sans text-sm text-white/80">5:30</p>
                </div>
              </motion.div>

              {/* Video Placeholder 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-card bg-muted"
              >
                <img
                  src={monastery}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="font-heading font-semibold text-white">Last Year's Retreat Highlights</h4>
                  <p className="font-sans text-sm text-white/80">12:45</p>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <p className="font-body text-muted-foreground mb-6">
                More photos and videos from the 2025 retreat coming soon!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Be Part of Our Story
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 mb-8">
                Join the 2nd International Ngyungne Retreat and create memories that 
                transform lives.
              </p>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link to="/contact">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
