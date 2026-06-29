/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Instagram, Facebook, ArrowRight, ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top block: Brand, Categories and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-charcoal-light/30">
          
          {/* Brand Logo Info */}
          <div className="space-y-6">
            <a href="#" className="flex flex-col tracking-[0.25em] text-white uppercase group select-none">
              <span className="font-serif text-2xl font-semibold text-white group-hover:text-gold-accent transition-colors">DECORA</span>
              <span className="text-[10px] font-light uppercase tracking-[0.4em] -mt-1 text-beige group-hover:text-gold-accent transition-colors">GALLERY</span>
            </a>
            <p className="text-xs text-beige/70 leading-relaxed font-light">
              Museum-grade decorative objects, hand-thrown clay urns, solid travertine sculptures, and bespoke cushions designed to elevate sophisticated living.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-beige/10 rounded-full hover:border-gold-accent hover:text-gold-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-beige/10 rounded-full hover:border-gold-accent hover:text-gold-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-6">Product Catalog</h4>
            <ul className="text-xs space-y-3.5 text-beige/80 font-light">
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Wall Décor & Art</a></li>
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Vases & Hand-thrown Sculptures</a></li>
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Spanish Alabaster Lighting</a></li>
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Decorative Trays & Accessories</a></li>
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Office Styling Collections</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-6">Quick Navigation</h4>
            <ul className="text-xs space-y-3.5 text-beige/80 font-light">
              <li><a href="#collections" className="hover:text-gold-accent transition-colors">Explore Collections</a></li>
              <li><a href="#bestsellers" className="hover:text-gold-accent transition-colors">Browse Bestsellers</a></li>
              <li><a href="#planner" className="hover:text-gold-accent transition-colors">Staging Room Planner</a></li>
              <li><a href="#about" className="hover:text-gold-accent transition-colors">Artisan Heritage Story</a></li>
              <li><a href="#contact" className="hover:text-gold-accent transition-colors">Showroom Visit Info</a></li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-6">Private Correspondence</h4>
            <p className="text-xs text-beige/70 leading-relaxed font-light">
              Subscribe to receive exclusive access to capsule collection releases, VIP catalog showcases, and seasonal interior lookbooks.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-beige/30 focus-within:border-gold-accent py-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-transparent text-xs text-white placeholder-beige/40 focus:outline-none pr-8 font-light"
                id="footer-email-input"
              />
              <button
                type="submit"
                className="absolute right-0 p-1 text-beige hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-2 text-[10px] text-gold-accent font-semibold uppercase tracking-wider animate-fadeIn">
                <ShieldCheck className="w-4 h-4" />
                <span>Subscription authenticated. Welcome.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Block: Legal notes & scroll to top */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-beige/50 font-medium">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            <span>&copy; {currentYear} Decora Gallery. All Rights Reserved.</span>
            <span>•</span>
            <span>Showroom: 109 Wilkinson Road (next to Kingdom Hall), Freetown, Sierra Leone</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-gold-accent transition-colors cursor-pointer group uppercase tracking-widest text-[9px] font-semibold"
            id="back-to-top-btn"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
