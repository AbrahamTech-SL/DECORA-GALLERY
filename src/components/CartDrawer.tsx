/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { X, Minus, Plus, Trash2, ShoppingBag, ShieldCheck, MapPin, CheckCircle } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateCartQuantity,
    removeFromCart,
    clearCart
  } = useApp();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "success">("cart");
  
  // Checkout Form States
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliverySector, setDeliverySector] = useState("Freetown Hill Station");
  const [shippingMethod, setShippingMethod] = useState("whiteglove");

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = shippingMethod === "whiteglove" ? 0 : 45; // complimentary white-glove for premium feel
  const total = subtotal + deliveryFee;

  const formatPrice = (p: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(p);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !deliveryAddress) return;
    setCheckoutStep("success");
  };

  const handleResetCart = () => {
    clearCart();
    setCheckoutStep("cart");
    setIsCartOpen(false);
  };

  const sectors = [
    "Freetown Hill Station",
    "Aberdeen Peninsula, Freetown",
    "Wilkinson Road Sector, Freetown",
    "Juba Hills, Freetown",
    "Lakka Beach / Hamilton",
    "Bo City Center",
    "Kenema District",
    "Makeni Sector",
    "Lungi / Airport Peninsula"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-charcoal/65 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep("cart");
        }}
      ></div>

      {/* Slide Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-ivory shadow-2xl border-l border-beige-dark/50 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-beige-dark/30 flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-charcoal flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-accent stroke-[1.5]" />
              <span>Your Curated Selection</span>
            </h3>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep("cart");
              }}
              className="p-1.5 text-charcoal hover:text-gold-accent rounded-none border border-beige-dark transition-colors cursor-pointer"
              aria-label="Close cart"
              id="close-cart-btn"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Core Body Container based on checkout progress */}
          <div className="flex-1 overflow-y-auto p-6">
            
            {/* Step 1: Default Cart Listing */}
            {checkoutStep === "cart" && (
              <>
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8">
                    <ShoppingBag className="w-12 h-12 text-beige-dark/50 mb-4 stroke-[1]" />
                    <h4 className="font-serif text-md font-semibold text-charcoal mb-2">Selection is Empty</h4>
                    <p className="text-xs text-charcoal-light/60 leading-relaxed font-light">
                      Browse our Masterpieces or Interactive Planner to curate exceptional pieces for your spaces.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item, idx) => (
                      <div
                        key={`${item.product.id}-${item.selectedFinish}-${idx}`}
                        className="flex gap-4 pb-5 border-b border-beige-dark/20 items-start"
                        id={`cart-item-${item.product.id}`}
                      >
                        <div className="w-20 h-20 bg-white rounded-none overflow-hidden flex-shrink-0 border border-beige-dark/25">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-gold-accent font-semibold mb-0.5">
                            {item.product.category}
                          </span>
                          <h4 className="font-serif text-xs font-semibold text-charcoal leading-snug line-clamp-1">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-charcoal-light/60 mt-0.5 mb-2.5 block font-medium">
                            Finish: {item.selectedFinish}
                          </span>

                          <div className="flex items-center justify-between mt-auto">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-beige-dark/50 rounded-none h-8 px-2.5 bg-white/40">
                              <button
                                onClick={() => updateCartQuantity(item.product.id, item.selectedFinish, item.quantity - 1)}
                                className="p-0.5 text-charcoal hover:text-gold-accent transition-colors cursor-pointer"
                                id={`cart-decrease-${item.product.id}`}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono text-[11px] font-semibold text-charcoal px-2.5 select-none">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateCartQuantity(item.product.id, item.selectedFinish, item.quantity + 1)}
                                className="p-0.5 text-charcoal hover:text-gold-accent transition-colors cursor-pointer"
                                id={`cart-increase-${item.product.id}`}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Delete button only */}
                            <div className="flex items-center">
                              <button
                                onClick={() => removeFromCart(item.product.id, item.selectedFinish)}
                                className="text-charcoal-light/50 hover:text-red-800 transition-colors p-2"
                                id={`cart-delete-${item.product.id}`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step 2: Showroom Delivery Form */}
            {checkoutStep === "form" && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-5 animate-fadeIn">
                <h4 className="font-serif text-base font-semibold text-charcoal mb-4 pb-2 border-b border-beige-dark/30">
                  White-Glove Delivery Registration
                </h4>

                 <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Madam Aminata Kamara"
                    className="w-full h-11 px-4 text-xs border border-beige-dark bg-white rounded-none focus:outline-none focus:border-gold-accent"
                    id="checkout-name"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1.5">
                    Contact Phone Number (Call or WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +232 76 951 842"
                    className="w-full h-11 px-4 text-xs border border-beige-dark bg-white rounded-none focus:outline-none focus:border-gold-accent"
                    id="checkout-phone"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1.5">
                    Delivery Address Sector *
                  </label>
                  <select
                    value={deliverySector}
                    onChange={(e) => setDeliverySector(e.target.value)}
                    className="w-full h-11 px-4 text-xs border border-beige-dark bg-white rounded-none focus:outline-none focus:border-gold-accent font-medium text-charcoal"
                    id="checkout-sector"
                  >
                    {sectors.map((sec) => (
                      <option key={sec} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                </div>

                 <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1.5">
                    Specific Street, Gate Number, or Landmark *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="e.g. 42 Hill Cot Road, behind the Presidential Lodge, black gate"
                    className="w-full p-4 text-xs border border-beige-dark bg-white rounded-none focus:outline-none focus:border-gold-accent resize-none"
                    id="checkout-address"
                  />
                </div>

                {/* Delivery Option Switches */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-charcoal-light font-semibold block mb-1.5">
                    Transport Option
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 bg-white border border-beige-dark rounded-none cursor-pointer hover:border-gold-accent">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "whiteglove"}
                        onChange={() => setShippingMethod("whiteglove")}
                        className="accent-gold-accent"
                      />
                      <div className="flex flex-col text-[11px]">
                        <span className="font-semibold text-charcoal">White-Glove Courier Delivery</span>
                        <span className="text-charcoal-light/60 font-light mt-0.5">Complimentary. Insured, unpackaged, and styled in your room.</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-white border border-beige-dark rounded-none cursor-pointer hover:border-gold-accent">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "showroom"}
                        onChange={() => setShippingMethod("showroom")}
                        className="accent-gold-accent"
                      />
                      <div className="flex flex-col text-[11px]">
                        <span className="font-semibold text-charcoal">Visit Showroom Pick-Up</span>
                        <span className="text-charcoal-light/60 font-light mt-0.5">Pick up at 142 Wilkinson Road showroom, Freetown.</span>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-charcoal text-white hover:bg-gold-accent hover:text-charcoal transition-colors duration-300 font-semibold uppercase text-xs tracking-[0.2em] rounded-none mt-4 cursor-pointer"
                  id="checkout-submit-btn"
                >
                  Verify and Place Order
                </button>
              </form>
            )}

             {/* Step 3: Success Quote Layout */}
            {checkoutStep === "success" && (
              <div className="text-center py-6 px-4 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-gold-accent/10 border border-gold-accent rounded-none flex items-center justify-center mx-auto text-gold-accent">
                  <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                </div>

                <div>
                  <h4 className="font-serif text-lg font-semibold text-charcoal mb-2">Order Authenticated</h4>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed">
                    Thank you, <strong className="font-medium text-charcoal">{fullName}</strong>. Your luxury showroom voucher has been processed and compiled.
                  </p>
                </div>

                {/* Printable receipt card */}
                <div className="bg-white border border-beige-dark/50 p-5 rounded-none text-left text-[11px] font-mono space-y-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gold-accent"></div>
                  
                  <div className="flex justify-between border-b border-dashed border-beige pb-2">
                    <span className="font-bold">DECORA INVOICE</span>
                    <span className="text-gold-accent font-bold">#DG-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-charcoal-light/70">Client:</span>
                      <span className="font-medium text-charcoal truncate max-w-[180px]">{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light/70">Sector:</span>
                      <span className="font-medium text-charcoal">{deliverySector.split(",")[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light/70">Contact:</span>
                      <span className="font-medium text-charcoal">{phoneNumber}</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-beige pt-3 space-y-2">
                    <span className="font-bold text-[10px] uppercase block">Selected Masterpieces:</span>
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between text-[10px] text-charcoal-light">
                        <span>{item.quantity}x {item.product.name} ({item.selectedFinish})</span>
                        <span>[Ready to Stage]</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-dashed border-beige pt-3 space-y-1.5 font-bold text-charcoal">
                    <div className="flex justify-between">
                      <span>STAGING SPECIFICATIONS:</span>
                      <span>INCLUDED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DELIVERY METHOD:</span>
                      <span>WHITE-GLOVE COURIER</span>
                    </div>
                    <div className="flex justify-between text-xs border-t border-charcoal/10 pt-2 text-gold-accent">
                      <span>SHOWROOM QUOTE:</span>
                      <span>UPON CONSULTATION</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-center text-charcoal-light/50 italic leading-normal pt-2 font-sans">
                    A Decora Gallery representative will contact you on WhatsApp or via Phone Call within the next 30 minutes to finalize courier scheduling and secure bank-transfer or cash payment details.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      // Trigger window print helper
                      window.print();
                    }}
                    className="w-full h-11 bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white transition-all text-xs font-semibold uppercase tracking-widest rounded-none cursor-pointer"
                    id="print-receipt-btn"
                  >
                    Print / Download Invoice
                  </button>

                  <button
                    onClick={handleResetCart}
                    className="w-full h-11 bg-gold-accent text-charcoal hover:bg-gold-hover transition-colors text-xs font-semibold uppercase tracking-widest rounded-none cursor-pointer"
                    id="success-continue-btn"
                  >
                    Continue Exploring Catalog
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer Subtotal / Actions Block (Only visible when list is not empty and in main cart step) */}
          {cart.length > 0 && checkoutStep === "cart" && (
            <div className="p-6 border-t border-beige-dark/30 bg-white/60">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-[11px] text-charcoal-light font-medium">
                  <span>Curated Pieces:</span>
                  <span className="font-mono text-charcoal">{cart.reduce((sum, item) => sum + item.quantity, 0)} Items</span>
                </div>
                <div className="flex justify-between text-[11px] text-charcoal-light font-medium">
                  <span>White-Glove Transport:</span>
                  <span className="text-gold-accent font-semibold uppercase">Complimentary</span>
                </div>
                <div className="h-[1px] bg-beige-dark/30 my-2"></div>
                <div className="flex justify-between text-sm text-charcoal font-bold">
                  <span>Consultation Fee:</span>
                  <span className="text-gold-accent font-serif tracking-widest uppercase">Complimentary</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => setCheckoutStep("form")}
                  className="w-full h-12 bg-charcoal text-white hover:bg-gold-accent hover:text-charcoal transition-colors duration-300 font-semibold uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 rounded-none cursor-pointer"
                  id="checkout-step-btn"
                >
                  <span>Request Showroom Invoice</span>
                </button>
                <div className="flex justify-center items-center gap-1.5 text-[10px] text-charcoal-light/60 font-medium">
                  <ShieldCheck className="w-4 h-4 text-gold-accent" />
                  <span>Complimentary packaging & local courier included</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
