import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  Gift, 
  BookOpen, 
  Home, 
  Utensils, 
  Users,
  CreditCard,
  Building,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const donationPurposes = [
  { id: "teachings", icon: BookOpen, label: "Dharma Teachings", desc: "Support qualified teachers" },
  { id: "meals", icon: Utensils, label: "Meals for Participants", desc: "Feed retreat practitioners" },
  { id: "accommodation", icon: Home, label: "Accommodation", desc: "Provide shelter for attendees" },
  { id: "sponsor", icon: Users, label: "Sponsor a Practitioner", desc: "Enable someone to attend" },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("teachings");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    anonymous: false,
  });

  const getFinalAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount || 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = getFinalAmount();
    
    if (amount < 1) {
      toast.error("Please enter a valid donation amount");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success(`Thank you for your generous donation of $${amount}! Your support creates merit for all beings.`);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      anonymous: false,
    });
    setSelectedAmount(100);
    setCustomAmount("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-amber mx-auto mb-6 flex items-center justify-center shadow-glow">
                <Gift className="w-10 h-10 text-secondary-foreground" />
              </div>
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Support the Dharma
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Generosity Creates <span className="text-primary">Merit</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Dana (generosity) is the first of the Six Perfections. By supporting this sacred 
                retreat, you help spread the Dharma and create causes for happiness and liberation 
                for countless beings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Left - Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-3"
                >
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
                    {/* Amount Selection */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Select Amount
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                            className={`py-3 px-4 rounded-lg border-2 font-sans font-medium transition-all ${
                              selectedAmount === amount && !customAmount
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-foreground hover:border-primary"
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-sans">
                          $
                        </span>
                        <Input
                          type="number"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="pl-8"
                        />
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Frequency
                      </h3>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setFrequency("once")}
                          className={`flex-1 py-3 px-4 rounded-lg font-sans font-medium transition-all ${
                            frequency === "once"
                              ? "bg-primary text-primary-foreground"
                              : "border-2 border-border text-foreground hover:border-primary"
                          }`}
                        >
                          One-time
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency("monthly")}
                          className={`flex-1 py-3 px-4 rounded-lg font-sans font-medium transition-all ${
                            frequency === "monthly"
                              ? "bg-primary text-primary-foreground"
                              : "border-2 border-border text-foreground hover:border-primary"
                          }`}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Purpose */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Donation Purpose
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {donationPurposes.map((purpose) => (
                          <button
                            key={purpose.id}
                            type="button"
                            onClick={() => setSelectedPurpose(purpose.id)}
                            className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all ${
                              selectedPurpose === purpose.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              selectedPurpose === purpose.id ? "bg-primary/20" : "bg-muted"
                            }`}>
                              <purpose.icon className={`w-5 h-5 ${
                                selectedPurpose === purpose.id ? "text-primary" : "text-muted-foreground"
                              }`} />
                            </div>
                            <div>
                              <div className="font-sans font-medium text-foreground">{purpose.label}</div>
                              <div className="font-sans text-xs text-muted-foreground">{purpose.desc}</div>
                            </div>
                            {selectedPurpose === purpose.id && (
                              <Check className="w-5 h-5 text-primary ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="mb-8">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                        Your Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <Input
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                        <Input
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone (Optional)"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <Textarea
                        placeholder="Message or dedication (Optional)"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                      />
                      <label className="flex items-center gap-2 mt-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.anonymous}
                          onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span className="font-sans text-sm text-muted-foreground">
                          Make my donation anonymous
                        </span>
                      </label>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans font-semibold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Heart className="w-5 h-5" />
                          Donate ${getFinalAmount()} {frequency === "monthly" && "/month"}
                        </span>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-muted-foreground">
                      <CreditCard className="w-5 h-5" />
                      <Building className="w-5 h-5" />
                      <span className="font-sans text-xs">Secure payment processing</span>
                    </div>
                  </form>
                </motion.div>

                {/* Right - Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      Your Impact
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">✦</span>
                        <span>$25 provides one day of teachings materials</span>
                      </li>
                      <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">✦</span>
                        <span>$50 feeds 10 practitioners for a day</span>
                      </li>
                      <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">✦</span>
                        <span>$100 provides accommodation for one practitioner</span>
                      </li>
                      <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">✦</span>
                        <span>$250 fully sponsors one retreat participant</span>
                      </li>
                      <li className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-secondary mt-1">✦</span>
                        <span>$1000 sponsors a complete Ngyungne cycle</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      Why Donate?
                    </h3>
                    <div className="space-y-4 font-body text-sm text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Merit (Punya):</strong> Supporting 
                        Dharma activities creates powerful positive karma that leads to favorable 
                        rebirths and conditions for enlightenment.
                      </p>
                      <p>
                        <strong className="text-foreground">Connection:</strong> Your generosity 
                        creates a karmic connection with all practitioners and teachers at the 
                        retreat.
                      </p>
                      <p>
                        <strong className="text-foreground">World Peace:</strong> The Potala 
                        World Peace Prayers dedicate all merit to peace and harmony for all beings.
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-muted-foreground mt-6 text-center">
                    BTMC Foundation is a registered non-profit organization. 
                    Donations may be tax-deductible where applicable.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
