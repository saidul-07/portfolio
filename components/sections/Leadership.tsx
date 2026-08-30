import { Users, Calendar } from "lucide-react";
import { leadershipList } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      {/* Header */}
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Extracurriculars
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Leadership &amp; Activities
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          Involvement in university activities beyond academic coursework.
        </p>
      </div>

      {/* Grid container with card */}
      <div className="mt-10">
        {leadershipList.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 relative overflow-hidden group flex flex-col sm:flex-row gap-6 items-start sm:items-center max-w-2xl animate-fade-in-slide"
          >
            {/* Top-right subtle accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 rounded-bl-full -z-10 group-hover:bg-brand-blue/10 transition-colors" />

            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted-background text-brand-blue dark:text-brand-blue-light transition-colors group-hover:bg-brand-blue/10">
              <Users className="h-6 w-6" />
            </div>

            {/* Details */}
            <div className="flex-grow space-y-2">
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-xl font-bold text-foreground transition-colors group-hover:text-brand-blue">
                  {item.role}
                </h3>
                <p className="text-base text-muted font-medium">
                  {item.organization}
                </p>
              </div>

              {/* Date/Period */}
              <div className="flex items-center gap-1.5 text-xs text-muted pt-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

