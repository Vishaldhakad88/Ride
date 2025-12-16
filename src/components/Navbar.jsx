import { useState, useEffect } from "react";
import { Car, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Safety", path: "/safety" },
    { name: "Tryde Ads", path: "/trydeAds" },
    { name: "Careers", path: "/career" },
    { name: "Blogs", path: "/blogs" },
    { name: "Newsroom", path: "/newsroom" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isItemActive = (itemPath) => {
    if (itemPath === "/") {
      return (
        location.pathname === "/" &&
        (!location.hash || location.hash === "#")
      );
    }
    return location.pathname === itemPath;
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#book");
    } else {
      document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#book");
    }
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleHashChange = () => note(false);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {/* ===== MOBILE SCROLLBAR HIDE (ONLY FOR THIS COMPONENT) ===== */}
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-menu-scroll::-webkit-scrollbar {
              display: none;
            }
            .mobile-menu-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-bold text-yellow-400 flex items-center gap-1"
            onClick={() => {
              setMobileMenu(false);
              if (location.pathname === "/")
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            TRY <Car className="text-yellow-300" /> DE
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isItemActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`relative text-lg font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }
                    after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 
                    after:bg-primary after:rounded-full after:transition-all after:duration-500
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* GLASS BUTTON */}
            <a
              href="#book"
              onClick={handleBookNow}
              className="
                px-10 py-3 rounded-full
                text-lg font-bold text-white
                bg-white/10 backdrop-blur-xl
                border border-white/30
                shadow-[0_8px_30px_rgba(255,255,255,0.15)]
                hover:bg-white/20 hover:scale-105
                transition-all duration-300
              "
            >
              Download Now
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white z-50"
          >
            {mobileMenu ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {mobileMenu && (
          <div
            className="
              md:hidden
              bg-black/95 backdrop-blur-2xl
              border-t border-white/10
              max-h-[85vh]
              overflow-y-auto
              mobile-menu-scroll
            "
          >
            <div className="flex flex-col items-center gap-8 py-10 px-6 text-center">
              {navItems.map((item) => {
                const isActive = isItemActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={`text-3xl font-medium transition-all duration-300 ${
                      isActive ? "text-primary" : "text-white"
                    } hover:text-primary`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <a
                href="#book"
                onClick={handleBookNow}
                className="
                  mt-6 px-12 py-5 rounded-full
                  text-2xl font-bold text-white
                  bg-white/10 backdrop-blur-xl
                  border border-white/30
                  shadow-[0_8px_30px_rgba(255,255,255,0.15)]
                  hover:bg-white/20
                  transition
                "
              >
                Download Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
