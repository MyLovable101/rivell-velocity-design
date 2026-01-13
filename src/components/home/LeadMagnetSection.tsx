import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileDown, Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LeadMagnetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-primary/20 shadow-glow relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <FileDown className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Free Resource</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Ultimate Cybersecurity Checklist for 2025
                </h3>
                <p className="text-muted-foreground mb-6">
                  Protect your business with our comprehensive 27-point security audit checklist. 
                  Used by Fortune 500 companies—now available free.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Ransomware Prevention Tips", "Employee Security Training Guide", "Compliance Roadmap"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          className="w-full h-14 pl-12 pr-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" variant="hero" size="xl" className="w-full group">
                      Download Free Guide
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      No spam. Unsubscribe anytime. We respect your privacy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Check Your Inbox!</h4>
                    <p className="text-muted-foreground">
                      We've sent the guide to {email}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
