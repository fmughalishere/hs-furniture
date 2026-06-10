"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { PRODUCTS } from '../../data/products';

interface ProductCardProps {
    product: typeof PRODUCTS[number];
}

export default function ProductCard({ product }: ProductCardProps) {
    const addToCart = useCartStore((state) => state.addToCart);
    const brandGold = "#C5A880";

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden group border border-zinc-800/60 shadow-sm hover:border-zinc-700/80 transition-all duration-300"
        >      <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <Link
                        href={`/product/${product.id}`}
                        className="p-4 bg-zinc-900/90 text-zinc-100 rounded-full border border-zinc-800 hover:bg-[#C5A880] hover:text-[#121212] hover:border-[#C5A880] transition-all duration-300 shadow-lg"
                        title="View Details"
                    >
                        <Eye size={18} />
                    </Link>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-4 bg-zinc-900/90 text-zinc-100 rounded-full border border-zinc-800 hover:bg-[#C5A880] hover:text-[#121212] hover:border-[#C5A880] transition-all duration-300 shadow-lg"
                        title="Add to Cart"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
            <div className="p-6 text-center bg-[#1a1a1a]">
                <p className="text-[10px] font-medium uppercase tracking-[2px] text-zinc-500 mb-2">
                    {product.category}
                </p>
                <h3 className="text-lg font-serif text-zinc-200 tracking-wide mb-2 group-hover:text-zinc-100 transition-colors">
                    {product.name}
                </h3>
                <p className="font-sans font-light text-base" style={{ color: brandGold }}>
                    Rs {product.price.toLocaleString()}
                </p>
            </div>
        </motion.div>
    );
}