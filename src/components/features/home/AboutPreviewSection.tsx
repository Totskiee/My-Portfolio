import { Link } from "react-router-dom";

export default function AboutPreviewSection() {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-8">
      </div>

      <div className="border border-white rounded-xl p-8 max-w-xl mx-auto">
        <p className="text-white text-lg italic leading-relaxed">
          "Still learning, still building — every bug is just a lesson in disguise."
        </p>
      </div>

      <Link
        to="/about"
        className="inline-block mt-6 text-mint text-sm hover:underline"
      >
        More about me →
      </Link>
    </section>
  );
}