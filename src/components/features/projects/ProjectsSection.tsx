import { projects } from "@/lib/projects-data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-mint" />
        <p className="uppercase tracking-widest text-xs text-mint font-medium">Projects</p>
      </div>
      <h1 className="font-display text-3xl font-semibold text-text mb-8">Things I've Built</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}