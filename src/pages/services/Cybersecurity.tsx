import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Eye, 
  AlertTriangle,
  Server,
  Users,
  FileCheck,
  Clock,
  Zap,
  Award
} from "lucide-react";
import cyberShield from "@/assets/cyber-shield.jpg";
import serverRoom from "@/assets/server-room.jpg";

const features = [
  {
    icon: Eye,
    title: "24/7 Threat Monitoring",
    description: "Our Security Operations Center monitors your systems around the clock, detecting and responding to threats in real-time.",
  },
  {
    icon: Lock,
    title: "Advanced Endpoint Protection",
    description: "Next-gen antivirus and EDR solutions that stop ransomware, malware, and zero-day attacks before they cause damage.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management",
    description: "Continuous scanning and patching to identify and fix security weaknesses before hackers can exploit them.",
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description: "Turn your employees from your biggest security risk into your first line of defense with engaging training programs.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Auditing",
    description: "Meet HIPAA, PCI-DSS, SOC 2, and other regulatory requirements with our comprehensive compliance support.",
  },
  {
    icon: Server,
    title: "Incident Response",
    description: "Rapid response team ready to contain and remediate security incidents, minimizing damage and downtime.",
  },
];

const stats = [
  { value: "99.7%", label: "Threat Detection Rate" },
  { value: "<15min", label: "Response Time" },
  { value: "500+", label: "Businesses Protected" },
  { value: "24/7/365", label: "SOC Coverage" },
];

const processSteps = [
  {
    step: "01",
    title: "Security Assessment",
    description: "We analyze your current security posture, identifying vulnerabilities and compliance gaps.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    description: "Our team designs a tailored security roadmap aligned with your business objectives and risk tolerance.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We deploy enterprise-grade security tools and processes with minimal disruption to your operations.",
  },
  {
    step: "04",
    title: "Ongoing Protection",
    description: "Continuous monitoring, updates, and improvements keep you protected against evolving threats.",
  },
];

const Cybersecurity = () => {
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={cyberShield}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Enterprise-Grade Cybersecurity</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">Protect Your Business</span>
                <br />
                <span className="text-gradient-primary">From Cyber Threats</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              >
                Comprehensive cybersecurity solutions that defend against ransomware, 
                data breaches, and sophisticated attacks—without breaking your budget.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button variant="hero" size="xl" className="group">
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  View Our Approach
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={featuresRef} className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Cybersecurity Coverage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multi-layered security solutions that protect every aspect of your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={serverRoom}
                    alt="Enterprise Server Room"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl p-6 shadow-elevated">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">SOC 2 Certified</div>
                      <div className="text-sm text-muted-foreground">Enterprise Ready</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Our Security Process
                </h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={processInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-lg font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Don't Wait for a Breach
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                  Get a comprehensive security assessment and learn exactly where your vulnerabilities are—before attackers find them.
                </p>
                <Button variant="hero" size="xl" className="group">
                  Start Free Security Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
