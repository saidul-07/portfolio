import { Code2, BrainCircuit, Database, GitBranch } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  programming: Code2,
  "ai-ml": BrainCircuit,
  databases: Database,
  "dev-tools": GitBranch,
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Core Competencies
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          Technologies and areas I currently use, study, and explore.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.id] || Code2;
          return (
            <div
              key={category.id}
              className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border pb-3">
                  <Icon className="h-5 w-5 text-brand-blue dark:text-brand-blue-light group-hover:scale-105 transition-transform" />
                  {category.title}
                </h3>
                
                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center text-sm font-medium text-foreground bg-muted-background border border-border px-3.5 py-1.5 rounded transition-colors duration-150 hover:bg-brand-blue/5 hover:border-brand-blue/20 hover:text-brand-blue dark:hover:text-brand-blue-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

