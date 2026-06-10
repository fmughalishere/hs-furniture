"use client"
import Navbar from '../components/layout/Navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    const brandGold = "#C5A880";

    return (
        <main className="bg-[#FAF9F6] min-h-screen text-[#121212] pb-24">
            <Navbar />

            <section className="pt-52 px-6 md:px-10 max-w-[1440px] mx-auto">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
                        Bespoke Commissions
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif tracking-tight">
                        Let's create <span className="font-sans font-light italic tracking-normal lowercase" style={{ color: brandGold }}>legacy.</span>
                    </h1>
                    <p className="text-zinc-500 font-light text-sm max-w-md mx-auto leading-relaxed pt-2">
                        Have a design pattern in mind or building a luxury estate setup? Get in touch with our master carvers.
                    </p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12 bg-white border border-zinc-100 rounded-2xl shadow-sm overflow-hidden p-6 md:p-12 max-w-6xl mx-auto">
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="font-serif text-2xl text-zinc-900 tracking-tight mb-4">Send an Inquiry</h3>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="w-full p-4 rounded-xl bg-[#FAF9F6] outline-none border border-zinc-200/60 font-light text-sm text-zinc-800 placeholder-zinc-400 focus:border-[#C5A880] transition-colors duration-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-4 rounded-xl bg-[#FAF9F6] outline-none border border-zinc-200/60 font-light text-sm text-zinc-800 placeholder-zinc-400 focus:border-[#C5A880] transition-colors duration-300"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Phone Number / WhatsApp (e.g., 03001234567)"
                                className="w-full p-4 rounded-xl bg-[#FAF9F6] outline-none border border-zinc-200/60 font-light text-sm text-zinc-800 placeholder-zinc-400 focus:border-[#C5A880] transition-colors duration-300"
                            />
                            <textarea
                                rows={5}
                                placeholder="Describe your design specifications, timber preference, or dimension details..."
                                className="w-full p-4 rounded-xl bg-[#FAF9F6] outline-none border border-zinc-200/60 font-light text-sm text-zinc-800 placeholder-zinc-400 focus:border-[#C5A880] transition-colors duration-300 resize-none"
                            />

                            <button
                                className="w-full py-4 text-white rounded-xl font-medium uppercase tracking-widest text-xs transition-all duration-300 shadow-md shadow-zinc-900/10 hover:bg-zinc-800"
                                style={{ backgroundColor: "#121212" }}
                            >
                                Submit Consultation Request
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-5 bg-[#FAF9F6]/60 border border-zinc-100 rounded-xl p-8 flex flex-col justify-between space-y-10">
                        <div className="space-y-8">
                            <h3 className="font-serif text-2xl text-zinc-900 tracking-tight">Showroom Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 mt-0.5">
                                        <MapPin size={16} style={{ color: brandGold }} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[2px] text-zinc-400 font-bold">Main Flagship Showroom</h4>
                                        <p className="text-zinc-800 font-medium text-base mt-0.5">12-Main Gulberg, Lahore, Pakistan</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 mt-0.5">
                                        <Phone size={16} style={{ color: brandGold }} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[2px] text-zinc-400 font-bold">Direct Call / WhatsApp</h4>
                                        <p className="text-zinc-800 font-medium text-base mt-0.5 select-all">+92 302 6177555</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-white border border-zinc-200 text-zinc-700 mt-0.5">
                                        <Mail size={16} style={{ color: brandGold }} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[2px] text-zinc-400 font-bold">Digital Concierge</h4>
                                        <p className="text-zinc-800 font-medium text-base mt-0.5 lowercase">showroom@hsfurniture.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border-t border-zinc-200/60 pt-6 text-xs text-zinc-500 font-light">
                            <Clock size={14} style={{ color: brandGold }} />
                            <span>Timings: 11:00 AM – 09:00 PM (Mon - Sat)</span>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}