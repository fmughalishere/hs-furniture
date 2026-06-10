"use client"
import { motion } from 'framer-motion';
import { PRODUCTS } from '../../data/products';
import ProductCard from '../product/ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Bestsellers() {
    const brandGold = "#C5A880";
    const bestsellers = PRODUCTS.slice(0, 3);

    return (
        <section className="py-32 px-6 md:px-10 bg-[#121212] text-zinc-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
                            Top Rated Picks
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-none">
                            Our <span className="font-sans font-light italic tracking-normal lowercase block md:inline md:ml-2">bestsellers.</span>
                        </h2>
                    </motion.div>
                    <Link
                        href="/shop"
                        className="group flex items-center gap-3 font-medium text-xs uppercase tracking-widest transition-colors duration-300 pb-1 border-b border-transparent hover:border-[#C5A880]"
                        style={{ color: brandGold }}
                    >
                        View All Collection
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bestsellers.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}