import { skillCategories, currentlyExploring, currentlyResearching } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Column (Left ~66% - 75%) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section Header */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Skills
            </h2>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed font-medium">
              Technologies, tools, and domains I work with
            </p>
          </div>

          {/* Main Category Cards */}
          <div className="space-y-5">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-24 rounded-2xl border border-border/80 bg-surface/40 p-5 sm:p-6 shadow-2xs hover:border-brand/30 transition-all duration-200 space-y-4"
              >
                {/* Category Card Header */}
                <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
                  <span className="text-lg sm:text-xl">{category.icon}</span>
                  <h3 className="font-extrabold text-sm sm:text-base text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pill Badges */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/90 bg-background/90 hover:bg-background border border-border/80 rounded-xl hover:border-brand/40 hover:text-brand transition-colors shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Currently Exploring Card (Bottom Card in Blue Accent) */}
            <div
              id="exploring"
              className="scroll-mt-24 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-5 sm:p-6 shadow-2xs space-y-4"
            >
              <div className="flex items-center gap-2.5 border-b border-blue-200/80 dark:border-blue-900/50 pb-3">
                <span className="text-lg sm:text-xl">🚀</span>
                <h3 className="font-extrabold text-sm sm:text-base text-blue-700 dark:text-blue-300 tracking-tight">
                  Currently Exploring
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {currentlyExploring.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100/60 dark:bg-blue-900/40 border border-blue-200/80 dark:border-blue-800/60 rounded-xl shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar Column (Desktop Widget ~25% - 33%) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-border/70 bg-surface/30 p-5 space-y-6 shadow-2xs backdrop-blur-xs">
            {/* Header */}
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-secondary/60 uppercase">
                SKILLS
              </span>
            </div>

            {/* Categories Quick Nav */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-extrabold tracking-wider text-secondary uppercase">
                CATEGORIES
              </h4>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-background/60 hover:bg-background hover:border-brand/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{cat.icon}</span>
                      <span className="text-xs font-bold text-foreground group-hover:text-brand transition-colors">
                        {cat.shortTitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-surface text-secondary border border-border/40">
                      {cat.skills.length} skills
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Currently Researching Section */}
            <div className="space-y-3 pt-2 border-t border-border/50">
              <h4 className="text-[10px] font-extrabold tracking-wider text-secondary uppercase">
                CURRENTLY RESEARCHING
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentlyResearching.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[10px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/80 rounded-lg"
                  >
                    {item}
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
