import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Review {
  name: string;
  designation: string;
  company: string;
  quote: string;
}

const initialReviews: Review[] = [
  {
    name: "Dr. Sarah Mitchell",
    designation: "Senior Lecturer",
    company: "University of Manchester",
    quote: "Ben demonstrated exceptional analytical skills and a remarkable ability to bridge theoretical concepts with practical engineering solutions.",
  },
  {
    name: "Rajesh Kumar",
    designation: "Engineering Manager",
    company: "Zebronics India",
    quote: "One of the most dedicated interns we've had. Ben's PCB designs were meticulous and his attention to quality was outstanding.",
  },
  {
    name: "Prof. James Chen",
    designation: "Research Supervisor",
    company: "University of Manchester",
    quote: "Ben's work on model predictive control showed a deep understanding of advanced control theory. His dissertation was among the top in the cohort.",
  },
  {
    name: "Ananya Sharma",
    designation: "Team Lead",
    company: "SKI Precision Products",
    quote: "Ben brought fresh perspectives to our quality engineering processes. His data-driven approach to SPC implementation was truly impressive.",
  },
];

const ReviewsSection = () => {
  const [reviews] = useState<Review[]>(() => {
    const stored = localStorage.getItem("approved_reviews");
    return stored ? [...initialReviews, ...JSON.parse(stored)] : initialReviews;
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= el.scrollWidth - el.clientWidth) scrollPos = 0;
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => { animationId = requestAnimationFrame(animate); };

    el.addEventListener("mouseenter", pauseScroll);
    el.addEventListener("mouseleave", resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", pauseScroll);
      el.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // For now, just show success — backend will handle storage later
    toast({
      title: "Review submitted!",
      description: "Your review will appear after approval. Thank you!",
    });
    setDialogOpen(false);
    form.reset();
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-mono text-3xl font-bold text-gradient mb-3">Kind Words</h2>
          <p className="text-muted-foreground font-serif">What colleagues and mentors have to say.</p>
        </motion.div>

        {/* Scrolling cards */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide mb-8" style={{ scrollbarWidth: "none" }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <MessageSquareQuote className="w-5 h-5 text-primary mb-3" />
              <p className="font-serif text-sm text-foreground/80 italic mb-4 leading-relaxed">
                "{review.quote}"
              </p>
              <div>
                <p className="font-mono text-sm font-semibold text-foreground">{review.name}</p>
                <p className="font-serif text-xs text-muted-foreground">
                  {review.designation}, {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review */}
        <div className="text-center">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-mono text-xs uppercase tracking-widest">
                <PenLine className="w-3 h-3 mr-2" /> Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-mono">Write a Review</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="font-mono text-xs">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email" className="font-mono text-xs">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="designation" className="font-mono text-xs">Designation</Label>
                  <Input id="designation" name="designation" required placeholder="e.g. Senior Engineer" />
                </div>
                <div>
                  <Label htmlFor="company" className="font-mono text-xs">Company</Label>
                  <Input id="company" name="company" required placeholder="Company name" />
                </div>
                <div>
                  <Label htmlFor="comment" className="font-mono text-xs">Your Review</Label>
                  <Textarea id="comment" name="comment" required placeholder="Share your experience working with Ben..." rows={4} />
                </div>
                <Button type="submit" className="w-full font-mono text-xs uppercase tracking-widest">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
