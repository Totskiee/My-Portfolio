import { Link } from "react-router-dom";

export default function AboutPreviewSection() {
    return (
        <section className="max-w-3xl mx-auto text-center">
          <div className="border border-white rounded-xl p-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-8 h-px bg-mint" />
                <p className="uppercase tracking-widest text-xs text-mint font-medium">About</p>
                <span className="w-8 h-px bg-mint" />
            </div>
            <p className="text-white leading-relaxed">
                I'm a student currently learning web development, building my skills in
                JavaScript, HTML, CSS, and Tailwind — with some background in Java, C#, and C++.
            </p>
            <Link
                to="/about"
                className="inline-block mt-6 text-mint text-sm hover:underline"
            >
                More about me →
            </Link>
            </div>
        </section>
    );
}