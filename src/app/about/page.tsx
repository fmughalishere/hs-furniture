"use client"
import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sparkles, Hammer } from 'lucide-react';

export default function AboutPage() {
    const brandGold = "#C5A880";

    return (
        <main className="bg-[#FAF9F6] min-h-screen text-[#121212] overflow-x-hidden">
            <Navbar />
            <section className="pt-52 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
                            Our Heritage
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-none">
                            Artisans of <br />
                            <span className="font-sans font-light italic tracking-normal lowercase block mt-2" style={{ color: brandGold }}>
                                elegance.
                            </span>
                        </h2>

                        <p className="text-xl text-zinc-600 leading-relaxed font-light italic border-l-2 pl-6" style={{ borderColor: brandGold }}>
                            "Every piece of furniture we carve tells a story of heritage, patience, and the timeless beauty of natural wood."
                        </p>

                        <p className="text-base text-zinc-500 leading-relaxed font-light max-w-xl">
                            Founded in 1995, HS Furniture began as a small workshop of passionate carvers. Today, we are proud to be the pioneers of luxury furniture in the region, seamlessly blending magnificent Mughal aesthetics with modern structural minimalism.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl bg-zinc-900 border border-zinc-200/40"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1540518614846-7eded433c457"
                            className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-[1500ms]"
                            alt="Heritage Wood Craftsmanship"
                        />
                    </motion.div>

                </div>
            </section>
            <section className="py-24 border-t border-zinc-200/60 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10">
                    <div className="text-center mb-16 space-y-3">
                        <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>Why Choose Us</span>
                        <h3 className="text-3xl md:text-5xl font-serif tracking-tight">The Pillars of Our Craft</h3>
                        <div className="w-12 h-[2px] mx-auto mt-4" style={{ backgroundColor: brandGold }} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <ShieldCheck size={28} />,
                                title: "100% Solid Chinioti Wood",
                                desc: "We exclusively use premium grade Shisham (Rosewood) and Walnut, seasoned to perfection to prevent wrapping or aging flaws."
                            },
                            {
                                icon: <Award size={28} />,
                                title: "Master Hand-Carving",
                                desc: "No CNC machines. Every curve, floral motif, and pattern is painstakingly detailed by hand by generational master artisans."
                            },
                            {
                                icon: <Sparkles size={28} />,
                                title: "Bespoke Royal Customization",
                                desc: "Your home deserves individual character. We customize sizes, fabrics, and polishing details to match your unique space blueprint."
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-zinc-100 bg-[#FAF9F6]/50 space-y-4 hover:border-[#C5A880]/30 transition-all duration-300">
                                <div style={{ color: brandGold }}>{pillar.icon}</div>
                                <h4 className="text-lg font-serif text-zinc-900">{pillar.title}</h4>
                                <p className="text-sm text-zinc-500 font-light leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-1 space-y-4">
                        <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>Behind The Scenes</span>
                        <h3 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">How We Sculpt Legacy</h3>
                        <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-sm pt-2">
                            A single royal sofa or premium bed set takes weeks of synchronous hard work. Here is how your furniture comes alive.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200">
                        {[
                            { step: "01", name: "Wood Selection & Seasoning", detail: "Moisture content is strictly regulated. We choose logs with the rich grains to ensure heavy structural endurance." },
                            { step: "02", name: "Architectural Sketching", detail: "Before the chisel touches wood, full-scale traditional patterns are mapped directly onto the raw timber frames." },
                            { step: "03", name: "The Art of Chiseling", detail: "Artisans execute precision relief work, creating deep three-dimensional floral and geometric carvings." },
                            { step: "04", name: "Multi-Layer Refined Polishing", detail: "Finished with premium eco-friendly coats that lock the wood depth, available in vintage deco, matte oak, or glass gloss lacquer." },
                        ].map((phase, idx) => (
                            <div key={idx} className="relative pl-12 group">
                                <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-[#C5A880] transition-colors duration-300" />

                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono font-medium" style={{ color: brandGold }}>{phase.step}</span>
                                        <h4 className="font-serif text-base text-zinc-800">{phase.name}</h4>
                                    </div>
                                    <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl">{phase.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}