/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { LayoutGrid, Trash2, Sliders, ShoppingCart, RefreshCw, ZoomIn, ZoomOut, Move } from "lucide-react";

export const RoomPlanner: React.FC = () => {
  const {
    stagedItems,
    addStagedItem,
    removeStagedItem,
    updateStagedItemPosition,
    updateStagedItemScale,
    clearStaging,
    activePlannerBackdrop,
    setActivePlannerBackdrop,
    addToCart
  } = useApp();

  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragItemStartOffset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  // Filter products that fit well as staging accessories
  const compatibleProducts = PRODUCTS.filter((p) =>
    ["Vases & Sculptures", "Decorative Accessories", "Lighting"].includes(p.category)
  );

  const backdrops = [
    {
      id: "living",
      name: "Charcoal Coffee Table",
      bgClass: "bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-charcoal",
      surfaceHtml: (
        <div className="absolute bottom-0 inset-x-0 h-28 bg-[#1D1D1D] border-t-4 border-[#C9A86A]/40 flex items-center justify-center">
          <div className="w-4/5 h-[4px] bg-[#222222] shadow-[0_15px_30px_rgba(0,0,0,0.8)]"></div>
        </div>
      )
    },
    {
      id: "console",
      name: "Floating Travertine Console",
      bgClass: "bg-gradient-to-b from-[#F2ECE4] to-[#DFD5C6] border-beige-dark",
      surfaceHtml: (
        <div className="absolute bottom-0 inset-x-0 h-24 bg-[#EBE3D5] border-t-8 border-[#DFD5C6] shadow-inner">
          <div className="absolute top-0 left-10 right-10 h-3 bg-white/40"></div>
        </div>
      )
    },
    {
      id: "bedside",
      name: "Floating Oak Bedside",
      bgClass: "bg-gradient-to-b from-[#FFFDF9] to-[#EAE3D2] border-beige",
      surfaceHtml: (
        <div className="absolute bottom-0 inset-x-0 h-32 bg-[#D3C4B1] border-t-2 border-[#C9A86A]">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#C2B29D]"></div>
        </div>
      )
    }
  ];

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent, itemId: string) => {
    e.preventDefault();
    setSelectedItemId(itemId);
    isDragging.current = true;

    const draggedItem = stagedItems.find((item) => item.id === itemId);
    if (!draggedItem || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Store starting click position
    dragStartPos.current = { x: clickX, y: clickY };
    // Convert current percentage back to px offset
    dragItemStartOffset.current = {
      x: (draggedItem.x / 100) * rect.width,
      y: (draggedItem.y / 100) * rect.height
    };

    const target = e.target as HTMLElement;
    target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !selectedItemId || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    // Calculate delta motion in pixels
    const dx = currentX - dragStartPos.current.x;
    const dy = currentY - dragStartPos.current.y;

    // Target new absolute px position
    const targetX = dragItemStartOffset.current.x + dx;
    const targetY = dragItemStartOffset.current.y + dy;

    // Convert back to percentages and constrain
    const percentageX = Math.max(5, Math.min(85, (targetX / rect.width) * 100));
    const percentageY = Math.max(10, Math.min(75, (targetY / rect.height) * 100));

    updateStagedItemPosition(selectedItemId, percentageX, percentageY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    const target = e.target as HTMLElement;
    try {
      target.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Bulk add staged items to shopping cart
  const handleAddAllToCart = () => {
    if (stagedItems.length === 0) return;
    
    stagedItems.forEach((staged) => {
      const prod = PRODUCTS.find((p) => p.id === staged.productId);
      if (prod) {
        addToCart(prod, 1, prod.finishes[0]);
      }
    });
  };

  const selectedStagedObject = stagedItems.find((item) => item.id === selectedItemId);

  return (
    <section id="planner" className="py-24 bg-[#FAF9F5] border-b border-beige-dark/25 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-gold-accent"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Bespoke Interactive Staging</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
            The Interactive Room Planner
          </h2>
          <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
            An elite design tool to visualize spatial elevations. Select furniture backdrops, arrange handcrafted accessory volumes, and scale them to see how they bring balance to your living surfaces before finalizing your curation.
          </p>
        </div>

        {/* Multi-Pane Workstation */}
        <div className="flex flex-col xl:flex-row gap-10 items-stretch">
          
          {/* Left Panel: Inventory Library */}
          <div className="w-full xl:w-1/4 bg-white border border-beige-dark/40 p-6 flex flex-col rounded-none shadow-luxury">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-4 pb-2 border-b border-beige/40 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-gold-accent" />
              <span>Accessories Library</span>
            </h3>
            <span className="text-[9px] uppercase tracking-widest text-charcoal-light/60 block mb-5">
              Click an item below to stage it on the wall canvas
            </span>

            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4 overflow-y-auto max-h-[480px] pr-2 scrollbar-thin">
              {compatibleProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => addStagedItem(p)}
                  className="group flex items-center gap-3 p-2.5 border border-beige/60 hover:border-gold-accent hover:bg-ivory/40 rounded-none cursor-pointer transition-all duration-300"
                  id={`stage-item-picker-${p.id}`}
                >
                  <div className="w-12 h-12 bg-ivory rounded-none overflow-hidden flex-shrink-0 border border-beige-dark/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-semibold text-charcoal truncate leading-tight">
                      {p.name}
                    </span>
                    <span className="text-[9px] text-gold-accent mt-0.5 uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Canvas Stage */}
          <div className="flex-1 flex flex-col gap-4">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap justify-between items-center gap-4 bg-white border border-beige-dark/40 p-4 rounded-none shadow-luxury">
              {/* Backdrop Selectors */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider text-charcoal-light/60 font-medium">Backdrop:</span>
                <div className="flex gap-2">
                  {backdrops.map((bd) => (
                    <button
                      key={bd.id}
                      onClick={() => {
                        setActivePlannerBackdrop(bd.id);
                        setSelectedItemId(null);
                      }}
                      className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] rounded-none border transition-all duration-300 cursor-pointer ${
                        activePlannerBackdrop === bd.id
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal hover:border-charcoal border-beige-dark/60"
                      }`}
                      id={`backdrop-tab-${bd.id}`}
                    >
                      {bd.name.split(" ")[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Utility Clear Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={clearStaging}
                  disabled={stagedItems.length === 0}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border border-beige-dark rounded-none text-charcoal hover:bg-charcoal hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-charcoal transition-all cursor-pointer"
                  id="staging-clear-btn"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Stage</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Board */}
            <div
              ref={containerRef}
              className={`relative h-[480px] w-full overflow-hidden border border-beige-dark/40 rounded-sm shadow-2xl transition-all duration-500 bg-cover ${
                backdrops.find((bd) => bd.id === activePlannerBackdrop)?.bgClass
              }`}
              id="room-planner-canvas"
            >
              {/* Backdrop Surface Graphic Rendering */}
              {backdrops.find((bd) => bd.id === activePlannerBackdrop)?.surfaceHtml}

              {/* Empty Canvas Placeholder */}
              {stagedItems.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/5">
                  <div className="border border-dashed border-beige-dark/60 p-8 flex flex-col items-center max-w-sm rounded-sm backdrop-blur-[2px] bg-white/20">
                    <Move className="w-8 h-8 text-gold-accent mb-3 stroke-[1.25] animate-pulse" />
                    <h4 className="font-serif text-base font-semibold text-charcoal mb-2">Stage is Empty</h4>
                    <p className="text-[11px] text-charcoal-light/80 leading-relaxed font-light">
                      Add handcrafted pieces from the library, then grab and drag them around the surface to compose your custom layout.
                    </p>
                  </div>
                </div>
              )}

              {/* Render Staged Items */}
              {stagedItems.map((item) => {
                const isSelected = selectedItemId === item.id;
                return (
                  <div
                    key={item.id}
                    onPointerDown={(e) => handlePointerDown(e, item.id)}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    className={`absolute select-none cursor-grab active:cursor-grabbing group transition-shadow duration-300 ${
                      isSelected ? "z-30" : "z-20"
                    }`}
                    style={{
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      transform: `translate(-50%, -50%) scale(${item.scale})`,
                      touchAction: "none"
                    }}
                    id={item.id}
                  >
                    {/* Active Controls Wrapper */}
                    <div
                      className={`relative p-2.5 rounded-sm border ${
                        isSelected
                          ? "border-gold-accent bg-white/10 shadow-2xl backdrop-blur-[1px]"
                          : "border-transparent group-hover:border-beige-dark/60"
                      }`}
                    >
                      {/* Product Image representation */}
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] pointer-events-none"
                        referrerPolicy="no-referrer"
                        decoding="async"
                      />

                      {/* Small Overlay Handle Details */}
                      {isSelected && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-charcoal text-white text-[8px] font-bold uppercase tracking-widest py-0.5 px-2 rounded shadow-lg whitespace-nowrap">
                          {item.productName.split(" ")[0]}
                        </div>
                      )}

                      {/* Small delete handle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeStagedItem(item.id);
                          setSelectedItemId(null);
                        }}
                        className="absolute -top-2.5 -right-2.5 bg-red-800 text-white p-1 rounded-full border border-white hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shadow-lg z-40"
                        title="Remove Piece"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Staging Parameters */}
          <div className="w-full xl:w-1/4 bg-white border border-beige-dark/40 p-6 flex flex-col justify-between rounded-none shadow-luxury">
            <div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-4 pb-2 border-b border-beige/40 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-gold-accent" />
                <span>Object Styling</span>
              </h3>

              {/* Active Item controller parameters */}
              {selectedStagedObject ? (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 bg-ivory border border-beige-dark/40 rounded-none text-[11px]">
                    <span className="text-charcoal-light/50 uppercase tracking-widest block mb-1">Selected Piece</span>
                    <span className="font-serif text-sm font-semibold text-charcoal block mb-2">{selectedStagedObject.productName}</span>
                    <div className="flex justify-between items-center text-[10px] text-charcoal-light font-medium">
                      <span>Coordinates:</span>
                      <span className="font-mono">{Math.round(selectedStagedObject.x)}% X, {Math.round(selectedStagedObject.y)}% Y</span>
                    </div>
                  </div>

                  {/* Scaling Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-medium text-charcoal-light">
                      <span className="uppercase tracking-wider">Object Scale</span>
                      <span className="font-mono text-charcoal">{Math.round(selectedStagedObject.scale * 100)}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ZoomOut className="w-4 h-4 text-charcoal-light/50" />
                      <input
                        type="range"
                        min="0.4"
                        max="2.0"
                        step="0.1"
                        value={selectedStagedObject.scale}
                        onChange={(e) => updateStagedItemScale(selectedStagedObject.id, parseFloat(e.target.value))}
                        className="w-full h-1 bg-beige border-none rounded-lg appearance-none cursor-pointer accent-gold-accent focus:outline-none"
                        id="scale-slider"
                      />
                      <ZoomIn className="w-4 h-4 text-charcoal-light/50" />
                    </div>
                  </div>

                  {/* Move guides */}
                  <p className="text-[10px] text-charcoal-light/70 leading-relaxed font-light pt-2 italic">
                    Tip: Hold and drag the product directly inside the canvas to reposition it onto the shelf.
                  </p>

                  {/* Direct delete option */}
                  <button
                    onClick={() => {
                      removeStagedItem(selectedStagedObject.id);
                      setSelectedItemId(null);
                    }}
                    className="w-full border border-red-800/30 hover:border-red-800 hover:bg-red-800 hover:text-white text-red-800 py-2 rounded-none text-[10px] font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id="staging-delete-btn"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Dismount Piece</span>
                  </button>
                </div>
              ) : (
                <div className="p-8 text-center border border-dashed border-beige-dark/50 rounded-none bg-ivory/30">
                  <Sliders className="w-6 h-6 text-beige-dark/60 mx-auto mb-2" />
                  <p className="text-[11px] text-charcoal-light/70 leading-relaxed font-light">
                    Select a placed object on the canvas above to calibrate its scale, sizing and alignment.
                  </p>
                </div>
              )}
            </div>

            {/* Entire Scene Bulk Buy Action */}
            <div className="border-t border-beige-dark/30 pt-6 mt-8 xl:mt-0">
              <div className="flex justify-between items-center text-[11px] font-medium text-charcoal-light mb-4">
                <span>Staged Objects:</span>
                <span className="font-mono text-charcoal font-bold">{stagedItems.length} items</span>
              </div>
              <button
                onClick={handleAddAllToCart}
                disabled={stagedItems.length === 0}
                className="w-full h-12 bg-charcoal text-white hover:bg-gold-accent hover:text-charcoal disabled:opacity-40 disabled:hover:bg-charcoal disabled:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] rounded-none cursor-pointer"
                id="staging-buy-all-btn"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add Scene to Selection</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
