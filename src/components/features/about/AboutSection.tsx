import profilePic from "@/assets/profile.png";

export default function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

        {/* Profile card */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-mint/25 blur-2xl rounded-full scale-90" />

           <div className="relative w-48 h-48 rounded-full border-4 border-mint bg-surface overflow-hidden">
              <img
                src={profilePic}
                alt="Jerniel Jao"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-5 font-display text-lg font-semibold text-text">Jerniel Jao</p>
          <p className="text-muted text-sm">Aspiring Web Developer</p>
        </div>

        {/* Text content */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-mint" />
            <p className="uppercase tracking-widest text-xs text-mint font-medium">About</p>
          </div>
          <h1 className="font-display text-3xl font-semibold text-text mb-6">About Me</h1>
          <p className="text-muted leading-relaxed">
            Hi, I'm Jerniel — a student currently learning web development. I'm building
            my skills in JavaScript, HTML, CSS, and Tailwind, with some background in
            Java, C#, and C++. I enjoy figuring out how things work by building small
            projects, and I'm always looking for ways to improve as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}