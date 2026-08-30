import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-border scroll-mt-16">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Introduction
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biography (7/12 width) */}
        <div className="lg:col-span-7 space-y-6 text-muted text-base leading-relaxed sm:text-lg">
          <p>
            I am a Computer Science and Engineering student at Dhaka University of Engineering &amp; Technology (DUET), currently in my third year. I enjoy learning through programming, building projects, and exploring different areas of computer science.
          </p>
          <p>
            My current interests include Artificial Intelligence, Machine Learning, Computer Vision, and software development. I am particularly interested in understanding how intelligent systems can be developed into practical applications.
          </p>
          <p>
            I am continuously learning new concepts and technologies through academic projects, experimentation, and hands-on development.
          </p>
        </div>

        {/* Right Column: Academic Info Card (5/12 width) */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 relative overflow-hidden group">
            {/* Top right subtle background accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -z-10 group-hover:bg-brand-blue/10 transition-colors" />
            
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-3 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-brand-blue" />
              Academic Status
            </h3>

            <div className="mt-4 space-y-4">
              {/* Education */}
              <div className="flex gap-3">
                <BookOpen className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted/80">Education</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">B.Sc. in Computer Science &amp; Engineering</p>
                  <p className="text-xs text-muted">Dhaka University of Engineering &amp; Technology (DUET)</p>
                </div>
              </div>

              {/* Current Status */}
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted/80">Current</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">3rd Year &bull; 2nd Semester</p>
                </div>
              </div>

              {/* Expected Graduation */}
              <div className="flex gap-3">
                <Calendar className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted/80">Expected Graduation</h4>
                  <p className="text-sm font-medium text-foreground mt-0.5">2027</p>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex gap-3">
                <Award className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-brand-blue-light">CGPA</h4>
                  <p className="text-base font-bold text-brand-blue dark:text-brand-blue-light mt-0.5">
                    3.68 <span className="text-xs font-normal text-muted">/ 4.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

