
# Refactor HeroSection.tsx — ScrollyVideo Pattern + Bottom-Center Content

## What Changes

### Scroll Architecture (Performance Fix)
Replace the current `useState` + `useEffect` + `window.addEventListener` pattern with Framer Motion's declarative motion value pipeline. This eliminates per-scroll React re-renders entirely.

### Content Positioning
The content wrapper currently uses `items-end justify-center` on the sticky container (bottom-aligned) — this is already correct. The inner `div` uses `pb-16 md:pb-24` bottom padding to sit near the bottom edge. This will be kept and slightly refined to ensure all text and CTAs are always anchored to the bottom center of the viewport.

---

## Technical Implementation

### Imports
**Remove:** `useEffect`, `useState` from React  
**Add from framer-motion:** `useScroll`, `useSpring`, `useMotionValueEvent`, `useTransform`, `MotionValue`

### Scroll Tracking
```ts
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end end"],
});

const springScroll = useSpring(scrollYProgress, {
  damping: 50,
  stiffness: 400,
});
```

### Video Scrubbing (with readyState guard)
```ts
useMotionValueEvent(springScroll, "change", (latest) => {
  const video = videoRef.current;
  if (video && video.readyState > 0 && video.duration) {
    video.currentTime = latest * video.duration;
  }
});
```

### Per-Element Opacity as MotionValues (no re-renders)
```ts
const nameOpacity  = useTransform(springScroll, [0, 0.05, 0.2, 0.35],   [1, 1, 1, 0]);
const subOpacity   = useTransform(springScroll, [0.15, 0.25, 0.45, 0.6], [0, 1, 1, 0]);
const secOpacity   = useTransform(springScroll, [0.3,  0.4,  0.6, 0.75], [0, 1, 1, 0]);
const introOpacity = useTransform(springScroll, [0.5,  0.6,  1],         [0, 1, 1]);
const ctaOpacity   = useTransform(springScroll, [0.65, 0.75, 1],         [0, 1, 1]);
const arrowOpacity = useTransform(springScroll, [0, 0.1],                [1, 0]);
```

Each is passed directly as `style={{ opacity: nameOpacity }}` to its `motion.*` element. No scalar math, no state.

### Scroll Indicator Fix
Remove the `scrollProgress < 0.1` conditional render. Replace with a permanently-mounted `motion.div` whose `style={{ opacity: arrowOpacity }}` fades it out naturally via the transform above.

### Bottom-Center Content Layout
The sticky container keeps `flex items-end justify-center`. The content `div` is:
```
relative z-10 w-full text-center px-4 pb-20 md:pb-28
```
A gradient fade (`bg-gradient-to-t from-background/80 to-transparent`) is added behind the content block so text is legible against any video frame, anchored firmly to the bottom.

### All Plain `<p>` Tags → `<motion.p>`
The current `<p>` elements with `style={{ opacity: ... }}` need to be `<motion.p>` to accept `MotionValue` objects (not plain numbers) in their `style` prop. Same for the CTA `<div>` → `<motion.div>`.

---

## Files Modified
- **`src/components/HeroSection.tsx`** only — full refactor of scroll/opacity logic, all content and Tailwind classes preserved, layout anchored to bottom-center
