/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Collections } from "./components/Collections";
import { BestSellers } from "./components/BestSellers";
import { RoomPlanner } from "./components/RoomPlanner";
import { AboutGallery } from "./components/AboutGallery";
import { InspirationGallery } from "./components/InspirationGallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { QuickViewModal } from "./components/QuickViewModal";
import { CartDrawer } from "./components/CartDrawer";
import { BellRing, ShieldCheck } from "lucide-react";

// Nested main layout wrapper to consume context hook easily
const MainLayout: React.FC = () => {
  const { notifications } = useApp();

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal overflow-x-hidden selection:bg-gold-accent selection:text-charcoal">
      {/* Floating Interactive Toast Notifications Stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none">
        {notifications.map((msg, index) => (
          <div
            key={`${index}-${msg}`}
            className="bg-charcoal text-white border-l-4 border-gold-accent px-5 py-4 shadow-2xl rounded-sm flex items-center gap-3 animate-fadeIn pointer-events-auto border border-charcoal-light/30 max-w-[320px] sm:max-w-none shadow-luxury"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 bg-gold-accent rounded-full animate-ping absolute"></span>
              <span className="w-2 h-2 bg-gold-accent rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gold-accent font-bold">Activity Log</span>
              <span className="text-[11px] text-beige mt-0.5 leading-tight font-medium">
                {msg}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating concierge assistance indicator */}
      <a
        href="https://wa.me/23299976888"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 bg-green-700 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center border border-white/20 hover:scale-105 transition-all group cursor-pointer"
        title="Consult interior stylist on WhatsApp"
        id="floating-wa-widget"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5.5 h-5.5"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.212 3.464 8.381-.003 6.535-5.328 11.859-11.859 11.859-2.003-.001-3.974-.51-5.729-1.48L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.725 1.45 5.389 0 9.773-4.384 9.777-9.778.002-2.613-1.013-5.07-2.86-6.917C16.446 2.062 13.99 1.045 11.861 1.045 6.471 1.045 2.087 5.429 2.083 10.822c-.001 1.629.431 3.218 1.251 4.606l-.1.365-1.104 4.033 4.127-1.082.34-.201zM17.13 15.39c-.287-.144-1.7-.84-1.967-.938-.268-.098-.463-.146-.659.146-.195.293-.756.951-.927 1.146-.171.195-.341.219-.628.075-.287-.144-1.21-.446-2.305-1.424-.853-.761-1.43-1.7-1.597-1.993-.167-.293-.018-.451.126-.593.13-.127.287-.341.43-.512.144-.171.191-.293.287-.488.096-.195.048-.366-.024-.512-.072-.146-.659-1.586-.902-2.172-.237-.571-.478-.494-.659-.503-.171-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.293-1.024 1.001-1.024 2.44 0 1.439 1.048 2.83 1.195 3.025.146.195 2.062 3.149 4.996 4.414.698.301 1.243.481 1.668.616.701.223 1.34.191 1.845.116.563-.083 1.699-.694 1.942-1.365.243-.672.243-1.246.171-1.366-.073-.12-.268-.219-.556-.363z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-[10px] uppercase tracking-widest font-bold text-white whitespace-nowrap pl-0 group-hover:pl-2">
          WhatsApp Styling Support
        </span>
      </a>

      {/* Navigation Suite */}
      <Navbar />

      {/* Main Page Layout Content Blocks */}
      <main>
        <Hero />
        <Collections />
        <BestSellers />
        <RoomPlanner />
        <AboutGallery />
        <InspirationGallery />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Corporate footer details */}
      <Footer />

      {/* Global Interactive Overlays */}
      <QuickViewModal />
      <CartDrawer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
