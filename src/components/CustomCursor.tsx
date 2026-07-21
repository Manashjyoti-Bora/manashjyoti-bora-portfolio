"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onReduce = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onReduce);

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      mq.removeEventListener("change", onReduce);
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [visible]);

  if (reduced || typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        animate={{ x: position.x - 8, y: position.y - 8, scale: hovering ? 2 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ mixBlendMode: "difference" }}
      >
        <div className={`w-4 h-4 rounded-full bg-gold transition-transform duration-300 ${hovering ? "opacity-80" : "opacity-60"}`} />
      </motion.div>
    </>
  );
}
