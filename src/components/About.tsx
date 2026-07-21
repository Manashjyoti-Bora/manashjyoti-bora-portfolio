"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left: Portrait / Abstract Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/hero-abstract.jpg"
                alt="Abstract artistic composition"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
            {/* Floating info card */}
            <div className="absolute -bottom-8 -right-4 md:bottom-8 md:-right-8 glass-card rounded-xl p-6 max-w-[260px] shadow-2xl shadow-black/40">
              <p className="font-mono text-[10px] text-cream/30 uppercase tracking-[0.2em] mb-3">Location</p>
              <p className="font-serif text-xl text-cream mb-1">Nagaon, Assam</p>
              <p className="text-xs text-cream/40">India</p>
              <div className="w-12 h-px bg-gold/30 my-4" />
              <p className="font-mono text-[10px] text-cream/30 uppercase tracking-[0.2em] mb-2">Status</p>
              <p className="text-sm text-gold font-medium">Open for Internships</p>
            </div>
          </motion.div>

          {/* Right: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7 lg:pl-8"
          >
            <p className="font-mono text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-6">About</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-10 leading-[1.05]">
              Building production-grade applications <span className="italic text-gradient-gold font-normal">from a phone.</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-cream/60 leading-[1.85] font-light">
              <p>
                I'm a first-year B.Voc IT student from Nagaon, Assam. I don't own a laptop — so I built my entire development environment on an Android phone using Termux, the GitHub web editor, and Vercel cloud deployments.
              </p>
              <p>
                This isn't a limitation. It's a discipline. Every project you see here represents a concept learned, applied immediately, and deployed live. My repositories aren't tutorial copies — they are real products serving real functions.
              </p>
              <p>
                I care about the intersection of strategy, clarity, craft, and real-world impact. Whether it's a 3D interactive portfolio, a full-stack e-commerce platform with secure auth flows, or a complex ATS interface — I approach each project with the same principle: make it work, make it beautiful, make it fast.
              </p>
              <blockquote className="border-l-2 border-gold/30 pl-6 py-2 my-8">
                <p className="font-serif text-xl md:text-2xl text-cream/80 italic leading-relaxed">
                  "Where this journey leads next — the work will decide."
                </p>
              </blockquote>
            </div>

            {/* Principles / Facts Grid */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Location", value: "Nagaon, Assam" },
                { label: "Experience", value: "2+ Live Products" },
                { label: "Industries", value: "Tech, Education" },
                { label: "Focus", value: "Full-Stack & UI" },
              ].map((fact) => (
                <div key={fact.label} className="group">
                  <p className="font-mono text-[10px] text-cream/20 tracking-[0.2em] uppercase mb-2">{fact.label}</p>
                  <p className="font-serif text-lg md:text-xl text-cream group-hover:text-gold transition-colors duration-300">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
