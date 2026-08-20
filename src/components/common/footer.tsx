export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-white">
      <div className="flex flex-col items-center gap-2 text-sm mb-4">
        <p>Cebu City, Philippines</p>
        <a href="tel:+639662199057" className="hover:text-mint transition-colors">
          +63 966 219 9057
        </a>
        <a href="https://www.linkedin.com/in/jao-jerniel-maranga-984729379/" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
          LinkedIn
        </a>
      </div>
      <p className="text-xs text-muted">
        © {new Date().getFullYear()} Jerniel Jao. All rights reserved.
      </p>
    </footer>
  );
}