import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/button";

const SERVICE_ID = "service_or6lwae";
const TEMPLATE_ID = "template_4y6yxkc";
const PUBLIC_KEY = "30SviLIXak6c6fCWF";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("sent");
      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-20 relative">
      {/* Toast */}
      {showToast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-lg border shadow-lg animate-toast-in ${
            status === "sent"
              ? "bg-surface border-black text-text"
              : "bg-surface border-red-400 text-text"
          }`}
        >
          <span className={`w-2.5 h-2.5 rounded-full ${status === "sent" ? "bg-mint" : "bg-red-400"}`} />
          <p className="text-sm">
            {status === "sent"
              ? "Message sent — thanks for reaching out!"
              : "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="w-8 h-px bg-mint" />
        <p className="uppercase tracking-widest text-xs text-mint font-medium">Contact</p>
        <span className="w-8 h-px bg-mint" />
      </div>
      <h1 className="font-display text-3xl font-semibold text-text mb-4 text-center">
        Let's Talk
      </h1>
      <p className="text-muted mb-10 text-center">
        Open to opportunities and always happy to connect.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-12">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-mint outline-none transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-mint outline-none transition-colors"
        />
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
          className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-mint outline-none transition-colors"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="bg-surface border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted focus:border-mint outline-none transition-colors resize-none"
        />

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <div className="flex justify-center gap-6 text-sm">
        <a href="https://github.com/Totskiee" target="_blank" rel="noopener noreferrer" className="text-text hover:text-mint transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/jao-jerniel-maranga-984729379/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-mint transition-colors">
          LinkedIn
        </a>
        <a href="mailto:jerneiljao@gmail.com" className="text-text hover:text-mint transition-colors">
          Email
        </a>
      </div>
    </section>
  );
}