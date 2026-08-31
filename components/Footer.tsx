"use client";

import Image from "next/image";
import { personalInfo } from "@/data/personal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function MathIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 4H6l6 8-6 8h12" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Learning", href: "#learning" },
    { name: "Education", href: "#education" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  const connectLinks = [
    { name: "Email Me", detail: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: MailIcon },
    { name: "LinkedIn Profile", detail: "linkedin.com/in/saidul07", href: personalInfo.linkedin, icon: LinkedinIcon },
    { name: "GitHub Workspace", detail: "github.com/saidul-07", href: personalInfo.github, icon: GithubIcon },
    { name: "Phone / WhatsApp", detail: "+880 1727-183143", href: "tel:+8801727183143", icon: PhoneIcon },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#090d16] text-slate-100 border-t border-slate-800/80 mt-auto relative font-sans">
      {/* Top Gradient Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-brand via-blue-400 to-indigo-500 absolute top-0 left-0" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Left Column: Profile Info & Badges */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full ring-2 ring-brand/40 overflow-hidden shrink-0 shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="Md Sayedul Islam"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-semibold text-brand tracking-wider uppercase mt-0.5">
                  B.Sc. CSE Student @ DUET
                </p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science &amp; Engineering student passionate about AI/ML, Computer Vision, and Software Engineering. Exploring real-world tech solutions and continuous learning.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/30 px-3 py-1 rounded-full shadow-xs">
                <GraduationCapIcon className="h-3.5 w-3.5 text-brand" />
                DUET CSE (2023 - Present)
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shadow-xs">
                <MathIcon className="h-3.5 w-3.5 text-emerald-400" />
                DUET Math Club
              </span>
            </div>
          </div>

          {/* Middle Column: Quick Views Navigation */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 border-b border-slate-800/80 pb-2 inline-block">
              Quick Views
            </h4>
            <nav className="flex flex-col gap-2.5 pt-1">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200 w-fit flex items-center gap-1.5"
                >
                  <span className="text-brand text-xs">&rsaquo;</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Connect Channels */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-200 border-b border-slate-800/80 pb-2 inline-block">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 pt-1">
              {connectLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email Me" && link.name !== "Phone / WhatsApp" ? "_blank" : undefined}
                    rel={link.name !== "Email Me" && link.name !== "Phone / WhatsApp" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-brand/50 hover:bg-slate-800/70 transition-all duration-200 group w-full"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-800 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                        {link.name}
                      </h5>
                      <p className="text-[11px] font-medium text-slate-400 truncate">
                        {link.detail}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="border-t border-slate-800/80 bg-[#060910]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 font-medium">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for Research &amp; Internships</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-brand hover:bg-brand transition-all duration-200 shadow-sm cursor-pointer"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
