import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all project detail pages at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Kunj Vania`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-24">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          All Projects
        </Link>
      </div>

      {/* ── Hero cover ────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-tag-bg">
            {project.coverImage && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Project header ────────────────────────────────────────── */}
      <AnimatedSection delay={0.05}>
        <section className="max-w-6xl mx-auto px-6 pb-16 border-b border-border">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Title + summary */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium bg-tag-bg text-muted px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs text-muted">{project.year}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-muted leading-relaxed text-base md:text-lg max-w-2xl">
                {project.summary}
              </p>
            </div>

            {/* Meta panel */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                  Role
                </p>
                <p className="text-sm">{project.role}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-tag-bg text-muted px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* External links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium border border-border rounded-full px-4 py-2 hover:bg-tag-bg transition-colors"
                  >
                    Behance ↗
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium border border-border rounded-full px-4 py-2 hover:bg-tag-bg transition-colors"
                  >
                    Figma ↗
                  </a>
                )}
                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium border border-border rounded-full px-4 py-2 hover:bg-tag-bg transition-colors"
                  >
                    Video ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Case study body ───────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 border-b border-border">
          {[
            { label: "Problem", body: project.problem },
            { label: "Process", body: project.process },
            { label: "Outcome", body: project.outcome },
          ].map(({ label, body }) => (
            <div key={label}>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-foreground">{body}</p>
            </div>
          ))}
        </section>
      </AnimatedSection>

      {/* ── Gallery ───────────────────────────────────────────────── */}
      {project.galleryImages.length > 0 && (
        <AnimatedSection delay={0.05}>
          <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-8">
              Gallery
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-tag-bg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.title} — gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* ── YouTube embed ─────────────────────────────────────────── */}
      {project.youtubeUrl && (
        <AnimatedSection>
          <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-8">
              Video
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden bg-tag-bg">
              <iframe
                src={project.youtubeUrl.replace("watch?v=", "embed/")}
                title={`${project.title} — video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* ── Next project ──────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">
            Next Project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group inline-block"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight group-hover:opacity-60 transition-opacity">
              {nextProject.title} →
            </h2>
          </Link>
        </section>
      </AnimatedSection>
    </div>
  );
}
