import { Calendar, MapPin, Award } from "lucide-react";
import { educationList } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            Education
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">
            My academic journey in computer science and technology.
          </p>
        </div>

        {/* Right Column: Timeline */}
        <div className="md:col-span-8 relative border-l border-border pl-6 ml-3 space-y-10">
          {educationList.map((entry) => (
            <div key={entry.id} className="relative space-y-2">
              {/* Timeline marker */}
              <span className={`absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-background transition-colors duration-200 ${
                entry.featured
                  ? "border-accent ring-4 ring-accent/10 bg-accent"
                  : "border-border"
              }`}>
                {entry.featured && <span className="h-1.5 w-1.5 rounded-full bg-background" />}
              </span>

              {/* Title & Status */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {entry.degree} {entry.fieldOfStudy && entry.id !== "duet" && `— ${entry.fieldOfStudy}`}
                </h3>
                {entry.status && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-subtle px-1.5 py-0.5 rounded">
                    <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                    {entry.status}
                  </span>
                )}
              </div>

              {/* Institution & Location */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
                <span className="font-semibold">{entry.institution}</span>
                {entry.location && (
                  <>
                    <span className="text-muted hidden sm:inline">&bull;</span>
                    <span className="flex items-center gap-1 text-muted text-xs">
                      <MapPin className="h-3.5 w-3.5" />
                      {entry.location}
                    </span>
                  </>
                )}
              </div>

              {/* Period & Grade */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {entry.period}
                </span>
                <span className="flex items-center gap-1.5 font-medium text-secondary">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  Grade: <strong className="text-foreground">{entry.grade}</strong>
                </span>
              </div>

              {/* Current term details */}
              {entry.currentDetails && (
                <p
                  className="text-xs font-semibold text-accent mt-1"
                  dangerouslySetInnerHTML={{ __html: entry.currentDetails }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
