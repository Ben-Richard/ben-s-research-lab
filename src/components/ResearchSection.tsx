import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Electric Power Generation from IC Engine Waste Heat",
    type: "Patent",
    description: "Novel thermoelectric generator system for recovering waste heat from internal combustion engines, converting thermal energy to electrical power.",
    pdf: "/publications/patent-waste-heat.pdf",
  },
  {
    title: "Army Surveillance Robot",
    type: "IEEE Paper",
    description: "Design and implementation of a remotely operated surveillance robot with real-time video transmission and obstacle avoidance for military applications.",
    pdf: "/publications/ieee-surveillance-robot.pdf",
  },
];

const certifications = [
  { name: "MATLAB Onramp", pdf: "/certifications/matlab-onramp.pdf" },
  { name: "Simulink Onramp", pdf: "/certifications/simulink-onramp.pdf" },
  { name: "Control Design Onramp", pdf: "/certifications/control-design.pdf" },
  { name: "Deep Learning Onramp", pdf: "/certifications/deep-learning.pdf" },
  { name: "Machine Learning Onramp", pdf: "/certifications/machine-learning.pdf" },
  { name: "Signal Processing Onramp", pdf: "/certifications/signal-processing.pdf" },
  { name: "Image Processing Onramp", pdf: "/certifications/image-processing.pdf" },
  { name: "Stateflow Onramp", pdf: "/certifications/stateflow.pdf" },
  { name: "Statistics Onramp", pdf: "/certifications/statistics.pdf" },
];

const ResearchSection = () => {
  return (
    <section id="research" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-6">
        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Research & Publications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{pub.type}</span>
                  <h3 className="font-mono text-sm font-semibold text-foreground">{pub.title}</h3>
                </div>
              </div>
              <p className="font-serif text-sm text-foreground/75 mb-4">{pub.description}</p>
              <Button variant="outline" size="sm" asChild className="font-mono text-xs">
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" /> View Paper
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground mb-3">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/40 hover:bg-secondary/50 transition-all cursor-pointer"
            >
              <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="font-mono text-xs text-foreground">{cert.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
