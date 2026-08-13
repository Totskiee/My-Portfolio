import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { type Project } from "@/lib/projects-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2">
        <Button className="w-full">View Project</Button>
      </a>
    </Card>
  );
}