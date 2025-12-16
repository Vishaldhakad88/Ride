import React from "react";
import {
  Phone,
  ArrowRight,
  IndianRupee,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import earnTaxi from "../assets/earnTaxi.png";

const Career = () => {
  const riderAppLink =
    "https://play.google.com/store/apps/details?id=com.yourapp.rider";

  return (
    <>
      <Navbar />

      {/* HERO SECTION WITH IMAGE + EFFECTS */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-22">
        {/* Background Image */}
        <img
          src={earnTaxi}
          alt="Earn With Taxi"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Yellow Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/40 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/30 rounded-full blur-[130px]"></div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute w-4 h-4 bg-yellow-400/80 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${8 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Ride With Us. <br />
            <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.9)]">
              Earn Big.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white font-semibold mb-10">
            Join 50,000+ Riders Earning ₹50K – ₹80K / Month
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={riderAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-bold text-xl px-10 py-5 rounded-full hover:scale-110 transition shadow-[0_0_40px_rgba(250,204,21,0.8)]"
            >
              Download Rider App
            </a>
            <a
              href="#jobs"
              className="bg-white text-black font-bold text-xl px-10 py-5 rounded-full hover:scale-110 transition shadow-xl"
            >
              Office Jobs
            </a>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {[
            { icon: IndianRupee, text: "Highest Pay" },
            { icon: Zap, text: "Daily Earnings" },
            { icon: Shield, text: "Free Insurance" },
            { icon: Users, text: "24×7 Support" },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="bg-yellow-400 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition">
                <item.icon size={44} className="text-black" />
              </div>
              <p className="text-lg md:text-xl font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RIDER INFO */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            Start Earning in 24 Hours
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              ["₹70K+", "Per Month"],
              ["Zero", "Joining Fee"],
              ["Daily", "Payments"],
              ["Free", "Training"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-yellow-400 text-black py-10 rounded-3xl shadow-2xl"
              >
                <p className="text-4xl font-black">{item[0]}</p>
                <p className="text-lg mt-2">{item[1]}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={riderAppLink}
              className="bg-yellow-400 text-black font-bold text-xl px-8 py-4 rounded-full hover:scale-110 transition"
            >
              Download App
            </a>
            <a
              href="tel:+919876543210"
              className="bg-green-500 text-white font-bold text-xl px-8 py-4 rounded-full flex items-center gap-3 hover:scale-110 transition"
            >
              <Phone /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* OFFICE JOBS */}
      <section id="jobs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            Office Roles
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-yellow-50 transition">
              <h3 className="text-2xl font-bold mb-3">
                Operations Manager
              </h3>
              <p className="text-lg text-gray-600">₹10–18 LPA</p>
              <a
                href="mailto:careers@yourapp.com"
                className="text-yellow-600 font-bold mt-6 inline-flex items-center gap-2"
              >
                Send CV <ArrowRight size={20} />
              </a>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl hover:bg-yellow-50 transition">
              <h3 className="text-2xl font-bold mb-3">
                Marketing & Growth
              </h3>
              <p className="text-lg text-gray-600">
                ₹12–30 LPA • Bangalore
              </p>
              <a
                href="mailto:careers@yourapp.com"
                className="text-yellow-600 font-bold mt-6 inline-flex items-center gap-2"
              >
                Send CV <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bubble Animation */}
      <style>
        {`
          @keyframes bubble {
            0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-10vh) scale(1); opacity: 0; }
          }
          .animate-bubble {
            animation-name: bubble;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </>
  );
};

export default Career;
