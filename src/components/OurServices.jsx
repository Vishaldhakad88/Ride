import React from "react";

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
  const vehicles = [
    { 
      name: "Car", 
      img: red1,
      className: "w-20 h-20 p-3 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Bike", 
      img: red2,
      className: "w-20 h-20 p-5 sm:w-24 sm:h-24 md:w-28 md:h-28"  // BIKE SMALLER
    },
    { 
      name: "Mini Van", 
      img: red3,
      className: "w-20 h-20 p-4 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Auto", 
      img: red4,
      className: "w-20 h-20 p-4 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Pickup", 
      img: red5,
      className: "w-20 h-20 p-4 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Parcel", 
      img: red6,
      className: "w-20 h-20 p-2 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Sharing Auto", 
      img: sharingAuto,
      className: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
    { 
      name: "Premium Car", 
      img: premiumCar,
      className: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" 
    },
  ];

  return (
    <>
      {/* KEYFRAMES + SCROLLBAR HIDE */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @keyframes floatMove {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }

          .circle-3d {
            box-shadow: 
              0px 10px 18px rgba(0,0,0,0.25),
              0px 4px 8px rgba(0,0,0,0.15),
              inset 0px 4px 8px rgba(255,255,255,0.3);
            animation: floatMove 3s ease-in-out infinite;
          }
        `}
      </style>

      <section className="py-14 sm:py-16 md:py-20" id="services">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-5 text-black">
          Our Services
        </h3>

        {/* Horizontal Scroll */}
        <div className="w-full overflow-x-auto hide-scrollbar px-4 pt-4">
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="flex flex-col items-center cursor-pointer"
              >
                {/* Circle */}
                <div
                  className={`
                    rounded-full 
                    overflow-hidden 
                    circle-3d
                    transition-all duration-300 
                    hover:scale-110 ml-3
                    ${vehicle.className}
                  `}
                >
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                  {vehicle.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
