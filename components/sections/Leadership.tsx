import { Calendar } from "lucide-react";
import { leadershipList } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-10 md:py-16 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            Leadership
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">
            Involvement in university activities beyond academic coursework.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 space-y-6">
          {leadershipList.map((item) => (
            <div key={item.id} className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                {item.role}
              </h3>
              <p className="text-sm font-semibold text-secondary">
                {item.organization}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted pt-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
