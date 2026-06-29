/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-beige-dark/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-5 bg-gold-accent"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Showroom Acclaim</span>
            <span className="h-[1px] w-5 bg-gold-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
            The Decora Experience
          </h2>
          <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
            Read reflections on spatial transformations and artisan satisfaction from leading architects, designers, and private estate owners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-ivory/35 border border-beige-dark/30 p-8 flex flex-col justify-between rounded-none relative shadow-luxury hover:bg-white hover:border-gold-accent/40 transition-all duration-300"
              id={`testimonial-card-${test.id}`}
            >
              {/* Decorative Large Quote Mark */}
              <div className="absolute top-6 right-8 text-gold-accent/10 pointer-events-none">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center text-gold-accent mb-6">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                  ))}
                </div>

                {/* Text feedback */}
                <blockquote className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-8 italic font-light">
                  "{test.text}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="border-t border-beige-dark/20 pt-5 mt-auto flex flex-col">
                <span className="font-serif text-sm font-semibold text-charcoal tracking-wide">
                  {test.name}
                </span>
                <span className="text-[10px] text-gold-accent font-medium uppercase tracking-wider mt-1">
                  {test.role}
                </span>
                <span className="text-[9px] text-charcoal-light/50 font-mono tracking-wider mt-0.5">
                  {test.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
