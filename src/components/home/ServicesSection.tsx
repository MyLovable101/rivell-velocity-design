import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Shield, 
  Cloud, 
  Phone,
  ArrowRight,
  Server,
  Lock,
  Wifi,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Complete IT management and support. Focus on your business while we handle everything from helpdesk to infrastructure.",
    features: ["24/7 Help Desk", "Network Management", "Proactive Monitoring"],
    href: "/services/managed-it",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise grade security for businesses of all sizes. Protect your data, your customers, and your reputation.",
    features: ["Threat Detection", "Security Audits", "Compliance Support"],
    href: "/services/cybersecurity",
    gradient: "from-primary to-violet-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration and management of cloud infrastructure. Scale effortlessly with modern cloud technology.",
    features: ["Cloud Migration", "Azure & AWS", "Hybrid Solutions"],
    href: "/services/cloud",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Phone,
    title: "VoIP Phone Systems",
    description: "Modern business communication solutions. Crystal clear calls, advanced features, and significant cost savings.",
    features: ["Unified Communications", "Video Conferencing", "Mobile Integration"],
    href: "/services/voip",
    gradient: "from-accent to-yellow-500",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technology Solutions That{" "}
            <span className="text-gradient-primary">Drive Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT services designed for modern businesses. 
            One partner for all your technology needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.href} className="block group">
                <div className="glass rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow relative overflow-hidden">
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 shadow-lg`}>
                      <service.icon className="w-full h-full text-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
