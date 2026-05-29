"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Cover image */}
        <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-tag-bg mb-5">
          {project.coverImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 transition-transform duration-500 group-hover:scale-105" />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end p-6">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-background bg-foreground/80 px-4 py-2 rounded-full">
              View Project →
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-muted bg-tag-bg px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="text-base font-medium text-foreground group-hover:text-muted transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-muted mt-0.5">{project.role}</p>
      </Link>
    </motion.article>
  );
}
