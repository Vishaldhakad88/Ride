// src/components/PorterStyleComponent.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; 
import porterImage from "../assets/image1.png";

function PorterStyleComponent() {
  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center py-10">

      {/* Animations added */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-white/100"
      >

        {/* Left Side - Image Normal (No B/W) */}
        <div className="md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={porterImage}
            alt="Porter Truck Delivery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative z-10 text-white"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              India ka No.1 Intra-City Logistics
            </h1>

            <p className="text-md md:text-lg mb-8 opacity-90 leading-relaxed font-medium">
              Book trucks, bikes, tempo in minutes. Reliable, affordable, and available 24x7 across 20+ cities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#download"
                className="btn btn-ghost text-lg font-bold px-8 py-4 flex items-center justify-center gap-3 hover:bg-white/20 transition-all text-white"
              >
                Download App Now
                <ArrowRight className="w-5 h-5 icon-gradient" />
              </a>

              <a
                href="#"
                className="btn btn-ghost border font-bold px-6 py-4 transition-all text-white"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-extrabold text-white">5M+</p>
                <p className="text-sm opacity-80 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white">20+</p>
                <p className="text-sm opacity-80 mt-1">Cities</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-white">1Cr+</p>
                <p className="text-sm opacity-80 mt-1">Deliveries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default PorterStyleComponent;
