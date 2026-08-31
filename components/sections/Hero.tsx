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
      className="py-16 md:py-24 border-b border-border scroll-mt-16 animate-fade-in-slide"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Title, Intro, Tags, Metrics & Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-semibold text-brand">
            CSE Student @ DUET &bull; Open for Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Exploring <span className="text-brand">AI, Computer Vision &amp; Software</span> for Real-World Solutions
          </h1>

          {/* Intro Paragraph */}
          <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
            Hi! {"I'm"} <strong className="text-foreground">Md Sayedul Islam</strong>, a Computer Science &amp; Engineering student at Dhaka University of Engineering &amp; Technology (DUET) interested in AI/ML, computer vision, software development, and continuous learning.
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
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between shadow-none">
              <span className="text-xl sm:text-2xl font-extrabold text-brand">3.68</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">B.Sc. CGPA (DUET)</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between shadow-none">
              <span className="text-xl sm:text-2xl font-extrabold text-brand">3.82</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">Diploma CGPA (DPI)</span>
            </div>
            <div className="border border-border bg-surface p-4 rounded-md flex flex-col justify-between shadow-none">
              <span className="text-xl sm:text-2xl font-extrabold text-brand">2027</span>
              <span className="text-[10px] sm:text-xs text-secondary font-medium mt-1">Expected Grad</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-10 px-5 rounded bg-brand text-white font-semibold hover:bg-brand-hover transition-colors duration-200 text-sm cursor-pointer shadow-none"
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
            <div className="relative w-32 h-32 rounded-full border-2 border-brand/20 bg-brand-subtle flex items-center justify-center select-none mb-2">
              <span className="text-3xl font-extrabold text-brand tracking-widest">SI</span>
              
              {/* Verified Badge */}
              <span className="absolute -bottom-1.5 inline-flex items-center gap-1 bg-brand text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5"
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
              <p className="text-[10px] font-bold tracking-wider text-brand uppercase">
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
