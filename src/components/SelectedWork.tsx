"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AUREA Portfolio",
    category: "Frontend Engineering",
    year: "2025",
    result: "Interactive 3D particle hero, AI chatbot with intent matching, live GitHub dashboard",
    link: "https://manashjyoti-bora.vercel.app",
    color: "#C8A96E",
  },
  {
    title: "NexusMart",
    category: "Full-Stack E-Commerce",
    year: "2025",
    result: "JWT auth with HTTP-only cookies, MongoDB Atlas orders, role-based admin dashboard",
    link: "https://nexusmart-dusky.vercel.app",
    color: "#E0C896",
  },
  {
    title: "DevHire Pro ATS",
    category: "UI Patterns & Complex Layouts",
    year: "2024",
    result: "ATS-style screening interface, advanced state management, production-grade UX",
    link: "https://github.com/Manashjyoti-Bora/devhire-pro-ats",
    color: "#A8854D",
  },
  {
    title: "TaskFlow Enterprise",
    category: "Task Management & State",
    year: "2024",
    result: "Enterprise task workflow, CRUD operations, persistent state architecture",
    link: "https://github.com/Manashjyoti-Bora/taskflow-enterprise",
    color: "#D4B88C",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-32 md:py-48 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-20 md:mb-28">
          <div>
            <p className="font-mono text-[11px] text-gold/70 tracking-[0.3em] uppercase mb-4">Selected Projects</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-cream">Work that speaks.</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm text-cream/40 hover:text-gold transition-colors font-medium tracking-wide uppercase text-[11px]">View All Projects</a>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-[${project.color}]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative glass-card rounded-2xl p-8 md:p-14 transition-all duration-500 group-hover:border-white/10 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-xs text-cream/30">0{i + 1}</span>
                      <span className="w-8 h-px bg-cream/10" />
                      <span className="font-mono text-[10px] text-gold/60 tracking-wider uppercase">{project.category}</span>
                      <span className="font-mono text-[10px] text-cream/20">— {project.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-cream mb-4 group-hover:text-gradient-gold transition-colors duration-700">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-cream/50 max-w-2xl leading-relaxed">{project.result}</p>
                  </div>
                  <div className="flex items-start justify-between md:justify-end gap-8 md:min-w-[200px]">
                    <ArrowUpRight size={28} className="text-cream/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
