"use client"
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Eye, ShoppingBag, Heart } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "The Royal Mughal Sofa Set",
    category: "furniture",
    price: "PKR 380,000",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Classic Walnut Chinioti Jharoka",
    category: "handicrafts",
    price: "PKR 45,000",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    tag: "Handcrafted"
  },
  {
    id: 3,
    name: "Imperial Hand-Carved Canopy Bed",
    category: "furniture",
    price: "PKR 520,000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    tag: "Limited Edition"
  },
  {
    id: 4,
    name: "Vintage Brass Inlay Jewelry Box",
    category: "handicrafts",
    price: "PKR 18,500",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    tag: "New Arrival"
  },
  {
    id: 5,
    name: "Victorian Elegance Dining Table",
    category: "furniture",
    price: "PKR 410,000",
    image: "/images/dining-table.jpg",
    tag: "Top Rated"
  },
  {
    id: 6,
    name: "Premium Solid Shisham Partition Screen",
    category: "handicrafts",
    price: "PKR 65,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
    tag: "Traditional"
  }
];

export default function ProductsPage() {
  const brandGold = "#C5A880";
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeFilter);

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#121212] overflow-x-hidden">
      <Navbar />
      <section className="pt-44 pb-12 bg-[#121212] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
            Curated Showroom
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight">
            The Signature <span className="font-sans font-light italic tracking-normal lowercase" style={{ color: brandGold }}>collections.</span>
          </h1>
          <p className="text-zinc-400 font-light text-sm max-w-md mx-auto leading-relaxed pt-2">
            Explore authentic Pakistan heritage fused seamlessly with high-end modern functionality. Built to last for generations.
          </p>
        </div>
      </section>

      <section className="py-8 max-w-[1440px] mx-auto px-6 md:px-10 border-b border-zinc-200/80">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 border-b sm:border-b-0 border-zinc-200 pb-4 sm:pb-0 overflow-x-auto w-full sm:w-auto scrollbar-none">
            {[
              { id: 'all', label: 'All Masterpieces' },
              { id: 'furniture', label: 'Luxury Furniture' },
              { id: 'handicrafts', label: 'Chinioti Handicrafts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className="px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all duration-300"
                style={{
                  backgroundColor: activeFilter === tab.id ? '#121212' : 'transparent',
                  color: activeFilter === tab.id ? '#FAF9F6' : '#52525b',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-500 uppercase self-end sm:self-center">
            <SlidersHorizontal size={14} style={{ color: brandGold }} />
            <span>Showing {filteredProducts.length} Results</span>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-10">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between"
              >
                <div className="relative h-[420px] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/40 shadow-sm mb-5">
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#121212] text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md z-20 shadow-sm">
                    {product.tag}
                  </span>

                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-md text-zinc-600 hover:text-red-500 transition-colors z-20 shadow-sm">
                    <Heart size={14} />
                  </button>

                  <img 
                    src={product.image} 
                    srcSet={`${product.image}?auto=format&fit=crop&w=600 600w, ${product.image}?auto=format&fit=crop&w=1200 1200w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#121212]/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center gap-3 z-10">
                    <Link 
                      href={`/products/${product.id}`}
                      className="p-3.5 bg-white text-[#121212] rounded-full hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-500 flex items-center justify-center"
                    >
                      <Eye size={18} />
                    </Link>
                    <button className="p-3.5 bg-white text-[#121212] rounded-full hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="flex justify-between items-start gap-4">
                    <Link href={`/products/${product.id}`} className="block group">
                      <h3 className="font-serif text-lg text-zinc-900 tracking-tight group-hover:text-[#C5A880] transition-colors duration-300 cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <span className="font-medium text-sm text-zinc-900 whitespace-nowrap pt-1">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[2px] text-zinc-400 font-light">
                    {product.category === 'furniture' ? 'Luxury Core Architecture' : 'Heritage Artifact'}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <p className="text-zinc-400 font-light">No custom pieces found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}