import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Safety() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-24 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Your Safety Is Our Priority
          </h1>
          <p className="text-xl md:text-3xl text-white font-bold">
            Every ride. Every time. Especially for women.
          </p>
        </div>
      </section>

      {/* ALTERNATING SECTIONS – Image Left / Content Right */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* 1. Real-time Tracking */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Live Ride Tracking</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Share your live location with family & friends. They can see your exact route, driver details, and ETA in real-time — even without the app.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556742111-a301076d9d41?w=800&q=80" 
                alt="Family tracking ride" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* 2. SOS Button */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&q=80" 
                alt="SOS Button" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">24×7 SOS Emergency Button</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                One tap connects you directly to local police & our emergency response team. Your location and ride details are instantly shared.
              </p>
            </div>
          </div>

          {/* 3. Women Safety – Pink Ride */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20 bg-pink-50 rounded-3xl p-10 p-10 md:p-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400 ">Pink Ride – Only for Women</h2>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Book rides exclusively with verified women captains. 
                <br /><br />
                1 Lakh+ women already trust Pink Ride every day for safe, comfortable travel — day or night.
              </p>
              <span className="inline-block mt-6 bg-yellow-400 text-white font-bold px-8 py-4 rounded-full text-xl">
                Available in 30+ cities
              </span>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80" 
                alt="Happy women riders" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* 4. Verified Drivers */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">100% Verified Captains</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every captain goes through:
                <ul className="mt-6 space-y-3 text-lg">
                  <li>→ Police verification</li>
                  <li>→ Aadhaar + DL check</li>
                  <li>→ In-person training</li>
                  <li>→ Daily selfie verification</li>
                </ul>
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" 
                alt="Verified captain" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* 5. Ride Ratings & Feedback */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1512941675423-d3f9b383c021?w=800&q=80" 
                alt="Rating screen" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Rate Every Ride</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Your feedback keeps us safe. Low-rated captains are immediately reviewed and removed if needed.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL TRUST MESSAGE */}
      <section className="py-20 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            10 Million+ Safe Rides & Counting
          </h2>
          <p className="text-2xl font-light">
            Thank you for trusting us every day.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Safety;