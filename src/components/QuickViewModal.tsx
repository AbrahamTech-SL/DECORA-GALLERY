/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { X, Minus, Plus, ShoppingBag, ShieldCheck, HelpCircle, LayoutGrid } from "lucide-react";

export const QuickViewModal: React.FC = () => {
  const {
    activeQuickViewProduct,
    setQuickViewProduct,
    addToCart,
    addStagedItem,
    setIsCartOpen
  } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("");

  // Reset local states when active product changes
  useEffect(() => {
    if (activeQuickViewProduct) {
      setQuantity(1);
      setSelectedFinish(activeQuickViewProduct.finishes[0]);
    }
  }, [activeQuickViewProduct]);

  if (!activeQuickViewProduct) return null;

  const product = activeQuickViewProduct;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedFinish);
    setQuickViewProduct(null); // Close modal
    setIsCartOpen(true); // Open cart to show item addition
  };

  const handleStageOnCanvas = () => {
    addStagedItem(product);
    setQuickViewProduct(null); // Close modal
    
    // Scroll directly to Room Planner section
    setTimeout(() => {
      const target = document.querySelector("#planner");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(p);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setQuickViewProduct(null)}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-ivory w-full max-w-5xl rounded-none shadow-2xl overflow-hidden border border-beige-dark/40 z-10 max-h-[95vh] md:max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 text-charcoal hover:text-gold-accent bg-ivory/80 backdrop-blur-sm border border-beige-dark rounded-none transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: High-Res Image Showcase */}
        <div className="relative w-full md:w-1/2 bg-white flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            id="modal-product-img"
          />
          {product.featured && (
            <span className="absolute top-6 left-6 bg-charcoal text-ivory text-[9px] uppercase tracking-[0.25em] font-medium py-1 px-3">
              Studio Signature
            </span>
          )}
        </div>

        {/* Right Column: Comprehensive Meta, Selections & Shipping */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto bg-ivory max-h-[60vh] md:max-h-none">
          {/* Breadcrumb / Category */}
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-accent font-semibold mb-2">
            {product.category}
          </span>

          {/* Title */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal tracking-wide mb-3 leading-tight">
            {product.name}
          </h2>

          {/* Elegant Showroom Label */}
          <div className="font-serif text-sm tracking-wider uppercase font-semibold text-gold-accent mb-4">
            Showroom Curation Piece
          </div>

          <div className="h-[1px] bg-beige-dark/30 w-full mb-5"></div>

          {/* Description */}
          <p className="text-xs md:text-sm text-charcoal-light leading-relaxed mb-6 font-light">
            {product.description}
          </p>

          {/* Handcrafting Bullet Points */}
          <div className="bg-white/50 border border-beige-dark/30 p-4 rounded-none mb-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-accent" />
              <span>Artisan Specifications</span>
            </h4>
            <ul className="text-[11px] text-charcoal-light/90 space-y-2 font-light">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-gold-accent mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Dimensions / Materials Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-[11px] border-b border-beige-dark/30 pb-5">
            <div>
              <span className="text-charcoal-light/60 uppercase tracking-widest block mb-1">Dimensions</span>
              <span className="font-mono text-charcoal font-medium">{product.dimensions}</span>
            </div>
            <div>
              <span className="text-charcoal-light/60 uppercase tracking-widest block mb-1">Materials</span>
              <span className="text-charcoal font-medium">{product.materials}</span>
            </div>
          </div>

          {/* Customize Finish Option */}
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal-light/70 font-semibold block mb-3">
              Select Curated Finish / Inlay
            </span>
            <div className="flex flex-wrap gap-2.5">
              {product.finishes.map((fin) => (
                <button
                  key={fin}
                  onClick={() => setSelectedFinish(fin)}
                  className={`px-4 py-2 text-[10px] font-medium tracking-[0.1em] rounded-none border transition-all duration-300 cursor-pointer ${
                    selectedFinish === fin
                      ? "bg-charcoal text-white border-charcoal"
                      : "bg-transparent text-charcoal-light hover:text-charcoal border-beige-dark/60 hover:border-charcoal"
                  }`}
                  id={`finish-btn-${fin.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {fin}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Actions Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-auto pt-4 border-t border-beige-dark/30">
            {/* Quantity Controls */}
            <div className="flex items-center justify-between border border-beige-dark/60 rounded-none h-12 px-4 bg-white/60 sm:w-32">
              <button
                onClick={handleDecrease}
                className="p-1 text-charcoal hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Decrease quantity"
                id="quantity-decrease-btn"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-xs font-semibold text-charcoal select-none px-3">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="p-1 text-charcoal hover:text-gold-accent transition-colors cursor-pointer"
                aria-label="Increase quantity"
                id="quantity-increase-btn"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Main Action Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex-1 h-12 bg-gold-accent text-charcoal hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] rounded-none cursor-pointer"
              id="add-to-cart-modal-btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Curated Selection</span>
            </button>
          </div>

          {/* Interactive Staging Trigger Shortcut */}
          <button
            onClick={handleStageOnCanvas}
            className="w-full mt-3 h-12 bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] rounded-none cursor-pointer"
            id="stage-on-canvas-modal-btn"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Interactive Space Planner</span>
          </button>

          {/* Shipping Policy and Showroom Service */}
          <div className="mt-5 flex items-center gap-2 justify-center text-[10px] text-charcoal-light/60 font-medium">
            <ShieldCheck className="w-4 h-4 text-gold-accent" />
            <span>Complimentary courier to Freetown, Aberdeen, and Bo in 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};
