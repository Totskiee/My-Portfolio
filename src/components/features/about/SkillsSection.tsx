const skills = [
  "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Java", "C#", "C++", "Figma", "GitHub", "Vercel",
];

export default function SkillsSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-mint" />
        <p className="uppercase tracking-widest text-xs text-mint font-medium">Skills</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs bg-surface border border-border text-text px-3 py-1.5 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}