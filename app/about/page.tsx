import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About — Kunj Vania",
  description: "Learn about Kunj Vania — UI/UX and interaction designer.",
};

const tools = [
  "Figma",
  "Framer",
  "After Effects",
  "Lottie",
  "Webflow",
  "Principle",
  "Maze",
  "Miro",
  "Notion",
  "Illustrator",
];

const disciplines = [
  { label: "UX Research & Strategy", description: "User interviews, usability testing, journey mapping, jobs-to-be-done." },
  { label: "UI & Visual Design", description: "Design systems, typography, colour, and high-fidelity interface work." },
  { label: "Interaction & Motion", description: "Micro-interactions, animation principles, and Lottie-based motion systems." },
  { label: "Brand Identity", description: "Logo design, visual language, guidelines, and brand storytelling." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
          <div className="grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                About
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                Hello, I&apos;m<br />Kunj.
              </h1>
            </div>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              I&apos;m a UI/UX and interaction designer studying at UTS, Sydney.
              I care deeply about craft — the kind of design that feels
              inevitable once you&apos;ve experienced it. My work lives at the
              intersection of clarity, motion, and purposeful detail.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Photo placeholder + bio ────────────────────────────────── */}
      <AnimatedSection delay={0.05}>
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">
          {/* Replace this div with your photo using next/image */}
          <div className="aspect-[3/4] rounded-3xl bg-tag-bg md:col-span-1" />

          <div className="md:col-span-2 flex flex-col justify-center gap-6">
            <p className="text-foreground leading-relaxed">
              My design journey started with a curiosity about why some products
              feel effortless while others create friction. That curiosity grew
              into a practice — a methodical, research-grounded approach to
              making things that genuinely work for people.
            </p>
            <p className="text-muted leading-relaxed">
              Outside of screens, I&apos;m drawn to architecture, film, and
              typography — forms that share design&apos;s core challenge: how do you
              communicate something complex with economy and grace?
            </p>
            <p className="text-muted leading-relaxed">
              I&apos;m currently open to internships, collaborations, and freelance
              projects. If you&apos;d like to work together, I&apos;d love to hear from
              you.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Disciplines ───────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-10">
            What I Do
          </p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {disciplines.map(({ label, description }) => (
              <div key={label}>
                <h3 className="font-medium text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Tools ─────────────────────────────────────────────────── */}
      <AnimatedSection delay={0.05}>
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-8">
            Tools &amp; Software
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-tag-bg text-sm text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
