import React from 'react';
import { motion } from 'framer-motion';

// All 8 images
import red1 from '../assets/red1.png';
import red2 from '../assets/red2.png';
import red3 from '../assets/red3.png';
import red4 from '../assets/red4.png';
import red5 from '../assets/red5.png';
import red6 from '../assets/red6.png';
import sharingAuto from '../assets/sharingauto.png';
import premiumCar from '../assets/premiumcar.png';

const OurServices = () => {
  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 }
    }
  };

  const vehicles = [
    { name: "Car",           img: red1 },
    { name: "Bike",          img: red2 },
    { name: "Mini Van",      img: red3 },
    { name: "Auto",          img: red4 },
    { name: "Pickup",        img: red5 },
    { name: "Parcel",        img: red6 },
    { name: "Sharing Auto",  img: sharingAuto },
    { name: "Premium Car",   img: premiumCar },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 " id="services">
      <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-10 text-white">
        Our Services
      </h3>

      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        gap-4 
        sm:gap-6 
        md:gap-8 
        max-w-6xl 
        mx-auto 
        px-4
      ">
        {vehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.name}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer rounded-xl"
          >
            {/* CARD BOX */}
            <div className="
              relative 
              overflow-hidden 
              rounded-2xl 
              shadow-xl 
             
              border 
              border-gray-200 
              hover:shadow-2xl 
              transition-all 
              duration-500
            ">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="
                    w-full 
                    h-32 
                    p-2
                    sm:h-40 
                    md:h-42 
                    object-cover 
                    transition-transform 
                    duration-700 
                    group-hover:scale-150
                  "
                />
              </div>

              {/* Overlay */}
              <div className="
                absolute 
                inset-0 
                bg-gradient-to-t 
                from-gray-500 
                to-transparent 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity 
                duration-500
              " />

              {/* Text */}
              <div className="
                absolute 
                bottom-0 
                left-0 
                right-0 
                p-2 
                sm:p-3 
                text-center 
                transform 
                translate-y-full 
                group-hover:translate-y-0 
                transition-transform 
                duration-500
              ">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg drop-shadow-lg">
                  {vehicle.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
