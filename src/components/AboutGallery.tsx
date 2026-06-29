/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import showroomVases from "../assets/images/showroom_vases_1782694530808.jpg";
import { ArrowRight, Compass, Shield, Award } from "lucide-react";

export const AboutGallery: React.FC = () => {
  const handleScrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-ivory border-b border-beige-dark/25 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Visual Storytelling */}
          <div className="w-full lg:w-1/2 relative" id="about-image-column">
            {/* Main Showroom Image */}
            <div className="aspect-[4/3] w-full bg-charcoal overflow-hidden shadow-2xl rounded-none border border-beige-dark/30 relative z-10">
              <img
                src={showroomVases}
                alt="Decora Gallery Boutique Showroom"
                className="w-full h-full object-cover opacity-95 hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Visual background accents */}
            <div className="absolute top-[-20px] left-[-20px] w-48 h-48 bg-beige/30 -z-0 rounded-none"></div>
            <div className="absolute bottom-[-30px] right-[-30px] w-64 h-64 bg-gold-accent/5 -z-0 rounded-none"></div>

            {/* Float badge for premium legacy feeling */}
            <div className="absolute bottom-6 left-6 z-20 bg-charcoal text-white p-6 max-w-xs shadow-xl rounded-none border-l-4 border-gold-accent">
              <span className="font-serif text-3xl font-bold text-gold-accent block mb-1">Est. 2018</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-beige block font-medium">
                Pioneering Modern Luxury Home Curation in West Africa
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narration */}
          <div className="w-full lg:w-1/2 flex flex-col items-start" id="about-text-column">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-gold-accent"></span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Our Heritage</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal mb-6 leading-tight">
              Bespoke Artistry. <br />
              <span className="italic font-light text-charcoal-light">Unrivaled Craftsmanship.</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-sm text-charcoal-light leading-relaxed mb-6 font-light">
              Decora Gallery was founded with a singular, uncompromising vision: to curate and craft exceptional, gallery-grade decorative accessories and styling pieces that turn residential spaces into private sanctuaries.
            </p>
            
            <p className="text-sm text-charcoal-light leading-relaxed mb-8 font-light">
              We source our raw minerals and precious stones from historical quarries and collaborate with master artisans worldwide—from fluted ceramic throwers in traditional workshops to gilders who delicately apply fine gold leaf. Every single silhouette is chosen for its structural integrity, balance of negative space, and architectural honesty.
            </p>

            {/* Core Values Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full border-t border-beige-dark/30 pt-8 mb-8 text-[11px] uppercase tracking-wider text-charcoal font-medium">
              <div className="flex flex-col gap-2">
                <Compass className="w-5 h-5 text-gold-accent stroke-[1.5]" />
                <span>Curation First</span>
                <span className="text-[10px] text-charcoal-light/60 lowercase normal-case leading-relaxed font-light mt-1">
                  Never mass-produced. Each collection is carefully tailored.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Shield className="w-5 h-5 text-gold-accent stroke-[1.5]" />
                <span>Pure Materials</span>
                <span className="text-[10px] text-charcoal-light/60 lowercase normal-case leading-relaxed font-light mt-1">
                  Real Spanish Alabaster, Italian Travertine, and solid brass.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="w-5 h-5 text-gold-accent stroke-[1.5]" />
                <span>Artisan Origin</span>
                <span className="text-[10px] text-charcoal-light/60 lowercase normal-case leading-relaxed font-light mt-1">
                  Signed authenticity certificates with every piece.
                </span>
              </div>
            </div>

            {/* Visit CTA */}
            <button
              onClick={handleScrollToContact}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-gold-accent transition-colors duration-200"
              id="about-cta-visit"
            >
              <span>Visit our Freetown Showroom</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-gold-accent" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
