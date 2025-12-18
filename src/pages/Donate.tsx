import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Heart, 
  CheckCircle,
  Mail,
  User,
  Phone,
  Globe,
  Send,
  Upload,
  Building2,
  CreditCard,
  MapPin,
  Sparkles,
  Users,
  Home,
  BookOpen,
  Globe2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const donationAmounts = [
  { value: 500, label: "Rs. 500" },
  { value: 1000, label: "Rs. 1,000" },
  { value: 2000, label: "Rs. 2,000" },
  { value: 5000, label: "Rs. 5,000" },
  { value: 10000, label: "Rs. 10,000" },
  { value: 20000, label: "Rs. 20,000" },
  { value: 50000, label: "Rs. 50,000" },
  { value: 100000, label: "Rs. 1,00,000" }
];

const impactItems = [
  {
    icon: BookOpen,
    amount: "Rs. 2,000",
    impact: "provides one day of teachings materials for all practitioners"
  },
  {
    icon: Users,
    amount: "Rs. 4,000",
    impact: "feeds 10 practitioners nourishing vegetarian meals for a day"
  },
  {
    icon: Home,
    amount: "Rs. 8,000",
    impact: "provides comfortable accommodation for one practitioner throughout the retreat"
  },
  {
    icon: Heart,
    amount: "Rs. 20,000",
    impact: "fully sponsors one practitioner's entire retreat journey"
  },
  {
    icon: Sparkles,
    amount: "Rs. 80,000",
    impact: "sponsors a complete Ngyungne cycle, blessing countless beings"
  }
];

const whyDonateReasons = [
  {
    icon: Sparkles,
    title: "Merit (Punya)",
    desc: "Supporting Dharma activities creates powerful positive karma that leads to favorable rebirths and conditions for enlightenment. Each act of generosity plants seeds for your own spiritual awakening."
  },
  {
    icon: Heart,
    title: "Sacred Connection",
    desc: "Your generosity creates a profound karmic connection with all practitioners and teachers at the retreat. You become part of their spiritual journey and share in the merit they accumulate."
  },
  {
    icon: Globe2,
    title: "World Peace",
    desc: "The Potala World Peace Prayers dedicate all merit to peace and harmony for all beings. Your donation ripples out to benefit the entire world, alleviating suffering wherever it exists."
  }
];

