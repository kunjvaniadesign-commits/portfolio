import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <Hero />

      {/* ── Featured work ─────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                Selected Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block"
            >
              View All →
            </Link>
          </div>

          <ProjectGrid projects={featured} />

          <div className="mt-10 sm:hidden">
            <Link
              href="/projects"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              View All →
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* ── About snippet ─────────────────────────────────────────── */}
      <AnimatedSection delay={0.1}>
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                About
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
                Designing for people,
                <br />
                <em>not just screens.</em>
              </h2>
              <p className="text-muted leading-relaxed mb-8 max-w-md">
                I&apos;m a UI/UX and interaction designer focused on creating
                purposeful digital experiences. I work across brand identity,
                product design, and motion — always with the user at the centre.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium group"
              >
                <span>More about me</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Replace this div with next/image when you have a photo */}
            <div className="aspect-square rounded-3xl bg-tag-bg" />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
