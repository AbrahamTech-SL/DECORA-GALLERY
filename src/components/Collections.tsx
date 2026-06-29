/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { COLLECTIONS } from "../data";
import { ArrowRight } from "lucide-react";

export const Collections: React.FC = () => {
  const handleCollectionClick = (categoryName: string) => {
    // Scroll to best sellers and set category filter (handled by active category state in App/Bestsellers)
    const targetElement = document.querySelector("#bestsellers");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    
    // Dispatch custom event to notify BestSellers component to change category
    const event = new CustomEvent("filter-category", { detail: categoryName });
    window.dispatchEvent(event);
  };

  return (
    <section id="collections" className="py-24 bg-ivory border-b border-beige-dark/25 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-gold-accent"></span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Curated Assortments</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
              Featured Collections
            </h2>
            <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
              Explore bespoke architectural objects and soft furnishings styled by interior artists to bring structural harmony to your living and working environments.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleCollectionClick("All")}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-gold-accent transition-colors duration-300"
              id="collections-view-all"
            >
              <span>Explore All Curated Pieces</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-gold-accent" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, index) => (
            <div
              key={col.id}
              onClick={() => handleCollectionClick(col.name)}
              className="group relative h-[420px] bg-charcoal overflow-hidden border border-beige-dark/30 rounded-none cursor-pointer transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gold-accent/50"
              id={`col-card-${col.id}`}
            >
              {/* Image Container with Custom Zoom and Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              </div>

              {/* Card Meta Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-8 flex flex-col justify-end items-start">
                <span className="font-mono text-[10px] text-gold-accent tracking-widest uppercase mb-1.5 font-medium">
                  {col.itemCount} Curated Pieces
                </span>
                
                <h3 className="font-serif text-2xl font-semibold text-white tracking-wide mb-2 group-hover:text-gold-accent transition-colors duration-300">
                  {col.name}
                </h3>
                
                <p className="text-xs text-beige/80 line-clamp-2 mb-6 font-light leading-relaxed max-w-sm">
                  {col.description}
                </p>

                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white group-hover:text-gold-accent transition-colors duration-300 mt-2">
                  <span>View Curation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Decorative top border highlight on hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-gold-accent transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
