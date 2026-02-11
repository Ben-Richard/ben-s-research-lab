

# Ben Paul Richard — Engineering Portfolio Website

## Overview
A dark-theme, research-grade engineering portfolio with scroll-driven hero video, monospace + serif typography, animated backgrounds, and a professional research lab aesthetic. Fully responsive with Lovable Cloud backend for review moderation.

## Assets
- **Hero video**: `Ben-Hero-Video-Landscape.mp4` → `public/videos/`
- **About image**: `Ben_Cartoon.jpeg` → `src/assets/`
- **Resume PDF**: `ARM_Ben_Updated_Resume_1.pdf` → `public/`

---

## Phase 1: Foundation & Hero Section
- **Dark theme** with custom color palette — deep blacks, subtle blue/green accents
- **Typography** — Google Fonts: JetBrains Mono (headings), Times New Roman/serif (body text)
- **Sticky header navigation** with smooth scroll-to-section links
- **Full-screen hero section** with scroll-driven video scrubbing:
  - Page stays fixed while video plays frame-by-frame on scroll
  - Sequential fade-in text as user scrolls: Name → Sub-headline → Secondary line → Short intro
  - Three CTA buttons: View Projects, Download Resume (PDF link), Contact Me (scrolls to contact)
  - Social icons row: Email (mailto), LinkedIn, GitHub

## Phase 2: About & Skills
- **About section** — two-column layout:
  - Left: Portrait image (`Ben_Cartoon.jpeg`)
  - Right: Bio text + tagline quote
- **Skills section** — 5 styled card categories with skill tag chips:
  - Embedded & Low-Level, Control & Robotics, Quant & ML, Hardware & Architecture, Tools
- Subtle animated grid/particle background behind skills

## Phase 3: Experience & Projects
- **Experience timeline** — vertical timeline with 4 roles (Zebronics, Guru Services/Voltas, SKI Precision, Integral Coach Factory)
  - Each entry: role, company, key accomplishments with animated metric counters
- **Projects section** — 7 technical project cards showing Problem, Approach, Tools, Outcome
  - "View Project" button linking to PDF (placeholder paths in `/projects/`)
  - Projects: Mini GPU, Autonomous Robot, Quanser Aero2, MPC (CSTR), System ID, Robotic Manipulator, Quant ML Framework

## Phase 4: Research, Certifications & Education
- **Research & Publications** — clickable cards linking to PDFs (Patent + IEEE Paper)
- **Certifications** — grid of 9 clickable certification badge cards linking to PDFs
- **Education** — 3 institution cards with coursework highlights & dissertation info

## Phase 5: Reviews, Contact & Polish (Backend: Lovable Cloud)
- **References/Testimonials** — horizontally scrolling animated rectangular cards
  - "Kind Words" title, 4 initial reference cards (name/designation/company/quote)
  - "Write a Review" button → dialog form (email, designation, company, comment)
  - **Backend**: Supabase database stores reviews. New submissions trigger email notification to you. Admin approval page lets you approve/reject. Approved reviews appear on the site.
- **Contact section** — "Let's Work Together" heading, contact info display, form with Name/Email/Message that opens mailto link
- **Animated backgrounds** — subtle grid + gradient + particle effects on non-hero sections
- **Smooth scroll animations** and section transitions throughout
- **Responsive design** polish for mobile and desktop

