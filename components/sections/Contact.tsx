"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
      width="20"
      height="20"
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

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || "Inquiry")}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const channels = [
    {
      id: "email",
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: MailIcon,
    },
    {
      id: "linkedin",
      label: "LinkedIn Connection",
      value: "linkedin.com/in/saidul07",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
    },
    {
      id: "github",
      label: "GitHub Workspace",
      value: "github.com/saidul-07",
      href: personalInfo.github,
      icon: GithubIcon,
    },
    {
      id: "phone",
      label: "Phone & WhatsApp",
      value: "+880 1727-183143",
      href: "tel:+8801727183143",
      icon: PhoneIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 md:py-16 border-b border-border scroll-mt-16 animate-fade-in"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/20 bg-brand-subtle text-xs font-semibold text-brand">
            <MailIcon className="h-3.5 w-3.5" />
            Get in Touch &amp; Academic Collaboration
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Interested in AI research collaboration, joint project discussions, or software engineering opportunities? Send a message directly to my email or connect on academic networks.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Channels Card */}
          <div className="lg:col-span-5 border border-border bg-surface p-6 rounded-md shadow-none space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contact Channels
            </h3>
            
            <div className="space-y-3">
              {channels.map((chan) => {
                const Icon = chan.icon;
                return (
                  <a
                    key={chan.id}
                    href={chan.href}
                    target={chan.id !== "email" && chan.id !== "phone" ? "_blank" : undefined}
                    rel={chan.id !== "email" && chan.id !== "phone" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded border border-border bg-surface hover:border-brand hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer w-full text-left"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-border bg-background text-secondary group-hover:text-brand transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        {chan.label}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-brand transition-colors duration-200 mt-0.5 truncate break-all">
                        {chan.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom location indicator */}
            <div className="flex items-center gap-2 text-xs text-muted pt-2 border-t border-border">
              <MapPinIcon className="text-brand shrink-0" />
              <span>Department of CSE, DUET, Gazipur-1700, Bangladesh</span>
            </div>
          </div>

          {/* Right Column: Send a Direct Message Form */}
          <div className="lg:col-span-7 border border-border bg-surface p-6 rounded-md shadow-none space-y-6">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Send a Direct Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-10 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:border-brand transition-colors text-foreground"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:border-brand transition-colors text-foreground"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Project Inquiry / Academic Collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full h-10 px-3 text-sm bg-background border border-border rounded focus:outline-none focus:border-brand transition-colors text-foreground"
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Md Sayedul Islam, I would like to connect regarding..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 text-sm bg-background border border-border rounded focus:outline-none focus:border-brand transition-colors text-foreground resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-10 px-5 rounded bg-brand text-white font-semibold hover:bg-brand-hover transition-colors duration-200 text-sm cursor-pointer shadow-none gap-2 mt-2"
              >
                <SendIcon className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
