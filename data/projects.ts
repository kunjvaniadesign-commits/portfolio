// Replace placeholder content with your real project details.
// The dynamic route app/projects/[slug]/page.tsx reads from this file.

export interface Project {
  title: string;
  slug: string;        // must be URL-safe (kebab-case)
  category: string;
  year: string;
  role: string;
  tools: string[];
  summary: string;
  problem: string;
  process: string;
  outcome: string;
  coverImage: string;       // path inside /public, e.g. "/projects/my-cover.jpg"
  galleryImages: string[];  // additional images for the detail page
  behanceUrl?: string;
  figmaUrl?: string;
  youtubeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Brand Identity System",
    slug: "brand-identity-system",
    category: "Branding",
    year: "2024",
    role: "Brand Designer",
    tools: ["Figma", "Illustrator", "Notion"],
    summary:
      "A comprehensive brand identity system for a modern startup — from logo design to a complete visual language.",
    problem:
      "The client lacked a cohesive visual identity, resulting in inconsistent communication across every touchpoint.",
    process:
      "Conducted brand discovery workshops and competitor analysis, then ran iterative design sprints to develop a flexible, scalable visual system.",
    outcome:
      "Delivered a complete brand guidelines document, logo suite, typography system, and colour palette that scales across print and digital.",
    coverImage: "/projects/cover-1.svg",
    galleryImages: [
      "/projects/gallery-1a.svg",
      "/projects/gallery-1b.svg",
    ],
  },
  {
    title: "Mobile App Redesign",
    slug: "mobile-app-redesign",
    category: "UX Design",
    year: "2024",
    role: "Lead UX Designer",
    tools: ["Figma", "Maze", "Miro", "Lottie"],
    summary:
      "A full redesign of a fintech mobile application focused on improving usability and rebuilding user trust.",
    problem:
      "High drop-off rates during onboarding and low feature discoverability were hurting retention metrics.",
    process:
      "Ran usability testing on the existing product, mapped jobs-to-be-done, then rebuilt core flows through rapid prototyping cycles.",
    outcome:
      "40% improvement in onboarding completion during prototype testing, with a significantly cleaner information architecture.",
    coverImage: "/projects/cover-2.svg",
    galleryImages: [
      "/projects/gallery-2a.svg",
      "/projects/gallery-2b.svg",
    ],
  },
  {
    title: "Web Experience Design",
    slug: "web-experience-design",
    category: "Web Design",
    year: "2023",
    role: "UI/UX Designer",
    tools: ["Figma", "Framer", "Webflow"],
    summary:
      "An immersive web experience for a creative agency that blended editorial design with interactive storytelling.",
    problem:
      "The agency's previous site felt generic and failed to communicate their unique creative perspective.",
    process:
      "Developed a concept-driven design strategy, built high-fidelity Figma prototypes, and collaborated closely with developers on motion implementation.",
    outcome:
      "The website relaunch increased inbound enquiries by 60% and was recognised with a regional design award.",
    coverImage: "/projects/cover-3.svg",
    galleryImages: [
      "/projects/gallery-3a.svg",
      "/projects/gallery-3b.svg",
    ],
  },
  {
    title: "Motion Design System",
    slug: "motion-design-system",
    category: "Motion Design",
    year: "2023",
    role: "Motion Designer",
    tools: ["After Effects", "Lottie", "Figma", "Principle"],
    summary:
      "A systematic motion language for a product design team — from micro-interactions to page-level transitions.",
    problem:
      "Inconsistent animation across the product created a disjointed experience and slowed design-to-development handoff.",
    process:
      "Audited existing motion patterns, defined core principles around timing and personality, and built a Lottie-based component library.",
    outcome:
      "A unified motion system adopted across 4 product teams, reducing animation handoff time by 50%.",
    coverImage: "/projects/cover-4.svg",
    galleryImages: [
      "/projects/gallery-4a.svg",
      "/projects/gallery-4b.svg",
    ],
  },
];
