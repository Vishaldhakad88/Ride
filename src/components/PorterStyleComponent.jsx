// src/components/PorterStyleComponent.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import porterImage from "../assets/image1.png";

function PorterStyleComponent() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-200 bg-white"
      >

        {/* Left Image */}
        <div className="md:w-1/2 relative overflow-hidden h-[300px] md:h-auto bg-white">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={porterImage}
            alt="Porter Delivery"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-black"
          >
            <span className="text-3xl ">
              India ka No.1 Intra-City Logistics
            </span>

            <p className="text-md md:text-lg mb-8 font-medium text-gray-700 leading-relaxed">
              Book trucks, bikes, tempo in minutes. Reliable, affordable, and available 24x7 across 20+ cities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              
              <a
                href="#download"
                className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-all"
              >
                Download App Now
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="px-8 py-4 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center text-black">
              <div>
                <p className="text-4xl font-extrabold">5M+</p>
                <p className="text-sm opacity-70 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">20+</p>
                <p className="text-sm opacity-70 mt-1">Cities</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold">1Cr+</p>
                <p className="text-sm opacity-70 mt-1">Deliveries</p>
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default PorterStyleComponent;
