import { learningAreas, learningList } from "@/data/learning";

export function Learning() {
  return (
    <section id="learning" className="py-20 md:py-28 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            Learning &amp; Exploration
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">
            Exploring new concepts, studying technical topics, and building practical understanding through projects and experimentation.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 space-y-12">
          {/* Areas of Focus */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider border-b border-border pb-2">
              Areas of Focus
            </h3>
            <div className="space-y-6">
              {learningAreas.map((area) => (
                <div key={area.id} className="space-y-1">
                  <h4 className="text-base font-bold text-foreground">
                    {area.title}
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Exploration */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider border-b border-border pb-2">
              Ongoing Exploration
            </h3>
            <div className="space-y-8">
              {learningList.map((item) => (
                <div key={item.id} className="space-y-4">
                  <div className="space-y-2">
                    <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-accent bg-accent-subtle px-1.5 py-0.5 rounded">
                      {item.status} Activity
                    </span>
                    <h4 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-secondary pt-2">
                    {item.role && (
                      <div>
                        <strong className="text-foreground">Role:</strong> {item.role}
                      </div>
                    )}
                    {item.supervisor && (
                      <div>
                        <strong className="text-foreground">Supervisor:</strong> {item.supervisor}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] font-medium text-secondary bg-background border border-border px-2 py-0.5 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
