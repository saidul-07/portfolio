import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Learning } from "@/components/sections/Learning";
import { Education } from "@/components/sections/Education";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";
import { personalInfo } from "@/data/personal";
import { Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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
      width="16"
      height="16"
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

export default function Home() {
  const interests = [
    "AI / Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Software Development",
    "Continuous Learning"
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Sticky Sidebar on Desktop */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6 lg:border-r lg:border-border lg:pr-10 pb-8 lg:pb-0">
          <div className="space-y-4">
            {/* Styled Avatar initials block */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-subtle text-accent font-bold text-2xl border border-border">
              SI
            </div>

            {/* Profile info */}
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                {personalInfo.name}
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                CSE Student
              </p>
            </div>

            {/* Subtitle / Affiliation */}
            <p className="text-sm text-secondary leading-relaxed">
              Dhaka University of Engineering &amp; Technology (DUET)
              <br />
              <span className="text-muted text-xs">Gazipur, Bangladesh</span>
            </p>
          </div>

          {/* Social / Contact list */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
              Connect
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-secondary hover:text-accent font-semibold transition-colors duration-200"
              >
                <GithubIcon className="shrink-0" />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-secondary hover:text-accent font-semibold transition-colors duration-200"
              >
                <LinkedinIcon className="shrink-0" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs text-secondary hover:text-accent font-semibold transition-colors duration-200"
              >
                <Mail className="h-4 w-4 shrink-0" />
                Email
              </a>
            </div>
          </div>

          {/* Academic Standouts */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
              Academic Status
            </h3>
            <div className="space-y-2 text-xs text-secondary">
              <div>
                <strong>DUET B.Sc. CGPA:</strong>
                <span className="text-accent font-bold ml-1.5">3.68 / 4.00</span>
              </div>
              <div>
                <strong>Expected Graduation:</strong>
                <span className="font-semibold text-foreground ml-1.5">2027</span>
              </div>
            </div>
          </div>

          {/* Core Interests */}
          <div className="space-y-3 pt-4 border-t border-border">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">
              Interests
            </h3>
            <ul className="space-y-1.5 text-xs text-secondary">
              {interests.map((interest) => (
                <li key={interest} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Column: Scrollable Content sections */}
        <main className="lg:col-span-8 space-y-10 lg:space-y-6">
          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Skills Section */}
          <Skills />

          {/* Learning & Exploration Section */}
          <Learning />

          {/* Education Section */}
          <Education />

          {/* Leadership & Activities Section */}
          <Leadership />

          {/* Contact Section */}
          <Contact />
        </main>

      </div>
    </div>
  );
}
