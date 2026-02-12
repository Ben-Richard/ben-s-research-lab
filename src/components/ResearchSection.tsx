import { motion } from "framer-motion";
import { FileText, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Electric Power Generation from IC Engine Waste Heat",
    type: "Patent",
    description: "Novel thermoelectric generator system for recovering waste heat from internal combustion engines, converting thermal energy to electrical power.",
    pdf: "/publications/Patent_-_Electrical_Power_Generation.pdf",
  },
  {
    title: "Army Surveillance Robot",
    type: "IEEE Paper",
    description: "Design and implementation of a remotely operated surveillance robot with real-time video transmission and obstacle avoidance for military applications.",
    pdf: "/publications/IEEE_Army_Surveillance_Robot.pdf",
  },
];

const certifications = [
  { name: "Advanced Ethical Hacking Bootcamp", detail: "MITM attacks, DNS spoofing, DHCP starvation, DoS/DDoS, router exploitation", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Cybersecurity — Personal Online Security", detail: "Privacy protection, phishing prevention, password management, VPN", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Python Developer", detail: "Production-level Python, design patterns, Git/CI-CD integration", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "C++ OOP", detail: "Advanced OOP, STL, memory management, template metaprogramming", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Data Structures & Algorithms", detail: "Coding interview-level DS/Algorithms; Big-O analysis", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "System Design + Architecture", detail: "Microservices, load balancing, distributed systems design", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "ML & Deep Learning Bootcamp", detail: "TensorFlow, CNNs, transfer learning, production ML pipelines", provider: "Zero To Mastery", pdf: "/certifications/All_Certificates.pdf" },
  { name: "PLC Developer Pathway", detail: "Ladder logic, SCADA integration, PLC software development", provider: "LinkedIn Learning", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Google IT Support Professional (5 Courses)", detail: "IT Security, Operating Systems, System Administration, Networking", provider: "Google", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Google Python Programming", detail: "Google Certified Python programming", provider: "Google", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Understanding Quantum Computing", detail: "2.6 CPE credits (NASBA)", provider: "Zero To Mastery", pdf: "/certifications/Quantum_Computing.pdf" },
  { name: "AutoCAD, CATIA V5, SolidWorks, GD&T", detail: "Certified CAD/CAM design tools", provider: "CADD School", pdf: "/certifications/All_Certificates.pdf" },
  { name: "Lean Six Sigma & Six Sigma White Belt", detail: "Process improvement, quality tools, statistical methods", provider: "C.S.S.C", pdf: "/certifications/Lean_Six_Sigma_White_Belt.pdf" },
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
          id="certifications"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground mb-3">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/40 hover:bg-secondary/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{cert.name}</span>
                  <p className="font-serif text-[11px] text-muted-foreground mt-0.5">{cert.detail}</p>
                  <p className="font-mono text-[10px] text-primary/60 mt-1">{cert.provider}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
