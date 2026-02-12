import { motion } from "framer-motion";

interface SubSection {
  title: string;
  bullets: string[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  subsections: SubSection[];
}

const experiences: Experience[] = [
  {
    role: "Graduate Trainee Engineer",
    company: "Zebronics India Pvt Ltd",
    period: "2023 – 2024",
    subsections: [
      {
        title: "Embedded Systems & Firmware Development",
        bullets: [
          "Developed and validated embedded control algorithms in C/C++ for industrial automation systems, improving functional stability by 20% and reducing commissioning time by 25%.",
          "Implemented real-time control loops for motorized systems; optimized algorithm performance via profiling and code review.",
          "Debugged complex firmware issues using oscilloscopes and logic analyzers; root-caused 5+ critical failures in embedded control pathways.",
        ],
      },
      {
        title: "Design & Documentation",
        bullets: [
          "Designed and reviewed electrical schematics and functional design specifications (FDS) per industry standards and project timelines.",
          "Contributed to cross-functional design reviews, identifying edge cases and performance bottlenecks early in the development cycle.",
        ],
      },
      {
        title: "System Integration & Testing",
        bullets: [
          "Performed system calibration, internal testing, and fault isolation using multimeters, oscilloscopes, and network analyzers.",
          "Collaborated with QA and field teams to reduce commissioning time by 25% and ensure robust system delivery across 8+ product lines.",
          "Diagnosed and serviced board-level electronic components (motherboards, CCTV power supplies, SMPS).",
        ],
      },
      {
        title: "ERP & Process Management",
        bullets: [
          "Utilized SAP ERP for tracking procurement, inventory, and maintenance; improved process alignment and reporting accuracy by 18%.",
        ],
      },
    ],
  },
  {
    role: "Service Engineering Intern",
    company: "Guru Services (Voltas)",
    period: "2022 – 2023",
    subsections: [
      {
        title: "Large-Scale Control System Commissioning & Optimization",
        bullets: [
          "Commissioned and optimized 15+ industrial HVAC control systems, performing advanced PID tuning and reducing downtime by 15%.",
          "Implemented and validated cascade control strategies for multi-loop chiller systems; improved setpoint tracking accuracy by 12%.",
          "Designed and tested control interlocking systems, ensuring full compliance with safety standards across 10+ industrial projects.",
        ],
      },
      {
        title: "Troubleshooting & Fault Resolution",
        bullets: [
          "Resolved 25+ major control and electrical faults across 15+ chiller units, optimizing reliability and minimizing downtime by 15%.",
          "Executed advanced troubleshooting on power/control circuits (up to 415V); resolved motor starter and relay issues systematically.",
          "Calibrated 40+ temperature and pressure control loops for optimal performance in VRF and ductable HVAC systems.",
        ],
      },
      {
        title: "Hardware & Field Engineering",
        bullets: [
          "Assisted in compressor overhauls and motor rewinding (10–100 kW), ensuring restored efficiency and adherence to OEM standards.",
          "Verified power system integrity for new installations, including cable sizing, grounding, and protection scheme design.",
        ],
      },
    ],
  },
  {
    role: "Junior R&D Engineer",
    company: "SKI Precision Products",
    period: "2021 – 2022",
    subsections: [
      {
        title: "R&D & Manufacturing",
        bullets: [
          "Operated and programmed CNC machines; designed components and tooling using AutoCAD and SolidWorks.",
          "Performed design validation via FEA and precision quality checks using CMM; achieved <0.05mm dimensional accuracy.",
          "Supported process optimization and cross-functional troubleshooting.",
        ],
      },
    ],
  },
  {
    role: "Engineering Intern",
    company: "Integral Coach Factory, Indian Railways",
    period: "Mar 2021 – Apr 2021",
    subsections: [
      {
        title: "Welding Process Validation",
        bullets: [
          "Validated welding parameters and updated WPS documentation; enhanced productivity and compliance in rolling stock fabrication.",
          "Gained hands-on exposure to industrial safety systems, production workflows, and cross-functional collaboration.",
        ],
      },
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
              <div
                className="absolute left-3 md:left-auto md:right-auto top-1 w-3 h-3 rounded-full bg-primary border-2 border-background md:left-1/2 md:-translate-x-1/2"
                style={i % 2 === 0 ? { right: "-6px", left: "auto" } : { left: "-6px" }}
              />

              <span className="font-mono text-xs text-primary uppercase tracking-wider">{exp.period}</span>
              <h3 className="font-mono text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
              <p className="font-serif text-sm text-muted-foreground mb-3">{exp.company}</p>

              {exp.subsections.map((sub) => (
                <div key={sub.title} className="mb-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-primary/80 mb-1">{sub.title}</p>
                  <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {sub.bullets.map((b, j) => (
                      <li key={j} className="font-serif text-sm text-foreground/75">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
