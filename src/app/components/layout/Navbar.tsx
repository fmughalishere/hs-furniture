"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, ChevronDown, X, ArrowRight, Menu } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_PRODUCTS_DATABASE = [
    {
        id: 1,
        name: "The Royal Mughal Sofa Set",
        category: "furniture",
        price: "PKR 380,000",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457"
    },
    {
        id: 2,
        name: "Classic Walnut Chinioti Jharoka",
        category: "handicrafts",
        price: "PKR 45,000",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
        id: 3,
        name: "Imperial Hand-Carved Canopy Bed",
        category: "furniture",
        price: "PKR 520,000",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },
    {
        id: 4,
        name: "Vintage Brass Inlay Jewelry Box",
        category: "handicrafts",
        price: "PKR 18,500",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    },
    {
        id: 5,
        name: "Victorian Elegance Dining Table",
        category: "furniture",
        price: "PKR 410,000",
        image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62"
    },
    {
        id: 6,
        name: "Premium Solid Shisham Partition Screen",
        category: "handicrafts",
        price: "PKR 65,000",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92"
    }
];

export default function Navbar() {
    const cart = useCartStore((state) => state.cart);
    const brandGold = "#C5A880";
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                setSearchQuery("");
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const filteredResults = searchQuery.trim() === ""
        ? []
        : ALL_PRODUCTS_DATABASE.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'PRODUCTS', href: '/products', hasDropdown: true },
        { name: 'BLOG', href: '/blog' },
        { name: 'TESTIMONIALS', href: '/testimonials' },
        { name: 'CONTACT', href: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[999] h-20 flex items-center bg-[#121212]/90 backdrop-blur-md border-b border-zinc-800/60">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 w-full flex items-center justify-between">
                    <Link href="/" className="transition-opacity hover:opacity-90">
                        <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100 tracking-tight">
                            HS <span className="font-sans font-light italic tracking-normal block md:inline md:ml-1" style={{ color: brandGold }}>Furniture</span>
                        </h3>
                    </Link>
                    <div className="hidden lg:flex items-center gap-8 font-medium text-xs tracking-[3px]">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group py-4">
                                <Link
                                    href={link.href}
                                    className="text-zinc-300 hover:text-[#C5A880] transition-colors duration-300 flex items-center gap-1.5"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={12} className="opacity-60 group-hover:text-[#C5A880] transition-transform group-hover:rotate-180 duration-300" />}
                                </Link>
                                {link.hasDropdown && (
                                    <div className="absolute top-[85%] -left-6 w-56 bg-[#1a1a1a] shadow-xl rounded-xl p-5 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 border border-zinc-800/80">
                                        <div className="space-y-3 font-normal tracking-[1px] normal-case text-sm">
                                            <p className="text-[10px] font-medium text-zinc-500 border-b border-zinc-800/80 pb-2 uppercase tracking-[2px]">Categories</p>
                                            <Link href="/products?cat=furniture" className="block text-zinc-300 hover:text-[#C5A880] transition-colors pt-1">Luxury Furniture</Link>
                                            <Link href="/products?cat=handicrafts" className="block text-zinc-300 hover:text-[#C5A880] transition-colors">Chinioti Handicrafts</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-zinc-300 hover:text-[#C5A880] transition-colors duration-300"
                        >
                            <Search size={18} />
                        </button>

                        <Link href="/cart" className="relative p-2 text-zinc-300 hover:text-[#C5A880] transition-colors duration-300 group">
                            <ShoppingBag size={18} />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-[#C5A880] text-[#121212] text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                        <Link
                            href="/products"
                            className="hidden sm:inline-block border border-[#C5A880] text-[#C5A880] px-6 py-2.5 rounded-full text-[11px] font-medium tracking-widest hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 uppercase ml-2"
                        >
                            Shop Now
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 text-zinc-300 hover:text-[#C5A880]"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/70 z-[998]"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35 }}
                            className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-[#121212] z-[999] border-l border-zinc-800 p-6 overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-xl font-serif text-white">
                                    HS <span style={{ color: brandGold }}>Furniture</span>
                                </h3>

                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-zinc-400 hover:text-white"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-5">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-zinc-300 text-sm tracking-[2px] border-b border-zinc-800 pb-4 hover:text-[#C5A880]"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <Link
                                    href="/products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-4 bg-[#C5A880] text-black text-center py-3 rounded-full uppercase tracking-widest text-xs font-medium"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="fixed top-0 left-0 right-0 bg-[#121212] text-white z-[1000] border-b border-zinc-800 shadow-2xl p-4 sm:p-6 md:p-10 pt-8"
                    >
                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="flex items-center justify-between border-b border-zinc-700 pb-3">
                                <div className="flex items-center gap-4 w-full mr-4">
                                    <Search size={22} className="text-zinc-500 flex-shrink-0" />
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Type anything to search masterpieces, furniture types..."
                                        className="w-full bg-transparent text-lg sm:text-xl md:text-2xl font-serif text-zinc-100 outline-none placeholder-zinc-600 tracking-wide" />
                                </div>
                                <button
                                    onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                    className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <AnimatePresence>
                                {searchQuery.trim() !== "" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="max-h-[380px] overflow-y-auto pr-2 space-y-2 scrollbar-thin"
                                    >
                                        <p className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase pb-1">
                                            Found Architecture Results ({filteredResults.length})
                                        </p>

                                        {filteredResults.length > 0 ? (
                                            filteredResults.map((product) => (
                                                <Link
                                                    key={product.id}
                                                    href={`/products/${product.id}`}
                                                    onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                                                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/40 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 group"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 flex-shrink-0">
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <h4 className="font-serif text-base text-zinc-200 group-hover:text-[#C5A880] transition-colors leading-tight">
                                                                {product.name}
                                                            </h4>
                                                            <p className="text-[10px] font-medium tracking-widest uppercase text-zinc-500">
                                                                {product.category} • <span className="text-zinc-400 font-sans tracking-normal font-semibold normal-case">{product.price}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={14} className="text-zinc-600 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center bg-zinc-900/30 rounded-xl border border-dashed border-zinc-800">
                                                <p className="text-xs text-zinc-500 font-light">No historical legacy wood design matches your typed filter query.</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}