"use client"
import { motion } from 'framer-motion';

export default function Stats() {
    return (
        <section className="relative py-40 overflow-hidden bg-[#121212] text-zinc-100">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/shop.jpg"
                    className="w-full h-full object-cover opacity-30 contrast-125"
                    alt="Workshop"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[6px] text-[#C5A880]">Established 1995</span>
                        <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-none uppercase">
                            CARVING <br />
                            <span className="text-[#C5A880] font-sans font-light italic tracking-normal lowercase block mt-2">legacy.</span>
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-lg font-light">
                            Every piece of HS Furniture is a result of hundreds of hours of patient hand-carving by master artisans from Chiniot.
                        </p>
                        <button className="border border-[#C5A880] text-[#C5A880] px-10 py-4 rounded-full font-medium tracking-widest hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 uppercase text-xs backdrop-blur-sm">
                            Our Heritage Story
                        </button>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { val: "25+", label: "Years Experience" },
                            { val: "5000+", label: "Homes Styled" },
                            { val: "100%", label: "Solid Wood" },
                            { val: "50+", label: "Master Artisans" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="p-8 bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl text-center group transition-all duration-300 hover:border-[#C5A880]/30"
                            >
                                <p className="text-4xl md:text-6xl font-light text-[#C5A880] tracking-tight">{stat.val}</p>
                                <p className="text-[11px] font-medium uppercase tracking-[2px] mt-4 text-zinc-500 group-hover:text-zinc-300 transition-colors">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}