import { Calendar, MapPin, Award } from "lucide-react";
import { educationList } from "@/data/education";

function GraduationCapIcon({ className }: { className?: string }) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function Education() {
  return (
    <section id="education" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <GraduationCapIcon className="h-3.5 w-3.5" />
            Academic Journey &amp; Qualifications
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Academic History &amp; Credentials
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Formal engineering degrees, institution milestones, academic grades, and technical diploma qualifications in Computer Science &amp; Engineering.
          </p>
        </div>

        {/* Education Matrix Cards List */}
        <div className="space-y-5 pt-2">
          {educationList.map((entry) => (
            <div
              key={entry.id}
              className="border border-border/80 bg-surface p-6 rounded-xl shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 space-y-4"
            >
              {/* Header bar with bullet dot */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {entry.degree} {entry.fieldOfStudy && entry.id !== "duet" && `— ${entry.fieldOfStudy}`}
                  </h3>
                </div>

                {entry.status && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-subtle border border-brand/20 px-2.5 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {entry.status}
                  </span>
                )}
              </div>

              {/* Institution & Location */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-secondary">
                <span className="font-semibold text-foreground">{entry.institution}</span>
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

              {/* Period & Grade Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-secondary bg-background border border-border/80 px-3 py-1 rounded-lg">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  Period: <strong className="text-foreground">{entry.period}</strong>
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs text-secondary bg-background border border-border/80 px-3 py-1 rounded-lg">
                  <Award className="h-3.5 w-3.5 text-brand" />
                  Grade: <strong className="text-foreground">{entry.grade}</strong>
                </span>
              </div>

              {/* Current Details */}
              {entry.currentDetails && (
                <p
                  className="text-xs font-semibold text-brand pt-1"
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
