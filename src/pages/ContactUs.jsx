'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send,
  Facebook, Instagram, Twitter, Linkedin,
  CheckCircle, Sparkles
} from 'lucide-react';

import contactbg from '../assets/contactbg.png';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const sparkles = mounted
    ? Array.from({ length: 12 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 15 + Math.random() * 20,
      }))
    : [];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4"
      >

        <img
          src={contactbg}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {mounted && sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-500/70"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeOut"
            }}
            style={{ left: s.left, top: s.top }}
          >
            <Sparkles className="w-4 h-4 md:w-6 md:h-6" />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent leading-tight">
            <span className='text-yellow-600'>L</span>et's Connect
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 font-light mt-4 md:mt-6">
            Have a question? Want to partner?
            <span className="block mt-2 text-orange-400 font-bold">We’re always listening!</span>
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative -mt-24 md:-mt-32 pb-16 px-4 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: 'Call Anytime', info: '+91 98765 43210', detail: '24×7 Support' },
              { icon: Mail, title: 'Quick Email', info: 'hello@ryde.in', detail: 'Reply in <1 hour' },
              { icon: MapPin, title: 'Our Office', info: 'Mumbai, India', detail: 'Andheri East HQ' },
              { icon: Clock, title: 'Live Chat', info: 'Instant Support', detail: 'Avg. 18s response' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <motion.div
                  className="relative bg-white/80 backdrop-blur-2xl border border-yellow-300/40 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-yellow-400/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">{item.title}</h3>
                  <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text text-center">
                    {item.info}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 text-center">{item.detail}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-yellow-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 md:mb-10">
              Drop a <span className="bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text">Message</span>
            </h2>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 md:mb-8 p-4 md:p-6 bg-green-500/90 rounded-2xl text-white font-semibold flex items-center gap-3 md:gap-4 shadow-xl"
              >
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10" />
                <div>
                  <p className="text-base md:text-lg">Message Sent Successfully!</p>
                  <p className="text-xs md:text-sm opacity-90">We will reach out shortly.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Full Name" required
                  className="w-full p-4 md:p-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-yellow-400/40 focus:border-orange-500 shadow-sm focus:shadow-lg transition-all"
                />

                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="Email Address" required
                  className="w-full p-4 md:p-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-yellow-400/40 focus:border-orange-500 shadow-sm focus:shadow-lg transition-all"
                />
              </div>

              <input
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                placeholder="Phone (Optional)"
                className="w-full p-4 md:p-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-yellow-400/40 focus:border-orange-500 shadow-sm focus:shadow-lg transition-all"
              />

              <textarea
                name="message" rows="5" value={formData.message} onChange={handleChange}
                placeholder="Your Message..."
                className="w-full p-4 md:p-5 bg-white/20 backdrop-blur-xl rounded-2xl border border-yellow-400/40 focus:border-orange-500 shadow-sm focus:shadow-lg transition-all resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 md:py-5 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 text-white font-bold text-lg md:text-xl rounded-2xl shadow-2xl"
              >
                <Send className="w-5 h-5 md:w-6 md:h-6 inline-block mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* MAP + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] bg-yellow-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%" height="100%"
                style={{ border: 0 }} loading="lazy"
              />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl">
                <p className="text-lg md:text-2xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
                  <MapPin className="text-orange-600" />
                  Ryde HQ – Mumbai
                </p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8 text-center">
                Stay Connected
              </h3>
              <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
