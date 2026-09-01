import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 2.5H4a2 2 0 0 0-2 2v13.5a2 2 0 0 0 2 2z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <FolderIcon className="h-3.5 w-3.5" />
            Featured Work &amp; Academic Projects
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Academic &amp; Personal Projects
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            A selection of software applications and mobile platforms built while exploring computer science principles, utility features, and modern software architectures.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6 pt-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-border/80 bg-surface p-6 transition-all duration-200 hover:shadow-md hover:border-brand/40 shadow-2xs group relative flex flex-col md:flex-row gap-6 items-start md:items-center w-full"
            >
              {/* Visual Icon Box */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-brand shadow-2xs group-hover:border-brand/50 transition-colors">
                <Code2 className="h-6 w-6" />
              </div>

              {/* Details Content */}
              <div className="flex-grow space-y-3 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                      {project.type}
                    </span>
                  </div>
                  
                  {project.status && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-subtle border border-brand/20 px-2.5 py-0.5 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-brand">
                  {project.title}
                </h3>

                <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold text-brand bg-brand-subtle/80 border border-brand/20 rounded-lg shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-xs font-bold text-brand hover:text-brand-hover hover:underline transition-all duration-200 cursor-pointer"
                  >
                    Read Case Study
                  </Link>
                  <span className="text-border text-xs hidden sm:inline">|</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-brand transition-colors duration-200 cursor-pointer group/link"
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
