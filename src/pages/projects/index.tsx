import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/features/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}