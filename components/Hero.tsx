"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// Bezier curve typed as a 4-tuple so Framer Motion's Transition type is satisfied
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADLINE_WORDS = ["Design", "that", "moves", "people."];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 70, rotateX: -20 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease: EASE },
  },
};

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-28">
      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs tracking-[0.2em] uppercase text-muted mb-10"
        >
          Kunj Vania — UI/UX &amp; Interaction Design
        </motion.p>

        {/* Staggered headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="font-display font-medium leading-[1.0] tracking-tight text-[clamp(3rem,9vw,8rem)] mb-10"
          style={{ perspective: 1000 }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.2em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.85)}
          initial="hidden"
          animate="show"
          className="text-base md:text-lg text-muted leading-relaxed max-w-lg mb-12"
        >
          Crafting digital experiences that connect, communicate, and create
          lasting impressions — from research to pixel-perfect delivery.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(1.05)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-75 transition-opacity"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-border text-foreground text-sm font-medium rounded-full hover:bg-tag-bg transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-muted/40"
        />
      </motion.div>
    </section>
  );
}
