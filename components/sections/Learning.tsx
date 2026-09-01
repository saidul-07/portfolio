import { learningAreas, learningList } from "@/data/learning";

function BookIcon({ className }: { className?: string }) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function Learning() {
  return (
    <section id="learning" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <BookIcon className="h-3.5 w-3.5" />
            Ongoing Research &amp; Self-Study
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Learning &amp; Exploration
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Exploring core CS concepts, studying technical research papers, and building practical understanding through projects, continuous practice, and academic experimentation.
          </p>
        </div>

        {/* Areas of Focus Matrix */}
        <div className="space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground border-b border-border/60 pb-2">
            Areas of Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningAreas.map((area) => (
              <div
                key={area.id}
                className="border border-border/80 bg-surface p-5 rounded-xl shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 border-b border-border/60 pb-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed pt-1">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Exploration Activity Card */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground border-b border-border/60 pb-2">
            Ongoing Research &amp; Activity
          </h3>
          <div className="space-y-5">
            {learningList.map((item) => (
              <div
                key={item.id}
                className="border border-border/80 bg-surface p-6 rounded-xl shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <h4 className="text-base font-bold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-subtle border border-brand/20 px-2.5 py-0.5 rounded-full">
                    {item.status} Activity
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-secondary bg-background/80 p-3 rounded-lg border border-border/60">
                  {item.role && (
                    <div>
                      <strong className="text-foreground">Role:</strong> {item.role}
                    </div>
                  )}
                  {item.supervisor && (
                    <div>
                      <strong className="text-foreground">Supervisor:</strong> {item.supervisor}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 text-xs font-semibold text-brand bg-brand-subtle/80 border border-brand/20 rounded-lg shadow-2xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
