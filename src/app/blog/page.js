"use client";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ✅ Blogs Data (Same as before)
const blogs = [
  {
    slug: "How-to-Select-Tiles-for-The-Living-Room",
    date: "27 November, 2024",
    title: "How to Select Tiles for The Living Room?",
    excerpt: "When you select tiles for the living room...",
    image: "/blog1.webp"
  },
  {
    slug: "innovative-natural-stone-flooring-ideas-for-contemporary-living-spaces",
    date: "26 October, 2024",
    title: "Innovative Natural Stone Flooring Ideas for Contemporary Living Spaces",
    excerpt: "If you need to select the right tile...",
    image: "/b2.jpg"
  },
  {
    slug: "enhancing-interior-spaces-with-natural-stone-wall",
    date: "12 Dec, 2023",
    title: "Enhancing Interior Spaces with Natural Stone Wall Cladding Tiles: A Timeless Elegance",
    excerpt: "The foundation of modern interiors...",
    image: "/blog_banner.jpg"
  },
  {
    slug: "exploring-the-essential-characteristics-of-luxury-bathroom-tiles",
    date: "12 Dec, 2023",
    title: "Exploring the Essential Characteristics of Luxury Bathroom Tiles",
    excerpt: "When it comes to luxury bathroom tiles...",
    image: "/b3.jpg"
  },
  {
    slug: "choosing-the-right-tiles-for-your-bathroom",
    date: "12 Dec, 2023",
    title: "Luxury Bathroom Tiles",
    excerpt: "Crafting luxury bathrooms with tiles...",
    image: "/b4.jpg"
  },
  {
    slug: "the-beauty-of-natural-stone-tiles",
    date: "2 June, 2023",
    title: "The Beauty of Natural Stone Tiles",
    excerpt: "Natural stone tiles for timeless beauty...",
    image: "/b5.jpg"
  },
  {
    slug: "creating-a-statement-with-feature-tiles",
    date: "15 Feb, 2022",
    title: "Creating a Statement with Feature Tiles",
    excerpt: "Bathrooms need careful tile selection...",
    image: "/b6.jpg"
  },
  {
    slug: "the-benefits-of-porcelain-tiles",
    date: "5 March, 2022",
    title: "The Benefits of Porcelain Tiles",
    excerpt: "Porcelain tiles for durability and style...",
    image: "/b7.jpg"
  },
  {
    slug: "tile-cleaning-and-maintenance-tips",
    date: "10 May, 2022",
    title: "Tile Cleaning and Maintenance Tips",
    excerpt: "Keep your tiles looking their best...",
    image: "/b8.jpg"
  }
];

export default function BlogPage() {
  return (
    <>
      {/* 1. NAVBAR (White Background) */}
      <div className="w-full bg-white">
        <Navbar />
      </div>

      {/* 2. HERO IMAGE SECTION (White Text) */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/blog_hero.jpg"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif tracking-[0.3em] uppercase">
            BLOG
          </h1>
          <div className="w-20 h-[1px] bg-white/50 mt-6"></div>
        </div>
      </div>

      {/* 3. BLOG LIST SECTION */}
      <div className="bg-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Main Section Heading */}
          <h2 className="text-3xl font-serif text-center mb-20 uppercase tracking-[0.2em] text-gray-800">
            Our Insights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group block">
                {/* Curved Image Container */}
                <div className="relative h-72 w-full mb-8 overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-sm">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Content Container */}
                <div className="space-y-4">
                  {/* Date - Gold Tone */}
                  <p className="text-[#b89b5e] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                    {blog.date}
                  </p>

                  {/* Blog Title - Serif Font */}
                  <h3 className="text-xl font-serif text-gray-800 group-hover:text-[#b89b5e] transition duration-500 leading-snug uppercase tracking-wide">
                    {blog.title}
                  </h3>

                  {/* Excerpt - Sans Font */}
                  <p className="text-gray-500 text-sm font-sans font-light leading-relaxed line-clamp-3 tracking-wide">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-4">
                    <span className="inline-block text-[10px] font-sans font-bold border-b border-[#b89b5e] pb-1 uppercase tracking-[0.2em] text-gray-800">
                      READ MORE →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}