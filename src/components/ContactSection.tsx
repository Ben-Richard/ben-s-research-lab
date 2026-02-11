import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:benpaulrichard3@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Let's Work Together</h2>
          <p className="text-muted-foreground font-serif max-w-md mx-auto">
            Interested in collaboration, research, or engineering projects? Get in touch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:benpaulrichard3@gmail.com" className="font-serif text-foreground/85 hover:text-primary transition-colors">
                benpaulrichard3@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-serif text-foreground/85">+44 7823 915210</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-primary" />
              <a href="https://github.com/Ben-Richard" target="_blank" rel="noopener noreferrer" className="font-serif text-foreground/85 hover:text-primary transition-colors">
                github.com/Ben-Richard
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <a href="https://www.linkedin.com/in/ben-paul-richard" target="_blank" rel="noopener noreferrer" className="font-serif text-foreground/85 hover:text-primary transition-colors">
                linkedin.com/in/ben-paul-richard
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="contact-name" className="font-mono text-xs">Name</Label>
              <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="contact-email" className="font-mono text-xs">Email</Label>
              <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="contact-message" className="font-mono text-xs">Message</Label>
              <Textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Tell me about your project..." rows={5} />
            </div>
            <Button type="submit" className="w-full font-mono text-xs uppercase tracking-widest">
              <Send className="w-3 h-3 mr-2" /> Send Message
            </Button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ben Paul Richard. Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
