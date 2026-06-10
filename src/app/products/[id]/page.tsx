"use client"
import { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { useCartStore } from '../../store/useCartStore';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronLeft, CheckCircle2, X } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetails() {
    const params = useParams();
    const id = params?.id;

    const [showPopup, setShowPopup] = useState(false);
    const product = PRODUCTS.find(p => String(p.id) === String(id));
    const addToCart = useCartStore((state) => state.addToCart);

    const brandGold = "#C5A880";

    if (!product) return (
        <div className="h-screen bg-[#FAF9F6] flex flex-col items-center justify-center space-y-4">
            <h1 className="font-serif text-xl text-zinc-800">Piece not found in our collection.</h1>
            <Link href="/products" className="text-xs uppercase tracking-widest font-medium transition-colors" style={{ color: brandGold }}>
                Back to Showroom
            </Link>
        </div>
    );

    const handleAddToBag = () => {
        addToCart(product);
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 4500);
    };

    return (
        <main className="bg-[#FAF9F6] min-h-screen text-[#121212] relative">
            <Navbar />
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: -30, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, x: "-50%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-28 left-1/2 -translate-x-1/2 z-[9999] w-[95%] sm:w-[90%] max-w-md bg-white border border-zinc-200 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="text-emerald-600 bg-emerald-50 p-2 rounded-xl flex-shrink-0">
                                <CheckCircle2 size={18} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-zinc-900">
                                    Masterpiece Added
                                </p>

                                <p className="text-[11px] text-zinc-500 truncate">
                                    {product.name} is now in your bag.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 flex-shrink-0">
                            <Link
                                href="/cart"
                                className="text-[10px] font-bold uppercase tracking-wider text-zinc-900 hover:opacity-70"
                            >
                                View Bag
                            </Link>

                            <button
                                onClick={() => setShowPopup(false)}
                                className="text-zinc-400 hover:text-zinc-700"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="pt-48 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
                <Link href="/products" className="inline-flex items-center gap-2 text-zinc-400 text-xs font-medium tracking-widest uppercase mb-10 hover:text-black transition-colors duration-300">
                    <ChevronLeft size={16} /> Back to Collection
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative h-[550px] rounded-2xl overflow-hidden border border-zinc-200/50 shadow-sm bg-white">
                        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                        <div className="space-y-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[4px]" style={{ color: brandGold }}>
                                {product.category || "Authentic Heritage Wood"}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-zinc-900">{product.name}</h1>
                            <p className="text-2xl font-medium text-zinc-800 pt-2">
                                {typeof product.price === 'number' ? `PKR ${product.price.toLocaleString()}` : product.price}
                            </p>
                        </div>

                        <p className="text-zinc-500 font-light text-sm leading-relaxed">
                            {product.description || "Individually inspected and handcrafted from premium-grade seasoned timber. Features elegant detail contour lines perfect for high-end structural setups."}
                        </p>

                        <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={handleAddToBag}
                                className="w-full text-white py-4 rounded-xl font-medium uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors duration-300 shadow-md shadow-zinc-900/10 hover:bg-zinc-800"
                                style={{ backgroundColor: "#121212" }}
                            >
                                <ShoppingBag size={16} /> Add To Bag
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}