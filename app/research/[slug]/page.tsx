import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, GraduationCap, MapPin, Code2, ArrowRight } from "lucide-react";
import { riceResearchCaseStudy } from "@/data/research";

export function generateStaticParams() {
  return [
    { slug: "rice-panicle-detection" },
    { slug: "rice-detection" },
  ];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== "rice-panicle-detection" && slug !== "rice-detection") {
    return {
      title: "Research Not Found",
    };
  }

  const canonicalPath = "/research/rice-panicle-detection";
  const title = "Rice Panicle Detection & Growth-Stage Recognition | Research Case Study";
  const description =
    "Undergraduate computer vision research exploring rice panicle detection and growth-stage recognition using a 4,500-image aerial dataset and lightweight vision architectures under DUET CSE supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sayedul.me${canonicalPath}`,
      type: "article",
      siteName: "Md Sayedul Islam Portfolio",
      images: [
        {
          url: "/profile.jpg",
          width: 1024,
          height: 1024,
          alt: "Md Sayedul Islam - Research Case Study",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile.jpg"],
    },
  };
}

export default async function ResearchCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== "rice-panicle-detection" && slug !== "rice-detection") {
    notFound();
  }

  const project = riceResearchCaseStudy;

  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 animate-fade-in-slide">
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
          href="/#research"
          className="hover:text-brand transition-colors cursor-pointer"
        >
          Research
        </Link>
        <span className="text-border">&rsaquo;</span>
        <span className="text-foreground truncate max-w-xs sm:max-w-md">
          {project.title}
        </span>
      </nav>

      {/* Section 1: Research Overview Header */}
      <header className="space-y-4 border-b border-border/80 pb-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-brand bg-brand-subtle border border-brand/20">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
          </span>
          <span className="text-xs font-medium text-secondary bg-surface border border-border px-3 py-1 rounded-full">
            Computer Vision &bull; Agriculture
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-secondary leading-relaxed font-medium">
          {project.subtitle}
        </p>

        {/* Academic Supervision & Institution Snapshot Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
          <div className="rounded-xl border border-border/80 bg-surface/60 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
              <GraduationCap className="h-4 w-4 text-brand" />
              <span>Academic Supervisor</span>
            </div>
            <p className="text-sm font-bold text-foreground">
              {project.supervisor.name}
            </p>
            <p className="text-xs text-secondary">
              {project.supervisor.department}, DUET
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface/60 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
              <MapPin className="h-4 w-4 text-brand" />
              <span>Host Institution</span>
            </div>
            <p className="text-sm font-bold text-foreground">
              {project.supervisor.institution}
            </p>
            <p className="text-xs text-secondary">
              {project.supervisor.location}
            </p>
          </div>
        </div>

        {/* Concise Executive Summary */}
        <div className="rounded-xl border border-brand/20 bg-brand-subtle/30 p-5 mt-4 text-sm text-secondary leading-relaxed">
          <strong className="text-foreground font-semibold block mb-1">Research Overview:</strong>
          {project.overview}
        </div>
      </header>

      {/* Section 2: Research Motivation */}
      <section className="space-y-5">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Context &amp; Background</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Research Motivation
          </h2>
        </div>

        <p className="text-sm sm:text-base text-secondary leading-relaxed">
          {project.motivation.context}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Challenges */}
          <div className="rounded-xl border border-border/80 bg-surface p-5 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Field-Level Challenges
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-secondary leading-relaxed">
              {project.motivation.challenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand font-bold text-xs mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intended Benefits (Framed as Motivation) */}
          <div className="rounded-xl border border-border/80 bg-surface p-5 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Intended Research Value
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-secondary leading-relaxed">
              {project.motivation.intendedBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand font-bold text-xs mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Research Objectives */}
      <section className="space-y-4 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Research Scope</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Core Objectives
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-1">
          {project.objectives.map((objective, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl border border-border/70 bg-surface/50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 border border-brand/20 text-xs font-bold text-brand mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                {objective}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Dataset & Visual Breakdown */}
      <section className="space-y-6 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Data Foundation</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Research Dataset &amp; Distribution
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            Structured balance across critical physiological milestones of rice cultivation.
          </p>
        </div>

        {/* Dataset Aggregate Banner Card */}
        <div className="rounded-2xl border border-brand/30 bg-brand-subtle/30 p-6 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-brand/20 pb-3">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-brand">
                Total Acquired Images
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-foreground">
                {project.dataset.totalImages.toLocaleString()}{" "}
                <span className="text-sm font-semibold text-secondary">Field Photographs</span>
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface border border-border text-foreground">
              3 Growth Stages &bull; 1,500 Images Each
            </span>
          </div>

          {/* Accessible Segmented Distribution Bar */}
          <div className="space-y-1.5 pt-1" aria-label="Dataset distribution visualization">
            <div className="flex justify-between text-xs font-semibold text-secondary">
              <span>Stage Distribution</span>
              <span>100% Balanced (Equal Splits)</span>
            </div>
            <div
              role="meter"
              aria-valuenow={4500}
              aria-valuemin={0}
              aria-valuemax={4500}
              aria-label="Dataset distribution: 1,500 images per stage across Booting, Heading, and Maturity"
              className="h-4 w-full rounded-full overflow-hidden flex bg-border/60 p-0.5 gap-0.5"
            >
              <div
                className="h-full bg-emerald-600 rounded-l-full transition-all"
                style={{ width: "33.333%" }}
                title="Booting: 1,500 images (33.3%)"
              />
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: "33.334%" }}
                title="Heading: 1,500 images (33.3%)"
              />
              <div
                className="h-full bg-amber-600 rounded-r-full transition-all"
                style={{ width: "33.333%" }}
                title="Maturity: 1,500 images (33.3%)"
              />
            </div>
            <div className="flex flex-wrap justify-between text-[11px] font-medium text-muted pt-1">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Booting: 1,500 (33.3%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Heading: 1,500 (33.3%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-600" />
                Maturity: 1,500 (33.3%)
              </span>
            </div>
          </div>
        </div>

        {/* 3 Growth Stage Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.dataset.distribution.map((stage) => (
            <div
              key={stage.name}
              className="rounded-xl border border-border/80 bg-surface p-5 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">
                    {stage.name}
                  </h3>
                  <span className="text-xs font-extrabold text-brand bg-brand-subtle px-2 py-0.5 rounded border border-brand/20">
                    {stage.count.toLocaleString()} img
                  </span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="text-[11px] font-semibold text-muted border-t border-border/50 pt-2 flex justify-between">
                <span>Dataset Proportion</span>
                <span className="text-foreground font-bold">{stage.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Data Collection and Annotation */}
      <section className="space-y-4 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Methodology</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Data Collection &amp; Annotation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-xl border border-border/80 bg-surface p-5 space-y-2.5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              Image Acquisition
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {project.dataset.collectionMethod}
            </p>
            <div className="pt-2 text-xs text-muted flex items-center gap-1.5">
              <span className="font-semibold text-foreground">Perspective:</span> Drone-style aerial viewpoints to simulate automated field surveying.
            </div>
          </div>

          <div className="rounded-xl border border-border/80 bg-surface p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                CVAT Annotation
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-full">
                {project.dataset.annotationStatus}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Using the open-source <strong>{project.dataset.annotationTool}</strong> to generate high-quality bounding-box and stage annotations across all collected field imagery.
            </p>
            <div className="pt-2 text-xs text-muted flex items-center gap-1.5">
              <span className="font-semibold text-foreground">Goal:</span> Consistent multi-class ground-truth labels for panicle instances and stage recognition.
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Current Workflow */}
      <section className="space-y-5 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Pipeline</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Current Research Workflow
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            End-to-end pathway from field data collection to eventual mobile-edge exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.workflow.map((step) => {
            const isCompleted = step.status === "Completed";
            const isInProgress = step.status === "In Progress";

            return (
              <div
                key={step.step}
                className="rounded-xl border border-border/80 bg-surface p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-2">
                    <span className="text-xs font-bold text-muted">
                      Phase {step.step}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isCompleted
                          ? "text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800"
                          : isInProgress
                          ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800"
                          : "text-secondary bg-surface border border-border"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 7: Efficiency and Deployment Direction */}
      <section className="space-y-4 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Edge &amp; Lightweight AI</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Efficiency &amp; Deployment Direction
          </h2>
        </div>

        <div className="rounded-2xl border border-border/80 bg-surface p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-foreground">
              Focus on Resource-Constrained Environments
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {project.efficiencyAndDeployment.efficiencyFocus}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
            <div className="space-y-1 text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
                Target Hardware Profile:
              </span>
              <p className="text-secondary leading-relaxed">
                {project.efficiencyAndDeployment.targetHardware}
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider text-[11px]">
                Potential Mobile Direction:
              </span>
              <p className="text-secondary leading-relaxed">
                {project.efficiencyAndDeployment.potentialDeployment}
              </p>
            </div>
          </div>

          {/* Academic Transparency Disclaimer */}
          <div className="rounded-lg bg-background p-3.5 border border-border/80 text-xs text-muted leading-relaxed italic">
            {project.efficiencyAndDeployment.disclaimer}
          </div>
        </div>
      </section>

      {/* Section 8: Current Progress and Next Steps */}
      <section className="space-y-4 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Status Breakdown</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Current Progress &amp; Next Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Completed Work */}
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/15 p-5 space-y-3">
            <div className="flex items-center gap-2 border-b border-emerald-200/80 dark:border-emerald-900/50 pb-2.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Completed Work
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-secondary leading-relaxed">
              {project.progress.completed.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&check;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ongoing Work */}
          <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/15 p-5 space-y-3">
            <div className="flex items-center gap-2 border-b border-blue-200/80 dark:border-blue-900/50 pb-2.5">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                In Progress
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-secondary leading-relaxed">
              {project.progress.ongoing.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Work */}
          <div className="rounded-xl border border-border/80 bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2 border-b border-border/60 pb-2.5">
              <span className="h-2 w-2 rounded-full bg-muted" />
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted">
                Planned Future Steps
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-secondary leading-relaxed">
              {project.progress.future.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-muted font-bold">&rarr;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 9: Academic Supervision & Context */}
      <section className="space-y-4 border-t border-border/60 pt-8">
        <div className="space-y-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand">Academic Context</span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Supervision &amp; Department Affiliation
          </h2>
        </div>

        <div className="rounded-2xl border border-border/80 bg-surface p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {project.supervisor.name}
              </h3>
              <p className="text-xs font-semibold text-brand">
                {project.supervisor.designation}, {project.supervisor.department}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-surface border border-border px-3 py-1.5 rounded-full w-fit">
              <GraduationCap className="h-3.5 w-3.5 text-brand" />
              Faculty Supervisor
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-secondary">
            <div>
              <span className="font-semibold text-foreground">University:</span> {project.supervisor.institution}
            </div>
            <div>
              <span className="font-semibold text-foreground">Location:</span> {project.supervisor.location}
            </div>
            <div>
              <span className="font-semibold text-foreground">Student Researcher:</span> Md Sayedul Islam (B.Sc. in CSE, 3rd Year)
            </div>
            <div>
              <span className="font-semibold text-foreground">Academic Focus:</span> Computer Vision &amp; Deep Learning
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Navigation Footer */}
      <footer className="border-t border-border/80 pt-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand hover:text-brand-hover transition-colors group cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Research Section
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-brand transition-colors bg-surface border border-border px-3.5 py-2 rounded-lg cursor-pointer"
            >
              <Code2 className="h-3.5 w-3.5" />
              View Academic Projects
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand hover:bg-brand-hover transition-colors px-3.5 py-2 rounded-lg cursor-pointer shadow-none"
            >
              Return to Homepage
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
