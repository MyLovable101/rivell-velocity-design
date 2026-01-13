import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    content: "Rivell transformed our IT infrastructure completely. We went from constant downtime to 99.9% uptime. Their team responds faster than any vendor we've worked with.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "CFO, Atlantic Manufacturing",
    content: "The switch to Rivell saved us over 40% on IT costs while dramatically improving our security posture. They're true partners, not just vendors.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Director of Operations, East Coast Logistics",
    content: "After a ransomware scare, we knew we needed better protection. Rivell's cybersecurity team gave us peace of mind we never had before.",
    rating: 5,
  },
];

const clientLogos = [
  "Fortune 500 Healthcare",
  "Regional Bank Group",
  "Manufacturing Corp",
  "Law Partners LLP",
  "Tech Innovators Inc",
  "Retail Solutions Co",
];

export const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses that trust Rivell for their technology needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 glass rounded-lg text-muted-foreground font-medium text-sm"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
