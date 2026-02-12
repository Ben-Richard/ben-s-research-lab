

# Content Update & PDF Asset Integration

## Overview
Update all portfolio sections with your real professional content and link the uploaded PDF documents to their respective sections.

---

## 1. Copy Uploaded PDFs to Project

Copy all 10 uploaded PDFs into organized public folders:

- `public/projects/MPC_Coursework_-_Ben.pdf`
- `public/projects/Process_Automation_Coursework_-_Ben.pdf`
- `public/projects/Control_Fundamentals_Coursework_-_Ben.pdf`
- `public/projects/System_Identification_Coursework_-_Ben.pdf`
- `public/publications/Patent_-_Electrical_Power_Generation.pdf`
- `public/publications/IEEE_Army_Surveillance_Robot.pdf`
- `public/certifications/All_Certificates.pdf`
- `public/certifications/Quantum_Computing.pdf`
- `public/certifications/Lean_Six_Sigma_White_Belt.pdf`
- `public/certifications/Six_Sigma_White_Belt.pdf`

## 2. Update Hero Section (`HeroSection.tsx`)

- Fix LinkedIn URL to: `https://www.linkedin.com/in/ben-paul-richard-s-b31a451a6/`
- Resume button triggers PDF download (already correct)

## 3. Update Experience Section (`ExperienceSection.tsx`)

Replace all 4 roles with the real detailed content:

| Role | Company | Period |
|------|---------|--------|
| Graduate Trainee Engineer | Zebronics India Pvt Ltd | 2023 - 2024 |
| Service Engineering Intern | Guru Services (Voltas) | 2022 - 2023 |
| Junior R&D Engineer | SKI Precision Products | 2021 - 2022 |
| Engineering Intern | Integral Coach Factory, Indian Railways | Mar 2021 - Apr 2021 |

Each role gets sub-categories (e.g., "Embedded Systems & Firmware Development", "System Integration & Testing") with detailed accomplishment bullets.

## 4. Update Projects Section (`ProjectsSection.tsx`)

Replace all 7 project cards with real content and link "View Project" buttons to GitHub (`https://github.com/Ben-Richard?tab=repositories`) for all projects. Update Problem/Approach/Tools/Outcome for each:

1. Mini GPU (SystemVerilog RTL)
2. Autonomous Mobile Robots
3. Quanser Aero2 (2-DOF Helicopter)
4. MPC for SISO/MIMO Systems
5. System Identification & Digital Control
6. Mobile Robot Cascade Control
7. Robotic Manipulator Control (Python)

## 5. Update Research & Certifications (`ResearchSection.tsx`)

**Publications** - Link to uploaded PDFs:
- Patent -> `public/publications/Patent_-_Electrical_Power_Generation.pdf`
- IEEE Paper -> `public/publications/IEEE_Army_Surveillance_Robot.pdf`

**Certifications** - Replace the 9 MATLAB onramp items with the real 13 certifications:
1. Advanced Ethical Hacking Bootcamp
2. Cybersecurity - Personal Online Security
3. Python Developer
4. C++ OOP
5. Data Structures & Algorithms
6. System Design + Architecture
7. ML & Deep Learning Bootcamp
8. PLC Developer Pathway
9. Google IT Support (5 Courses)
10. Google Python Programming
11. Quantum Computing (link to uploaded PDF)
12. AutoCAD, CATIA V5, SolidWorks, GD&T
13. Lean Six Sigma & Six Sigma White Belt (link to uploaded PDFs)

All certificates will also link to `public/certifications/All_Certificates.pdf` as a combined reference.

## 6. Update Education Section (`EducationSection.tsx`)

Replace with correct data:

| Institution | Degree | Period |
|------------|--------|--------|
| University of Manchester | MSc, Advanced Control and Systems Engineering | 2024 - 2025 |
| WorldQuant University | MSc Financial Engineering (Online) | 2025 - Present |
| Anna University | BEng Mechanical Engineering | 2017 - 2021 |

Each card gets real coursework and dissertation details from your provided content.

## 7. Update Reviews Section (`ReviewsSection.tsx`)

Replace placeholder testimonials with the 4 real references:

1. Alen Donald - HVDC Commissioning Engineer, Siemens
2. Dhinakar Selwyn - VP & Global Head FS Core Technologies, Capgemini
3. Gnanaiah Chandrasekaran - Design Manager, China Railway First Group
4. Cliff Evans - EVP & Head Technology Practice, Capgemini

Quotes will show "Reference available on request" since these are professional references, not testimonials with quotes.

## 8. Update Contact Section (`ContactSection.tsx`)

- Add LinkedIn link: `https://www.linkedin.com/in/ben-paul-richard-s-b31a451a6/`
- Verify all contact details match (email, phone, GitHub)

## 9. Add Certifications Section to Header Navigation

Add "Certifications" to the nav items in `Header.tsx` so users can navigate directly to that section.

---

## Technical Details

**Files modified:**
- `src/components/HeroSection.tsx` - LinkedIn URL fix
- `src/components/ExperienceSection.tsx` - Full content rewrite
- `src/components/ProjectsSection.tsx` - Full content rewrite + GitHub links
- `src/components/ResearchSection.tsx` - Publications PDFs + 13 certifications
- `src/components/EducationSection.tsx` - Correct degrees/dates/coursework
- `src/components/ReviewsSection.tsx` - Real references
- `src/components/ContactSection.tsx` - Add LinkedIn
- `src/components/Header.tsx` - Add certifications nav item

**Files copied:** 10 PDFs into `public/` subdirectories

