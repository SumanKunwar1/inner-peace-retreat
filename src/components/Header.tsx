import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/practices", label: "Practices" },
  { href: "/event", label: "Event 2026" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDarkText = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo image — circular badge, naturally fits at 56px height */}
              <div className="relative flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dcsgax3ld/image/upload/v1773572737/WhatsApp_Image_2026-03-12_at_21.53.31-removebg-preview_fcxszz.png"
                  alt="3rd International Ngyungne Retreat"
                  className={`w-auto object-contain transition-all duration-500 ${
                    isScrolled || !isHome ? "h-14" : "h-16"
                  }`}
                  style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
                />
              </div>

              {/* Optional wordmark beside logo — hidden on smaller screens to avoid clutter */}
              <div className="hidden xl:flex flex-col leading-tight">
                <span
                  className={`text-[13px] font-semibold tracking-wide transition-colors duration-300 ${
                    showDarkText ? "text-foreground" : "text-primary-foreground"
                  }`}
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Ngyungne Retreat
                </span>
                <span
                  className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                    showDarkText ? "text-muted-foreground" : "text-primary-foreground/70"
                  }`}
                >
                  Kathmandu 2026
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            className="hidden lg:flex items-center gap-7"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-secondary relative group ${
                  location.pathname === link.href
                    ? "text-secondary"
                    : showDarkText
                    ? "text-foreground"
                    : "text-primary-foreground/90"
                }`}
              >
                {link.label}
                {/* Active / hover underline accent */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-secondary transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </motion.div>

          {/* Desktop CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors ${
                showDarkText
                  ? "text-foreground hover:bg-secondary/10"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              asChild
            >
              <Link to="/donate">
                <Heart className="w-4 h-4 mr-1.5" />
                Donate
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm"
              asChild
            >
              <Link to="/contact">Register Now</Link>
            </Button>
          </motion.div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-primary-foreground/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={showDarkText ? "text-foreground" : "text-primary-foreground"} size={22} />
            ) : (
              <Menu className={showDarkText ? "text-foreground" : "text-primary-foreground"} size={22} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 pb-4"
            >
              <div className="flex flex-col gap-1 bg-card rounded-xl p-4 shadow-card border border-border/50">
                {/* Mobile logo header */}
                <div className="flex items-center gap-3 pb-3 mb-1 border-b border-border/60">
                  <img
                    src="https://res.cloudinary.com/dcsgax3ld/image/upload/v1773572737/WhatsApp_Image_2026-03-12_at_21.53.31-removebg-preview_fcxszz.png"
                    alt="Ngyungne Retreat"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Georgia', serif" }}>
                      Ngyungne Retreat
                    </span>
                    <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                      Kathmandu 2026
                    </span>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`font-sans text-sm font-medium px-2 py-2.5 rounded-md transition-colors hover:bg-secondary/10 hover:text-secondary ${
                      location.pathname === link.href
                        ? "text-secondary bg-secondary/10"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex flex-col gap-2 pt-3 mt-1 border-t border-border/60">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                      <Heart className="w-4 h-4 mr-2" />
                      Donate
                    </Link>
                  </Button>
                  <Button size="sm" className="bg-secondary text-secondary-foreground" asChild>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Register Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}