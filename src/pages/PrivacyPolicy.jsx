import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Your privacy matters to us at Tyde
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>Tyde</strong>, we are committed to protecting your
              personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, store, and protect your data
              when you use our taxi and porter services.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect personal information such as your name, phone number,
                email address, pickup and drop locations, payment details, and
                device information. For porter services, we may also collect
                parcel details such as weight, category, and delivery address.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">How We Use Your Data</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information is used to provide safe and reliable taxi and
                porter services, process payments, improve our platform,
                communicate updates, and ensure compliance with legal
                obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Location Data</h2>
              <p className="text-gray-700 leading-relaxed">
                Location data is collected only during active rides or deliveries
                to enable navigation, real-time tracking, safety features, and
                fare calculation. We do not track your location when the app is
                not in use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We share your information only with drivers, delivery partners,
                payment gateways, and legal authorities when required. We never
                sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Tyde uses industry-standard security measures, encryption, and
                access controls to protect your data against unauthorized access,
                misuse, or loss.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal
                information. You may also opt out of marketing communications at
                any time through app settings.
              </p>
            </div>

            <p className="text-gray-600 text-sm">
              Last updated: January 2026
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
