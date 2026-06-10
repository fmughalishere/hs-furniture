"use client"
import { useCartStore } from '../store/useCartStore';
import Image from 'next/image';
import { Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-48 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-16 italic text-slate-900">Your Bag.</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-[50px]">
            <ShoppingBag size={60} className="mx-auto mb-6 text-slate-200" />
            <p className="text-xl text-slate-500 font-medium">Your bag is empty.</p>
            <Link href="/products" className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 items-center bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm">
                  <div className="h-32 w-32 relative rounded-2xl overflow-hidden shadow-md">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                    <p className="text-[#3b5998] font-black mt-1">Rs {item.price.toLocaleString()}</p>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-widest">Qty: {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 p-4 hover:bg-red-50 rounded-full transition">
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 p-10 rounded-[50px] text-white h-fit shadow-2xl">
              <h2 className="text-2xl font-bold mb-8 italic">Order Summary</h2>
              <div className="flex justify-between mb-4 opacity-60 font-medium uppercase tracking-widest text-xs">
                <span>Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-8 border-t border-white/10 pt-6 text-2xl font-black">
                <span>Total</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <button className="w-full bg-[#c1272d] text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                Complete Order
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}