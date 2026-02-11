import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Embedded & Low-Level",
    skills: ["ARM Cortex-M", "RISC-V", "Verilog/VHDL", "FPGA", "C/C++", "Assembly", "RTOS", "SPI/I2C/UART"],
  },
  {
    title: "Control & Robotics",
    skills: ["PID Control", "MPC", "State-Space", "System Identification", "ROS", "Simulink", "Kalman Filters", "Motion Planning"],
  },
  {
    title: "Quant & ML",
    skills: ["Python", "NumPy/Pandas", "Scikit-learn", "TensorFlow", "Time Series", "Statistical Modelling", "Backtesting", "Risk Analysis"],
  },
  {
    title: "Hardware & Architecture",
    skills: ["PCB Design", "GPU Architecture", "Digital Logic", "Power Electronics", "Signal Processing", "IoT", "Sensor Fusion"],
  },
  {
    title: "Tools",
    skills: ["Git", "MATLAB", "LaTeX", "Docker", "Linux", "Quartus", "Vivado", "Oscilloscope"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Technical Skills</h2>
          <p className="text-muted-foreground font-serif max-w-lg mx-auto">
            A comprehensive toolkit spanning hardware to high-level algorithms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
