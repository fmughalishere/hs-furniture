"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const brandGold = "#C5A880";
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Royal Account Request Matrix:", formData);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 py-20 selection:bg-[#C5A880]/30">
      <motion.div 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg bg-[#121212] p-10 md:p-14 rounded-[32px] shadow-[0_24px_60px_-15px_rgba(18,18,18,0.25)] border border-zinc-800/40 relative overflow-hidden"
      >        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#C5A880]/10 blur-[80px] pointer-events-none" />
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-100 tracking-tight mb-2">
            Join <span className="italic font-light" style={{ color: brandGold }}>Us</span>
          </h2>
          <p className="text-[9px] font-medium text-zinc-500 uppercase tracking-[4px]">
            Create your royal heritage account
          </p>
        </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                <User size={15} />
              </span>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name" 
                required
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 outline-none text-zinc-200 focus:border-[#C5A880] focus:bg-zinc-900 transition-all duration-300 text-xs font-medium placeholder-zinc-600" 
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                <User size={15} />
              </span>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name" 
                required
                className="w-full pl-11 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 outline-none text-zinc-200 focus:border-[#C5A880] focus:bg-zinc-900 transition-all duration-300 text-xs font-medium placeholder-zinc-600" 
              />
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
              <Mail size={15} />
            </span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              required
              className="w-full pl-11 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 outline-none text-zinc-200 focus:border-[#C5A880] focus:bg-zinc-900 transition-all duration-300 text-xs font-medium placeholder-zinc-600" 
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
              <Lock size={15} />
            </span>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Strong Password" 
              required
              className="w-full pl-11 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 outline-none text-zinc-200 focus:border-[#C5A880] focus:bg-zinc-900 transition-all duration-300 text-xs font-medium placeholder-zinc-600" 
            />
          </div>
                    <div className="flex items-center gap-3 px-1 pt-2 pb-4 select-none">
            <input 
              type="checkbox" 
              name="agreeTerms"
              id="terms" 
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
              className="w-4 h-4 rounded border-zinc-800 bg-zinc-900 text-[#C5A880] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#C5A880]"
            />
            <label htmlFor="terms" className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest cursor-pointer hover:text-zinc-400 transition-colors">
              I agree to the terms & conditions
            </label>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-[#C5A880] text-[#121212] rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
          >
            Create Account 
            <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
        <p className="mt-10 text-center text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
          Already a member? 
          <Link href="/login" className="hover:text-white ml-2 transition-colors duration-300 underline underline-offset-4" style={{ color: brandGold }}>
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}