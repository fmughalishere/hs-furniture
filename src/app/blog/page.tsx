"use client"
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS } from '../data/posts';

export default function BlogPage() {
  const brandGold = "#C5A880";
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Heritage', 'Interior Design', 'Wood Guide'];
  
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#121212] overflow-x-hidden">
      <Navbar />
      <section className="pt-44 pb-16 max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[6px]" style={{ color: brandGold }}>
            The Journal
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-none">
            Stories, Craft & <br/>
            <span className="font-sans font-light italic tracking-normal lowercase" style={{ color: brandGold }}>
              interior insights.
            </span>
          </h1>
        </div>
        <div className="flex gap-3 border-b border-zinc-200 pb-4 mt-12 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300 rounded-md"
              style={{
                color: selectedCategory === cat ? '#121212' : '#71717a',
                borderBottom: selectedCategory === cat ? `2px solid ${brandGold}` : '2px solid transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      {featuredPost && selectedCategory === 'all' && (
        <section className="pb-16 max-w-[1440px] mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-12 gap-10 items-center bg-white p-6 md:p-8 rounded-2xl border border-zinc-100 shadow-sm group"
          >
            <div className="lg:col-span-7 h-[350px] md:h-[450px] rounded-xl overflow-hidden relative bg-zinc-900">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4 text-xs font-medium tracking-widest text-zinc-400 uppercase">
                <span style={{ color: brandGold }}>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-zinc-900 group-hover:text-[#C5A880] transition-colors duration-300">
                {featuredPost.title}
              </h2>
              
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6 text-xs text-zinc-400 border-t border-zinc-100 pt-6">
                <div className="flex items-center gap-1.5"><User size={14} /> {featuredPost.author}</div>
                <div className="flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</div>
              </div>
              <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase pt-2 group/btn" style={{ color: brandGold }}>
                Read Article <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </section>
      )}
      <section className="py-12 max-w-[1440px] mx-auto px-6 md:px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {regularPosts
            .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
            .map((post) => (
              <motion.article 
                layout
                key={post.id}
                className="space-y-5 group"
              >
                <div className="h-[280px] w-full rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/40 relative">
                  <span className="absolute bottom-4 left-4 bg-[#121212]/80 backdrop-blur-md text-white text-[9px] font-medium tracking-widest px-3 py-1.5 rounded-md z-10 uppercase">
                    {post.category}
                  </span>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> {post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl tracking-tight text-zinc-900 group-hover:text-[#C5A880] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase pt-2 group/link" style={{ color: brandGold }}>
                    Continue <ArrowRight size={12} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}