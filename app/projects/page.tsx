import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Kunj Vania",
  description: "Selected design projects by Kunj Vania.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
              Portfolio
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              Selected Work
            </h1>
          </div>

          {/* All projects */}
          <ProjectGrid projects={projects} columns={2} />
        </section>
      </AnimatedSection>
    </div>
  );
}
