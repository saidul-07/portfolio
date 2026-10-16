import Link from "next/link";
import { ArrowRight, BookOpen, Code2, FileText } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";

export function Hero() {
  const tags = [
    "#ComputerVision",
    "#ObjectDetection",
    "#EfficientAI",
    "#EdgeAI",
    "#DeepLearning"
  ];

  return (
    <section id="home" className="py-6 sm:py-8 lg:py-12 border-b border-border animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Title, Intro, Tags, Research Preview, Metrics & Actions */}
        <div className="lg:col-span-7 space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-semibold text-brand">
            Undergraduate Researcher &bull; B.Sc. in CSE @ DUET
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Computer Vision <span className="text-brand">Researcher in Training</span>
            </h1>
            <p className="text-sm sm:text-base font-semibold text-foreground/85 leading-snug">
              Exploring efficient deep learning and computer vision for practical AI systems, especially on resource-constrained devices.
            </p>
          </div>

          {/* Intro Paragraph */}
          <p className="text-secondary text-xs sm:text-sm leading-relaxed max-w-2xl">
            I am a Computer Science &amp; Engineering undergraduate at Dhaka University of Engineering &amp; Technology (DUET). My work focuses on computer vision, object detection, and lightweight deep-learning models. Currently, I am conducting research on rice panicle detection and growth-stage recognition across a 4,500-image dataset, aiming toward practical AI deployment on edge and mobile hardware.
          </p>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-secondary bg-surface border border-border px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Ongoing Research Feature Preview */}
          <Link
            href="/research/rice-panicle-detection"
            className="block rounded-xl border border-brand/30 bg-brand-subtle/30 hover:bg-brand-subtle/60 p-4 transition-all duration-200 group text-left cursor-pointer"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand/15 pb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                  Ongoing Research Initiative
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:underline">
                Read Research Case Study
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>

            <h2 className="text-sm sm:text-base font-bold text-foreground mt-2.5 group-hover:text-brand transition-colors">
              Rice Panicle Detection and Growth-Stage Recognition
            </h2>
            <p className="text-xs text-secondary leading-relaxed mt-1">
              Exploring efficient vision models for edge devices across 3 key physiological stages.
            </p>

            <div className="flex flex-wrap gap-2 pt-2.5">
              <span className="text-[10px] font-semibold text-secondary bg-surface border border-border px-2.5 py-0.5 rounded-md">
                4,500 Images (1,500/stage)
              </span>
              <span className="text-[10px] font-semibold text-secondary bg-surface border border-border px-2.5 py-0.5 rounded-md">
                Booting, Heading &amp; Maturity
              </span>
              <span className="text-[10px] font-semibold text-brand bg-brand-subtle border border-brand/20 px-2.5 py-0.5 rounded-md">
                CVAT Annotation In Progress
              </span>
            </div>
          </Link>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1">
            <div className="border border-border bg-surface p-2.5 sm:p-3.5 rounded-lg flex flex-col justify-between shadow-none">
              <span className="text-lg sm:text-2xl font-extrabold text-brand">3.62</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-0.5 sm:mt-1">B.Sc. CGPA (DUET)</span>
            </div>
            <div className="border border-border bg-surface p-2.5 sm:p-3.5 rounded-lg flex flex-col justify-between shadow-none">
              <span className="text-lg sm:text-2xl font-extrabold text-brand">3.82</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-0.5 sm:mt-1">Diploma CGPA (DPI)</span>
            </div>
            <div className="border border-border bg-surface p-2.5 sm:p-3.5 rounded-lg flex flex-col justify-between shadow-none">
              <span className="text-lg sm:text-2xl font-extrabold text-brand">2027</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-0.5 sm:mt-1">Expected Grad</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3.5 pt-2 items-center">
            <a
              href="#research"
              className="inline-flex items-center justify-center h-10 px-5 rounded bg-brand text-white font-semibold hover:bg-brand-hover transition-colors duration-200 text-sm cursor-pointer shadow-none gap-2"
            >
              <BookOpen className="h-4 w-4" />
              View Research
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center h-10 px-5 rounded border border-border bg-transparent text-foreground font-semibold hover:bg-surface transition-colors duration-200 text-sm cursor-pointer gap-2"
            >
              <Code2 className="h-4 w-4" />
              View Projects
            </a>

            <a
              href="/Md_Sayedul_Islam_CV.pdf"
              download="Md_Sayedul_Islam_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 rounded border border-brand/30 bg-brand-subtle/60 text-brand font-semibold hover:bg-brand hover:text-white transition-all duration-200 text-sm cursor-pointer gap-2"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-4 rounded border border-transparent text-secondary hover:text-foreground hover:bg-surface transition-colors duration-200 text-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Floating Profile Card */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-border bg-surface p-6 rounded-xl shadow-2xs flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
            {/* Profile Photo + Badge */}
            <div className="relative mb-1">
              <div className="w-32 h-32 rounded-full border-2 border-brand/20 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Md Sayedul Islam"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Verified Badge */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-brand text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-xs whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5"><polyline points="20 6 9 17 4 12" /></svg>
                {"DUET CSE Researcher"}
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">
                {personalInfo.name}
              </h3>
              <p className="text-[10px] font-bold tracking-wider text-brand uppercase">
                B.Sc. CSE Student (2023 – 2027)
              </p>
            </div>

            {/* Stats Table details */}
            <div className="w-full border-t border-border/80 pt-3.5 text-left space-y-2.5 text-xs text-secondary">
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">Institution:</span>
                <span className="font-semibold text-foreground">DUET, Bangladesh</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">Current Term:</span>
                <span className="font-semibold text-foreground">3rd Year, 2nd Semester</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">DUET CGPA:</span>
                <span className="font-bold text-brand">3.62 / 4.00</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">Expected Grad:</span>
                <span className="font-semibold text-foreground">2027</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">Research Focus:</span>
                <span className="font-semibold text-foreground">Computer Vision &amp; Edge AI</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-muted">Leadership:</span>
                <span className="font-semibold text-foreground text-right">CS Society &bull; Math Club</span>
              </div>
            </div>

            {/* Profile CTA Buttons */}
            <div className="w-full flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-9 px-3 rounded bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors duration-200 cursor-pointer"
              >
                GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-9 px-3 rounded border border-border bg-transparent text-foreground text-xs font-semibold hover:bg-surface transition-colors duration-200 cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
