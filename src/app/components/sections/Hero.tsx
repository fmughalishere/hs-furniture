"use client"
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#121212]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                    alt="Luxury Furniture"
                    className="w-full h-full object-cover scale-105 opacity-80"
                />        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#121212]" />
            </div>

            <div className="relative z-10 text-center text-zinc-100 px-6 max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs md:text-sm font-medium tracking-[6px] uppercase mb-6 block text-[#C5A880]"
                >
                    Established Heritage • Handmade Excellence
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-[110px] font-serif leading-none tracking-tight mb-8"
                >
                    Royal <br />
                    <span className="text-[#C5A880] font-sans font-light italic tracking-normal lowercase block mt-2">
                        living.
                    </span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                >          <button className="bg-[#C5A880] text-[#121212] px-12 py-4 rounded-full font-semibold tracking-widest text-xs hover:bg-zinc-100 transition-all duration-300 uppercase shadow-xl hover:shadow-[#C5A880]/20">
                        Explore Collection
                    </button>
                    <button className="border border-zinc-400/40 backdrop-blur-md text-zinc-200 px-12 py-4 rounded-full font-medium tracking-widest text-xs hover:bg-zinc-100 hover:text-[#121212] hover:border-zinc-100 transition-all duration-300 uppercase">
                        Our Story
                    </button>
                </motion.div>
            </div>
        </section>
    );
}