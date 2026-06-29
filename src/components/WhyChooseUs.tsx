/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, ShieldCheck, Heart, Truck, MessageSquare, Gem } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const sellingPoints = [
    {
      icon: <Gem className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "Premium Quality Materials",
      description: "Authentic, raw-mineral natural materials including genuine Spanish Alabaster, Italian travertine stones, and solid milled jeweler's brass, designed to age elegantly.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "Carefully Curated Collections",
      description: "Never mass-produced. Every ornament, cushion, fluted urn, and custom wall art is hand-selected or hand-crafted in limited quantities to guarantee architectural exclusivity.",
    },
    {
      icon: <Heart className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "Modern Luxury Designs",
      description: "A sophisticated aesthetic balance centering quiet luxury. Timeless minimalist silhouettes designed to bring a calm, museum-grade layout to contemporary homes.",
    },
    {
      icon: <Truck className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "Delivery Across Sierra Leone",
      description: "Complimentary, safe white-glove transport to all Freetown sectors (Aberdeen, Hill Station, Juba) with customized logistics to Bo, Kenema, Makeni, and Lungi.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "WhatsApp Interior Concierge",
      description: "Direct real-time consultation with professional interior stylists on WhatsApp. Send us photos of your spaces, and we will recommend the perfect styling volumes.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-accent stroke-[1.25]" />,
      title: "Professional Post-Purchase Support",
      description: "Every item is shipped with full insurance coverage, custom heavy felt furniture-protective feet, and detailed guidelines on mineral and marble maintenance.",
    },
  ];

  return (
    <section className="py-24 bg-ivory border-b border-beige-dark/25 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-[1px] w-5 bg-gold-accent"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium font-sans">Our Commitments</span>
            <span className="h-[1px] w-5 bg-gold-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
            Why Choose Decora Gallery
          </h2>
          <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
            We provide a world-class luxury shopping experience from digital discovery to premium white-glove installation in your sanctuary.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellingPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/40 border border-beige-dark/40 p-8 rounded-none hover:shadow-luxury hover:bg-white hover:border-gold-accent/40 transition-all duration-300"
              id={`why-card-${index}`}
            >
              <div className="mb-4 inline-block p-3 bg-white border border-beige rounded-none">
                {point.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal tracking-wide mb-3">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light/85 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
