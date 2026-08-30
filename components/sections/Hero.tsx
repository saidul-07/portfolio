import { Mail, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
      width="24"
      height="24"
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
      className="relative flex min-h-[65vh] flex-col justify-center py-16 md:py-24 border-b border-border overflow-hidden scroll-mt-16"
    >
      {/* Subtle Dot Grid Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:20px_20px] opacity-35" />

      {/* Decorative subtle blue dot/accent */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl -z-10 pointer-events-none" />

      {/* Left accent bar */}
      <div className="absolute left-0 top-1/3 h-16 w-[3px] bg-brand-blue rounded-r hidden md:block" />

      <div className="flex flex-col items-start text-left max-w-3xl space-y-6 animate-fade-in-slide">
        {/* Academic Status Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-xs font-medium text-brand-blue dark:text-brand-blue-light">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Currently Learning &amp; Exploring AI/ML
        </div>

        {/* Identity & Sub-headings */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {personalInfo.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg sm:text-xl font-medium text-muted">
            <span>CSE Student</span>
            <span className="text-border text-xs hidden sm:inline">&bull;</span>
            <span className="text-brand-blue dark:text-brand-blue-light">AI/ML &amp; Computer Vision</span>
          </div>
        </div>

        {/* Core Tagline / Mindset */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-blue/90 dark:text-brand-blue-light/90">
          Learning &bull; Building &bull; Exploring
        </p>

        {/* Concise Description Statement */}
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Computer Science and Engineering student at DUET exploring Artificial Intelligence, Machine Learning, Computer Vision, and software development through learning and hands-on projects.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue shadow-sm cursor-pointer w-full sm:w-auto text-sm"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-border bg-transparent text-foreground font-medium hover:bg-muted-background transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue cursor-pointer w-full sm:w-auto text-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons (Secondary CTAs) */}
        <div className="flex items-center gap-5 pt-4 text-muted border-t border-border/50 w-full sm:w-auto">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-1"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-foreground transition-colors p-1"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

