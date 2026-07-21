"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-ink/80 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="font-serif text-xl md:text-2xl font-bold tracking-tight text-cream group">
            <span className="text-gradient-gold">M.</span>
            <span className="group-hover:text-gold transition-colors duration-500">Bora</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/70 hover:text-gold hover:translate-y-[-1px] transition-all duration-300 tracking-wide uppercase text-[11px]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="text-cream/60 hover:text-gold transition-colors ml-2"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-3">
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="text-cream/60 hover:text-gold transition-colors">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" className="text-cream hover:text-gold transition-colors">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-10"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
