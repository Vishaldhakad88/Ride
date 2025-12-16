import { Mail, Phone } from "lucide-react";

// App Store Images
import AppStore from "../assets/appStore.png";
import GooglePlay from "../assets/GooglePlay.png";

// Social Media Images
import InstagramIcon from "../assets/insta.png";
import FacebookIcon from "../assets/face.png";
import LinkedinIcon from "../assets/linkdin.png";
import TwitterIcon from "../assets/twit.png";

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

          {/* Social Icons (IMAGES) */}
          <div className="flex gap-6 mt-10">
            {[
              { img: FacebookIcon, alt: "Facebook" },
              { img: InstagramIcon, alt: "Instagram" },
              { img: TwitterIcon, alt: "Twitter" },
              { img: LinkedinIcon, alt: "LinkedIn" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="transition-all duration-300 hover:scale-125"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-7 h-7"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
  <h3
    className="text-white font-bold text-xl mb-8 relative inline-block
      after:content-[''] after:absolute after:left-0 after:bottom-[-8px] 
      after:h-1 after:bg-primary after:rounded-full after:w-12 after:transition-all after:duration-500
      hover:after:w-full"
  >
    Quick Links
  </h3>

  <ul className="space-y-5">
    <li>
      <a
        href="/about"
        className="text-gray-400 hover:text-primary transition-all duration-300 relative inline-block
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
          after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-500
          hover:after:w-full"
      >
        About Us
      </a>
    </li>

    <li>
      <a
        href="/services"
        className="text-gray-400 hover:text-primary transition-all duration-300 relative inline-block
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
          after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-500
          hover:after:w-full"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="/privacy_policy"
        className="text-gray-400 hover:text-primary transition-all duration-300 relative inline-block
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
          after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-500
          hover:after:w-full"
      >
        Privacy Policy
      </a>
    </li>

    <li>
      <a
        href="/terms_service"
        className="text-gray-400 hover:text-primary transition-all duration-300 relative inline-block
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
          after:h-0.5 after:bg-primary after:rounded-full after:w-0 after:transition-all after:duration-500
          hover:after:w-full"
      >
        Terms of Service
      </a>
    </li>
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
                className="h-14 drop-shadow-2xl transition-all duration-500 border-3 border-amber-300 rounded-xl
                  group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(181,152,64,0.6)]"
              />
            </a>

            <a href="#" className="block group">
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-14 drop-shadow-2xl transition-all duration-500 border-3 border-amber-300 rounded-xl 
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
