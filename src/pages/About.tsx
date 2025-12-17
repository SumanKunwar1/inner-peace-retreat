import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Star, Mountain, Sparkles } from "lucide-react";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";
import monastery from "@/assets/monastery.jpg";

const About = () => {
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
                About Ngyungne
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                The Sacred Path of <span className="text-primary">Purification</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground">
                A profound Tibetan Buddhist practice dedicated to Avalokiteshvara, 
                the Bodhisattva of Compassion, for purifying negative karma and awakening wisdom.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ancient Wisdom, <span className="text-primary">Timeless Practice</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    Ngyungne (སྙུང་གནས་) is a powerful Tibetan Buddhist purification practice that 
                    originated with the great Indian nun Gelongma Palmo (Bhikshuni Lakshmi) in 
                    the 11th century.
                  </p>
                  <p>
                    Having contracted leprosy, Palmo retreated to a cave and devoted herself to 
                    the practice of Avalokiteshvara, the Buddha of Compassion. Through her 
                    unwavering dedication, she was completely healed and achieved profound 
                    spiritual realization.
                  </p>
                  <p>
                    She then codified this practice for the benefit of all beings, creating 
                    a structured retreat combining fasting, silence, prostrations, and the 
                    recitation of the Mani mantra.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={avalokiteshvara}
                    alt="Avalokiteshvara, the Buddha of Compassion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-soft">
                  <p className="font-heading text-lg font-bold text-primary">11th Century</p>
                  <p className="font-sans text-sm text-muted-foreground">Origins in India</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Ngyungne */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What is <span className="text-primary">Ngyungne</span>?
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                  A complete spiritual retreat combining multiple practices over two days
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: BookOpen,
                    title: "Day One - Partial Fast",
                    description: "One meal before noon, followed by vows of silence and intensive practice."
                  },
                  {
                    icon: Mountain,
                    title: "Day Two - Complete Fast",
                    description: "Total abstinence from food and water, maintaining silence throughout."
                  },
                  {
                    icon: Heart,
                    title: "Mantra Recitation",
                    description: "Reciting Om Mani Padme Hum, the six-syllable mantra of Avalokiteshvara."
                  },
                  {
                    icon: Users,
                    title: "Prostrations",
                    description: "Physical practice of bowing to purify body karma and generate merit."
                  },
                  {
                    icon: Sparkles,
                    title: "Visualization",
                    description: "Meditation on Avalokiteshvara and the receiving of blessings."
                  },
                  {
                    icon: Star,
                    title: "Dedication",
                    description: "Offering all merit for the benefit of all sentient beings."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BTMC Foundation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={monastery}
                    alt="Buddhist monastery in Nepal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  Our Organization
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  BTMC <span className="text-primary">Foundation</span>
                </h2>
                <div className="space-y-4 font-body text-muted-foreground">
                  <p>
                    The BTMC Foundation is dedicated to preserving and spreading authentic 
                    Buddhist teachings and practices. Based in Kathmandu, Nepal, we organize 
                    spiritual retreats, support monastic communities, and work to make the 
                    Dharma accessible to practitioners worldwide.
                  </p>
                  <p>
                    Our mission is to create opportunities for people to engage with traditional 
                    Buddhist practices in an authentic setting, guided by qualified teachers.
                  </p>
                  <p>
                    The International Ngyungne Retreat is our flagship annual event, bringing 
                    together practitioners from around the world for intensive purification 
                    practice.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
