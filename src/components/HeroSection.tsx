import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
      setScrollProgress(progress);

      if (videoRef.current.duration) {
        videoRef.current.currentTime = progress * videoRef.current.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nameOpacity = scrollProgress < 0.05 ? 1 : scrollProgress < 0.2 ? 1 : Math.max(0, 1 - (scrollProgress - 0.2) * 5);
  const subOpacity = scrollProgress < 0.15 ? 0 : scrollProgress < 0.25 ? (scrollProgress - 0.15) * 10 : scrollProgress < 0.45 ? 1 : Math.max(0, 1 - (scrollProgress - 0.45) * 5);
  const secOpacity = scrollProgress < 0.3 ? 0 : scrollProgress < 0.4 ? (scrollProgress - 0.3) * 10 : scrollProgress < 0.6 ? 1 : Math.max(0, 1 - (scrollProgress - 0.6) * 5);
  const introOpacity = scrollProgress < 0.5 ? 0 : scrollProgress < 0.6 ? (scrollProgress - 0.5) * 10 : 1;
  const ctaOpacity = scrollProgress < 0.65 ? 0 : scrollProgress < 0.75 ? (scrollProgress - 0.65) * 10 : 1;

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

        {/* Content */}
        <div className="relative z-10 text-center pb-16 md:pb-24 px-4 max-w-4xl">
          <motion.h1
            className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
            style={{ opacity: nameOpacity }}
          >
            <span className="text-gradient">Ben Paul Richard</span>
          </motion.h1>

          <p
            className="font-mono text-base md:text-lg text-muted-foreground mb-2 tracking-wide"
            style={{ opacity: subOpacity }}
          >
            Engineer · Researcher · Builder
          </p>

          <p
            className="font-serif text-sm md:text-base text-muted-foreground/80 mb-4 max-w-xl mx-auto"
            style={{ opacity: secOpacity }}
          >
            Embedded Systems · Control Engineering · Quantitative Research
          </p>

          <p
            className="font-serif text-sm md:text-base text-foreground/70 mb-8 max-w-lg mx-auto leading-relaxed"
            style={{ opacity: introOpacity }}
          >
            MSc graduate blending hardware-level engineering with advanced control theory and data-driven modelling. 
            Passionate about building systems that bridge the physical and computational worlds.
          </p>

          <div style={{ opacity: ctaOpacity }} className="space-y-4">
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
          </div>
        </div>

        {/* Scroll indicator */}
        {scrollProgress < 0.1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
