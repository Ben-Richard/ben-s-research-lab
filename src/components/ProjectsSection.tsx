import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mini GPU Design",
    problem: "Need for a simplified GPU architecture for educational and prototyping purposes.",
    approach: "Designed a pipelined graphics processor with vertex/fragment shader stages on FPGA.",
    tools: "Verilog, Quartus, ModelSim, FPGA",
    outcome: "Functional GPU capable of rendering basic 3D primitives with real-time rasterization.",
    pdf: "/projects/mini-gpu.pdf",
  },
  {
    title: "Autonomous Mobile Robot",
    problem: "Navigation in unstructured environments without GPS.",
    approach: "Implemented SLAM-based navigation with LiDAR and IMU sensor fusion.",
    tools: "ROS, Python, C++, Raspberry Pi, LiDAR",
    outcome: "Robot achieved autonomous navigation in indoor environments with 95% waypoint accuracy.",
    pdf: "/projects/autonomous-robot.pdf",
  },
  {
    title: "Quanser Aero 2 Control",
    problem: "Dual-rotor aeroservo system with coupled dynamics requiring precise attitude control.",
    approach: "Designed LQR and PID controllers with system identification and state-space modelling.",
    tools: "MATLAB, Simulink, Quanser Hardware",
    outcome: "Achieved ±1° tracking accuracy with 20% stability improvement over baseline PID.",
    pdf: "/projects/quanser-aero2.pdf",
  },
  {
    title: "MPC for CSTR",
    problem: "Nonlinear chemical reactor dynamics requiring optimal temperature regulation.",
    approach: "Developed Model Predictive Controller with linearized plant model and constraint handling.",
    tools: "MATLAB, Simulink, CasADi",
    outcome: "Maintained reactor within ±0.5°C of setpoint under disturbances, outperforming PID by 35%.",
    pdf: "/projects/mpc-cstr.pdf",
  },
  {
    title: "System Identification",
    problem: "Deriving accurate dynamic models of physical systems from input-output data.",
    approach: "Applied ARX, ARMAX, and subspace identification methods with validation.",
    tools: "MATLAB, System ID Toolbox",
    outcome: "Achieved 92% fit accuracy on benchmark datasets with robust model selection criteria.",
    pdf: "/projects/system-id.pdf",
  },
  {
    title: "Robotic Manipulator Control",
    problem: "Precise end-effector positioning for multi-DOF robotic arm.",
    approach: "Implemented inverse kinematics with trajectory planning and torque control.",
    tools: "MATLAB, Simulink, Robotics Toolbox",
    outcome: "Sub-millimetre positioning accuracy with smooth trajectory execution.",
    pdf: "/projects/robotic-manipulator.pdf",
  },
  {
    title: "Quant ML Framework",
    problem: "Building a systematic quantitative trading framework with ML signal generation.",
    approach: "Developed feature engineering pipeline, ensemble ML models, and backtesting engine.",
    tools: "Python, Scikit-learn, Pandas, NumPy",
    outcome: "Framework generating alpha signals with Sharpe ratio > 1.5 on historical data.",
    pdf: "/projects/quant-ml.pdf",
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

              <Button variant="outline" size="sm" asChild className="font-mono text-xs">
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" /> View Project
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
