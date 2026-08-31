"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/personal";

function SendIcon({ className }: { className?: string }) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Learning", href: "#learning" },
    { name: "Education", href: "#education" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand block */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative h-8 w-8 rounded-full border border-brand/20 overflow-hidden shrink-0 shadow-xs group-hover:border-brand transition-colors">
            <Image
              src="/profile.jpg"
              alt="Md Sayedul Islam"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-foreground group-hover:text-brand transition-colors">
                {personalInfo.name}
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Open for Opportunities" />
            </div>
            <span className="text-[10px] text-muted font-medium tracking-tight">
              DUET CSE Student
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-secondary hover:text-brand hover:bg-brand-subtle px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-2" />
          
          <ThemeToggle />
          
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand hover:bg-brand-hover px-3.5 py-1.5 rounded-full transition-all shadow-xs cursor-pointer"
          >
            <SendIcon className="h-3.5 w-3.5" />
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:bg-background transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-secondary hover:text-brand hover:bg-brand-subtle px-3 py-2 rounded-md transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-border">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full text-xs font-bold text-white bg-brand py-2.5 rounded-md hover:bg-brand-hover transition-colors"
            >
              <SendIcon className="h-3.5 w-3.5" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
