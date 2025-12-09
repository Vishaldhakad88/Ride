import { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Services', path: '#services' },
    { name: 'Download', path: '#download' },
    { name: 'Contact', path: '/contact' },
  ];

  // 🔥 FIXED ACTIVE STATE — 100% accurate
  const isItemActive = (itemPath) => {
    // Home
    if (itemPath === '/') {
      return location.pathname === '/' && 
        (location.hash === '' || location.hash === '#' || location.hash === undefined);
    }

    // Hash links (#services, #download)
    if (itemPath.startsWith('#')) {
      return location.pathname === '/' && location.hash === itemPath;
    }

    // Normal routes
    return location.pathname === itemPath;
  };

  const handleScrollLink = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', hash);
    }
    setMobileMenu(false);
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#book');
    } else {
      const element = document.querySelector('#book');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#book');
    }
    setMobileMenu(false);
  };

  // 🔥 Active state refresh when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setMobileMenu(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Auto scroll when URL contains hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
  to="/"
  style={{
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "yellow",   // your primary color variable
    display: "flex",
    alignItems: "center",
    gap: "4px",
    textDecoration: "none"
  }}
  onClick={() => {
    setMobileMenu(false);
    if (location.pathname === "/")
      window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  RYD
  <Car style={{ color: "#FDE047" }} />   {/* yellow-300 */}
  E
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = isItemActive(item.path);

            if (item.path.startsWith('#')) {
              return (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleScrollLink(e, item.path)}
                  className={`relative text-lg font-semibold transition-all duration-300
                    ${isActive ? 'text-primary' : 'text-white hover:text-primary'}
                    after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 
                    after:bg-primary after:rounded-full after:transition-all after:duration-500
                    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={`relative text-lg font-semibold transition-all duration-300
                  ${isActive ? 'text-primary' : 'text-white hover:text-primary'}
                  after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:h-1 
                  after:bg-primary after:rounded-full after:transition-all after:duration-500
                  ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Book Now Button (#book scroll only) */}
          <a 
            href="#book"
            onClick={handleBookNow}
            className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-400 rounded-4xl  font-bold px-10 py-3 text-black text-xl font-bold"
          >
            Book Now
          </a>
        </div>

        <button 
          onClick={() => setMobileMenu(!mobileMenu)} 
          className="md:hidden text-white z-50"
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10">
          <div className="flex flex-col gap-8 py-10 px-6">
            {navItems.map((item) => {
              const isActive = isItemActive(item.path);

              if (item.path.startsWith('#')) {
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleScrollLink(e, item.path)}
                    className={`text-3xl font-medium transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-white'
                    } hover:text-primary`}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`text-3xl font-medium transition-all duration-300 ${
                    isActive ? 'text-primary' : 'text-white'
                  } hover:text-primary`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href="#book"
              onClick={handleBookNow}
              className="bg-yellow-400 text-2xl font-bold py-5 text-center mt-6"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
