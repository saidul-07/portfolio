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
    <header className="sticky top-0 z-50 w-full flex justify-center px-3 sm:px-6 lg:px-8 pt-3 pb-1 transition-all duration-300">
      <div className="w-full max-w-6xl rounded-2xl border border-border/80 bg-background/85 backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-300 px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand block */}
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative h-10 w-10 rounded-full ring-2 ring-brand/30 group-hover:ring-brand overflow-hidden shrink-0 shadow-xs transition-all duration-300">
            <Image
              src="/profile.jpg"
              alt="Md Sayedul Islam"
              width={40}
              height={40}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg text-foreground group-hover:text-brand transition-colors tracking-tight">
                {personalInfo.name}
              </span>
              <div className="relative flex h-2.5 w-2.5 items-center justify-center" title="Open for Opportunities">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </div>
            </div>
            <span className="text-xs font-semibold text-brand tracking-wide">
              DUET CSE Student
            </span>
          </div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-surface/60 border border-border/60 p-1 rounded-full shadow-2xs">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs sm:text-sm font-bold text-secondary hover:text-brand hover:bg-brand-subtle px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          
          <div className="h-4 w-[1px] bg-border mx-1" />
          
          <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-brand-subtle transition-colors">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground hover:bg-background transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 md:hidden border border-border bg-background/95 backdrop-blur-xl rounded-2xl p-4 space-y-2 shadow-lg animate-fade-in z-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-bold text-secondary hover:text-brand hover:bg-brand-subtle px-4 py-2.5 rounded-xl transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
