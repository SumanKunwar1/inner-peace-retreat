import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Heart, BookOpen, Users, Star, Mountain, Sparkles, 
  Target, Eye, Shield, Gift, Globe, Leaf, 
  CheckCircle, Quote, Award, HandHeart
} from "lucide-react";
import avalokiteshvara from "@/assets/avalokiteshvara.jpg";
import monastery from "@/assets/monastery.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Preserving the Sacred Path of <span className="text-primary">Compassion</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground mb-8">
                We are dedicated to making the profound practice of Ngyungne accessible to all beings, 
                completely free of charge, guided by the wisdom of authentic lineage masters.
              </p>
              
              {/* Free Practice Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-secondary/20 px-8 py-4 rounded-full border border-primary/30"
              >
                <Gift className="w-6 h-6 text-primary" />
                <span className="font-heading text-lg font-semibold text-foreground">
                  100% Free Practice — Open to Everyone
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-10 rounded-3xl border border-primary/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Mission
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-6">
                    To provide authentic Ngyungne practice opportunities to all sincere practitioners, 
                    regardless of their financial circumstances, while preserving the pure lineage 
                    teachings passed down through generations of realized masters.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Offer completely free spiritual retreats",
                      "Preserve authentic Buddhist traditions",
                      "Create accessible paths to purification",
                      "Support practitioners on their spiritual journey"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 md:p-10 rounded-3xl border border-secondary/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Vision
                  </h2>
                  <p className="font-body text-lg text-muted-foreground mb-6">
                    A world where every being has the opportunity to purify their karma, 
                    cultivate boundless compassion, and contribute to world peace through the 
                    transformative practice of Ngyungne.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Global community of compassion practitioners",
                      "World peace through inner transformation",
                      "Dharma accessible to all beings",
                      "Preservation of sacred Buddhist lineages"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  What Guides Us
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Our Core <span className="text-primary">Values</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                  These principles form the foundation of everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Compassion",
                    description: "Genuine care for all beings, driving every action we take in service of others' spiritual welfare.",
                    color: "primary"
                  },
                  {
                    icon: Shield,
                    title: "Authenticity",
                    description: "Preserving pure lineage teachings without alteration, ensuring practitioners receive genuine Dharma.",
                    color: "secondary"
                  },
                  {
                    icon: Gift,
                    title: "Generosity",
                    description: "Offering all practices completely free, removing financial barriers to spiritual growth.",
                    color: "primary"
                  },
                  {
                    icon: Globe,
                    title: "Inclusivity",
                    description: "Welcoming practitioners from all backgrounds, nationalities, and levels of experience.",
                    color: "secondary"
                  },
                  {
                    icon: Leaf,
                    title: "Mindfulness",
                    description: "Approaching every aspect of our work with presence, intention, and careful attention.",
                    color: "primary"
                  },
                  {
                    icon: Users,
                    title: "Community",
                    description: "Building a global sangha of practitioners supporting each other on the path.",
                    color: "secondary"
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    description: "Maintaining the highest standards in organization, teaching, and practitioner support.",
                    color: "primary"
                  },
                  {
                    icon: HandHeart,
                    title: "Service",
                    description: "Dedicating all efforts to the benefit of sentient beings without seeking personal gain.",
                    color: "secondary"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl ${value.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-4`}>
                      <value.icon className={`w-7 h-7 ${value.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Free? Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Why is Ngyungne <span className="text-primary">Completely Free</span>?
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card p-8 md:p-12 rounded-3xl shadow-card relative overflow-hidden"
              >
                <Quote className="absolute top-6 left-6 w-16 h-16 text-primary/10" />
                <div className="relative space-y-6 font-body text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">The Dharma is priceless</strong> — it cannot and should not 
                    be bought or sold. The Buddha freely shared his teachings with all who sought liberation, 
                    and we follow in this tradition of unconditional generosity.
                  </p>
                  <p>
                    We believe that <strong className="text-foreground">financial circumstances should never be 
                    a barrier</strong> to spiritual practice. Whether you are wealthy or struggling, from the East 
                    or the West, you deserve equal access to these precious teachings.
                  </p>
                  <p>
                    Our retreats are made possible through the generous <strong className="text-foreground">dana 
                    (donations)</strong> of those who have benefited from the practice and wish to share 
                    this gift with others. This creates a beautiful cycle of generosity that sustains the Dharma.
                  </p>
                  <p>
                    By removing the commercial aspect, practitioners can focus entirely on their spiritual 
                    development without <strong className="text-foreground">concerns about money</strong>. This 
                    purity of intention supports deeper practice and more profound results.
                  </p>
                </div>

                <div className="mt-10 grid sm:grid-cols-3 gap-6">
                  {[
                    { number: "100%", label: "Free Forever" },
                    { number: "0", label: "Hidden Fees" },
                    { number: "∞", label: "Merit Generated" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 bg-muted/50 rounded-xl"
                    >
                      <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                      <p className="font-sans text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  Sacred Origins
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                  The History of <span className="text-primary">Ngyungne</span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                    <img
                      src={avalokiteshvara}
                      alt="Avalokiteshvara, the Buddha of Compassion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-soft max-w-xs">
                    <p className="font-heading text-xl font-bold text-primary mb-1">11th Century</p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Originated with the enlightened nun Gelongma Palmo
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      The Story of Gelongma Palmo
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Gelongma Palmo (Bhikshuni Lakshmi) was an Indian princess who became a 
                      Buddhist nun. When she contracted leprosy, she was cast out of her 
                      community. Retreating to a cave, she devoted herself entirely to the 
                      practice of Avalokiteshvara, the Bodhisattva of Compassion.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Divine Healing & Realization
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Through her unwavering devotion and intensive practice of fasting, 
                      mantra recitation, and prostrations, Palmo was completely healed of 
                      her disease. More importantly, she achieved profound spiritual 
                      realization and had direct visions of Avalokiteshvara.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      The Gift to All Beings
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Recognizing the immense benefit of her practice, Palmo codified the 
                      Ngyungne retreat structure so that others could follow the same path. 
                      This precious practice has been transmitted in an unbroken lineage 
                      for over a thousand years, benefiting countless practitioners.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      Spread to Tibet & Beyond
                    </h3>
                    <p className="font-body text-muted-foreground">
                      The practice was brought to Tibet where it flourished in all four 
                      major schools of Tibetan Buddhism. Today, Ngyungne is practiced 
                      around the world, offering practitioners a powerful method for 
                      purification and spiritual awakening.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Ngyungne */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  The Practice
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                  What is <span className="text-primary">Ngyungne</span>?
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                  A profound two-day purification retreat combining multiple spiritual practices
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: BookOpen,
                    title: "Day One - Partial Fast",
                    description: "Taking the Eight Mahayana Precepts at dawn, followed by one meal before noon. The afternoon and evening are devoted to practice and maintaining mindfulness."
                  },
                  {
                    icon: Mountain,
                    title: "Day Two - Complete Fast",
                    description: "Complete abstinence from food and water while maintaining noble silence. This intensive day of practice purifies deep karmic imprints."
                  },
                  {
                    icon: Heart,
                    title: "Mantra Recitation",
                    description: "Continuous recitation of Om Mani Padme Hum, the six-syllable mantra of Avalokiteshvara, generating merit and invoking blessings."
                  },
                  {
                    icon: Users,
                    title: "Prostrations",
                    description: "Physical practice of full-body bowing to purify karma accumulated through body, speech, and mind while developing humility."
                  },
                  {
                    icon: Sparkles,
                    title: "Visualization",
                    description: "Detailed meditation on Avalokiteshvara, visualizing receiving blessings and purification light flowing through your entire being."
                  },
                  {
                    icon: Star,
                    title: "Merit Dedication",
                    description: "Offering all accumulated merit for the benefit of all sentient beings, transforming personal practice into universal blessing."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BTMC Foundation */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="order-2 lg:order-1"
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
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
                      The <strong className="text-foreground">BTMC Foundation</strong> is a non-profit 
                      organization dedicated to preserving and spreading authentic Buddhist teachings 
                      and practices. Based in Kathmandu, Nepal, we serve as a bridge between ancient 
                      wisdom and modern practitioners.
                    </p>
                    <p>
                      Our work encompasses organizing spiritual retreats, supporting monastic communities, 
                      preserving sacred texts, and making the Dharma accessible to practitioners worldwide 
                      — all without any charge.
                    </p>
                    <p>
                      The <strong className="text-foreground">International Ngyungne Retreat</strong> is 
                      our flagship annual event, bringing together practitioners from around the world 
                      for intensive purification practice under the guidance of realized masters.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { number: "10+", label: "Years of Service" },
                      { number: "50+", label: "Countries Reached" },
                      { number: "1000+", label: "Practitioners Served" },
                      { number: "100%", label: "Non-Profit" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-muted/50 p-4 rounded-xl"
                      >
                        <p className="font-heading text-2xl font-bold text-primary">{stat.number}</p>
                        <p className="font-sans text-sm text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 bg-gradient-to-br from-primary via-crimson-deep to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" 
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                  Our Commitment to You
                </h2>
                <div className="space-y-6 font-body text-lg text-white/90">
                  <p>
                    We promise to always offer Ngyungne practice completely free of charge. 
                    We will never compromise on the authenticity of the teachings or the 
                    quality of guidance provided.
                  </p>
                  <p>
                    Every practitioner who joins our retreats receives equal care and attention, 
                    regardless of background, nationality, or financial status. The Dharma 
                    belongs to everyone.
                  </p>
                  <p>
                    Through your generous donations and our dedicated volunteer team, we 
                    sustain this sacred tradition for future generations.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-6">
                  {[
                    "Authentic Teachings",
                    "Qualified Masters",
                    "Safe Environment",
                    "Community Support"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
                    >
                      <span className="font-sans font-medium text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                  Common Questions
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    question: "Do I need to be Buddhist to participate?",
                    answer: "No, Ngyungne is open to sincere practitioners of all backgrounds. We welcome anyone with a genuine interest in spiritual purification and developing compassion. All that's required is an open heart and willingness to follow the retreat guidelines."
                  },
                  {
                    question: "Is the retreat really completely free?",
                    answer: "Yes, absolutely. There are no registration fees, hidden charges, or expected payments. Accommodation, meals (on day one), and all teachings are provided at no cost. We operate entirely on voluntary donations from those who wish to support this tradition."
                  },
                  {
                    question: "What if I have health conditions that prevent fasting?",
                    answer: "We make accommodations for practitioners with medical conditions. Those who cannot fast completely can still participate meaningfully through modified practice. Please inform the organizers about your health needs during registration."
                  },
                  {
                    question: "Do I need prior meditation experience?",
                    answer: "While some meditation experience is helpful, it's not required. Our teachers provide clear guidance throughout the retreat, and the practices are accessible to beginners. The most important quality is sincerity and willingness to engage fully."
                  },
                  {
                    question: "How can I support the retreat if I want to give back?",
                    answer: "Donations are gratefully accepted but never required. You can also support by volunteering, helping with organization, or simply by practicing sincerely and dedicating your merit to all beings. Every form of contribution is valued equally."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 md:p-8 rounded-2xl shadow-soft"
                  >
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
