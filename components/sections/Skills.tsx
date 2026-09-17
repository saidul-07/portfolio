import { skillCategories, currentlyExploring } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Skills
          </h2>
          <p className="text-secondary text-xs sm:text-sm leading-relaxed font-medium">
            Technologies, tools, and domains I work with
          </p>
        </div>

        {/* Single-Column Full-Width Stacked Category Cards */}
        <div className="space-y-5">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 shadow-2xs hover:border-brand/40 transition-all duration-200 space-y-4"
            >
              {/* Category Card Header */}
              <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
                <span className="text-lg">{category.icon}</span>
                <h3 className="font-extrabold text-sm sm:text-base text-foreground tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-semibold text-foreground bg-background border border-border/80 rounded-xl hover:border-brand/40 hover:text-brand transition-colors shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Currently Exploring Card (Full Width at Bottom) */}
          <div className="rounded-2xl border border-brand/30 bg-brand-subtle/30 p-5 sm:p-6 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 border-b border-brand/20 pb-3">
              <span className="text-lg">🚀</span>
              <h3 className="font-extrabold text-sm sm:text-base text-brand tracking-tight">
                Currently Exploring
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {currentlyExploring.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 text-xs font-bold text-brand bg-brand-subtle border border-brand/30 rounded-xl shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
