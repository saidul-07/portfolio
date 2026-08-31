import { ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Hero() {
  const tags = [
    "#MachineLearning",
    "#DeepLearning",
    "#ComputerVision",
    "#SoftwareDevelopment",
    "#ContinuousLearning"
  ];

  return (
    <section
      id="home"
      className="py-16 md:py-24 border-b border-border scroll-mt-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Title, Intro, Tags, Metrics & Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent-subtle text-xs font-semibold text-accent">
            CSE Student @ DUET &bull; Open for Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Exploring <span className="text-accent">AI, Computer Vision &amp; Software</span> for Real-World Solutions
          </h1>

          {/* Intro Paragraph */}
          <p className="text-secondary text-base leading-relaxed max-w-2xl">
            Hi! I'm <strong className="text-foreground">Md Sayedul Islam</strong>, a Computer Science &amp; Engineering student at Dhaka University of Engineering &amp; Technology (DUET) interested in AI/ML, computer vision, software development, and continuous learning.
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

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent">3.68</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">B.Sc. CGPA (DUET)</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent">3.82</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">Diploma CGPA (DPI)</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-accent">2027</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">Expected Grad</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-10 px-5 rounded bg-accent text-white font-semibold hover:bg-accent-hover transition-colors duration-200 text-sm cursor-pointer shadow-none"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-5 rounded border border-border bg-transparent text-foreground font-semibold hover:bg-surface transition-colors duration-200 text-sm cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Floating Profile Card */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-border bg-surface p-6 rounded-md shadow-none flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
            {/* Visual Photo Placeholder Frame */}
            <div className="relative w-48 h-56 rounded border-2 border-accent/20 bg-accent-subtle flex items-center justify-center overflow-hidden">
              <span className="text-4xl font-extrabold text-accent tracking-widest select-none">SI</span>
              
              {/* Verified Badge */}
              <span className="absolute bottom-3 inline-flex items-center gap-1 bg-accent text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Verified Student
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">
                {personalInfo.name}
              </h3>
              <p className="text-[10px] font-bold tracking-wider text-accent uppercase">
                DUET CSE STUDENT (2023 - Present)
              </p>
            </div>

            {/* Stats Table details */}
            <div className="w-full border-t border-border pt-4 text-left space-y-2 text-xs text-secondary">
              <div className="flex justify-between">
                <span className="font-medium text-muted">Department:</span>
                <span className="font-semibold text-foreground">Computer Science &amp; Eng.</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-muted">Institution:</span>
                <span className="font-semibold text-foreground">DUET, Gazipur</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-muted">Math Club:</span>
                <span className="font-semibold text-foreground">Joint Secretary</span>
              </div>
            </div>

            {/* Profile CTA Buttons */}
            <div className="w-full flex gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center h-9 px-3 rounded bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
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

