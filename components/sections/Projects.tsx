import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Heading and description */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            Projects
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">
            A selection of academic and personal work built while learning and exploring different areas of computer science.
          </p>
        </div>

        {/* Right Column: Projects list */}
        <div className="md:col-span-8 space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-md border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent shadow-none group relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full"
            >
              {/* Visual graphic block */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-border bg-background text-secondary group-hover:text-accent transition-colors duration-200">
                <Code2 className="h-6 w-6" />
              </div>

              {/* Details */}
              <div className="flex-grow space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    {project.type}
                  </span>
                  {project.status && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-subtle px-1.5 py-0.5 rounded">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-secondary bg-background border border-border px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-hover hover:underline transition-all duration-200 cursor-pointer"
                  >
                    Read Case Study
                  </Link>
                  <span className="text-border text-xs hidden sm:inline">|</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-accent transition-colors duration-200 cursor-pointer group/link"
                  >
                    View on GitHub
                    <ExternalLink className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
