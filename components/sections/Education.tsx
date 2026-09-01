import { Calendar, MapPin, Award, BookOpen, GraduationCap } from "lucide-react";
import { educationList } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <GraduationCap className="h-3.5 w-3.5" />
            Academic Qualifications &amp; History
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Academic Background &amp; Degrees
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Formal engineering degrees, institutional academic achievements, academic grades, and computer science coursework.
          </p>
        </div>

        {/* Connected Academic Timeline Cards */}
        <div className="relative border-l-2 border-brand/25 ml-3 sm:ml-5 space-y-8 pl-5 sm:pl-8 pt-2">
          {educationList.map((entry) => (
            <div key={entry.id} className="relative group">
              {/* Timeline Bullet Marker Node */}
              <div className={`absolute -left-[27px] sm:-left-[39px] top-5 flex h-5 w-5 items-center justify-center rounded-full transition-colors ${
                entry.featured
                  ? "bg-brand text-white shadow-md ring-4 ring-brand/20"
                  : "bg-background border-2 border-brand/60"
              }`}>
                {entry.featured && <span className="h-2 w-2 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Card Container */}
              <div className={`rounded-xl border border-border/80 bg-surface p-6 shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 space-y-4 ${
                entry.featured ? "border-l-4 border-l-brand" : ""
              }`}>
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-foreground">
                      {entry.degree}
                    </h3>
                    {entry.fieldOfStudy && entry.id !== "duet" && (
                      <p className="text-xs font-semibold text-brand mt-0.5">
                        {entry.fieldOfStudy}
                      </p>
                    )}
                  </div>

                  {entry.status && (
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      entry.featured
                        ? "text-brand bg-brand-subtle border border-brand/20"
                        : "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                    }`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {entry.status}
                    </span>
                  )}
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm">
                  <span className="font-bold text-foreground">{entry.institution}</span>
                  {entry.location && (
                    <>
                      <span className="text-muted hidden sm:inline">&bull;</span>
                      <span className="flex items-center gap-1 text-muted text-xs">
                        <MapPin className="h-3.5 w-3.5 text-brand" />
                        {entry.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Key Metrics Grid Pills */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-background border border-border/80 px-3 py-1.5 rounded-lg shadow-2xs">
                    <Calendar className="h-3.5 w-3.5 text-brand" />
                    Period: <strong className="text-foreground">{entry.period}</strong>
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-background border border-border/80 px-3 py-1.5 rounded-lg shadow-2xs">
                    <Award className="h-3.5 w-3.5 text-brand" />
                    Grade: <strong className="text-foreground">{entry.grade}</strong>
                  </span>

                  {entry.currentDetails && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand bg-brand-subtle border border-brand/20 px-3 py-1.5 rounded-lg shadow-2xs">
                      <BookOpen className="h-3.5 w-3.5 text-brand" />
                      Term: <strong className="text-foreground">{entry.currentDetails}</strong>
                    </span>
                  )}
                </div>

                {/* Coursework & Focus Badges */}
                {entry.coursework && entry.coursework.length > 0 && (
                  <div className="pt-2 border-t border-border/40 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                      Core Coursework &amp; Topics:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {entry.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs font-semibold text-brand bg-brand-subtle/80 border border-brand/20 rounded-lg shadow-2xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
