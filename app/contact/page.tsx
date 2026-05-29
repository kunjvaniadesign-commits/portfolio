import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact — Kunj Vania",
  description: "Get in touch with Kunj Vania.",
};

const links = [
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "Behance", value: "behance.net/kunjvania", href: "#" },
  { label: "LinkedIn", value: "linkedin.com/in/kunjvania", href: "#" },
  { label: "GitHub", value: "github.com/kunjvania", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 py-20 border-b border-border">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
            Let&apos;s work<br />
            <em>together.</em>
          </h1>
          <p className="text-muted leading-relaxed max-w-md text-base md:text-lg">
            I&apos;m open to internships, freelance projects, and collaborations.
            Whether you have a brief or just an idea — I&apos;d love to hear from you.
          </p>
        </section>
      </AnimatedSection>

      {/* ── Links ─────────────────────────────────────────────────── */}
      <AnimatedSection delay={0.1}>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {links.map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                  {label}
                </p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium hover:text-muted transition-colors"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Big email CTA ─────────────────────────────────────────── */}
      <AnimatedSection delay={0.15}>
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <a
            href="mailto:your@email.com"
            className="group inline-block"
          >
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-medium hover:opacity-50 transition-opacity">
              your@email.com →
            </p>
          </a>
        </section>
      </AnimatedSection>
    </div>
  );
}
