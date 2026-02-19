import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Declarative scroll tracking — no useState, no window listeners
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smoothed spring value
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  // Video scrubbing — writes directly to DOM, no re-renders
  useMotionValueEvent(springScroll, "change", (latest) => {
    const video = videoRef.current;
    if (video && video.readyState > 0 && video.duration) {
      video.currentTime = latest * video.duration;
    }
  });

  // Per-element opacity as MotionValues — zero re-renders
  const nameOpacity  = useTransform(springScroll, [0, 0.05, 0.2, 0.35],   [1, 1, 1, 0]);
  const subOpacity   = useTransform(springScroll, [0.15, 0.25, 0.45, 0.6], [0, 1, 1, 0]);
  const secOpacity   = useTransform(springScroll, [0.3,  0.4,  0.6, 0.75], [0, 1, 1, 0]);
  const introOpacity = useTransform(springScroll, [0.5,  0.6,  1],         [0, 1, 1]);
  const ctaOpacity   = useTransform(springScroll, [0.65, 0.75, 1],         [0, 1, 1]);
  const arrowOpacity = useTransform(springScroll, [0, 0.1],                [1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[400vh]" id="hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-end justify-center">

        {/* Video background */}
        <video
          ref={videoRef}
          src="/videos/Ben-Hero-Video-Landscape.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60" />

        {/* Bottom gradient for text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

        {/* Content — anchored bottom-center */}
        <div className="relative z-10 w-full text-center px-4 pb-20 md:pb-28 max-w-4xl mx-auto">

          <motion.h1
            className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
            style={{ opacity: nameOpacity }}
          >
            <span className="text-gradient">Ben Paul Richard</span>
          </motion.h1>

          <motion.p
            className="font-mono text-base md:text-lg text-muted-foreground mb-2 tracking-wide"
            style={{ opacity: subOpacity }}
          >
            Engineer · Researcher · Builder
          </motion.p>

          <motion.p
            className="font-serif text-sm md:text-base text-muted-foreground/80 mb-4 max-w-xl mx-auto"
            style={{ opacity: secOpacity }}
          >
            Embedded Systems · Control Engineering · Quantitative Research
          </motion.p>

          <motion.p
            className="font-serif text-sm md:text-base text-foreground/70 mb-8 max-w-lg mx-auto leading-relaxed"
            style={{ opacity: introOpacity }}
          >
            MSc graduate blending hardware-level engineering with advanced control theory and data-driven modelling.
            Passionate about building systems that bridge the physical and computational worlds.
          </motion.p>

          <motion.div style={{ opacity: ctaOpacity }} className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="font-mono text-xs uppercase tracking-widest"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="font-mono text-xs uppercase tracking-widest"
              >
                <a href="/ARM_Ben_Updated_Resume_1.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-3 h-3 mr-1" /> Resume
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="font-mono text-xs uppercase tracking-widest"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="mailto:benpaulrichard3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ben-paul-richard-s-b31a451a6/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Ben-Richard" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — fades via MotionValue, no conditional render */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
