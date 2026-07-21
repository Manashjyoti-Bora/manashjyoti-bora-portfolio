"use client";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <a href="#" className="font-serif text-2xl font-bold tracking-tight text-cream mb-2 block hover:text-gold transition-colors">
              <span className="text-gradient-gold">M.</span>Bora
            </a>
            <p className="text-xs text-cream/20 font-mono tracking-wide">Built from an Android phone. Deployed globally.</p>
          </div>
          <div className="flex items-center gap-8 md:gap-12">
            <a href="#work" className="text-xs text-cream/30 hover:text-gold transition-colors uppercase tracking-[0.15em]">Work</a>
            <a href="#about" className="text-xs text-cream/30 hover:text-gold transition-colors uppercase tracking-[0.15em]">About</a>
            <a href="#contact" className="text-xs text-cream/30 hover:text-gold transition-colors uppercase tracking-[0.15em]">Contact</a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs text-cream/20 hover:text-gold transition-all duration-300 uppercase tracking-[0.15em]"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
        <div className="mt-10 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-cream/10 tracking-wider">© 2026 Manashjyoti Bora. All rights reserved.</p>
          <p className="text-[10px] text-cream/10 tracking-wider">Built with Next.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
