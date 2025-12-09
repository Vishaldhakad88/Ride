import { ArrowRight, Clock, IndianRupee, Wallet } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadAppSection from '../components/DownloadAppSection';
import MoreServices from '../components/moreservices';
import PorterStyleComponent from '../components/PorterStyleComponent';
import { motion } from 'framer-motion';
import videoBg from '../assets/bg.mp4';
import OurServices from '../components/OurServices';
import taxiImg from "../assets/taxi.png";

// Your Real Driver Images
import driverImage1 from '../assets/driver3.jpeg';
import driverImage2 from '../assets/driversred2.jpeg';
import moneydriver from '../assets/moneydriver.jpeg';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Now Fully Global Theme */}
      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-10 mt-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6 text-center md:text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black 
      drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)] mt-4 md:mt-10">
        Always There To <br /> 
        Take You <span className="text-yellow-400 drop-shadow-[0_3px_12px_rgba(255,223,0,0.5)]">Anywhere</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
        Choose from a range of categories and prices, book your taxi instantly.
      </p>

      {/* Buttons */}
      <div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition shadow-md">
          Airport
        </button>
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition shadow-md">
          Package
        </button>
      </div>

      {/* Ratings */}
      <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
        <div className="flex -space-x-3">
          <img src="https://i.pravatar.cc/45?img=3" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow" />
          <img src="https://i.pravatar.cc/45?img=4" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow" />
          <img src="https://i.pravatar.cc/45?img=5" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow" />
        </div>
        <p className="font-bold text-gray-700 text-sm sm:text-base">
          4.8★ <span className="text-gray-500">Based on 5k+ reviews</span>
        </p>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        className="mt-6 sm:mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-7 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl flex items-center gap-2 mx-auto md:mx-0 shadow-[0_10px_25px_rgba(255,199,0,0.45)] transition-all"
      >
        Book Your Ride Now
        <ArrowRight />
      </motion.button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full flex justify-center"
    >
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <img
          src={taxiImg}
          alt="Taxi"
          className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
        />

        {/* Yellow Glow */}
        <div className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-500 rounded-full blur-lg opacity-60" />
      </div>
    </motion.div>

  </div>
</section>



      <OurServices />

      {/* Driver Benefits Section – Now Uses Global Classes Only */}
      <section className="py-20 bg-gradient-to-b from-white to-[#0a0a0a] text-black">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-yellow-400">Flexible Hours</span> &{' '}
              <span className="text-black font-roboto">High Earnings</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-primary/90">
              Become a Ryde Captain & Earn on Your Schedule!
            </p>
            <p className="mt-4 text-xl text-yellow-40">
              Drive whenever you want • Be your own boss • Zero stress
            </p>
          </motion.div>

          {/* 3 Photo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { img: driverImage1, title: "Your Time, Your Rules", desc: "Morning, afternoon or night — drive whenever it suits you", icon: Clock },
              { img: driverImage2, title: "Highest Earnings", desc: "₹800–₹1500 daily + bonuses + incentives", icon: IndianRupee },
              { img: moneydriver, title: "Daily Payments", desc: "Get paid every single day directly to your bank", icon: Wallet }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group relative rounded-2xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                <div className="absolute bottom-0 p-8 text-left">
                  <item.icon className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-3xl font-bold mb-2 text-primary drop-shadow-2xl">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/90">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-center"
          >
            <h3 className="text-4xl text-white md:text-6xl font-extrabold mb-10 ">
              Start Earning Today!
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#download"
                className="text-yellow-400 border-2 rounded-2xl hover:text-white text-xl font-bold px-8 py-2 flex items-center gap-3"
              >
                Download Captain App Now
                <ArrowRight className="icon-gradient" />
              </a>

              <a
                href="tel:+919876543210"
                className=" text-yellow-400 border-2 rounded-2xl  hover:text-white  font-bold text-xl font-bold px-8 py-2"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PorterStyleComponent />
      <MoreServices />
      <DownloadAppSection />
      <Footer />
    </>
  );
}