// src/components/PorterStyleComponent.jsx
import React from "react";
import { ArrowRight } from "lucide-react";        // ← Fixed: Import kiya gaya
import porterImage from "../assets/image1.png";

function PorterStyleComponent() {
  return (
    <div className="min-h-screen bg-black/95 flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">

        {/* Left Side - Image */}
        <div className="md:w-1/2 relative overflow-hidden">
          <img
            src={porterImage}
            alt="Porter Truck Delivery"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Right Side - Fully Global Gradient Theme */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-primary text-black relative overflow-hidden">

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              India ka No.1 Intra-City Logistics
            </h1>
            
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed font-medium">
              Book trucks, bikes, tempo in minutes. Reliable, affordable, and available 24x7 across 20+ cities.
            </p>

            {/* Buttons – Global Classes Only */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href="#download"
                className="btn btn-ghost text-lg font-bold px-10 py-5 flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
              >
                Download App Now
                <ArrowRight className="w-6 h-6 icon-gradient" />
              </a>

              <a
                href="#"
                className="btn btn-ghost border border-2xl font-bold px-5 py-5 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Stats – Golden Luxury Text */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-extrabold text-gray-60 drop-shadow-lg">
                  5M+
                </p>
                <p className="text-md  text-white opacity-80 mt-2">Happy Customers</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-gray-60 drop-shadow-lg">
                  20+
                </p>
                <p className="text-md  text-white opacity-80 mt-2">Cities</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-gray-60 drop-shadow-lg">
                  1Cr+
                </p>
                <p className="text-md  text-white opacity-80 mt-2">Deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PorterStyleComponent;