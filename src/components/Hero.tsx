/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import heroLivingRoom from "../assets/images/hero_living_room_1782694519275.jpg";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToCatalog = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[92vh] md:h-[95vh] w-full overflow-hidden bg-charcoal text-ivory font-sans flex items-center">
      {/* Background Image Container with Premium Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLivingRoom}
          alt="Luxury living room styled with Decora Gallery pieces"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic dark overlays to focus text and ensure pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/30"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col items-start justify-center">
        {/* Subtle Brand Tag */}
        <div className="flex items-center gap-3 mb-6 animate-fadeIn">
          <span className="h-[1px] w-8 bg-gold-accent"></span>
          <span className="text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase text-gold-accent">
            The Art of Living
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white max-w-3xl mb-6">
          Elevating Spaces <br />
          <span className="italic font-light text-beige">Through Timeless Décor.</span>
        </h1>

        {/* Supporting text */}
        <p className="text-sm md:text-base text-beige max-w-xl mb-10 font-light leading-relaxed tracking-wide">
          Curated décor pieces designed to transform everyday spaces into extraordinary interiors. Handcrafted, architecturally inspired, and tailored for sophisticated living.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollToCatalog("#bestsellers")}
            className="group relative flex items-center justify-center gap-2 bg-gold-accent text-charcoal hover:bg-gold-hover transition-all duration-200 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] border border-gold-accent rounded-none cursor-pointer hover:shadow-lg hover:-translate-y-[1px]"
            id="hero-cta-shop"
          >
            <span>Shop Collection</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToCatalog("#collections")}
            className="group flex items-center justify-center gap-2 bg-transparent text-white hover:text-gold-accent hover:border-gold-accent transition-all duration-200 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/40 rounded-none cursor-pointer hover:bg-white/[0.03]"
            id="hero-cta-explore"
          >
            <span>Explore Catalog</span>
          </button>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-beige/50">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll to Discover</span>
        <button
          onClick={() => scrollToCatalog("#collections")}
          className="p-2 border border-beige/10 rounded-full hover:border-gold-accent hover:text-gold-accent transition-all duration-300 cursor-pointer"
          aria-label="Scroll Down"
          id="hero-scroll-btn"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
