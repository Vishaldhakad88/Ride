import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// NEW IMPORTS (as requested)
import AppStore from '../assets/appStore.png';
import GooglePlay from '../assets/GooglePlay.png';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ryde
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Fast, reliable and affordable vehicle booking across India.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Icon className="w-7 h-7 icon-gradient" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-xl mb-8 relative inline-block
            after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
            after:h-1 after:bg-primary after:rounded-full after:w-12 after:transition-all after:duration-500
            hover:after:w-full">
            Quick Links
          </h3>

          <ul className="space-y-5">
            {['About Us', 'Services', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-all duration-300 relative inline-block
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-500
                    hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-xl mb-8 relative inline-block
            after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
            after:h-1 after:bg-primary after:rounded-full after:w-12 after:transition-all after:duration-500
            hover:after:w-full">
            Contact
          </h3>

          <ul className="space-y-7">
            <li className="flex items-center gap-4 group">
              <Phone className="w-6 h-6 icon-gradient" />
              <span className="text-gray-400 group-hover:text-primary transition-all duration-300">
                +91 98765 43210
              </span>
            </li>
            <li className="flex items-center gap-4 group">
              <Mail className="w-6 h-6 icon-gradient" />
              <span className="text-gray-400 group-hover:text-primary transition-all duration-300">
                support@ryde.in
              </span>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-black font-bold text-xl mb-8 relative inline-block
            after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
            after:h-1 after:bg-primary after:rounded-full after:w-12 after:transition-all after:duration-500
            hover:after:w-full">
            Download App
          </h3>

          <div className="flex flex-col gap-5">
            <a href="#" className="block group">
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="h-14 drop-shadow-2xl transition-all duration-500   border rounded-xl
                  group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(181,152,64,0.6)]"
              />
            </a>
            <a href="#" className="block group">
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-14 drop-shadow-2xl transition-all duration-500 border rounded-xl 
                  group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(181,152,64,0.6)]"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-16 pt-10 border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm tracking-wider">
          © 2025 Ryde. All rights reserved. Crafted with luxury.
        </p>
      </div>
    </footer>
  );
}
