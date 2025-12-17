import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/practices", label: "Practices" },
  { href: "/event", label: "Event 2025" },
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
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-crimson-deep flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-lg">ॐ</span>
              </div>
              <span className={`font-heading text-xl font-semibold ${showDarkText ? "text-primary" : "text-primary-foreground"}`}>
                Ngyungne
              </span>
            </Link>
          </motion.div>

          <motion.div className="hidden lg:flex items-center gap-8" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.href ? "text-secondary" : showDarkText ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          <motion.div className="hidden lg:flex items-center gap-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Button variant="ghost" size="sm" className={showDarkText ? "text-foreground" : "text-primary-foreground hover:bg-primary-foreground/10"} asChild>
              <Link to="/donate"><Heart className="w-4 h-4 mr-2" />Donate</Link>
            </Button>
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
              <Link to="/contact">Register Now</Link>
            </Button>
          </motion.div>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className={showDarkText ? "text-foreground" : "text-primary-foreground"} /> : <Menu className={showDarkText ? "text-foreground" : "text-primary-foreground"} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col gap-4 bg-card rounded-lg p-4 shadow-card">
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="font-sans text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" asChild><Link to="/donate"><Heart className="w-4 h-4 mr-2" />Donate</Link></Button>
                  <Button size="sm" className="bg-secondary text-secondary-foreground" asChild><Link to="/contact">Register Now</Link></Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
