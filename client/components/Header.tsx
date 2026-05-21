import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-primary text-sm">BLAME</span>
              <span className="text-xs text-muted-foreground leading-none">
                Sound & Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
              >
                <ShoppingCart className="w-5 h-5 text-primary" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground hover:text-primary transition block py-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition block py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
