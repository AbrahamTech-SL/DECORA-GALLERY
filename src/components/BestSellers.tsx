/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { useApp } from "../context/AppContext";
import { Eye, Plus, ShoppingCart, Star } from "lucide-react";

export const BestSellers: React.FC = () => {
  const { setQuickViewProduct, addToCart } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Wall Décor",
    "Vases & Sculptures",
    "Lighting",
    "Decorative Accessories",
    "Office Styling Collection"
  ];

  // Listen to category clicks from the Collections bento-grid
  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const category = (e as CustomEvent).detail;
      if (category) {
        setSelectedCategory(category);
      }
    };
    window.addEventListener("filter-category", handleFilterEvent);
    return () => window.removeEventListener("filter-category", handleFilterEvent);
  }, []);

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const formatPrice = (p: number) => {
    // Elegant international currency format for luxury appeal
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(p);
  };

  return (
    <section id="bestsellers" className="py-24 bg-white border-b border-beige-dark/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-5 bg-gold-accent"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Prestige Pieces</span>
            <span className="h-[1px] w-5 bg-gold-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
            The Masterpieces Collection
          </h2>
          <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
            Our most sought-after, hand-curated designs. Each item is individually inspected and shipped with a signed certificate of artisan origin.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 border-b border-beige/40 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative pb-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "text-gold-accent font-semibold"
                  : "text-charcoal-light/60 hover:text-charcoal"
              }`}
              id={`filter-tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {cat === "Office Styling Collection" ? "Office" : cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-gold-accent animate-fadeIn"></span>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col h-full bg-white rounded-none overflow-hidden border border-beige-dark/30 hover:-translate-y-1 hover:shadow-xl hover:border-gold-accent/50 transition-all duration-250 ease-out"
              id={`product-card-${product.id}`}
            >
              {/* Image Container with Hover Action Bar */}
              <div className="relative aspect-[4/5] w-full bg-ivory overflow-hidden cursor-pointer" onClick={() => setQuickViewProduct(product)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />

                {/* Left Tag for New/Featured Items */}
                {product.featured && (
                  <span className="absolute top-4 left-4 bg-charcoal text-ivory text-[9px] uppercase tracking-[0.2em] font-medium py-1 px-2.5">
                    Signature
                  </span>
                )}

                {/* Action button overlay block */}
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/25 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Quick View Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="p-3.5 bg-ivory text-charcoal hover:bg-gold-accent hover:text-charcoal transition-colors duration-300 rounded-full shadow-lg"
                      title="Quick View Details"
                      aria-label="Quick View"
                    >
                      <Eye className="w-4 h-4 stroke-[2]" />
                    </button>
                    {/* Instant Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1, product.finishes[0]);
                      }}
                      className="p-3.5 bg-charcoal text-white hover:bg-gold-accent hover:text-charcoal transition-colors duration-300 rounded-full shadow-lg"
                      title="Instant Add to Selection"
                      aria-label="Add to Selection"
                    >
                      <Plus className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info Block */}
              <div className="p-5 flex flex-col flex-grow items-start">
                <span className="text-[10px] uppercase tracking-widest text-charcoal-light/50 font-medium mb-1.5">
                  {product.category}
                </span>
                
                <h3
                  onClick={() => setQuickViewProduct(product)}
                  className="font-serif text-base font-semibold text-charcoal tracking-wide mb-1.5 hover:text-gold-accent transition-colors duration-300 cursor-pointer line-clamp-1"
                >
                  {product.name}
                </h3>

                {/* Rating display */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center text-gold-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "fill-gold-accent" : "text-beige-dark/40"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-charcoal-light/60">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>

                <div className="flex items-center justify-between w-full mt-auto pt-3 border-t border-beige/40">
                  <span className="text-[10px] uppercase tracking-widest text-gold-accent font-medium">
                    Artisan Craft
                  </span>
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-gold-accent transition-colors duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
