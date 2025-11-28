import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
  const cardsRef = useRef([]);

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

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const anim = gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", paused: true }
      );

      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        onEnter: () => anim.play(),
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        onLeaveBack: () => anim.pause(0),
      });
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24" id="services">
      <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-10 text-white">
        Our Services
      </h3>

      <div
        className="
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
        "
      >
        {vehicles.map((vehicle, index) => (
          <div
            key={vehicle.name}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group cursor-pointer rounded-3xl 
                border-4 border-amber-400 "
          >
            {/* CARD BOX */}
            <div
              className="
                relative 
                overflow-hidden 
                rounded-2xl 
                shadow-xl  
                border-gray-200 
                hover:shadow-2xl 
                transition-all 
                duration-500
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="
                    w-full 
                    h-32
                    sm:h-40 
                    md:h-42 
                    object-cover 
                    transition-transform 
                    duration-700 
                    group-hover:scale-120
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute 
                  inset-0 
                  bg-gradient-to-t 
                  from-gray-600 
                  to-transparent 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-500
                "
              />

              {/* Text */}
              <div
                className="
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
                "
              >
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg drop-shadow-lg">
                  {vehicle.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
