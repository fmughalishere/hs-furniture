"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
    {
        name: "Luxury Sofas",
        count: "25+ Items",
        img: "/images/s1.jpg",
        href: "/products?cat=sofas"
    },
    {
        name: "Royal Beds",
        count: "15+ Items",
        img: "/images/b1.jpg",
        href: "/products?cat=beds"
    },
    {
        name: "Dining Sets",
        count: "10+ Items",
        img: "/images/d1.jpg",
        href: "/products?cat=dining"
    },
    {
        name: "Handicrafts",
        count: "50+ Items",
        img: "/images/handicrafts.jpg",
        href: "/products?cat=handicrafts"
    }
];

export default function CategorySection() {
    const brandGold = "#C5A880";

    return (
        <section className="py-32 px-6 md:px-10 bg-[#FAF9F6] text-[#121212]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-24 space-y-3">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-semibold uppercase tracking-[6px]"
                        style={{ color: brandGold }}
                    >
                        Browse by Room
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif tracking-tight"
                    >
                        Curated <span className="font-sans font-light italic tracking-normal lowercase block md:inline md:ml-2">collections.</span>
                    </motion.h2>
                    <div className="w-12 h-[2px] mx-auto mt-6" style={{ backgroundColor: brandGold }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-[480px] rounded-2xl overflow-hidden shadow-md cursor-pointer bg-zinc-900"
                        >
                            <Image
                                src={cat.img}
                                alt={cat.name}
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95" />
                            <div className="absolute bottom-8 left-8 right-8 flex flex-col items-start space-y-2">
                                <p className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-400">
                                    {cat.count}
                                </p>
                                <h3 className="text-2xl font-serif text-zinc-100 tracking-wide transition-colors group-hover:text-zinc-300">
                                    {cat.name}
                                </h3>

                                <Link href={cat.href} className="pt-3 block w-full">
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "tween", duration: 0.2 }}
                                        className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase border-b border-zinc-700 pb-1 w-max transition-colors group-hover:border-[#C5A880]"
                                        style={{ color: brandGold }}
                                    >
                                        Explore Now <span className="text-sm transition-transform group-hover:translate-x-1 inline-block">→</span>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 p-12 md:p-16 rounded-2xl bg-white border border-zinc-200/50 text-center shadow-sm"
                >
                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-6">
                        Masterpieces Crafted for <span className="font-sans font-light italic tracking-normal lowercase" style={{ color: brandGold }}>comfort & style.</span>
                    </h3>
                    <p className="text-zinc-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-light">
                        At HS Furniture, we don't just build furniture; we carve legacy. From the heart of Chiniot
                        to the elite homes of Lahore, our unique handicrafts add a soul to your living space.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}