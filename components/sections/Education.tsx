import { Calendar, Award, MapPin } from "lucide-react";
import { educationList } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      {/* Header */}
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Timeline
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          My academic journey in computer science and technology.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="mt-12 relative border-l border-border pl-6 ml-4 space-y-12">
        {educationList.map((entry) => {
          return (
            <div key={entry.id} className="relative group">
              {/* Timeline dot marker */}
              <span className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-background transition-colors duration-200 ${
                entry.featured 
                  ? "border-brand-blue ring-4 ring-brand-blue/10 bg-brand-blue" 
                  : "border-border group-hover:border-brand-blue"
              }`}>
                {entry.featured && <span className="h-1.5 w-1.5 rounded-full bg-background" />}
              </span>

              {/* Education Card container */}
              <div className={`rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-200 max-w-3xl ${
                entry.featured 
                  ? "border-brand-blue/30 md:p-8" 
                  : "border-border hover:border-brand-blue/30"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    {/* Status badge for current studies */}
                    {entry.status && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light bg-brand-blue/5 border border-brand-blue/20 px-2 py-0.5 rounded">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
                        {entry.status}
                      </span>
                    )}

                    <h3 className={`font-bold text-foreground leading-tight ${
                      entry.featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                    }`}>
                      {entry.degree} {entry.fieldOfStudy && entry.id !== "duet" && `— ${entry.fieldOfStudy}`}
                    </h3>

                    <p className="text-muted text-base font-medium">
                      {entry.institution}
                    </p>

                    {entry.location && (
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{entry.location}</span>
                      </div>
                    )}

                    {/* Current Semester Detail */}
                    {entry.currentDetails && (
                      <p className="text-sm font-semibold text-brand-blue dark:text-brand-blue-light mt-2" dangerouslySetInnerHTML={{ __html: entry.currentDetails }} />
                    )}
                  </div>

                  {/* Right side Metadata (Period & Grade) */}
                  <div className="sm:text-right flex flex-col gap-2 shrink-0">
                    <div className="flex items-center sm:justify-end gap-1.5 text-sm font-medium text-muted">
                      <Calendar className="h-4 w-4" />
                      <span>{entry.period}</span>
                    </div>

                    <div className="inline-flex items-center sm:justify-end gap-1.5 mt-1 text-muted font-medium">
                      <Award className="h-4 w-4 shrink-0 text-brand-blue dark:text-brand-blue-light" />
                      <span className="text-sm">
                        CGPA: <strong className="text-foreground">{entry.grade}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
