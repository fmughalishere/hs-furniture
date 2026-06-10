"use client"
import { use } from 'react';
import Navbar from '../../components/layout/Navbar';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/posts';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPostDetailPage({ params }: PageProps) {
  const brandGold = "#C5A880";
    const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id);
    const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) {
    return (
      <main className="bg-[#FAF9F6] min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-zinc-500 font-light">The editorial entry could not be found.</p>
        <Link href="/blog" className="text-xs tracking-widest font-bold uppercase underline" style={{ color: brandGold }}>Back to Journal</Link>
      </main>
    );
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen text-[#121212] pb-32">
      <Navbar />
      <div className="pt-36 max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-[#121212] transition-colors group">
          <ChevronLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform" /> Back to Journal
        </Link>
      </div>
      <article className="mt-8 max-w-4xl mx-auto px-6 space-y-10">
                <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[4px]" style={{ color: brandGold }}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight text-zinc-900">
            {post.title}
          </h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 font-medium pt-2 uppercase tracking-wider">
            <div className="flex items-center gap-1.5"><User size={14} style={{ color: brandGold }} /> {post.author}</div>
            <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
          </div>
        </div>
        <div className="h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-md border border-zinc-200/50 bg-zinc-900">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="prose max-w-none text-zinc-700 font-light text-base md:text-lg leading-relaxed space-y-6 pt-4">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#C5A880]">
            {post.content}
          </p>
          <p>
            Our master carving process requires absolute spatial visualization. Every artisan brings generations of spatial heritage layout maps straight onto raw log components without templates. This dynamic approach guarantees each product layout remains entirely exclusive to the client.
          </p>
        </div>

      </article>
    </main>
  );
}