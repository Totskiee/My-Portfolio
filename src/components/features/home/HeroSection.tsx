import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/button";
import profilePic from "@/assets/profile.png";

function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function HeroSection() {
  const typedText = useTypewriter("Student Developer");

  return (
    <section className="max-w-5xl mx-auto px-6 py-28">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* Photo */}
        <div className="shrink-0 relative group cursor-pointer">
          <div className="absolute inset-0 bg-mint/25 blur-2xl rounded-full scale-90" />
          <div className="relative w-48 h-48 rounded-full border-4 border-white overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src={profilePic}
              alt="Jerniel Jao"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">

          <p className="uppercase tracking-widest text-xs text-mint font-medium mb-6 h-4">
            {typedText}<span className="animate-pulse">|</span>
          </p>

          <h4 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            I'm Jerniel.
          </h4>

          <p className="text-white text-lg max-w-xl">
            A student learning to build things for the web — one project at a time.
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-4">
            <Link to="/projects"><Button>View My Work</Button></Link>
            <Link to="/contact"><Button variant="outline">Contact Me</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}