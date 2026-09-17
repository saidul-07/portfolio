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

        {/* Main Section Grid (Left Category Cards + Right Sidebar Widget) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Column: 2-Column Category Cards Grid */}
          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 shadow-2xs hover:border-brand/40 transition-all duration-200 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
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
                </div>
              ))}
            </div>

            {/* Currently Exploring Card (Full Width in Main Column) */}
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

          {/* Right Sidebar Column: Summary Widget */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Categories Summary Widget */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted">
                Categories
              </h4>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border/70 text-xs font-bold text-foreground hover:border-brand/40 hover:bg-brand-subtle/30 transition-all shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{cat.icon}</span>
                      <span>{cat.shortTitle}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-muted bg-background border border-border/60 px-2 py-0.5 rounded-md">
                      {cat.skills.length} skills
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Researching Tag List Widget */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted">
                Currently Researching
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentlyExploring.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 text-xs font-semibold text-brand bg-brand-subtle border border-brand/30 rounded-xl shadow-2xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
