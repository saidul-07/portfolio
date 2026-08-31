import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            Skills
          </h2>
          <p className="text-secondary text-sm leading-relaxed max-w-sm">
            Technologies and areas I currently use, study, and explore.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-8 grid grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {category.title}
              </h3>
              <ul className="space-y-1.5 text-sm text-secondary">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
