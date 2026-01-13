import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import rivellLogo from "@/assets/rivell-logo.png";

const navItems = [
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Managed IT", href: "/services/managed-it" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Cloud Solutions", href: "/services/cloud" },
      { label: "VoIP", href: "/services/voip" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-strong">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={rivellLogo} alt="Rivell" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="glass-strong rounded-lg p-2 min-w-[200px] shadow-elevated">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              to={subitem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Client Portal
              </Button>
              <Button variant="hero" size="default">
                Free IT Assessment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 text-foreground font-medium"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          to={subitem.href}
                          className="block py-1 text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full">
                  Client Portal
                </Button>
                <Button variant="hero" className="w-full">
                  Free IT Assessment
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
