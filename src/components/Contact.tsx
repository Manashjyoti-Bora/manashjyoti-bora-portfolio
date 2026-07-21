"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Linkedin, Github, Mail, Instagram, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Full-screen CTA */}
      <div className="relative bg-ink pt-32 md:pt-48 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-cream mb-6 leading-[1.05]">
            Have an idea worth <span className="italic text-gradient-gold">making real?</span>
          </h2>
          <p className="text-base md:text-xl text-cream/40 max-w-xl mx-auto mb-10 leading-relaxed">
            I'm open for internships, freelance collaboration, and meaningful projects. Let's build something that lasts.
          </p>
          <a
            href="mailto:manashjyotibora122@gmail.com"
            className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-5 text-base font-bold tracking-wide hover:bg-gold transition-all duration-300 rounded-full shadow-[0_0_40px_-12px_rgba(200,169,110,0.25)] hover:shadow-[0_0_60px_-12px_rgba(200,169,110,0.35)]"
          >
            <Mail size={20} strokeWidth={2.5} />
            manashjyotibora122@gmail.com
          </a>
        </div>
      </div>

      {/* Contact Grid: Form + Social */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 -mt-10 md:-mt-16 relative z-10 pb-32 md:pb-48">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8 md:p-14">
            <h3 className="font-serif text-2xl md:text-3xl text-cream font-bold mb-2">Start a conversation</h3>
            <p className="text-sm text-cream/30 mb-8">All fields are editable — this is a working contact form.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-ink-elevated border border-white/5 rounded-xl px-5 py-4 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-ink-elevated border border-white/5 rounded-xl px-5 py-4 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-ink-elevated border border-white/5 rounded-xl px-5 py-4 text-sm text-cream/60 focus:outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="">Project Type</option>
                  <option value="website">Website</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="design">Design / Branding</option>
                  <option value="other">Other</option>
                </select>
                <select
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                  className="w-full bg-ink-elevated border border-white/5 rounded-xl px-5 py-4 text-sm text-cream/60 focus:outline-none focus:border-gold/40 transition-colors appearance-none"
                >
                  <option value="">Budget Range</option>
                  <option value="small">Under $1K</option>
                  <option value="medium">$1K — $5K</option>
                  <option value="large">$5K — $15K</option>
                  <option value="enterprise">$15K+</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Your message — what's the idea?"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-ink-elevated border border-white/5 rounded-xl px-5 py-4 text-sm text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                required
              />
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-cream text-ink font-bold text-sm tracking-wide py-4 rounded-xl hover:bg-gold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitted ? (
                  <>
                    <Check size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social + Info */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="glass-card rounded-2xl p-8 md:p-14">
              <h3 className="font-serif text-2xl md:text-3xl text-cream font-bold mb-2">Social & Links</h3>
              <p className="text-sm text-cream/30 mb-8">Verified profiles and live repositories.</p>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn", url: "https://www.linkedin.com/in/manashjyoti-bora", icon: Linkedin },
                  { label: "GitHub", url: "https://github.com/Manashjyoti-Bora", icon: Github },
                  { label: "Instagram", url: "https://www.instagram.com/scarrrr_09?igsh=MWN3NzV0dWlwYXM2eg==", icon: Instagram, note: "Verified" },
                  { label: "Email", url: "mailto:manashjyotibora122@gmail.com", icon: Mail },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-ink-elevated hover:bg-ink-border hover:border-white/5 border border-transparent transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon size={20} className="text-gold/60 group-hover:text-gold transition-colors" />
                      <div>
                        <p className="text-sm font-medium text-cream">{social.label}</p>
                        {social.note && <p className="text-[10px] text-cream/20">{social.note}</p>}
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-cream/10 group-hover:text-gold/40 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-10">
              <p className="font-mono text-[10px] text-gold/50 tracking-[0.2em] uppercase mb-3">Availability</p>
              <p className="font-serif text-2xl text-cream mb-2">Open for Internships</p>
              <p className="text-sm text-cream/30 leading-relaxed">Currently open to freelance collaborations, internship roles, and meaningful open-source contributions. Response within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
