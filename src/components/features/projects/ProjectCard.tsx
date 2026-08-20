import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { type Project } from "@/lib/projects-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-white text-sm leading-relaxed">{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs border border-white text-white px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2">
        <Button variant="outline" className="w-full">View Project →</Button>
      </a>
    </Card>
  );
}