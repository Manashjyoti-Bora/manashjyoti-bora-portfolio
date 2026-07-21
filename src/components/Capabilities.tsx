"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Compass, Layers } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Defining clear positioning, voice, and visual identity systems that scale with your product — not just decorate it.",
    outcome: "Stronger market presence and user trust.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Editorial-grade interfaces that balance beauty and usability. Every interaction is intentional, accessible, and fast.",
    outcome: "Higher engagement and lower bounce rates.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern full-stack engineering with Next.js, TypeScript, React, and MongoDB — optimized for performance, SEO, and real-world scale.",
    outcome: "Production-grade products deployed live.",
  },
  {
    icon: Layers,
    title: "Creative Direction",
    desc: "Guiding the visual narrative from concept to execution — ensuring coherence across design, motion, and interaction.",
    outcome: "A distinct brand experience users remember.",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="relative py-32 md:py-48 bg-ink-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-20 md:mb-28">
          <p className="font-mono text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-4">Capabilities</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream max-w-3xl">
            Services built on real outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-8 md:p-12 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
            >
              <service.icon size={28} strokeWidth={1.5} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-4 tracking-tight">{service.title}</h3>
              <p className="text-cream/50 leading-relaxed mb-6">{service.desc}</p>
              <p className="font-mono text-[10px] text-gold/60 tracking-[0.15em] uppercase">Outcome — {service.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
