"use client"
import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { Quote, Star, UserCheck, ShieldAlert } from 'lucide-react';
const REVIEWS_DATA = [
  {
    id: 1,
    clientName: "Begum Shahida Mansoor",
    location: "Gulberg, Lahore",
    project: "Full Mansion Bridal Setup",
    feedback: "The intricate relief work on our custom Mughal canopy bed is breathtaking. Every guest has asked about the craftsmanship. HS Furniture handles timber with the respect of true masters.",
    rating: 5,
    avatarChar: "S"
  },
  {
    id: 2,
    clientName: "Barrister Daniyal Alvi",
    location: "DHA Phase 6, Karachi",
    project: "Executive Office Suite",
    feedback: "I ordered a solid walnut partner desk with custom brass inlays. The deep mirror polish finish is flawless, and the structural density is heavy and premium. Truly elite work.",
    rating: 5,
    avatarChar: "D"
  },
  {
    id: 3,
    clientName: "Dr. Amna Asif",
    location: "E-7, Islamabad",
    project: "Victorian Dining Set",
    feedback: "It is incredibly rare to find 100% genuine seasoned Shisham wood without shortcut CNC work these days. Their hand-carving depth creates beautiful shadow lines under minimal chandelier lighting.",
    rating: 5,
    avatarChar: "A"
  }
];

export default function TestimonialsPage() {
  const brandGold = "#C5A880";

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#121212] overflow-x-hidden pb-32">
      <Navbar />
      <section className="pt-48 pb-16 max-w-[1440px] mx-auto px-6 md:px-10 text-center space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
          Elite Patrons
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-tight">
          Voices of those who <br/>
          <span className="font-sans font-light italic tracking-normal lowercase" style={{ color: brandGold }}>
            appreciate legacy.
          </span>
        </h1>
        <p className="text-zinc-500 font-light text-sm max-w-md mx-auto leading-relaxed pt-2">
          From presidential suites to generational family estates, we craft bespoke luxury furniture for the most discerning spaces across Pakistan.
        </p>
      </section>
      <section className="max-w-[1100px] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-zinc-200 py-8 text-center gap-6">
          <div className="space-y-1">
            <p className="text-2xl font-serif text-zinc-900">28+ Years</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Of Pure Handcrafting</p>
          </div>
          <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-zinc-200 py-4 sm:py-0">
            <p className="text-2xl font-serif text-zinc-900">4,500+</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Homes Transformed</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-serif text-zinc-900">100% Solid</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Seasoned Timber Guarantee</p>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between relative group hover:border-[#C5A880]/30 transition-all duration-300"
            >
              <Quote 
                size={40} 
                className="absolute right-6 top-6 opacity-[0.03] text-zinc-900 group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none" 
              />

              <div className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} fill={brandGold} stroke="none" />
                  ))}
                </div>
                <p className="text-zinc-600 font-light text-base leading-relaxed italic">
                  "{item.feedback}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-zinc-100 pt-6 mt-8">
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold font-mono tracking-normal"
                  style={{ backgroundColor: `${brandGold}20`, color: brandGold }}
                >
                  {item.avatarChar}
                </div>
                <div>
                  <h4 className="font-serif text-sm text-zinc-900 font-semibold tracking-tight">{item.clientName}</h4>
                  <p className="text-[11px] font-medium tracking-wide text-zinc-400 uppercase mt-0.5">
                    {item.location} • <span className="text-zinc-500 font-light lowercase italic tracking-normal">{item.project}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}