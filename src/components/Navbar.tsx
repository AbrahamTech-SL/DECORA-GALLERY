/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { ShoppingBag, Menu, X, ShieldCheck } from "lucide-react";

export const Navbar: React.FC = () => {
  const { cart, setIsCartOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Collections", href: "#collections" },
    { label: "Best Sellers", href: "#bestsellers" },
    { label: "Inspiration", href: "#inspiration" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro-banner for premium utility feel */}
      <div className="w-full bg-charcoal text-ivory text-[10px] tracking-[0.2em] uppercase py-2.5 px-6 flex justify-between items-center border-b border-charcoal-light/10 font-sans">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-accent" />
          <span className="font-medium">White-Glove Delivery Across Sierra Leone</span>
        </div>
        <div className="hidden md:flex items-center gap-5 font-light">
          <span>Showroom: 109 Wilkinson Road, Freetown</span>
          <span>•</span>
          <span>WhatsApp: +232 99 976888</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-250 ease-out font-sans ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2 border-b border-[#E8DED1]/40 shadow-md shadow-black/[0.03]"
            : "bg-white/80 backdrop-blur-md py-4.5 border-b border-[#E8DED1]/15"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-gold-accent transition-colors p-1"
            aria-label="Toggle Menu"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>

          {/* Elegant Logo / Wordmark with modern interior arch design */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#"); }}
            className="flex items-center gap-2.5 tracking-[0.2em] text-charcoal select-none group"
            id="logo-link"
          >
            <svg className="w-7 h-7 text-gold-accent stroke-[1.2] transition-transform duration-500 group-hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 20V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V20" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 20H21" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-base font-bold uppercase tracking-[0.25em] group-hover:text-gold-accent transition-colors duration-300">
                DECORA
              </span>
              <span className="text-[7.5px] font-light uppercase tracking-[0.4em] mt-0.5 text-charcoal-light/80 group-hover:text-gold-accent transition-colors duration-300">
                GALLERY
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[10.5px] uppercase tracking-[0.2em] font-medium text-charcoal">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="relative py-1 hover:text-gold-accent transition-colors duration-300 group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4">
            {/* Showroom Direct WhatsApp CTA shortcut */}
            <a
              href="https://wa.me/23299976888?text=Hello%20Decora%20Gallery,%20I%20would%20like%20to%20inquire%20about%20your%20curated%20luxury%20pieces."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-white bg-charcoal hover:bg-gold-accent hover:text-charcoal transition-all duration-300 py-2.5 px-4.5 rounded-none border border-charcoal shadow-sm"
              id="wa-navbar-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.212 3.464 8.381-.003 6.535-5.328 11.859-11.859 11.859-2.003-.001-3.974-.51-5.729-1.48L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.725 1.45 5.389 0 9.773-4.384 9.777-9.778.002-2.613-1.013-5.07-2.86-6.917C16.446 2.062 13.99 1.045 11.861 1.045 6.471 1.045 2.087 5.429 2.083 10.822c-.001 1.629.431 3.218 1.251 4.606l-.1.365-1.104 4.033 4.127-1.082.34-.201zM17.13 15.39c-.287-.144-1.7-.84-1.967-.938-.268-.098-.463-.146-.659.146-.195.293-.756.951-.927 1.146-.171.195-.341.219-.628.075-.287-.144-1.21-.446-2.305-1.424-.853-.761-1.43-1.7-1.597-1.993-.167-.293-.018-.451.126-.593.13-.127.287-.341.43-.512.144-.171.191-.293.287-.488.096-.195.048-.366-.024-.512-.072-.146-.659-1.586-.902-2.172-.237-.571-.478-.494-.659-.503-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.293-1.024 1.001-1.024 2.44 0 1.439 1.048 2.83 1.195 3.025.146.195 2.062 3.149 4.996 4.414.698.301 1.243.481 1.668.616.701.223 1.34.191 1.845.116.563-.083 1.699-.694 1.942-1.365.243-.672.243-1.246.171-1.366-.073-.12-.268-.219-.556-.363z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            {/* Shopping Cart Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-charcoal hover:text-gold-accent transition-colors duration-300 cursor-pointer"
              aria-label="Open Shopping Bag"
              id="navbar-cart-btn"
            >
              <ShoppingBag className="w-5.5 h-5.5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-accent text-ivory text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#E8DED1]/50 shadow-lg py-6 px-8 flex flex-col gap-4 text-[12px] uppercase tracking-[0.15em] font-medium text-charcoal animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2 border-b border-beige/20 hover:text-gold-accent"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/23299976888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-4 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.2em] py-3 text-center hover:bg-gold-accent transition-colors font-semibold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.212 3.464 8.381-.003 6.535-5.328 11.859-11.859 11.859-2.003-.001-3.974-.51-5.729-1.48L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.725 1.45 5.389 0 9.773-4.384 9.777-9.778.002-2.613-1.013-5.07-2.86-6.917C16.446 2.062 13.99 1.045 11.861 1.045 6.471 1.045 2.087 5.429 2.083 10.822c-.001 1.629.431 3.218 1.251 4.606l-.1.365-1.104 4.033 4.127-1.082.34-.201zM17.13 15.39c-.287-.144-1.7-.84-1.967-.938-.268-.098-.463-.146-.659.146-.195.293-.756.951-.927 1.146-.171.195-.341.219-.628.075-.287-.144-1.21-.446-2.305-1.424-.853-.761-1.43-1.7-1.597-1.993-.167-.293-.018-.451.126-.593.13-.127.287-.341.43-.512.144-.171.191-.293.287-.488.096-.195.048-.366-.024-.512-.072-.146-.659-1.586-.902-2.172-.237-.571-.478-.494-.659-.503-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.293-1.024 1.001-1.024 2.44 0 1.439 1.048 2.83 1.195 3.025.146.195 2.062 3.149 4.996 4.414.698.301 1.243.481 1.668.616.701.223 1.34.191 1.845.116.563-.083 1.699-.694 1.942-1.365.243-.672.243-1.246.171-1.366-.073-.12-.268-.219-.556-.363z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
};
