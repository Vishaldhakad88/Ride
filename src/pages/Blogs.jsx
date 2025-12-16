import React from 'react';
import { Calendar, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Cheapest Bike Taxi in Delhi-NCR 2025 – Starting at Just ₹29!",
      excerpt: "Beat the traffic and save big. Complete guide + secret hacks to get the lowest fares every time.",
      date: "Dec 10, 2025",
      readTime: "5 min read",
      category: "Delhi",
      image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80",
      slug: "cheapest-bike-taxi-delhi"
    },
    {
      id: 2,
      title: "Rapido vs Ola Bike vs Uber Moto – Who Wins in 2025?",
      excerpt: "Real user reviews, price comparison, waiting time, safety – everything you need to choose the best.",
      date: "Dec 8, 2025",
      readTime: "7 min read",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d41?w=800&q=80",
      slug: "rapido-vs-ola-vs-uber-2025"
    },
    {
      id: 3,
      title: "100% Safe Rides for Women – Introducing Pink Ride Feature",
      excerpt: "Women drivers, SOS button, live tracking – your safety is our top priority.",
      date: "Dec 5, 2025",
      readTime: "4 min read",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80",
      slug: "women-safety-pink-ride"
    }, // ← YEH COMMA PEHLE MISSING THA → FIXED!
    {
      id: 4,
      title: "Earn ₹50,000/Month as a Bike Taxi Driver – Zero Investment",
      excerpt: "Start your own business today. Real earnings proof, documents & top cities list inside!",
      date: "Dec 3, 2025",
      readTime: "6 min read",
      category: "Earn Money",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      slug: "become-bike-taxi-driver"
    },
    {
      id: 5,
      title: "Get a Ride in 7 Minutes Even in Bangalore Peak Traffic",
      excerpt: "How thousands of riders beat traffic daily – the ultimate hack revealed.",
      date: "Dec 1, 2025",
      readTime: "5 min read",
      category: "Bangalore",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
      slug: "bangalore-fastest-bike-taxi"
    },
    {
      id: 6,
      title: "First Ride FREE + ₹500 Instant Wallet Bonus (Live Now!)",
      excerpt: "Download app now → Get ₹500 free wallet + first 3 rides 100% free!",
      date: "Nov 28, 2025",
      readTime: "3 min read",
      category: "Offers",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      slug: "first-ride-free-offer"
    }
  ];

  return (
    <>
      <Navbar />

      {/* HERO BANNER – PERFECT FIT ON EVERY DEVICE */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=1800&auto=format&fit=crop&q=85')`,
            backgroundPosition: "center 35%" // Faces clearly visible
          }}
        />
        
        {/* Beautiful Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        
        {/* Hero Text */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Blog & Updates
          </h1>
          <p className="text-2xl md:text-4xl text-yellow-300 font-light mb-12">
            Save more • Ride safer • Earn bigger
          </p>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={56} className="text-yellow-400 mx-auto" />
          </div>
        </div>

        {/* Smooth Wave Bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 200" className="w-full h-32 md:h-48">
            <path fill="#f9fafb" d="M0,100 C320,200 1120,0 1440,100 L1440,200 L0,200 Z" />
          </svg>
        </div>
      </section>

      {/* BLOG CARDS SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Latest Articles</h2>
            <p className="text-xl text-gray-600 mt-4">Tips | Offers | Safety | Earnings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-6 left-6 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm shadow-lg">
                    {blog.category}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-yellow-600" size={18} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-yellow-600" size={18} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <a
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Read Article
                    <ArrowRight size={22} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-20">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl py-5 px-20 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;