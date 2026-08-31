export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Heading */}
        <div className="md:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground uppercase tracking-widest">
            About
          </h2>
        </div>

        {/* Right Column: Paragraphs & Meta */}
        <div className="md:col-span-8 space-y-6">
          <div className="space-y-4 text-secondary text-base leading-relaxed sm:text-lg">
            <p>
              I am a Computer Science and Engineering student at Dhaka University of Engineering &amp; Technology (DUET), currently in my third year. I enjoy learning through programming, building projects, and exploring different areas of computer science.
            </p>
            <p>
              My current interests include Artificial Intelligence, Machine Learning, Computer Vision, and software development. I am particularly interested in understanding how intelligent systems can be developed into practical applications.
            </p>
            <p>
              I am continuously learning new concepts and technologies through academic projects, experimentation, and hands-on development, with the aim of preparing for future software and AI-related opportunities.
            </p>
          </div>

          {/* Academic Info Row/List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Institution</span>
              <p className="text-sm font-medium text-foreground mt-1">DUET, Bangladesh</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Current Term</span>
              <p className="text-sm font-medium text-foreground mt-1">3rd Year &bull; 2nd Semester</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Academic Standings</span>
              <p className="text-sm font-bold text-accent mt-1">CGPA: 3.68 / 4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
