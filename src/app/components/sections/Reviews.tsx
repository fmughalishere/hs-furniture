"use client"
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    { name: "Ayesha Malik", role: "Interior Designer", text: "The quality of Chinioti carving on their sofas is unmatched. Truly a royal experience for my clients." },
    { name: "Zubair Khan", role: "Home Owner", text: "Ordered a customized dining set and the finish was even better than the pictures. Highly professional team." },
    { name: "Sara Ahmed", role: "Architect", text: "HS Furniture understands modern minimalism combined with traditional heritage perfectly." }
];

export default function Reviews() {
    const brandGold = "#C5A880";

    return (
        <section className="py-32 bg-[#FAF9F6] text-[#121212] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="text-center mb-24 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
                        What Our <span className="font-sans font-light italic tracking-normal lowercase block md:inline md:ml-2">clients say.</span>
                    </h2>
                    <div className="w-12 h-[2px] mx-auto mt-6" style={{ backgroundColor: brandGold }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-2xl bg-white border border-zinc-200/60 shadow-sm transition-all duration-300 relative group hover:border-[#C5A880]/30 hover:shadow-md"
                        >
                            <Quote
                                className="absolute top-8 right-10 opacity-5 transition-opacity group-hover:opacity-10 duration-300"
                                size={50}
                                style={{ color: brandGold }}
                            />
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="fill-current"
                                        style={{ color: brandGold }}
                                    />
                                ))}
                            </div>
                            <p className="text-base text-zinc-600 leading-relaxed font-light italic mb-10">
                                "{rev.text}"
                            </p>
                            <div className="border-t border-zinc-100 pt-6">
                                <p className="font-medium text-zinc-900 uppercase tracking-wider text-xs">
                                    {rev.name}
                                </p>
                                <p className="text-[10px] font-medium text-zinc-400 uppercase mt-1 tracking-widest">
                                    {rev.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}