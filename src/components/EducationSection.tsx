import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Manchester",
    degree: "MSc, Advanced Control and Systems Engineering",
    period: "2024 – 2025",
    highlights: [
      "Control Systems Fundamentals | Process Automation | System Identification & AI",
      "Advanced Power System Protection & Control | Digital Control | Robotic Manipulators",
      "Applied Control & Autonomous Systems | Quantum Computing Fundamentals",
    ],
    dissertation: "Noise-Adaptive Grover Search Algorithm on NISQ Hardware — Quantum-inspired optimization for fault-tolerant control systems. Designed quantum circuit optimization algorithms using Qiskit for NISQ processors.",
  },
  {
    institution: "WorldQuant University",
    degree: "MSc Financial Engineering (Online)",
    period: "2025 – Present",
    highlights: [
      "Financial econometrics | Stochastic modeling & Monte Carlo simulation",
      "Derivatives pricing | Portfolio optimization | Risk management (VaR/CVaR)",
      "Time-series forecasting and ML/DL for alpha research using Python",
    ],
    dissertation: "Building an ML-powered quantitative framework integrating econometrics, stochastic modelling, and Monte Carlo simulation to forecast returns, price derivatives, and optimize portfolios.",
  },
  {
    institution: "Anna University",
    degree: "BEng Mechanical Engineering",
    period: "2017 – 2021",
    highlights: [
      "Electrical Machines & Power Systems | Circuit Analysis & Electronics",
      "Mechatronics | Electrical Drives and Controls | CAD/CAM",
      "Thermodynamics & Energy Systems | Manufacturing Technology",
    ],
    dissertation: "Regenerative Braking System for Electric Vehicles using a squirrel cage induction motor. Designed, simulated, and fabricated an energy-efficient braking system in MATLAB/Simulink and SolidWorks.",
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
              <p className="font-serif text-sm text-muted-foreground mb-3">{edu.degree}</p>
              <ul className="space-y-1 mb-3">
                {edu.highlights.map((h) => (
                  <li key={h} className="font-serif text-xs text-foreground/70">• {h}</li>
                ))}
              </ul>
              {edu.dissertation && (
                <div className="pt-3 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary mb-1">Dissertation</p>
                  <p className="font-serif text-xs text-foreground/65 leading-relaxed">{edu.dissertation}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
