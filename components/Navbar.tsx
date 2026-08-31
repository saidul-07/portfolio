"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/personal";

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
          <div className="relative h-9 w-9 rounded-full border border-brand/20 overflow-hidden shrink-0 shadow-xs group-hover:border-brand transition-colors">
            <Image
              src="/profile.jpg"
              alt="Md Sayedul Islam"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base text-foreground group-hover:text-brand transition-colors">
                {personalInfo.name}
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Open for Opportunities" />
            </div>
            <span className="text-xs text-muted font-semibold tracking-tight">
              DUET CSE Student
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-secondary hover:text-brand hover:bg-brand-subtle px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <div className="ml-2 pl-2 border-l border-border">
            <ThemeToggle />
          </div>
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
              className="block text-base font-bold text-secondary hover:text-brand hover:bg-brand-subtle px-3 py-2 rounded-md transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
