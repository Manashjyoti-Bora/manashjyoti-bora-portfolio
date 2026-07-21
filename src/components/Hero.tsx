"use client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background Abstract */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-abstract.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/60" />
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20 md:py-0">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-mono text-[11px] md:text-xs text-gold/80 tracking-[0.35em] uppercase mb-6 md:mb-8"
          >
            Full-Stack Developer & IT Student — Nagaon, Assam
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.92] tracking-tighter mb-8 md:mb-10 text-cream"
          >
            I design and build{" "}
            <span className="italic text-gradient-gold font-normal">digital experiences</span>{" "}
            that people remember.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="text-base md:text-xl text-cream/60 max-w-xl leading-relaxed mb-10 md:mb-12 font-light"
          >
            Manashjyoti Bora is a full-stack developer helping startups and creative teams turn ambitious ideas into clear, beautiful, high-performing digital products — built entirely from an Android phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="flex flex-wrap items-center gap-4 md:gap-6"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 text-sm font-semibold tracking-wide hover:bg-gold hover:text-ink transition-all duration-300 rounded-full"
            >
              View Selected Work
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/15 text-cream px-7 py-4 text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition-all duration-300 rounded-full"
            >
              Let's Work Together
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-cream/30 rotate-90 origin-center translate-y-8">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
