import Link from "next/link";

const socialLinks = [
  { label: "Behance", href: "#" },   // Replace with your real URLs
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Email", href: "mailto:your@email.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-medium">Kunj Vania</p>
          <p className="text-sm text-muted mt-1">
            UI/UX &amp; Interaction Designer
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-6">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted">© {year} Kunj Vania</p>
      </div>
    </footer>
  );
}
