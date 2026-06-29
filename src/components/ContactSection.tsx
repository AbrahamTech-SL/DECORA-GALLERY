/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, ShieldAlert, Navigation } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [activeMapLayer, setActiveMapLayer] = useState<"standard" | "landmarks">("standard");

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-gold-accent stroke-[1.5]" />,
      label: "Flagship Showroom Location",
      value: "109 Wilkinson Road (next to Kingdom Hall), Freetown, Sierra Leone",
      subValue: "Serving elegant homes and luxury office spaces across Sierra Leone with custom styling."
    },
    {
      icon: <Phone className="w-5 h-5 text-gold-accent stroke-[1.5]" />,
      label: "Direct WhatsApp Lines",
      value: "+232 99 976888 / +232 99 848899",
      subValue: "Chat with our interior styling specialists instantly (Monday - Saturday 9am to 7pm)."
    },
    {
      icon: <Mail className="w-5 h-5 text-gold-accent stroke-[1.5]" />,
      label: "Electronic Correspondence",
      value: "concierge@decoragallery.com",
      subValue: "For design proposals, catalog orders, architectural specifications, and partnerships."
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-accent stroke-[1.5]" />,
      label: "Showroom Business Hours",
      value: "Monday - Saturday: 09:00 AM - 07:00 PM",
      subValue: "Sunday Curation: Open exclusively by pre-scheduled private appointment."
    }
  ];

  const landmarks = [
    { name: "Kingdom Hall", dist: "Next Door" },
    { name: "Lumley Roundabout", dist: "4 mins south" },
    { name: "Aberdeen Junction", dist: "3 mins north" },
    { name: "Congo Cross Sector", dist: "6 mins northeast" }
  ];

  return (
    <section id="contact" className="py-24 bg-ivory border-b border-beige-dark/25 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-gold-accent"></span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-medium">Flagship Sanctuary</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">
              Visit Decora Gallery
            </h2>
            <p className="text-sm text-charcoal-light/80 mt-4 leading-relaxed font-light">
              We welcome clients to experience our textures, finishes, and spatial scale firsthand. Our showroom provides a calm, quiet luxury space designed to stimulate interior inspiration.
            </p>
          </div>
        </div>

        {/* Contact info grid paired with custom interactive map */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Column: Coordinates details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8" id="contact-info-column">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex flex-col items-start p-6 bg-white border border-beige-dark/30 rounded-none shadow-luxury">
                  <div className="p-2.5 bg-ivory border border-beige-dark/30 rounded-none mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal mb-1.5">
                    {info.label}
                  </h3>
                  <p className="text-xs font-semibold text-charcoal mb-2 leading-relaxed">
                    {info.value}
                  </p>
                  <p className="text-[11px] text-charcoal-light/70 leading-relaxed font-light">
                    {info.subValue}
                  </p>
                </div>
              ))}
            </div>

             {/* Direct WhatsApp Concierge Bar */}
            <div className="bg-charcoal text-ivory p-6 rounded-none border-l-4 border-gold-accent flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 mt-6 shadow-xl">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-accent block font-medium mb-1">Direct Consultation</span>
                <h4 className="font-serif text-base font-semibold text-white">Interactive WhatsApp Concierge</h4>
                <p className="text-[11px] text-beige/70 font-light mt-1 max-w-sm">
                  Send photos of your living spaces, and our interior designers will map out recommended styling objects.
                </p>
              </div>
              <a
                href="https://wa.me/23299976888?text=Hello%20Decora%20Gallery,%20I%20would%20like%20to%20consult%20with%20a%20stylist%20about%20decorating%20my%20living%20space."
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 bg-gold-accent hover:bg-gold-hover text-charcoal transition-all duration-300 rounded-none flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] cursor-pointer"
                id="contact-wa-btn"
              >
                <MessageSquare className="w-4 h-4 fill-charcoal" />
                <span>Message Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom Vector styled Map */}
          <div className="w-full lg:w-1/2 flex flex-col border border-beige-dark/40 bg-white p-6 rounded-none shadow-luxury" id="contact-map-column">
            
            {/* Map Header Toggle */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] uppercase tracking-widest text-charcoal-light/60 font-semibold flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-gold-accent" />
                <span>Showroom Map Pointer</span>
              </span>
              <div className="flex border border-beige-dark/60 rounded-none p-0.5 bg-ivory text-[9px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => setActiveMapLayer("standard")}
                  className={`px-3 py-1 rounded-none cursor-pointer ${
                    activeMapLayer === "standard" ? "bg-charcoal text-white" : "text-charcoal-light"
                  }`}
                >
                  Standard Layout
                </button>
                <button
                  onClick={() => setActiveMapLayer("landmarks")}
                  className={`px-3 py-1 rounded-none cursor-pointer ${
                    activeMapLayer === "landmarks" ? "bg-charcoal text-white" : "text-charcoal-light"
                  }`}
                >
                  Sectors & Landmarks
                </button>
              </div>
            </div>

            {/* Simulated Vector Map Board */}
            <div className="relative flex-1 min-h-[350px] bg-[#FAF9F5] rounded-none overflow-hidden border border-beige-dark/30 flex items-center justify-center">
              
              {/* Map Road Graphics */}
              <div className="absolute inset-0 z-0">
                {/* Wilkinson Road (Diagonal Major) */}
                <div className="absolute top-[20%] left-[-10%] right-[-10%] h-[40px] bg-beige-dark/20 border-y-2 border-beige-dark/40 transform rotate-12 flex items-center justify-center">
                  <span className="font-mono text-[9px] text-charcoal-light/40 tracking-[0.3em] uppercase">Wilkinson Road</span>
                </div>

                {/* Secondary side roads */}
                <div className="absolute top-[-10%] bottom-[-10%] left-[30%] w-[25px] bg-beige-dark/15 border-x border-beige-dark/30 transform -rotate-12"></div>
                <div className="absolute top-[50%] bottom-[-10%] right-[25%] w-[20px] bg-beige-dark/15 border-x border-beige-dark/30 transform -rotate-45"></div>

                {/* Ocean Label on Left */}
                <div className="absolute top-10 left-10 font-serif text-[10px] text-blue-900/10 italic tracking-widest uppercase">
                  Atlantic Coastline (Aberdeen Creek)
                </div>

                {/* Showroom Building Highlight */}
                <div className="absolute top-[38%] left-[45%] w-32 h-20 bg-charcoal text-white p-3 shadow-2xl border-l-4 border-gold-accent z-10 flex flex-col justify-between animate-fadeIn">
                  <div className="flex flex-col">
                    <span className="font-serif text-[11px] font-semibold text-gold-accent">DECORA SHOWROOM</span>
                    <span className="text-[7px] text-beige/60 uppercase tracking-wider mt-0.5">109 Wilkinson Rd</span>
                  </div>
                  <div className="flex items-center gap-1 text-[7px] text-gold-accent font-semibold uppercase">
                    <Navigation className="w-2.5 h-2.5 fill-gold-accent" />
                    <span>Next to Kingdom Hall</span>
                  </div>
                </div>

                {/* Landmark Tags */}
                {activeMapLayer === "landmarks" && (
                  <div className="absolute inset-0 z-10 pointer-events-none animate-fadeIn">
                    <div className="absolute top-[15%] left-[10%] bg-white/95 border border-beige-dark text-[8px] font-semibold py-1 px-2 uppercase tracking-wider text-charcoal shadow">
                      📍 Kingdom Hall (Next Door)
                    </div>
                    <div className="absolute bottom-[20%] left-[15%] bg-white/95 border border-beige-dark text-[8px] font-semibold py-1 px-2 uppercase tracking-wider text-charcoal shadow">
                      📍 Aberdeen Junction
                    </div>
                    <div className="absolute bottom-[40%] right-[10%] bg-white/95 border border-beige-dark text-[8px] font-semibold py-1 px-2 uppercase tracking-wider text-charcoal shadow">
                      📍 Lumley Roundabout
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative Compass Rose Grid */}
              <div className="absolute bottom-4 right-4 z-10 border border-beige-dark/40 bg-white/90 p-2.5 rounded-sm shadow text-[9px] text-charcoal font-semibold tracking-wider font-mono">
                <span>N 8.4682° / W 13.2754°</span>
              </div>
            </div>

            {/* Landmark quick list footer */}
            <div className="mt-4 pt-4 border-t border-beige-dark/20">
              <span className="text-[10px] uppercase tracking-wider text-charcoal-light/60 font-semibold block mb-2.5">
                Approximate Driving Distances
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {landmarks.map((l, idx) => (
                  <div key={idx} className="bg-ivory/60 border border-beige-dark/30 p-2 text-center rounded-none">
                    <span className="text-[9px] font-semibold text-charcoal block truncate">{l.name}</span>
                    <span className="text-[8px] text-gold-accent uppercase font-medium tracking-wide mt-0.5 block">{l.dist}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
