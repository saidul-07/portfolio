import { skillCategories } from "@/data/skills";

function CodeIcon({ className }: { className?: string }) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <CodeIcon className="h-3.5 w-3.5" />
            Software Engineering &amp; AI Skill Matrix
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Complete Skill Matrix
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Full spectrum of programming languages, machine learning concepts, computer vision, databases, tools, and core computer science fundamentals.
          </p>
        </div>

        {/* 3-Column Matrix Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="border border-border/80 bg-surface p-5 rounded-xl shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Card Title Header */}
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold text-brand bg-brand-subtle/80 border border-brand/20 rounded-lg hover:border-brand/40 transition-colors shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
