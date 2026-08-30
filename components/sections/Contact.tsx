import { Mail, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  const contactLinks = [
    {
      id: "email",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      displayValue: personalInfo.email,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/saidul07",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
      displayValue: "linkedin.com/in/saidul07",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/saidul-07",
      href: personalInfo.github,
      icon: GithubIcon,
      displayValue: "github.com/saidul-07",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16">
      {/* Header */}
      <div className="flex flex-col gap-3 animate-fade-in">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue dark:text-brand-blue-light">
          Get In Touch
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Let's Connect"}
        </h2>
        <p className="max-w-2xl text-muted text-base sm:text-lg">
          Interested in connecting, discussing a project, or sharing ideas? Feel free to reach out.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links (7/12 width) */}
        <div className="md:col-span-7 space-y-4 w-full">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== "email" ? "_blank" : undefined}
                rel={link.id !== "email" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-5 rounded-lg border border-border bg-card shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 group cursor-pointer w-full text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted-background text-brand-blue dark:text-brand-blue-light transition-colors group-hover:bg-brand-blue/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider">
                      {link.label}
                    </h3>
                    <p className="text-base font-semibold text-foreground group-hover:text-brand-blue transition-colors mt-0.5 break-all">
                      {link.displayValue}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Right Column: Location Summary (5/12 width) */}
        <div className="md:col-span-5 w-full">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -z-10" />
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border pb-3">
              <MapPin className="h-5 w-5 text-brand-blue" />
              Current Location
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-base font-semibold text-foreground">{personalInfo.location}</p>
              <p className="text-sm text-muted leading-relaxed">
                Dhaka University of Engineering &amp; Technology (DUET) Campus area, Gazipur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

