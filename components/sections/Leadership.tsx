import { Calendar, Users } from "lucide-react";
import { leadershipList } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-8 md:py-12 border-b border-border scroll-mt-16 animate-fade-in">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-bold text-brand">
            <Users className="h-3.5 w-3.5" />
            Extracurricular &amp; Leadership Roles
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Leadership &amp; Campus Activities
          </h2>
          
          <p className="text-secondary text-xs sm:text-sm leading-relaxed">
            Active involvement in student organization management, technical event coordination, and campus extracurricular activities beyond formal academic coursework.
          </p>
        </div>

        {/* Leadership Matrix Cards List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          {leadershipList.map((item) => (
            <div
              key={item.id}
              className="border border-border/80 bg-surface p-6 rounded-xl shadow-2xs hover:shadow-md hover:border-brand/40 transition-all duration-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <h3 className="text-base font-bold text-foreground">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-subtle border border-brand/20 px-2.5 py-0.5 rounded-full">
                    Executive Role
                  </span>
                </div>

                <p className="text-sm font-semibold text-brand">
                  {item.organization}
                </p>

                <p className="text-xs text-secondary leading-relaxed">
                  Managing club activities, organizing mathematical problem-solving sessions, and assisting in campus workshop planning.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-secondary bg-background border border-border/80 px-3 py-1.5 rounded-lg w-fit pt-2">
                <Calendar className="h-3.5 w-3.5 text-brand" />
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
