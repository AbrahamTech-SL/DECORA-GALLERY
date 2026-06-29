/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  details: string[];
  image: string;
  dimensions: string;
  materials: string;
  finishes: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFinish: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  location: string;
}

export interface Hotspot {
  x: number; // percentage from left (0-100)
  y: number; // percentage from top (0-100)
  productId: string;
  productName: string;
  productPrice: number;
}

export interface InspirationScene {
  id: string;
  title: string;
  description: string;
  image: string;
  hotspots: Hotspot[];
}
