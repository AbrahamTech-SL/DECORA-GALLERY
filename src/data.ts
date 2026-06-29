/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Collection, Testimonial, InspirationScene } from "./types";

// Note: Using the exact high-res generated asset paths for maximum luxury impact
import heroLivingRoom from "./assets/images/hero_living_room_1782694519275.jpg";
import showroomVases from "./assets/images/showroom_vases_1782694530808.jpg";
import wallArtInterior from "./assets/images/wall_art_interior_1782694544865.jpg";
import diningTableDecor from "./assets/images/dining_table_decor_1782694558886.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Aurelia Gilded Textured Canvas",
    category: "Wall Décor",
    price: 750,
    rating: 4.9,
    description: "An elegant, large-scale abstract plaster painting adorned with delicate hand-applied 24k gold leaf. Crafted in our studio, the thick, hand-sculpted textures create a dramatic three-dimensional play of light and shadow on any wall.",
    details: [
      "Individually hand-sculpted by master plaster artists",
      "Genuine 24-karat gold leaf gilding details",
      "Premium Belgian linen canvas stretched over sustainable pine",
      "Includes premium concealed mounting hardware for a floating effect"
    ],
    image: wallArtInterior,
    dimensions: "120 cm x 90 cm x 4 cm",
    materials: "Premium heavy-weight linen canvas, natural mineral plaster, 24k gold leaf",
    finishes: ["Satin Gold Frame", "Raw Unframed Canvas", "Matte Charcoal Floating Frame"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-2",
    name: "Calypso Fluted Ceramic Urn",
    category: "Vases & Sculptures",
    price: 420,
    rating: 4.8,
    description: "A gorgeous, towering ceramic vessel featuring striking vertical fluted details. Its heavy stoneware body is finished in a specialized matte chalk glaze that accentuates the undulating ridges and biological silhouette.",
    details: [
      "Wheel-thrown and hand-finished in our studio workshop",
      "Finished with a proprietary raw-mineral matte glaze",
      "Water-sealed interior for holding botanical arrangements",
      "Sturdy heavy-bottom design to prevent tipping"
    ],
    image: showroomVases,
    dimensions: "45 cm Height x 28 cm Diameter",
    materials: "Fine-grained organic stoneware clay, matte mineral glaze",
    finishes: ["Alabaster Matte Chalk", "Warm Sandstone Raw", "Sienna Terracotta"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-3",
    name: "Vesta Polished Brass Styling Tray",
    category: "Decorative Accessories",
    price: 320,
    rating: 4.7,
    description: "A stunning statement tray forged from solid jeweler's brass, polished to a brilliant mirror shine. The interior floor is inlaid with exquisite, ultra-supple full-grain Italian calf leather that is water-resistant and scratch-resistant.",
    details: [
      "Precision-milled solid jeweler's brass frame",
      "Inlaid with hand-creased, premium Italian aniline leather",
      "Features a protective velvet base to safeguard furniture surfaces",
      "Perfect for styling decanters, books, jewelry, or desktop accessories"
    ],
    image: diningTableDecor,
    dimensions: "35 cm x 35 cm x 3 cm",
    materials: "Solid brass, full-grain Italian calf leather, protective velvet",
    finishes: ["Polished Gold Brass & Espresso", "Satin Gold Brass & Ivory", "Gunmetal Bronze & Charcoal"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-4",
    name: "Aura Soapstone Scented Candle Ensemble",
    category: "Decorative Accessories",
    price: 180,
    rating: 4.9,
    description: "A collection of three clean-burning luxury scented candles housed in beautiful jars hand-carved from solid blocks of natural soapstone. Once the wax is depleted, these elegant soapstone vessels double as exquisite styling containers.",
    details: [
      "Set of 3 hand-carved, distinct solid soapstone lidded canisters",
      "100% natural, biodegradable soy-coconut wax blend",
      "Lead-free, clean-burning organic cotton wicks",
      "Scent profiles: Amber Sandalwood, Fig & Cashmere, Smoked Cedarwood"
    ],
    image: diningTableDecor, // Matches the tabletop aesthetic
    dimensions: "12 cm Height x 9 cm Diameter (each)",
    materials: "Solid natural soapstone stone, organic soy wax, pure botanical oils",
    finishes: ["Sandalwood Amber", "Fig & Cashmere", "Smoked Cedarwood"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-5",
    name: "Helios Alabaster Table Lamp",
    category: "Lighting",
    price: 890,
    rating: 4.9,
    description: "Sculpted from a single monolith of solid Spanish alabaster, the Helios table lamp exhibits breathtaking natural veining that is illuminated from within. Topped with a custom fluted Belgian linen drum shade that gently diffuses light.",
    details: [
      "Solid block of premium grade Spanish white alabaster",
      "Every single piece features a completely unique natural mineral pattern",
      "Polished heavy brass base plate and dimmable knurled solid brass rotary switch",
      "Sourced with heavy linen-wrapped braided power cord"
    ],
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    dimensions: "55 cm Height x 30 cm Shade Diameter",
    materials: "Solid natural Spanish alabaster, jeweler's brass, Belgian linen shade",
    finishes: ["Polished Brass & Linen", "Burnished Bronze & Linen", "Silver Nickel & White Linen"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-6",
    name: "Symphony Minimalist Arch Mirror",
    category: "Wall Décor",
    price: 1150,
    rating: 4.8,
    description: "A grand statement mirror featuring a sleek, architectural arched frame. The premium high-fidelity glass is set within a deep, slender hand-forged metal frame, reflecting light beautifully to enlarge and illuminate any space.",
    details: [
      "Heavy, distortion-free HD crystal glass with silver backing",
      "Sturdy hand-welded premium stainless steel profile frame",
      "Equipped with multi-directional heavy-duty D-ring hangers",
      "Available in floor lean-on sizing or standard wall hanging weight"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    dimensions: "190 cm Height x 80 cm Width x 5 cm Depth",
    materials: "distortion-free HD glass, premium structural steel",
    finishes: ["Brushed Champagne Gold", "Matte Charcoal Black", "Polished Platinum"],
    inStock: true
  },
  {
    id: "prod-7",
    name: "Cashmere Bouclé Comfort Cushion",
    category: "Luxury Living Collection",
    price: 210,
    rating: 4.7,
    description: "An incredibly soft, heavy-textured throw pillow woven with premium Mongolian cashmere and organic cotton bouclé fibers. Its thick, looped texture provides tactile warmth and modern architectural appeal to any lounge chair or sofa.",
    details: [
      "Woven with 70% Mongolian cashmere and 30% organic looped cotton bouclé",
      "Includes a heavy, luxurious 100% RDS feather and down insert",
      "Concealed matte-finish YKK zipper closure along bottom seam",
      "Double-stitched inner seams to ensure lifetime durability"
    ],
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
    dimensions: "50 cm x 50 cm",
    materials: "Cashmere and cotton bouclé, RDS feather down insert",
    finishes: ["Cream Bouclé", "Sable Oat", "Charcoal Slate"],
    inStock: true
  },
  {
    id: "prod-8",
    name: "Monolith Travertine Sculptural Bookends",
    category: "Vases & Sculptures",
    price: 490,
    rating: 4.9,
    description: "Crafted from solid travertine stone imported from Tivoli, Italy, these heavy, architectural bookends feature an elegant interlocking geometric shape. Their honed, unpolished porous surface celebrates the ancient organic history of the stone.",
    details: [
      "Set of 2 solid travertine interlocking geometric sculptures",
      "Honed by hand to a refined, smooth matte feel while retaining open pores",
      "Features heavy, anti-slip rubber pads on base to protect high-end timber",
      "A gorgeous standalone shelf sculpture even when not holding books"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    dimensions: "20 cm Height x 12 cm Width x 10 cm Depth (each)",
    materials: "Solid Tivoli travertine marble",
    finishes: ["Honed Ivory Travertine", "Red Persian Travertine", "Silver-Grey Travertine"],
    inStock: true
  },
  {
    id: "prod-9",
    name: "Elysian Hand-Blown Glass Pendant",
    category: "Lighting",
    price: 1250,
    rating: 4.8,
    description: "Suspended from a minimalist brass canopy, this exquisite pendant light features heavy, hand-blown glass with vertical fluting. The smoked amber tint creates an ambient, warm golden-hour glow that perfectly frames dining tables and foyer spaces.",
    details: [
      "Individual hand-blown borosilicate glass globe",
      "Beautiful vertical glass ribbing creates dramatic concentric light rings",
      "Fully dimmable; compatible with standard smart-lighting networks",
      "Includes a 2-meter gold fabric-wrapped suspension cord (adjustable)"
    ],
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop",
    dimensions: "40 cm Diameter x 35 cm Globe Height",
    materials: "Hand-blown tint glass, jeweler's brass canopy",
    finishes: ["Smoked Amber & Gold", "Charcoal Grey & Nickel", "Clear Crystal & Gold"],
    inStock: true
  },
  {
    id: "prod-10",
    name: "Serene Obsidian Knot Sculpture",
    category: "Decorative Accessories",
    price: 260,
    rating: 4.6,
    description: "An intriguing, infinite loop sculpture carved from a block of volcanic obsidian glass and hand-polished to a semi-matte satin finish. Its soft, organic curves provide a gorgeous architectural contrast when placed atop coffee table books.",
    details: [
      "Hand-carved from natural obsidian volcanic glass stone",
      "Expertly polished to a satin semi-matte look that catches highlights",
      "A completely fluid, seamless single-block sculptural carving",
      "Arrives wrapped in a luxurious branded linen drawstring bag"
    ],
    image: "https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=600&auto=format&fit=crop",
    dimensions: "18 cm x 18 cm x 15 cm",
    materials: "Solid volcanic obsidian stone",
    finishes: ["Satin Obsidian Charcoal", "Polished Black Obsidian", "Satin Snowy Onyx"],
    inStock: true
  },
  {
    id: "prod-11",
    name: "Empire Solid Marble Desk Organizer",
    category: "Office Styling Collection",
    price: 450,
    rating: 4.9,
    description: "Elevate your study or boardroom with this solid monolithic desk organizer. Cut from prized Nero Marquina black marble with bold white veining, it features solid brass pen compartments, a cardholder, and an integrated styling tray.",
    details: [
      "Hand-carved block of genuine Nero Marquina Spanish marble",
      "Brushed solid gold brass inserts for pen holds",
      "Features anti-scratch velvet bottom to protect high-end office timber",
      "Slightly raised card-display ridge and pen-rest hollow"
    ],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop",
    dimensions: "30 cm Width x 15 cm Depth x 8 cm Height",
    materials: "Nero Marquina marble, jeweler's brass",
    finishes: ["Nero Marquina Black & Gold", "Carrara White & Silver", "Verde Alpi Green & Gold"],
    inStock: true
  },
  {
    id: "prod-12",
    name: "Scribe Full-Grain Leather Desk Blotter",
    category: "Office Styling Collection",
    price: 380,
    rating: 4.8,
    description: "A premium, large-scale desk writing blotter handcrafted from vegetable-tanned Italian calf leather. The edges are finished with durable hand-painted sealant and meticulous beige waxed stitching, backed by an ultra-soft non-slip suede floor.",
    details: [
      "Handcrafted from 3.5mm thick vegetable-tanned Tuscan leather",
      "Meticulous edge-painting and heavy contrast stitching",
      "Full-grain leather develops a gorgeous custom patina over time",
      "Ultra-soft, non-slip natural cowhide suede backing"
    ],
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=800&auto=format&fit=crop",
    dimensions: "85 cm Width x 45 cm Height x 0.4 cm Thickness",
    materials: "Italian full-grain calf leather, natural cowhide suede backing",
    finishes: ["Tuscan Tan", "Matte Charcoal Black", "Sartorial Navy Blue"],
    inStock: true
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "col-wall",
    name: "Wall Décor",
    description: "Gilded canvases, sculptural plaster works, and full-length minimal arch mirrors designed to captivate.",
    image: wallArtInterior,
    itemCount: 3
  },
  {
    id: "col-vases",
    name: "Vases & Sculptures",
    description: "Wheel-thrown raw ceramic urns and solid travertine sculptures designed to elevate consoles and shelving.",
    image: showroomVases,
    itemCount: 4
  },
  {
    id: "col-lighting",
    name: "Lighting Accessories",
    description: "Spanish alabaster bases and hand-blown fluted amber pendants that illuminate rooms with an expensive ambient glow.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    itemCount: 2
  },
  {
    id: "col-decor",
    name: "Decorative Accessories",
    description: "Jeweler-grade polished brass styling trays, solid soapstone scented candles, and obsidian desk knots.",
    image: diningTableDecor,
    itemCount: 3
  },
  {
    id: "col-living",
    name: "Luxury Living Collection",
    description: "Woven Mongolian cashmere throw blankets and heavy bouclé throw pillows that provide soft tactile architecture.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop",
    itemCount: 2
  },
  {
    id: "col-office",
    name: "Office Styling Collection",
    description: "Monolithic Italian marble pen repositories and custom vegetable-tanned leather desk writing blotters.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop",
    itemCount: 2
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Fatmata Koroma",
    role: "Lead Architect, Koroma & Partners",
    text: "The sculptural quality of Decora Gallery's pieces is unmatched in Sierra Leone. We specified the Helios Lamp and Calypso Urns for our Hill Station luxury apartment project, and our client was absolutely blown away. Highly recommended for premium developments.",
    rating: 5,
    location: "Freetown, Sierra Leone"
  },
  {
    id: "test-2",
    name: "Ahmadu Jalloh",
    role: "Private Homeowner",
    text: "I was looking for genuinely premium décor for my new residence in Aberdeen, and Decora Gallery delivered on every front. The vegetable-tanned leather desk blotter and solid travertine bookends feel so solid and expensive. Customer support on WhatsApp was prompt and incredibly helpful.",
    rating: 5,
    location: "Aberdeen Peninsula"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Interior Designer",
    text: "Decora Gallery's custom gilded canvases are true masterpieces. The texture and gold gilding capture the natural light of a space beautifully. To find items of this caliber, with dedicated white-glove courier delivery to our office, is a game-changer.",
    rating: 5,
    location: "Wilkinson Road, Freetown"
  }
];

export const INSPIRATION_SCENES: InspirationScene[] = [
  {
    id: "scene-1",
    title: "The Gilded Sanctuary",
    description: "A bright, airy living area centered by an expansive, hand-gilded canvas. The warm plaster textures harmoniously pair with modern travertine stone and raw black obsidian accessories to create a peaceful, editorial haven.",
    image: wallArtInterior,
    hotspots: [
      { x: 50, y: 35, productId: "prod-1", productName: "Aurelia Gilded Textured Canvas", productPrice: 750 },
      { x: 50, y: 76, productId: "prod-10", productName: "Serene Obsidian Knot Sculpture", productPrice: 260 }
    ]
  },
  {
    id: "scene-2",
    title: "The Sculptor's Alcove",
    description: "A curation of fluted ceramic urns and geometric Italian stone volumes resting on floating marble shelves. This look highlights the rich contrast between deep shadows, raw fluted clays, and clean travertine silhouettes.",
    image: showroomVases,
    hotspots: [
      { x: 52, y: 38, productId: "prod-2", productName: "Calypso Fluted Ceramic Urn", productPrice: 420 },
      { x: 26, y: 64, productId: "prod-8", productName: "Monolith Travertine Bookends", productPrice: 490 }
    ]
  },
  {
    id: "scene-3",
    title: "The Sunday Vignette",
    description: "Morning sun rays dancing on hand-polished brass surfaces and aromatic apothecary jars. This tabletop setup creates a luxurious, tactile ritual out of lighting a candle, pouring tea, and resting on organic linen textures.",
    image: diningTableDecor,
    hotspots: [
      { x: 48, y: 56, productId: "prod-3", productName: "Vesta Polished Brass Tray", productPrice: 320 },
      { x: 42, y: 38, productId: "prod-4", productName: "Aura Soapstone Scented Candle", productPrice: 180 }
    ]
  }
];
