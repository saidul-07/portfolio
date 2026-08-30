import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          My Work
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          A selection of academic and personal work built while learning and exploring different areas of computer science.
        </p>
      </div>

      <div className="mt-10">
        {/* Render MyDUET as a polished Featured Project Card */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 relative overflow-hidden group flex flex-col md:flex-row gap-8 items-start md:items-center max-w-4xl"
          >
            {/* Top-right decorative accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -z-10 group-hover:bg-brand-blue/10 transition-colors" />

            {/* Typography / Graphic visual block representing 'MD' or standard code icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-muted-background text-brand-blue dark:text-brand-blue-light transition-colors group-hover:bg-brand-blue/10">
              <Code2 className="h-8 w-8" />
            </div>

            {/* Project Details */}
            <div className="flex-grow space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light bg-brand-blue/5 border border-brand-blue/20 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground transition-colors group-hover:text-brand-blue">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-muted bg-muted-background border border-border px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue dark:text-brand-blue-light hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue cursor-pointer"
                >
                  Read Case Study
                </Link>
                <span className="text-border text-xs hidden sm:inline">|</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand-blue transition-colors focus-visible:outline-2 focus-visible:outline-brand-blue cursor-pointer group/link"
                >
                  View on GitHub
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

