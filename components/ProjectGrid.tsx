import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3;
}

export default function ProjectGrid({
  projects,
  columns = 2,
}: ProjectGridProps) {
  const gridClass =
    columns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      : "grid grid-cols-1 sm:grid-cols-2 gap-8";

  return (
    <div className={gridClass}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
