import { Link } from "react-router-dom";
import profilePic from "@/assets/profile.png";

export default function AboutPreviewSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-8 h-px bg-mint" />
        <p className="uppercase tracking-widest text-xs text-mint font-medium">About</p>
        <span className="w-8 h-px bg-mint" />
      </div>

      <div className="w-40 h-40 mx-auto rounded-full border-4 border-white overflow-hidden mb-6">
        <img
          src={profilePic}
          alt="Jerniel Jao"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-white leading-relaxed max-w-xl mx-auto">
        I'm a student currently learning web development, building my skills in
        JavaScript, HTML, CSS, and Tailwind — with some background in Java, C#, and C++.
      </p>
      <Link
        to="/about"
        className="inline-block mt-6 text-mint text-sm hover:underline"
      >
        More about me →
      </Link>
    </section>
  );
}