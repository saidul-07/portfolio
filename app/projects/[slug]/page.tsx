import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 animate-fade-in-slide">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light bg-brand-blue/5 border border-brand-blue/20 px-2 py-0.5 rounded">
          {project.type}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="text-lg text-muted">
          Integrated Mobile Application for DUET Services
        </p>
      </div>

      <div className="border-t border-border pt-6 space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Overview</h2>
          <p className="text-muted leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-muted bg-muted-background border border-border px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-3 border-t border-border pt-6">
          <h2 className="text-xl font-bold text-foreground">Project Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
            >
              View Repository
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