const Donate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      setUploadedFile(file);
      toast.success("Payment screenshot selected");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalAmount = customAmount || selectedAmount;
    if (!finalAmount) {
      toast.error("Please select or enter donation amount");
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Get form element to extract data
      const form = e.currentTarget;
      const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
      const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
      const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
      const countryInput = form.querySelector('input[name="country"]') as HTMLInputElement;
      const messageInput = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      
      const name = nameInput?.value?.trim() || 'Not provided';
      const email = emailInput?.value?.trim() || 'Not provided';
      const phone = phoneInput?.value?.trim() || 'Not provided';
      const country = countryInput?.value?.trim() || 'Not provided';
      const message = messageInput?.value?.trim() || 'No message provided';

      // Prepare email template parameters - matching your EmailJS template
      const templateParams = {
        form_type: "Donation",
        name: name,
        email: email,
        phone: phone,
        country: country,
        amount: finalAmount,
        message: message,
        payment_screenshot: uploadedFile ? `Screenshot uploaded: ${uploadedFile.name}` : 'No screenshot uploaded',
        inquiryType: 'Donation',
        roles: 'N/A',
      };

      console.log('Sending email with params:', templateParams);

      // Send email via EmailJS with actual credentials
      await emailjs.send(
        'service_nczn8lb',         // Service ID
        'template_gqft0pl',        // Template ID
        templateParams,
        '1IZNzW0SEcxwH5XqA'        // Public Key
      );
      
      toast.success("Thank you for your generous donation! We'll verify the payment and send you a confirmation.");
      
      // Reset form
      setSelectedAmount(null);
      setCustomAmount("");
      setUploadedFile(null);
      form.reset();
      
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error("Failed to submit donation. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <span className="inline-block font-sans text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                Dana - Generosity
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Support the <span className="text-primary">Dharma</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground">
                Your generous donation supports the sacred practice of Ngyungne and helps 
                make this retreat accessible to practitioners from around the world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Your Impact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Your <span className="text-primary">Impact</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground">
                  Every contribution, no matter the size, creates ripples of positive change
                </p>
              </motion.div>

              <div className="space-y-4">
                {impactItems.map((item, index) => (
                  <motion.div
                    key={item.amount}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-heading text-xl font-bold text-primary">{item.amount}</span>
                        <span className="font-body text-muted-foreground">•</span>
                      </div>
                      <p className="font-body text-foreground">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why <span className="text-primary">Donate?</span>
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your generosity transcends material support—it becomes a sacred offering that benefits all beings
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {whyDonateReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-card rounded-xl p-6 shadow-soft"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <reason.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {reason.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/5 rounded-xl p-6 border-2 border-secondary/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">BTMC Foundation</strong> is a registered non-profit organization. 
                      Donations may be tax-deductible where applicable. Your contribution directly supports the preservation 
                      and transmission of authentic Buddhist teachings.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Make a Donation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Select Amount *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount.value}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            setCustomAmount("");
                          }}
                          className={`p-4 rounded-lg font-sans font-semibold text-lg transition-all ${
                            selectedAmount === amount.value
                              ? "bg-primary text-primary-foreground shadow-soft"
                              : "bg-muted text-foreground hover:bg-primary/10"
                          }`}
                        >
                          {amount.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-sans font-semibold text-muted-foreground">
                        Rs.
                      </span>
                      <Input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-12"
                        placeholder="Enter amount"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input name="name" required className="pl-10" placeholder="Your name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input name="email" type="email" required className="pl-10" placeholder="your@email.com" />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input name="phone" type="tel" className="pl-10" placeholder="+1 234 567 890" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-sm font-medium text-foreground">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input name="country" className="pl-10" placeholder="Your country" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Message (Optional)
                    </label>
                    <Textarea
                      name="message"
                      className="resize-none"
                      rows={3}
                      placeholder="Any dedication or message..."
                    />
                  </div>

                  {/* Bank Details Section */}
                  <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Bank Transfer Details
                    </h4>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-muted-foreground">Account Name</p>
                          <p className="font-sans font-semibold text-foreground">B.T.M.C. Foundation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-muted-foreground">Account Number</p>
                          <p className="font-sans font-semibold text-foreground">0570155982700014</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-muted-foreground">Bank Name</p>
                          <p className="font-sans font-semibold text-foreground">Prabhu Bank</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-xs text-muted-foreground">Branch</p>
                          <p className="font-sans font-semibold text-foreground">Boudha Branch</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      Please transfer your donation to the above account and upload the payment screenshot below.
                    </p>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="font-sans text-sm font-medium text-foreground">
                      Upload Payment Screenshot (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="payment-screenshot"
                      />
                      <label
                        htmlFor="payment-screenshot"
                        className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-input rounded-lg cursor-pointer hover:border-primary transition-colors bg-background"
                      >
                        <Upload className="w-6 h-6 text-muted-foreground" />
                        <div className="text-center">
                          {uploadedFile ? (
                            <>
                              <p className="font-sans font-medium text-foreground">
                                {uploadedFile.name}
                              </p>
                              <p className="font-sans text-xs text-muted-foreground">
                                Click to change
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="font-sans font-medium text-foreground">
                                Click to upload screenshot
                              </p>
                              <p className="font-sans text-xs text-muted-foreground">
                                PNG, JPG or PDF (max 5MB)
                              </p>
                            </>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Donation
                      </span>
                    )}
                  </Button>

                  <p className="font-sans text-xs text-center text-muted-foreground">
                    Your donation receipt will be sent to your email after verification. 
                    All donations are tax-deductible.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;