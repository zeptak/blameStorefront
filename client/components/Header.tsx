import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Gear & tools", to: "/products" },
  { label: "About BLAME", to: "/about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-studio-950/95 text-studio-50 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mist font-display text-xl font-bold text-studio-950 transition group-hover:rotate-12">B</span>
          <span>
            <span className="block font-display text-lg font-bold leading-none tracking-[-0.04em]">BLAME</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-studio-400">Sound / Production</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map(({ label, to }) => (
            <Link key={to} to={to} className={cn("text-sm transition", location.pathname === to ? "text-brand-mist" : "text-studio-300 hover:text-white")}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-studio-200 hover:bg-white/10 hover:text-brand-mist" aria-label="Open cart"><ShoppingBag className="h-5 w-5" /></Button>
          </Link>
          <button className="rounded-md p-2 text-studio-200 hover:bg-white/10 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navigation.map(({ label, to }) => (
              <Link key={to} to={to} onClick={() => setIsOpen(false)} className={cn("rounded-lg px-3 py-3 text-sm", location.pathname === to ? "bg-white/10 text-brand-mist" : "text-studio-300")}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
