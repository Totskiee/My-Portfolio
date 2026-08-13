const skills = [
  "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Java", "C#", "C++", "Figma", "GitHub", "Vercel",
];

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
      <p className="text-gray-600 leading-relaxed">
        Hi, I'm Jerniel — a student currently learning web development. I'm building
        my skills in JavaScript, HTML, CSS, and Tailwind, with some background in
        Java, C#, and C++. I enjoy figuring out how things work by building small
        projects, and I'm always looking for ways to improve as a developer.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}