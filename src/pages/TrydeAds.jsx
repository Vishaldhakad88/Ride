import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TydeAdsSection() {
  return (
    <>
    <Navbar />
    <section className="relative bg-gradient-to-b from-white via-yellow-50 to-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-black/10 blur-3xl rounded-full" />

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 animate-fadeUp">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Advertise on{" "}
          <span className="text-yellow-400 drop-shadow-sm">Tyde</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Promote your business to daily taxi riders and porter users with
          high-visibility ads inside the Tyde app.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Taxi Ads */}
        <div className="group glass-card animate-left">
          <div className="icon-box bg-yellow-400 text-black">🚕</div>

          <h3 className="text-2xl font-bold text-black mb-4">
            Taxi Ride Ads
          </h3>

          <p className="text-gray-700 mb-6">
            Show your brand to passengers while they book or travel using Tyde
            Taxi. Perfect for restaurants, apps & local stores.
          </p>

          <ul className="space-y-2 text-gray-800 mb-8">
            <li>• Ride booking screen ads</li>
            <li>• Location-based targeting</li>
            <li>• High attention visibility</li>
          </ul>

          <button className="cta-yellow">
            Run Taxi Ads
          </button>
        </div>

        {/* Porter Ads */}
        <div className="group glass-card animate-right">
          <div className="icon-box bg-black text-yellow-400">📦</div>

          <h3 className="text-2xl font-bold text-black mb-4">
            Porter Delivery Ads
          </h3>

          <p className="text-gray-700 mb-6">
            Reach shop owners, vendors and businesses who transport goods using
            Tyde Porter services.
          </p>

          <ul className="space-y-2 text-gray-800 mb-8">
            <li>• Business-focused ads</li>
            <li>• Vendor & shop targeting</li>
            <li>• Boost repeat orders</li>
          </ul>

          <button className="cta-black">
            Run Porter Ads
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative text-center mt-20 animate-fadeUp">
        <h3 className="text-3xl font-bold text-black mb-4">
          Grow Faster with Tyde Ads
        </h3>
        <p className="text-gray-600 mb-8">
          Smart targeting • Affordable pricing • Real-time results
        </p>
        <button className="px-10 py-4 rounded-2xl bg-yellow-400 text-black font-bold text-lg shadow-[0_15px_40px_rgba(250,204,21,0.6)] hover:scale-105 transition">
          Contact Ads Team
        </button>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(14px);
            border-radius: 28px;
            padding: 2.5rem;
            border: 1px solid rgba(0,0,0,0.08);
            box-shadow:
              0 25px 60px rgba(0,0,0,0.15),
              0 15px 40px rgba(250,204,21,0.35);
            transition: all 0.5s ease;
          }

          .glass-card:hover {
            transform: translateY(-12px) scale(1.03);
            box-shadow:
              0 35px 80px rgba(0,0,0,0.25),
              0 20px 60px rgba(250,204,21,0.6);
          }

          .icon-box {
            width: 64px;
            height: 64px;
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin-bottom: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          .cta-yellow {
            padding: 12px 28px;
            border-radius: 14px;
            font-weight: 700;
            background: #facc15;
            color: #000;
            box-shadow: 0 12px 30px rgba(250,204,21,0.6);
            transition: 0.3s;
          }

          .cta-yellow:hover {
            transform: scale(1.05);
          }

          .cta-black {
            padding: 12px 28px;
            border-radius: 14px;
            font-weight: 700;
            background: #000;
            color: #facc15;
            box-shadow: 0 12px 30px rgba(0,0,0,0.6);
            transition: 0.3s;
          }

          .cta-black:hover {
            transform: scale(1.05);
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes left {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes right {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }
          .animate-left { animation: left 1s ease-out forwards; }
          .animate-right { animation: right 1s ease-out forwards; }
        `}
      </style>
    </section>
    <Footer />
    </>
  );
}
