"use client";

import Link from "next/link";
import { BookOpen, MessageCircle, Beaker, Home, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/formulas", label: "Formulas", icon: Beaker },
  { href: "/chatbot", label: "Ask AI", icon: MessageCircle },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg sm:text-xl tracking-tight">
          <span className="text-white">↟</span>
          stratos
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-sans text-gray-400 hover:text-white transition-colors min-h-[44px]"
            >
              <link.icon size={14} />
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 min-h-[44px] text-sm font-sans text-gray-400 hover:text-white active:text-white transition-colors"
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
