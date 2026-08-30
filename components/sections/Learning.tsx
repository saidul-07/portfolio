import { BookOpen, Sparkles, User, FileText } from "lucide-react";
import { learningAreas, learningList } from "@/data/learning";

export function Learning() {
  return (
    <section id="learning" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      {/* Header */}
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Explorations
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Learning &amp; Exploration
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          Exploring new concepts, studying technical topics, and building practical understanding through projects and experimentation.
        </p>
      </div>

      {/* Grid of General Learning Areas */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {learningAreas.map((area) => (
          <div
            key={area.id}
            className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 group flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted-background text-brand-blue dark:text-brand-blue-light group-hover:bg-brand-blue/10 transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground group-hover:text-brand-blue transition-colors">
                {area.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Subsection: Ongoing Exploration */}
      <div className="mt-16 border-t border-border/60 pt-12">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-blue dark:text-brand-blue-light" />
          Ongoing Exploration
        </h3>
        
        <div className="mt-6">
          {learningList.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 max-w-4xl relative overflow-hidden group space-y-6"
            >
              {/* Subtle top-right accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -z-10 group-hover:bg-brand-blue/10 transition-colors" />
              
              {/* Header details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light bg-brand-blue/5 border border-brand-blue/20 px-2 py-0.5 rounded">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                  {item.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-base text-muted leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Research details meta grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm max-w-xl border-t border-border/50 pt-4">
                <div className="flex items-center gap-2 text-muted">
                  <User className="h-4.5 w-4.5 text-brand-blue/70 shrink-0" />
                  <span>
                    <strong>Role:</strong> {item.role}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <FileText className="h-4.5 w-4.5 text-brand-blue/70 shrink-0" />
                  <span>
                    <strong>Supervisor:</strong> {item.supervisor}
                  </span>
                </div>
              </div>

              {/* Topic tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-medium text-muted bg-muted-background border border-border px-2.5 py-1 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

