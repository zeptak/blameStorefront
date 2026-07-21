import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-studio-950 px-5 py-14 text-studio-50 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-3xl font-bold tracking-[-0.06em]">BLAME<span className="text-brand-mist">.</span></Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-studio-400">Audio engineering, production, and tools for people who care how it sounds.</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-studio-500">Explore</p>
            <div className="flex flex-col gap-3 text-sm text-studio-300">
              <Link className="transition hover:text-brand-mist" to="/products">Gear & tools</Link>
              <Link className="transition hover:text-brand-mist" to="/products?type=rental">Equipment rental</Link>
              <Link className="transition hover:text-brand-mist" to="/products?type=digital">Digital products</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-studio-500">Studio</p>
            <div className="flex flex-col gap-3 text-sm text-studio-300">
              <Link className="transition hover:text-brand-mist" to="/about">About BLAME</Link>
              <a className="transition hover:text-brand-mist" href="mailto:hello@blame.cz">Contact engineers</a>
              <a className="transition hover:text-brand-mist" href="mailto:hello@blame.cz?subject=Rental%20enquiry">Rental enquiry</a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-studio-500">Say hello</p>
            <a href="mailto:hello@blame.cz" className="group inline-flex items-center gap-2 text-sm text-brand-mist">hello@blame.cz <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-2 text-sm text-studio-400 transition hover:text-brand-mist"><Instagram className="h-4 w-4" /> Instagram</a>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-studio-500 sm:flex-row"><span>© {new Date().getFullYear()} BLAME Sound & Production</span><span>Built around the signal.</span></div>
      </div>
    </footer>
  );
}
