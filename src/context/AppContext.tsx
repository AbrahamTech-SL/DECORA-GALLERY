/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "../types";

interface StagedItem {
  id: string;
  productId: string;
  productName: string;
  image: string;
  x: number; // percentage
  y: number; // percentage
  scale: number;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, finish: string) => void;
  removeFromCart: (productId: string, finish: string) => void;
  updateCartQuantity: (productId: string, finish: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  activeQuickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  stagedItems: StagedItem[];
  addStagedItem: (product: Product) => void;
  removeStagedItem: (id: string) => void;
  updateStagedItemPosition: (id: string, x: number, y: number) => void;
  updateStagedItemScale: (id: string, scale: number) => void;
  clearStaging: () => void;
  activePlannerBackdrop: string;
  setActivePlannerBackdrop: (backdrop: string) => void;
  notifications: string[];
  addNotification: (message: string) => void;
  clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial cart from localStorage safely
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("decora_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeQuickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Room Planner / Staging States
  const [activePlannerBackdrop, setActivePlannerBackdrop] = useState<string>("living");
  const [stagedItems, setStagedItems] = useState<StagedItem[]>([]);
  
  // Notification Toast states
  const [notifications, setNotifications] = useState<string[]>([]);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("decora_cart", JSON.stringify(cart));
  }, [cart]);

  const addNotification = (message: string) => {
    const id = Math.random().toString(36).substring(7);
    setNotifications((prev) => [...prev, message]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n, i) => i !== 0));
    }, 4000);
  };

  const addToCart = (product: Product, quantity: number, finish: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedFinish === finish
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        addNotification(`Updated quantity of "${product.name}" in your selection.`);
        return updated;
      } else {
        addNotification(`Added "${product.name}" (${finish}) to your selection.`);
        return [...prevCart, { product, quantity, selectedFinish: finish }];
      }
    });
  };

  const removeFromCart = (productId: string, finish: string) => {
    setCart((prevCart) => prevCart.filter(
      (item) => !(item.product.id === productId && item.selectedFinish === finish)
    ));
    addNotification("Removed item from your curated selection.");
  };

  const updateCartQuantity = (productId: string, finish: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, finish);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.selectedFinish === finish
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    addNotification("Selection cleared.");
  };

  // Staging Planner Logic
  const addStagedItem = (product: Product) => {
    const newItem: StagedItem = {
      id: `staged-${Math.random().toString(36).substring(7)}`,
      productId: product.id,
      productName: product.name,
      image: product.image,
      x: 40 + Math.random() * 20, // Center cluster
      y: 50 + Math.random() * 15,
      scale: 1.0,
    };
    setStagedItems((prev) => [...prev, newItem]);
    addNotification(`Staged "${product.name}" on the canvas.`);
  };

  const removeStagedItem = (id: string) => {
    setStagedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateStagedItemPosition = (id: string, x: number, y: number) => {
    setStagedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, x, y } : item))
    );
  };

  const updateStagedItemScale = (id: string, scale: number) => {
    setStagedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, scale: Math.max(0.4, Math.min(2.0, scale)) } : item))
    );
  };

  const clearStaging = () => {
    setStagedItems([]);
    addNotification("Cleared all staged products.");
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        isCartOpen,
        setIsCartOpen,
        activeQuickViewProduct,
        setQuickViewProduct,
        stagedItems,
        addStagedItem,
        removeStagedItem,
        updateStagedItemPosition,
        updateStagedItemScale,
        clearStaging,
        activePlannerBackdrop,
        setActivePlannerBackdrop,
        notifications,
        addNotification,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
