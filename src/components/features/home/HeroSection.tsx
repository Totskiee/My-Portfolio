import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-28 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-8 h-px bg-mint" />
                <p className="uppercase tracking-widest text-xs text-mint font-medium">Welcome</p>
                <span className="w-8 h-px bg-mint" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white">
                I'm Jerniel.
            </h1>
            <p className="mt-5 text-white text-lg max-w-xl mx-auto">
                A student learning to build things for the web — one project at a time.
            </p>
            <div className="mt-10 flex justify-center gap-4">
                <Link to="/projects"><Button>View My Work</Button></Link>
                <Link to="/contact"><Button variant="outline">Contact Me</Button></Link>
            </div>
        </section>
    );
}