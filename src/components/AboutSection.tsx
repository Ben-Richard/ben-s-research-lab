import { motion } from "framer-motion";
import benCartoon from "@/assets/Ben_Cartoon.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Portrait */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-sm" />
              <img
                src={benCartoon}
                alt="Ben Paul Richard portrait"
                className="relative rounded-2xl w-72 md:w-80 object-cover border border-border"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-mono text-3xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="font-serif text-foreground/85 leading-relaxed mb-4">
              I'm a multidisciplinary engineer with an MSc in Electrical & Electronic Engineering from the University of Manchester 
              and an MSc in Financial Engineering from WorldQuant University. My work spans embedded systems, control theory, 
              robotics, and quantitative modelling.
            </p>
            <p className="font-serif text-foreground/85 leading-relaxed mb-6">
              From designing Mini GPUs and autonomous robots to implementing model predictive controllers and 
              quantitative ML frameworks, I thrive at the intersection of hardware and intelligent software. 
              I believe the best engineering happens when rigorous theory meets practical, real-world systems.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground font-serif">
              "Engineering is the art of directing the great sources of power in nature for the use and convenience of man."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
