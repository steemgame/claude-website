"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#diensten", label: "Diensten" },
  { href: "/#over", label: "Over Bart" },
  { href: "/projecten", label: "Projecten" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasBg = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBg ? "bg-charcoal shadow-lg" : "bg-charcoal/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/beeldmerk.jpg"
              alt="Bart van de Ven beeldmerk"
              width={44}
              height={44}
              className="rounded object-contain bg-white p-0.5"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-sans font-bold text-white text-base leading-tight group-hover:text-blue transition-colors">
                Bart van de Ven
              </span>
              <span className="text-white/55 text-xs tracking-wide">
                Timmerwerken & Montage
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-blue transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue hover:bg-blue-dark text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
            >
              Offerte aanvragen
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-blue transition-colors py-3 border-b border-white/5 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue text-white text-center py-3 rounded font-semibold text-sm mt-3"
              onClick={() => setIsOpen(false)}
            >
              Offerte aanvragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
