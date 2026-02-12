import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mini GPU — RTL-based Multi-Core Parallel Processor",
    problem: "Build a simplified multi-core GPU capable of running parallel workloads and validate correctness at the RTL level.",
    approach: "Implemented dispatcher + thread scheduling, ALU datapaths, and memory interfaces in SystemVerilog; verified functionality and parallel execution using simulation testbenches; analyzed cores-vs-threads trade-offs and documented microarchitecture choices.",
    tools: "SystemVerilog/Verilog, RTL simulation, testbench design, Git, Linux tools",
    outcome: "Verified a working RTL mini-GPU through simulation, with documented architectural decisions and practical processor/RTL verification experience.",
    link: "https://github.com/Ben-Richard?tab=repositories",
  },
  {
    title: "Autonomous Mobile Robots — Motion Control & Localization",
    problem: "Achieve accurate trajectory tracking and robust real-time pose estimation for mobile robots with safe obstacle avoidance.",
    approach: "Designed and simulated PID, Sliding Mode Control, and cascade control for tracking; implemented EKF, Particle Filter, and SLAM for localization; added CBF-CLF QP planning for obstacle avoidance + goal-seeking.",
    tools: "MATLAB, Simulink, Python",
    outcome: "End-to-end autonomy stack in simulation (control + localization + planning) and a strong foundation for real-time robotics deployment.",
    link: "https://github.com/Ben-Richard?tab=repositories",
  },
  {
    title: "Quanser Aero2 — 2-DOF Helicopter Stabilization",
    problem: "Stabilize a 2-DOF helicopter system across a wide operating envelope and validate robustness under faults.",
    approach: "Implemented PID, LQR, LQG, MRAC, and feedback linearization; performed Hardware-in-the-Loop testing using Simulink + QUARC; evaluated robustness under fault conditions.",
    tools: "Simulink, QUARC, C/C++",
    outcome: "Robust stabilization demonstrated in HIL, plus certified experience in advanced control synthesis and real-time validation (Quanser platform).",
    link: "https://github.com/Ben-Richard?tab=repositories",
  },
  {
    title: "Model Predictive Control (MPC) for SISO/MIMO Systems",
    problem: "Control a constrained process (CSTR) with input saturation while balancing stability and control effort.",
    approach: "Developed MPC with explicit constraint handling; ran trade-off studies (stability vs effort) and validated multi-variable prioritization behavior.",
    tools: "MATLAB/Simulink-style modeling + simulation methods",
    outcome: "Industrial-style MPC design experience with validated constraint-aware control behavior on a representative process.",
    link: "https://github.com/Ben-Richard?tab=repositories",
    pdf: "/projects/MPC_Coursework_-_Ben.pdf",
  },
  {
    title: "System Identification & Digital Control Design",
    problem: "Identify accurate plant models from experimental data and design practical digital controllers.",
    approach: "Built ARX/OE models from real-time data and validated accuracy; designed/tuned digital PID using Ziegler–Nichols, IMC, and root locus methods; emphasized model validation and data-driven tuning.",
    tools: "System ID workflows (data acquisition/analysis), digital control design methods",
    outcome: "Achieved 87% model accuracy and demonstrated rigorous model validation + practical controller tuning skills.",
    link: "https://github.com/Ben-Richard?tab=repositories",
    pdf: "/projects/System_Identification_Coursework_-_Ben.pdf",
  },
  {
    title: "Mobile Robot Cascade Control — Leader–Follower Navigation",
    problem: "Enable leader–follower navigation with stable low-level motion control and responsive obstacle-aware behavior.",
    approach: "Designed hierarchical control with inner-loop motor control and outer-loop sonar feedback; simulated obstacle avoidance and dynamic setpoint adjustment.",
    tools: "MATLAB, Python",
    outcome: "Demonstrated hierarchical control and multi-agent coordination concepts in simulation.",
    link: "https://github.com/Ben-Richard?tab=repositories",
  },
  {
    title: "Robotic Manipulator Control — Forward/Inverse Kinematics",
    problem: "Model and control multi-DOF manipulators for accurate motion/pose control.",
    approach: "Implemented forward/inverse kinematics, Jacobian-based control; added Lagrangian modeling and dynamic control techniques.",
    tools: "Python, NumPy, MATLAB",
    outcome: "Practical implementation experience in nonlinear robot modeling, kinematics, and dynamics-based control.",
    link: "https://github.com/Ben-Richard?tab=repositories",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Projects</h2>
          <p className="text-muted-foreground font-serif max-w-lg mx-auto">
            Technical projects spanning hardware design, control systems, and quantitative research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group"
            >
              <h3 className="font-mono text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="space-y-2 mb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Problem</span>
                  <p className="font-serif text-sm text-foreground/75">{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Approach</span>
                  <p className="font-serif text-sm text-foreground/75">{project.approach}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Tools</span>
                  <p className="font-serif text-sm text-muted-foreground">{project.tools}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">Outcome</span>
                  <p className="font-serif text-sm text-foreground/75">{project.outcome}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="font-mono text-xs">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" /> View Project
                  </a>
                </Button>
                {project.pdf && (
                  <Button variant="ghost" size="sm" asChild className="font-mono text-xs">
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                      📄 Report
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
