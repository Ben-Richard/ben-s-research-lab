import { motion } from "framer-motion";

const experiences = [
  {
    role: "Electronics R&D Intern",
    company: "Zebronics India Pvt Ltd",
    period: "2021",
    accomplishments: [
      "Designed and tested PCB layouts for consumer audio products",
      "Reduced component failure rate by 15% through improved circuit analysis",
      "Collaborated with production teams on quality assurance protocols",
    ],
  },
  {
    role: "Service Engineer",
    company: "Guru Services (Voltas)",
    period: "2020 – 2021",
    accomplishments: [
      "Diagnosed and repaired industrial HVAC control systems",
      "Improved system uptime by 20% through predictive maintenance strategies",
      "Managed 50+ service calls monthly across multiple client sites",
    ],
  },
  {
    role: "Quality Engineer Intern",
    company: "SKI Precision Products",
    period: "2019",
    accomplishments: [
      "Implemented statistical process control (SPC) for CNC machining lines",
      "Achieved 98% dimensional accuracy compliance across production batches",
      "Developed automated inspection routines reducing QC time by 30%",
    ],
  },
  {
    role: "Graduate Engineer Trainee",
    company: "Integral Coach Factory (Indian Railways)",
    period: "2018",
    accomplishments: [
      "Assisted in electrical systems design for rail coach manufacturing",
      "Contributed to wiring harness optimization reducing installation time",
      "Studied power distribution and safety interlock systems",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Experience</h2>
          <p className="text-muted-foreground font-serif">Professional journey across engineering domains.</p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-3 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-primary border-2 border-background
                md:left-1/2 md:-translate-x-1/2"
                style={i % 2 === 0 ? { right: "-6px", left: "auto" } : { left: "-6px" }}
              />

              <span className="font-mono text-xs text-primary uppercase tracking-wider">{exp.period}</span>
              <h3 className="font-mono text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
              <p className="font-serif text-sm text-muted-foreground mb-3">{exp.company}</p>
              <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                {exp.accomplishments.map((a, j) => (
                  <li key={j} className="font-serif text-sm text-foreground/75">{a}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
