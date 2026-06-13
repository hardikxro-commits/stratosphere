"use client";

import Link from "next/link";
import { BookOpen, MessageCircle, Beaker, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/formulas", label: "Formulas", icon: Beaker },
  { href: "/chatbot", label: "Ask AI", icon: MessageCircle },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-heading text-lg italic tracking-tight">
            <span className="text-[#B84A3A] dark:text-[#D4735E]">↟</span>
            stratos
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-sans text-[#5C4F3F] dark:text-[#B5A88A] hover:text-[#2D2D2D] dark:hover:text-[#EAE0C8] transition-colors"
              >
                <link.icon size={14} />
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-nav">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-sans text-[#5C4F3F] dark:text-[#B5A88A]"
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
