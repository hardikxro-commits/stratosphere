"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-[#D4C9B8] dark:border-[#3A3545] hover:bg-[#EAE0D0] dark:hover:bg-[#2A2A3E] transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Moon size={14} /> : <Sun size={14} />}
      <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider">
        {dark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
