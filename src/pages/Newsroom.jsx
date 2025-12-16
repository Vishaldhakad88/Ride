import React from "react";
import { Calendar, ExternalLink, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ IMPORT IMAGE FROM ASSETS
import NewsPaperImg from "../assets/newspepar.png";

function Newsroom() {
  const news = [
    {
      date: "Dec 5, 2025",
      title: "We Just Hit 1 Million Rides in Delhi-NCR!",
      desc:
        "Fastest growing bike taxi app crosses historic milestone in just 8 months.",
      tag: "Milestone",
      link: "#",
    },
    {
      date: "Nov 28, 2025",
      title: "Raised $25 Million in Series B Funding",
      desc:
        "Led by Sequoia Capital India & Tiger Global. Funds to be used for expansion in 50+ cities.",
      tag: "Funding",
      link: "#",
    },
    {
      date: "Nov 15, 2025",
      title: "Launched Women-Only 'Pink Ride' Feature",
      desc:
        "Female riders can now book rides only with women captains for extra safety.",
      tag: "Safety",
      link: "#",
    },
    {
      date: "Oct 20, 2025",
      title: "Partnered with 10,000+ Local Shops",
      desc:
        "Now delivering parcels, food, groceries – everything under ₹49 in 15 mins.",
      tag: "Partnership",
      link: "#",
    },
    {
      date: "Sep 10, 2025",
      title: "Onboarded 50,000 Riders in 60 Days",
      desc:
        "Biggest driver recruitment drive in Indian startup history.",
      tag: "Growth",
      link: "#",
    },
    {
      date: "Aug 1, 2025",
      title: "App of the Day on Google Play Store",
      desc:
        "Featured as #1 trending app in Transportation category across India.",
      tag: "Recognition",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO / BANNER ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${NewsPaperImg})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-yellow-500/30" />

        {/* Yellow Glow Effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/40 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-yellow-500/30 blur-[140px] rounded-full" />

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
            Newsroom
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 font-semibold max-w-3xl mx-auto">
            Latest updates, achievements & stories from our journey
          </p>
        </div>
      </section>

      {/* ================= NEWS GRID ================= */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                {/* Tag */}
                <div className="px-6 pt-6">
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={18} />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:gap-4 transition-all"
                  >
                    Read More <ChevronRight size={20} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-16 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Load More News
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRESS CONTACT ================= */}
      <section className="py-20 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            For Press & Media Inquiries
          </h2>
          <p className="text-xl mb-10">
            We'd love to share our story with you
          </p>
          <a
            href="mailto:press@yourapp.com"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-xl px-12 py-5 rounded-full hover:scale-110 transition shadow-2xl"
          >
            <ExternalLink size={28} />
            Contact Press Team
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Newsroom;
