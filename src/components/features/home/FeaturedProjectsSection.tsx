import { Link } from "react-router-dom";
import { projects } from "@/lib/projects-data";
import ProjectCard from "@/components/features/projects/ProjectCard";

export default function FeaturedProjectsSection() {
  const featured = projects.slice(0, 2);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-white" />
        <p className="uppercase tracking-widest text-xs text-white font-medium">Featured Work</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/projects" className="text-mint text-sm hover:underline">
          View all projects →
        </Link>
      </div>
    </section>
  );
}