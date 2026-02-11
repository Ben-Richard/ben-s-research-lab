import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Manchester",
    degree: "MSc Electrical & Electronic Engineering",
    period: "2022 – 2023",
    highlights: [
      "Advanced Control Systems",
      "Embedded Systems Design",
      "Digital Signal Processing",
      "Dissertation: Model Predictive Control for Nonlinear Systems",
    ],
  },
  {
    institution: "WorldQuant University",
    degree: "MSc Financial Engineering (Online)",
    period: "2023 – 2025",
    highlights: [
      "Quantitative Methods",
      "Machine Learning for Finance",
      "Risk Management",
      "Stochastic Calculus",
    ],
  },
  {
    institution: "Anna University",
    degree: "BEng Electrical & Electronics Engineering",
    period: "2016 – 2020",
    highlights: [
      "Power Electronics",
      "Control Systems",
      "Microprocessors & Microcontrollers",
      "Dissertation: Electric Power Generation from IC Engine Waste Heat",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="w-6 h-6 text-primary mb-3" />
              <span className="font-mono text-xs text-primary uppercase tracking-wider">{edu.period}</span>
              <h3 className="font-mono text-sm font-semibold text-foreground mt-1 mb-1">{edu.institution}</h3>
              <p className="font-serif text-sm text-muted-foreground mb-4">{edu.degree}</p>
              <ul className="space-y-1">
                {edu.highlights.map((h) => (
                  <li key={h} className="font-serif text-xs text-foreground/70">• {h}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
