import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Hi, I'm Jerniel 👋
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        An IT student learning web development, building projects to grow my skills.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/projects">
          <Button>View My Work</Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline">Contact Me</Button>
        </Link>
      </div>
    </section>
  );
}