"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const brandGold = "#C5A880";
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Authenticating Royal Credentials Vector:", credentials);
    };

    return (
        <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 selection:bg-[#C5A880]/30">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md bg-[#121212] p-10 md:p-14 rounded-[32px] shadow-[0_24px_60px_-15px_rgba(18,18,18,0.25)] border border-zinc-800/40 relative overflow-hidden"
            >        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#C5A880]/10 blur-[80px] pointer-events-none" />
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-serif text-zinc-100 tracking-tight mb-2">
                        Welcome <span className="italic font-light" style={{ color: brandGold }}>Back</span>
                    </h2>
                    <p className="text-[9px] font-medium text-zinc-500 uppercase tracking-[4px]">
                        Sign in to your royal account
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600">
                            <Mail size={15} />
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
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
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            className="w-full pl-11 pr-4 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 outline-none text-zinc-200 focus:border-[#C5A880] focus:bg-zinc-900 transition-all duration-300 text-xs font-medium placeholder-zinc-600"
                        />
                    </div>
                    <div className="flex justify-end px-1 pt-1">
                        <Link
                            href="/forgot-password"
                            className="text-[10px] uppercase tracking-wider text-zinc-500 hover:text-white transition-colors duration-200 font-medium"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-[#C5A880] text-[#121212] rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group mt-4"
                    >
                        Sign In
                        <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </form>
                <p className="mt-10 text-center text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
                    New to HS Furniture?
                    <Link href="/register" className="hover:text-white ml-2 transition-colors duration-300 underline underline-offset-4" style={{ color: brandGold }}>
                        Create Account
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}