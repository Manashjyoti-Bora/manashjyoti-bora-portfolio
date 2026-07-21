"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 md:py-48 bg-ink-surface overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <p className="font-mono text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-10">Testimonials</p>
        
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream/90 font-medium leading-[1.15] tracking-tight mb-12"
        >
          "Real testimonials will be added here as projects grow and clients provide feedback. Every claim remains verifiable through live repositories."
        </motion.blockquote>
        
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-8" />
        
        <p className="font-mono text-xs text-cream/30 tracking-[0.2em] uppercase">
          — Placeholder / Editable
        </p>
        <p className="text-xs text-cream/20 mt-2">No fabricated names. Real attribution only.</p>
      </div>
    </section>
  );
}
