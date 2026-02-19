"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { Diamond } from "lucide-react";

const navLinks = [
  { label: "Why Eisberg", href: "#" },
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Diamond className="h-6 w-6 text-clearwater-500 fill-clearwater-500" />
          <span className="text-lg font-bold tracking-tight text-charcoal">
            Eisberg Analytics
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 transition-colors hover:text-clearwater-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-clearwater-500"
          >
            Login
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-clearwater-500"
          >
            Contact Us
          </a>
          <a href="#contact">
            <Button className="rounded-md bg-clearwater-500 px-5 text-sm font-semibold text-white hover:bg-clearwater-600">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-cream px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-charcoal/70"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-black/5" />
            <a href="#" className="text-sm font-medium text-charcoal/70">
              Login
            </a>
            <a href="#contact" className="text-sm font-medium text-charcoal/70">
              Contact Us
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="mt-2 w-full rounded-md bg-clearwater-500 text-sm font-semibold text-white hover:bg-clearwater-600">
                Get Started
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
