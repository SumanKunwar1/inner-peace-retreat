import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Images, Film, X, ChevronLeft, ChevronRight, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import monastery from "@/assets/monastery.jpg";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const retreats = [
  {
    id: 1,
    title: "1st International Ngyungne",
    subtitle: "A sacred beginning",
    date: "December 2024",
    location: "Kathmandu, Nepal",
    coverImage: monastery,
    totalMedia: 6,
    upcoming: false,
    media: [
      { type: "image", src: heroBg,           thumb: heroBg,           caption: "Opening ceremony blessings" },
      { type: "image", src: avalokiteshvara,  thumb: avalokiteshvara,  caption: "Sacred Avalokiteshvara" },
      { type: "image", src: monastery,        thumb: monastery,        caption: "Monastery venue" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: heroBg, caption: "Retreat highlights reel" },
      { type: "image", src: heroBg,           thumb: heroBg,           caption: "Group meditation session" },
      { type: "image", src: avalokiteshvara,  thumb: avalokiteshvara,  caption: "Evening puja ceremony" },
    ],
  },
  {
    id: 2,
    title: "2nd International Ngyungne",
    subtitle: "Deepening the practice",
    date: "December 28, 2025 – January 4, 2026",
    location: "Kathmandu, Nepal",
    coverImage: monastery,
    totalMedia: 6,
    upcoming: false,
    media: [
      { type: "image", src: heroBg,           thumb: heroBg,           caption: "Opening ceremony blessings" },
      { type: "image", src: avalokiteshvara,  thumb: avalokiteshvara,  caption: "Sacred Avalokiteshvara" },
      { type: "image", src: monastery,        thumb: monastery,        caption: "Monastery venue" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: heroBg, caption: "Retreat highlights reel" },
      { type: "image", src: heroBg,           thumb: heroBg,           caption: "Group meditation session" },
      { type: "image", src: avalokiteshvara,  thumb: avalokiteshvara,  caption: "Evening puja ceremony" },
    ],
  },
  {
    id: 3,
    title: "3rd International Ngyungne",
    subtitle: "Transforming the journey",
    date: "08-24 December 2026",
    location: "Kathmandu, Nepal",
    coverImage: heroBg,
    totalMedia: 0,
    upcoming: true,
    media: [],
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaItem = { type: string; src: string; thumb: string; caption: string };
type Retreat   = (typeof retreats)[0];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  media, index, onClose, onPrev, onNext,
}: {
  media: MediaItem[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const current = media[index];
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button onClick={onClose} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-sans">
        {index + 1} / {media.length}
      </div>

      {/* Prev */}
      {index > 0 && (
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next */}
      {index < media.length - 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Media */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}
        className="max-w-5xl max-h-[80vh] w-full px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {current.type === "video" ? (
          <video src={current.src} controls autoPlay className="w-full max-h-[70vh] rounded-xl object-contain" />
        ) : (
          <img src={current.src} alt={current.caption} className="w-full max-h-[70vh] rounded-xl object-contain" />
        )}
        {current.caption && (
          <p className="text-center text-white/70 font-sans text-sm mt-4">{current.caption}</p>
        )}
      </motion.div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-lg px-4">
        {media.map((m, i) => (
          <div
            key={i}
            onClick={(e) => { e.stopPropagation(); }}
            className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-colors ${i === index ? "border-secondary" : "border-white/20"}`}
          >
            <img src={m.thumb} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Retreat Gallery Modal ─────────────────────────────────────────────────────

function RetreatGalleryModal({ retreat, onClose }: { retreat: Retreat; onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-background rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative h-48 overflow-hidden">
            <img src={retreat.coverImage} alt={retreat.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="absolute bottom-4 left-6">
              <h3 className="font-heading text-2xl font-bold text-white">{retreat.title}</h3>
              <p className="text-white/70 font-sans text-sm">{retreat.date} · {retreat.location}</p>
            </div>
          </div>

          {/* Media Grid */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
            {retreat.media.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Images className="w-8 h-8 text-primary/50" />
                </div>
                <p className="font-heading text-lg text-foreground/60">Photos & videos coming soon</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Content will be uploaded after the retreat concludes</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {retreat.media.map((item, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setLightboxIndex(i)}
                    className="relative aspect-video rounded-lg overflow-hidden group bg-muted"
                  >
                    <img src={item.thumb} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs font-sans truncate">{item.caption}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          media={retreat.media as MediaItem[]}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => Math.max(0, (p ?? 0) - 1))}
          onNext={() => setLightboxIndex((p) => Math.min(retreat.media.length - 1, (p ?? 0) + 1))}
        />
      )}
    </AnimatePresence>
  );
}

// ─── Retreat Card ──────────────────────────────────────────────────────────────

function RetreatCard({ retreat, index, onClick }: { retreat: Retreat; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-80">
        <img src={retreat.coverImage} alt={retreat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        {retreat.upcoming ? (
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-sans font-semibold px-3 py-1 rounded-full">
            Upcoming
          </div>
        ) : retreat.totalMedia > 0 ? (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-sans px-3 py-1 rounded-full flex items-center gap-1">
            <Images className="w-3 h-3" /> {retreat.totalMedia} items
          </div>
        ) : null}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="font-sans text-xs text-secondary uppercase tracking-widest mb-1">{retreat.subtitle}</p>
        <h3 className="font-heading text-2xl font-bold text-white mb-1">{retreat.title}</h3>
        <p className="font-sans text-sm text-white/70 mb-4">{retreat.date} · {retreat.location}</p>
        {retreat.upcoming ? (
          <span className="inline-flex items-center gap-2 font-sans text-sm text-white/60 border border-white/20 rounded-full px-4 py-2">
            <Film className="w-4 h-4" /> Photos coming soon
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 font-sans text-sm text-white bg-primary/80 group-hover:bg-primary rounded-full px-4 py-2 transition-colors">
            <Images className="w-4 h-4" /> View Gallery
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const Gallery = () => {
  const [activeRetreat, setActiveRetreat] = useState<Retreat | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
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
                Explore moments of peace, devotion, and transformation from our sacred retreats.
                Click on a retreat to browse its photos and videos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Retreat Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Retreats</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retreats.map((retreat, i) => (
                <RetreatCard
                  key={retreat.id}
                  retreat={retreat}
                  index={i}
                  onClick={() => setActiveRetreat(retreat)}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-sans text-sm text-muted-foreground">
                <span className="text-primary">✦</span> New photos and videos added after each retreat <span className="text-primary">✦</span>
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
                Join the 2nd International Ngyungne Retreat and create memories that transform lives.
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

      {/* Retreat Gallery Modal */}
      {activeRetreat && (
        <RetreatGalleryModal
          retreat={activeRetreat}
          onClose={() => setActiveRetreat(null)}
        />
      )}
    </div>
  );
};

export default Gallery;