import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Shield, MapPin, Clock, Star, HeadphonesIcon, Users, Bike, Car, Package, Zap
} from 'lucide-react';

const Aboutus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    "https://images.unsplash.com/photo-1654697788353-4b053aad18af?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1591800714180-7471f5e79db8?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&q=80&w=2070"
  ];

  const slideTexts = [
    "Fastest • Safest • Most Affordable Rides in Your City",
    "Join 50,000+ Happy Captains Earning Daily",
    "Trusted by Millions – Verified Drivers, Real-Time Tracking"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Banner - Full Yellow/yellow Theme */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Slides */}
          <div className="absolute inset-0">
            {slides.map((src, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Yellow-yellow Glow Effects */}
          <div className="absolute top-10 left-0 md:left-10 w-80 h-80 md:w-96 md:h-96 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-0 md:right-10 w-80 h-80 md:w-96 md:h-96 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-5xl mx-auto z-10">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight"
              >
                <span className="text-yellow-400">R</span>ide the Future with{" "}
                <span className="text-white-400">Ryde</span>
              </motion.h1>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-yellow-100 font-medium mb-10 max-w-4xl mx-auto"
                >
                  {slideTexts[currentSlide]}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              >
                <a
                  href="#"
                  className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-bold text-lg sm:text-xl px-4 py-2 rounded-full shadow-2xl hover:scale-105 transition-all flex gap-1.5 duration-300"
                >
                  <Zap className="w-6 h-6" />
                  Book Ride Now
                </a>
                <a
                  href="#"
                  className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-bold text-lg sm:text-xl px-8 py-2 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Become a Captain
                </a>
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? "bg-yellow-400 w-16 shadow-lg shadow-yellow-400/50"
                    : "bg-white/70 w-3 hover:w-10"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-yellow-50 to-yellow-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-4xl md:text-3xl lg:text-5xl text-center font-extrabold text-black mb-6 drop-shadow-2xl leading-tight"
            >
              What We Offer
            </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
  {[
    { icon: Bike, title: "Bike Taxi", gradient: "from-yellow-400 to-yellow-400" },
    { icon: Car, title: "Cab Rides", gradient: "from-yellow-400 to-yellow-400" },
    { icon: Package, title: "Parcel Delivery", gradient: "from-yellow-400 to-yellow-400" },
    { icon: Users, title: "Auto Rides", gradient: "from-yellow-400 to-yellow-400" }
  ].map((service, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center group"
      whileHover={{ y: -15, scale: 1.05 }}
    >
      <div className={`w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.gradient} p-2 shadow-2xl group-hover:shadow-yellow-400/50 transition-all duration-500`}>
        <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-inner border border-yellow-800">
          <service.icon className="w-14 h-14 sm:w-16 sm:h-16 text-gray-40" />
        </div>
      </div>

      {/* UPDATED: TEXT yellow */}
      <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-yellow-400 transition-colors">
        {service.title}
      </h3>
    </motion.div>
  ))}
</div>

          </div>
        </section>

        {/* Why Choose Ryde */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl sm:text-4xl md:text-3xl lg:text-5xl text-center font-extrabold text-black mb-6 drop-shadow-2xl leading-tight"
            >
              Why Choose Ryde?
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                { icon: Shield, title: "Verified & Trained Drivers", desc: "Every driver is background-checked and trained" },
                { icon: MapPin, title: "Live GPS Tracking", desc: "Track your ride in real-time with shareable links" },
                { icon: Clock, title: "Fastest Pickup", desc: "Average arrival time: 3-5 minutes" },
                { icon: Star, title: "Transparent Pricing", desc: "See fare upfront. Pay exactly what you see" },
                { icon: HeadphonesIcon, title: "24/7 Support", desc: "Call or chat — we're always here to help" },
                { icon: Zap, title: "One-Tap Booking", desc: "Book your ride in just one tap" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-5 bg-gradient-to-r from-yellow-50 to-yellow-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-yellow-400/30 border border-yellow-100 hover:border-yellow-400 transition-all duration-400 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-28 bg-gradient-to-br from-yellow-50 via-yellow-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-5xl sm:text-4xl md:text-6xl lg:text-5xl font-extrabold text-black mb-6 drop-shadow-2xl leading-tight">
                Our Vision
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
                To become the most trusted and loved ride-booking app in every Indian city —
                where <span className="text-yellow-400 font-bold">safety</span>, <span className="text-yellow-400 font-bold">speed</span>, and <span className="text-yellow-400 font-bold">fairness</span> come standard with every ride.
              </p>

              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="mt-20"
              >
                <Bike className="w-32 h-32 sm:w-40 sm:h-40 mx-auto text-yellow-40 drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Aboutus;