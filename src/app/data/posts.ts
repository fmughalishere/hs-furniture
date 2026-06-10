export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Chinioti Wood Carving: A Heritage Threatened by Machines",
    excerpt: "Discover why traditional hand-chiseling creates irreplaceable structural depth that modern CNC routers can never replicate.",
    content: "Chiniot wood carving is not just an industry; it is a living history etched onto premium Shisham logs. For centuries, master artisans have used nothing but small steel chisels and heavy wooden mallets to bring complex floral patterns to life. In recent years, computerized CNC routers have flooded the market with cheap copies, but they lack the genuine undercut depth and sharp structural shadow profiles that only a human hand can sculpt. Investing in hand-carved furniture is an investment in human mastery and cultural heritage.",
    category: "Heritage",
    date: "June 08, 2026",
    author: "Zain Salman",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "How to Style a Mughal Jharoka in a Modern Minimalist Living Room",
    excerpt: "Fusing ancient luxury with sharp geometric interiors. Learn the precise math of color contrast and spatial balance.",
    content: "Fusing a traditional hand-carved Mughal Jharoka into a high-end minimalist space requires dynamic balance. Since modern apartments favor neutral gray or white matte backdrops, a dark heavy timber framework creates an immediate focal point. The absolute secret is giving the piece room to breathe—do not clutter the surrounding wall layout. Let the architectural clean lines contrast directly with the intricate relief patterns of the wood.",
    category: "Interior Design",
    date: "May 28, 2026",
    author: "Ayesha Khan",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 3,
    title: "The Ultimate Timber Guide: Shisham vs. Walnut Wood Endurance",
    excerpt: "Before investing in luxury bedding, understand the moisture retention and fiber density differences between premium logs.",
    content: "When selecting luxury bespoke furniture, the timber species defines generational lifespan. Solid Shisham (Indian Rosewood) is incredibly dense, interlocking grain structures that prevent natural wrap warping even in extreme humid seasons across Pakistan. Walnut, on the other hand, offers an elite velvet wood grain pattern that takes deep polishing flawlessly. For premium bedding, Shisham brings heavy load stability, while Walnut elevates decorative executive tables.",
    category: "Wood Guide",
    date: "May 14, 2026",
    author: "Master Artisan Ahmad",
    image: "/images/shop.jpg",
    readTime: "7 min read",
    featured: false
  }
];