export default function Footer() {
    const brandGold = "#C5A880";

    return (
        <footer className="bg-[#121212] text-zinc-400 py-24 px-6 md:px-16 border-t border-zinc-800/60">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-serif text-zinc-100 tracking-tight">
                        HS <span className="font-sans font-light italic tracking-normal block md:inline md:ml-1" style={{ color: brandGold }}>Furniture</span>
                    </h3>
                    <p className="max-w-md text-sm text-zinc-400 leading-relaxed font-light">
                        Dedicated to the art of premium craftsmanship. Since 1995, we have been carving dreams into reality for the finest luxury homes across Pakistan.
                    </p>
                </div>
                <div className="space-y-5 uppercase font-medium text-[11px] tracking-[2px]">
                    <h4 className="text-zinc-100 text-xs tracking-[4px] font-semibold border-b border-zinc-800/80 pb-2">Collections</h4>
                    <p className="hover:text-[#C5A880] cursor-pointer transition-colors duration-300">Living Room</p>
                    <p className="hover:text-[#C5A880] cursor-pointer transition-colors duration-300">Royal Bedding</p>
                    <p className="hover:text-[#C5A880] cursor-pointer transition-colors duration-300">Masterpieces</p>
                </div>
                <div className="space-y-5 uppercase font-medium text-[11px] tracking-[2px]">
                    <h4 className="text-zinc-100 text-xs tracking-[4px] font-semibold border-b border-zinc-800/80 pb-2">Inquiries</h4>
                    <p className="text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 cursor-pointer select-all">0302-6177555</p>
                    <p className="text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 cursor-pointer select-all lowercase tracking-normal text-sm">showroom@hsfurniture.com</p>
                    <p className="text-zinc-400">Lahore, PK</p>
                </div>

            </div>
            <div className="mt-20 pt-10 border-t border-zinc-800/40 text-center text-[10px] font-medium uppercase tracking-[3px] text-zinc-600">
                © 2026 HS Furniture Artisans. Crafted for Royalty.
            </div>
        </footer>
    );
}