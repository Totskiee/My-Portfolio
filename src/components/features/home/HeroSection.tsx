import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import profilePic from "@/assets/profile.png";

export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10 text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-8 h-px bg-mint" />
        <p className="uppercase tracking-widest text-xs text-mint font-medium">Welcome</p>
        <span className="w-8 h-px bg-mint" />
      </div>

      <div className="w-40 h-40 mx-auto rounded-full border-4 border-white overflow-hidden mb-6">
        <img
          src={profilePic}
          alt="Jerniel Jao"
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
        I'm Jerniel.
      </h4>

      <p className="text-white text-lg max-w-xl mx-auto">
        A student learning to build things for the web — one project at a time.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Link to="/projects"><Button>View My Work</Button></Link>
        <Link to="/contact"><Button variant="outline">Contact Me</Button></Link>
      </div>
    </section>
  );
}