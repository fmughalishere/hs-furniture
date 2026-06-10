"use client"
import { useCartStore } from '../../store/useCartStore';
import Navbar from '../../components/layout/Navbar';
import Link from 'next/link';
import { Trash2, ArrowRight, ShoppingBag, Lock, ShieldCheck } from 'lucide-react';
export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();
  const brandGold = "#C5A880";
  const subtotal = cart.reduce((acc, item) => {
    const numericalPrice = typeof item.price === 'number'
      ? item.price
      : parseFloat(String(item.price).replace(/[^0-9]/g, '')) || 0;
    return acc + (numericalPrice * (item.quantity || 1));
  }, 0);

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#121212] pb-32 selection:bg-[#C5A880]/30">
      <Navbar />

      <div className="pt-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="border-b border-zinc-200 pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[4px]" style={{ color: brandGold }}>
              Your Selection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mt-1 text-zinc-900">
              The Shopping <span className="italic font-light" style={{ color: brandGold }}>Bag</span>
            </h1>
          </div>
          <p className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
            [{cart.length} Pieces Reserved]
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 px-8 bg-[#121212] text-zinc-100 rounded-3xl max-w-xl mx-auto border border-zinc-800 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#C5A880]/10 blur-[80px] pointer-events-none" />
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto" style={{ color: brandGold }}>
              <ShoppingBag size={22} />
            </div>
            <div className="space-y-2">
              <p className="font-serif text-xl tracking-wide text-zinc-200">Your bag is currently empty</p>
              <p className="text-zinc-500 text-xs font-light max-w-sm mx-auto leading-relaxed">
                Explore our dynamic masterwork collections to add generational structural design pieces to your space.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C5A880] text-[#121212] text-[10px] font-bold tracking-widest uppercase rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              Browse Showroom <ArrowRight size={12} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-[#121212] p-5 rounded-2xl border border-zinc-800/60 shadow-xl relative group"
                >                  <div className="h-28 w-28 relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow space-y-1.5 pr-8">
                    <span className="text-[9px] font-semibold tracking-widest uppercase opacity-60" style={{ color: brandGold }}>
                      {item.image || "Premium Craftsmanship"}
                    </span>
                    <h3 className="font-serif text-lg text-zinc-100 tracking-tight leading-snug group-hover:text-[#C5A880] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[2px] text-zinc-500 font-medium">
                      Seasoned Timber Contour Model
                    </p>
                    <p className="text-sm font-semibold pt-1 text-zinc-200 font-sans">
                      PKR {typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute right-4 top-4 sm:static p-3 bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-rose-400 hover:border-rose-900/40 rounded-xl transition-all duration-300 flex-shrink-0"
                    title="Remove Masterpiece"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4 bg-[#121212] border border-zinc-800 p-8 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden text-zinc-100">
              <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#C5A880]/5 blur-[80px] pointer-events-none" />

              <h2 className="font-serif text-xl tracking-wide border-b border-zinc-800/80 pb-4 text-zinc-200">
                Order Summary
              </h2>
              <div className="space-y-3 font-medium text-xs text-zinc-400 tracking-wide uppercase">
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Subtotal Ledger</span>
                  <span className="font-semibold text-zinc-200 font-sans normal-case text-sm">PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Logistics & Concierge</span>
                  <span className="text-[9px] tracking-widest font-bold px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-emerald-500">
                    Free Delivery
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end border-t border-zinc-800 pt-5 text-zinc-100">
                <span className="font-serif text-sm tracking-wide">Grand Total</span>
                <span className="font-bold text-2xl font-sans" style={{ color: brandGold }}>
                  PKR {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-xl p-3 flex items-center gap-3 text-zinc-500">
                <ShieldCheck size={16} className="text-[#C5A880] flex-shrink-0" />
                <p className="text-[10px] font-medium tracking-wide uppercase">100% Insured Royal Freight Transit</p>
              </div>
              <button
                className="w-full py-4 text-[#121212] text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                style={{ backgroundColor: brandGold }}
              >
                <Lock size={12} /> Proceed to Secure Checkout
              </button>

              <p className="text-[10px] text-center text-zinc-500 font-light leading-relaxed normal-case pt-2">
                Prices are inclusive of basic premium material seasoning. Custom sizing profiles and spatial requirements can be updated with our master crafts consultants post order placement.
              </p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}