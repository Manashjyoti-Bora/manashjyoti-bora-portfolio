import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-9xl md:text-[12rem] font-bold text-cream/5 leading-none tracking-tighter mb-4">404</h1>
        <p className="font-mono text-[11px] text-gold/60 tracking-[0.3em] uppercase mb-6">Page Not Found</p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-bold mb-6 tracking-tight">This path doesn't exist.</h2>
        <p className="text-cream/30 mb-10 leading-relaxed">Every link here leads to a real, verified project. This one does not — which means it hasn't been built yet.</p>
        <Link href="/" className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 text-sm font-bold tracking-wide hover:bg-gold hover:text-ink transition-all duration-300 rounded-full">
          Return Home
        </Link>
      </div>
    </div>
  );
}
