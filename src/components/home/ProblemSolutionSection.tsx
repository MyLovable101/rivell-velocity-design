import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, CheckCircle2, XCircle, TrendingUp } from "lucide-react";

const problems = [
  { icon: XCircle, text: "Constant IT fires draining your productivity" },
  { icon: XCircle, text: "Cybersecurity threats keeping you up at night" },
  { icon: XCircle, text: "Outdated systems slowing your business down" },
  { icon: XCircle, text: "Unpredictable IT costs blowing your budget" },
];

const solutions = [
  { icon: CheckCircle2, text: "Proactive monitoring prevents issues before they start" },
  { icon: CheckCircle2, text: "Enterprise-grade security protecting your assets 24/7" },
  { icon: CheckCircle2, text: "Modern cloud solutions that scale with you" },
  { icon: CheckCircle2, text: "Fixed monthly pricing with no surprises" },
];

export const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">The IT Struggle is Real</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Fix Your IT Headaches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop firefighting technology problems. Start running your business with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Without Rivell</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <problem.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-primary/20 shadow-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">With Rivell</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <solution.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{solution.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
