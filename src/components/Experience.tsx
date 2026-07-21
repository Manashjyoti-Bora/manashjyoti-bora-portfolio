"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025 — Present",
    role: "First-Year B.Voc IT Student",
    org: "Government College / Self-Led Development",
    desc: "Building full-stack applications entirely from an Android phone using Termux, GitHub web editor, and Vercel deployments.",
  },
  {
    year: "2025",
    role: "Full-Stack Developer",
    org: "Personal / Open Source",
    desc: "Shipped AUREA portfolio (Next.js, TypeScript, 3D particle hero, AI chatbot) and NexusMart e-commerce (MongoDB, JWT auth, admin dashboard).",
  },
  {
    year: "2024",
    role: "Frontend & UI Developer",
    org: "Self-Led Projects",
    desc: "Built DevHire Pro ATS and TaskFlow Enterprise — complex UI patterns, state management, and production-grade user interfaces.",
  },
];

const achievements = [
  { label: "Live Projects", value: "4" },
  { label: "GitHub Achievements", value: "Pull Shark · YOLO" },
  { label: "Deployment", value: "Vercel + Termux Workflow" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-48 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-4">Credentials</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream mb-6">Experience.</h2>
            <p className="text-cream/40 text-sm leading-relaxed mb-12">
              A curated timeline of what I've built, learned, and shipped — all verified through live repositories and deployed applications.
            </p>
            <div className="glass-card rounded-2xl p-8">
              <p className="font-mono text-[10px] text-gold/50 tracking-[0.2em] uppercase mb-6">Key Metrics</p>
              <div className="space-y-6">
                {achievements.map((a) => (
                  <div key={a.label}>
                    <p className="font-mono text-[10px] text-cream/20 tracking-wider">{a.label}</p>
                    <p className="font-serif text-xl text-cream">{a.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-12">
            <div className="relative pl-8 md:pl-0">
              {/* Vertical line */}
              <div className="absolute left-3 md:left-0 top-2 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/10 to-transparent md:hidden" />
              
              <div className="space-y-16">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    className="relative"
                  >
                    <div className="hidden md:block absolute -left-16 top-0">
                      <span className="font-mono text-xs text-gold/40">{item.year.split(" — ")[0]}</span>
                    </div>
                    <div className="md:ml-16">
                      <span className="font-mono text-xs text-gold/60 md:hidden mb-2 block">{item.year}</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-cream font-bold mb-1 tracking-tight">{item.role}</h3>
                      <p className="text-sm text-gold/60 mb-3 font-medium">{item.org}</p>
                      <p className="text-cream/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
