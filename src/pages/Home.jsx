import { ArrowRight, Clock, IndianRupee, Wallet } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadAppSection from '../components/DownloadAppSection';
import MoreServices from '../components/moreservices';
import PorterStyleComponent from '../components/PorterStyleComponent';
import { motion } from 'framer-motion';
import videoBg from '../assets/bg.mp4';
import OurServices from '../components/OurServices';

// Your Real Driver Images
import driverImage1 from '../assets/driver3.jpeg';
import driverImage2 from '../assets/driversred2.jpeg';
import moneydriver from '../assets/moneydriver.jpeg';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section - Now Fully Global Theme */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay loop muted playsInline preload="metadata"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Dark overlay + subtle gradient glow from global */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-primary/5" /> {/* Subtle golden tint */}

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-7xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            <span className='text-yellow-400'>B</span>ook <span className='text-white'>A</span>ny <span className='text-white'>V</span>ehicle in{" "}
            <span className="text-white drop-shadow-2xl">60 Seconds</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            {/* Global btn-primary + outline style */}
            <button className="bg-yellow-400 border border-white  text-xl font-bold px-4 py-2 flex items-center gap-2 group rounded-4xl cursor-pointer">
              <h3 className='p-1'>Book Your Ride Now</h3>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 icon-gradient" />
            </button>
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