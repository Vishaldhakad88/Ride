import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeftRight, 
  PhoneCall, 
  Accessibility, 
  Package, 
  Users, 
  Pill 
} from 'lucide-react';

const services = [
  { icon: ArrowLeftRight, title: "Round Trips", desc: "Seamless round-trip transportation for your convenience, anywhere and anytime." },
  { icon: PhoneCall, title: "Wake Up Calls", desc: "Never miss an early ride — we’ll call and make sure you’re up and ready." },
  { icon: Accessibility, title: "Handicap Transport", desc: "Wheelchair-accessible vehicles with trained staff for safe and comfortable rides." },
  { icon: Package, title: "Delivery Services", desc: "Fast and reliable delivery of parcels, documents, or anything you need." },
  { icon: Users, title: "Ride Share", desc: "Share rides with others going the same way and save money." },
  { icon: Pill, title: "Medicine Delivery", desc: "Get your prescriptions delivered safely and on time, right to your door." }
];

const MoreServices = () => {
  return (
    <section className="py-24 relative overflow-hidden ">
      {/* Subtle golden radial glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96  rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-7 py-3 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-primary/50   shadow-lg shadow-primary/20"
          >
            Provided just for you
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold  drop-shadow-2xl"
          >
            Services Offered
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.04 }}
                className=" group relative rounded-2xl p-8 overflow-hidden border border-white/10 bg-black"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
                </div>

                {/* Icon with gradient background */}
                <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-6 shadow-2xl shadow-primary/40 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-9 h-9 text-yellow-400 border-2 p-4 w-40 h-16  rounded-full" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-base">
                  {service.desc}
                </p>

                {/* Learn more on hover */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-lg font-bold text-primary">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoreServices;