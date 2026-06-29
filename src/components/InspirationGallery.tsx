/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { INSPIRATION_SCENES } from "../data";
import { useApp } from "../context/AppContext";
import { PRODUCTS } from "../data";
import { Eye, HelpCircle, Info, Plus } from "lucide-react";

export const InspirationGallery: React.FC = () => {
  const { setQuickViewProduct, addToCart } = useApp();
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const activeScene = INSPIRATION_SCENES[activeSceneIdx];

  const handleHotspotClick = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      setQuickViewProduct(product);
    }
  };

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(p);
  };

  return (
    <section id="inspiration" className="py-24 bg-white border-b border-beige-dark/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-gold-accent"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Editorial Inspiration</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
            The Living Lookbook
          </h2>
          <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
            Interactive, designer-styled spaces showing our artisanal objects in high-end environments. Hover or click the golden pulse pins to inspect the individual styling elements used in each vignette.
          </p>
        </div>

        {/* Scene Selection Tabs */}
        <div className="flex gap-4 md:gap-8 border-b border-beige/40 pb-3 mb-12 overflow-x-auto scrollbar-none">
          {INSPIRATION_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => {
                setActiveSceneIdx(idx);
                setActiveHotspotId(null);
              }}
              className={`relative pb-3 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeSceneIdx === idx
                  ? "text-gold-accent font-semibold"
                  : "text-charcoal-light/50 hover:text-charcoal"
              }`}
              id={`scene-tab-${scene.id}`}
            >
              0{idx + 1}. {scene.title}
              {activeSceneIdx === idx && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-gold-accent"></span>
              )}
            </button>
          ))}
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Left Column: Huge Interactive Image Canvas */}
          <div className="w-full lg:w-2/3 relative" id="lookbook-canvas-container">
            {/* Visual Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-charcoal overflow-hidden shadow-2xl rounded-none border border-beige-dark/30 select-none">
              <img
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-cover transition-opacity duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              {/* Hotspots overlay */}
              {activeScene.hotspots.map((spot) => (
                <div
                  key={spot.productId}
                  className="absolute"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  {/* Pin button with ping animation */}
                  <div className="relative flex items-center justify-center">
                    <button
                      onMouseEnter={() => setActiveHotspotId(spot.productId)}
                      onMouseLeave={() => setActiveHotspotId(null)}
                      onClick={() => handleHotspotClick(spot.productId)}
                      className="w-6 h-6 bg-gold-accent/90 rounded-full flex items-center justify-center text-charcoal border border-white shadow-xl hover:bg-charcoal hover:text-gold-accent transition-all duration-300 relative z-20 cursor-pointer"
                      aria-label={`Inspect ${spot.productName}`}
                      id={`hotspot-${spot.productId}`}
                    >
                      <span className="text-[9px] font-bold">+</span>
                    </button>
                    {/* Ring Pulse effect */}
                    <span className="absolute inline-flex h-10 w-10 rounded-full bg-gold-accent/45 opacity-75 animate-ping z-10"></span>
                  </div>

                  {/* Micro Floating Product Info Card */}
                  {(activeHotspotId === spot.productId) && (
                    <div
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 bg-charcoal text-white text-[11px] p-3 shadow-2xl border border-gold-accent rounded-none w-44 pointer-events-none animate-fadeIn flex flex-col gap-1"
                    >
                      <span className="font-serif font-semibold text-xs text-white leading-tight">
                        {spot.productName}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-beige/50 mt-1">
                        Click to inspect piece
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Corner Tip label */}
            <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm border border-beige-dark/20 py-1.5 px-3 rounded-none flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-beige font-medium">
              <Info className="w-3.5 h-3.5 text-gold-accent" />
              <span>Hover pulse pins to inspect</span>
            </div>
          </div>

          {/* Right Column: Editorial Scene Description & Staggered Shopping Guide */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between" id="lookbook-story-container">
            <div>
              <span className="font-mono text-xs text-gold-accent tracking-widest block mb-2">LOOK {activeSceneIdx + 1}</span>
              <h3 className="font-serif text-2xl font-semibold text-charcoal tracking-wide mb-4">
                {activeScene.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed mb-8 font-light">
                {activeScene.description}
              </p>
            </div>

            {/* Product items inside this scene list */}
            <div className="border-t border-beige-dark/30 pt-6 mt-auto">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal mb-4">
                Styled Products in This Look
              </h4>
              <div className="space-y-4">
                {activeScene.hotspots.map((spot) => {
                  const fullProduct = PRODUCTS.find((p) => p.id === spot.productId);
                  if (!fullProduct) return null;
                  return (
                    <div
                      key={spot.productId}
                      onClick={() => handleHotspotClick(spot.productId)}
                      className="group flex items-center justify-between p-3 border border-beige-dark/30 hover:border-gold-accent hover:bg-ivory/40 rounded-none transition-all duration-300 cursor-pointer"
                      id={`scene-prod-item-${spot.productId}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-none overflow-hidden bg-white border border-beige-dark/20">
                          <img
                            src={fullProduct.image}
                            alt={fullProduct.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-serif text-xs font-semibold text-charcoal group-hover:text-gold-accent transition-colors">
                            {fullProduct.name}
                          </span>
                          <span className="font-mono text-[10px] text-charcoal-light/60">
                            {fullProduct.dimensions}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 border border-beige-dark rounded-full group-hover:border-gold-accent group-hover:bg-gold-accent group-hover:text-charcoal transition-all">
                          <Eye className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
