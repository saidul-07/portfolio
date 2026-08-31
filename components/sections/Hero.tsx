import { Mail, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center py-20 md:py-32 border-b border-border scroll-mt-16"
    >
      <div className="max-w-3xl space-y-6 animate-fade-in-slide">
        {/* Eyebrow Label */}
        <span className="text-xs font-bold tracking-widest uppercase text-accent">
          CSE Student
        </span>

        {/* Name Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-none">
          {personalInfo.name}
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
          Computer Science & Engineering student at Dhaka University of Engineering & Technology, interested in AI/ML, computer vision, software development, and continuous learning.
        </p>

        {/* Tagline */}
        <p className="text-sm font-semibold tracking-wider text-muted">
          Learning &bull; Building &bull; Exploring
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-10 px-5 rounded bg-accent text-white font-medium hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent text-sm w-full sm:w-auto cursor-pointer"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded border border-border bg-transparent text-foreground font-medium hover:bg-surface transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent text-sm w-full sm:w-auto cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 pt-4 text-secondary">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200 p-1"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200 p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-accent transition-colors duration-200 p-1"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
