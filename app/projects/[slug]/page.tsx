import type { Metadata } from "next";
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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const canonicalPath = `/projects/${slug}`;
  const title = `${project.title} | Projects`;
  const description = project.subtitle || project.description;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${project.title} | Md Sayedul Islam`,
      description,
      url: `https://www.sayedul.me${canonicalPath}`,
      type: "article",
      siteName: "Md Sayedul Islam Portfolio",
      images: [
        {
          url: "/profile.jpg",
          width: 1024,
          height: 1024,
          alt: `${project.title} - Md Sayedul Islam`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Md Sayedul Islam`,
      description,
      images: ["/profile.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8 animate-fade-in-slide">
      {/* Top Breadcrumb & Return Navigation */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-secondary">
        <Link
          href="/"
          className="hover:text-brand transition-colors cursor-pointer"
        >
          Home
        </Link>
        <span className="text-border">&rsaquo;</span>
        <Link
          href="/#projects"
          className="hover:text-brand transition-colors cursor-pointer"
        >
          Projects
        </Link>
        <span className="text-border">&rsaquo;</span>
        <span className="text-foreground truncate max-w-xs sm:max-w-md">
          {project.title}
        </span>
      </nav>

      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-colors group cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <div className="space-y-3">
        <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-subtle px-1.5 py-0.5 rounded">
          {project.type}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        {project.subtitle && (
          <p className="text-lg text-secondary">
            {project.subtitle}
          </p>
        )}
      </div>

      <div className="border-t border-border pt-6 space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Overview</h2>
          <p className="text-secondary leading-relaxed">
            {project.description}
          </p>
        </section>

        {project.technologies && project.technologies.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-secondary bg-background border border-border px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.githubUrl && (
          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="text-xl font-bold text-foreground">Project Links</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors duration-200 cursor-pointer"
              >
                View Repository
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        )}

        {/* Cross-section return links */}
        <section className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-secondary">
            <Link href="/#research" className="hover:text-foreground transition-colors cursor-pointer">
              Research
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/#skills" className="hover:text-foreground transition-colors cursor-pointer">
              Skills
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/#education" className="hover:text-foreground transition-colors cursor-pointer">
              Education
            </Link>
            <span className="text-border">&bull;</span>
            <Link href="/#contact" className="hover:text-foreground transition-colors cursor-pointer">
              Contact
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}

