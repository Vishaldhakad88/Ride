import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import TaxiImg from '../assets/taxi.jpg';

// NEW IMPORTS ADDED
import AppStore from '../assets/appStore.png';
import GooglePlay from '../assets/GooglePlay.png';

export default function DownloadAppSection() {
  return (
    <section id="download" className="py-24 bg-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID – Text LEFT & Image RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-10 order-2 md:order-1"
          >
            {/* Tag */}
            <div className="inline-block px-6 py-3 rounded-full text-primary border-2 border-primary/50 bg-primary/10 font-bold text-sm uppercase tracking-wider">
              Download App Now
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
              Download the App &{" "}
              <span className="text-yellow-400 drop-shadow-2xl">
                Book Your Ride Instantly
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Bike, Auto, Cab, SUV – sab ek hi app mein. Real-time tracking,
              cashless payment, no surge pricing aur 2 minute pickup!
            </p>

            {/* Features */}
            <div className="space-y-6">
              {[
                "Instant booking in just 2 minutes",
                "Live tracking & share trip with family",
                "100% cashless & secure payment",
                "24/7 Hindi + English support",
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 justify-start md:justify-start "
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                    <Check className="w-4 h-4 text-black font-bold" />
                  </div>
                  <span className="text-lg text-gray-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-8">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="h-14 drop-shadow-2xl filter brightness-110"
                />
              </motion.a>

              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img
                  src={AppStore}
                  alt="App Store"
                  className="h-14 drop-shadow-2xl border border rounded"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE – IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={TaxiImg}
                alt="Taxi"
                className="w-full rounded-3xl shadow-2xl border border-white/10 object-cover"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-primary text-black font-bold px-7 py-3 rounded-full text-sm shadow-2xl animate-pulse">
                Fastest in City
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
