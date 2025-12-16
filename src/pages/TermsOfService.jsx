import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Terms of Service
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Please read these terms carefully before using Tyde
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              These Terms of Service govern your use of Tyde’s taxi and porter
              services. By accessing or using the Tyde app, you agree to comply
              with these terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3">Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old to use Tyde services. By using
                the platform, you confirm that all information provided is
                accurate and complete.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Taxi & Porter Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Tyde connects users with independent drivers and delivery
                partners. Tyde does not own vehicles or employ drivers directly.
                Availability of services may vary based on location and demand.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed">
                Users must behave respectfully with drivers and delivery
                partners. Illegal items, hazardous materials, or prohibited
                goods must not be transported using Tyde Porter services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Payments & Pricing</h2>
              <p className="text-gray-700 leading-relaxed">
                Fares are calculated based on distance, time, and demand.
                Payments must be made through approved payment methods within
                the app. Refunds are subject to review.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Cancellations</h2>
              <p className="text-gray-700 leading-relaxed">
                Cancellation fees may apply depending on the stage of booking.
                Repeated misuse of cancellations may result in account
                suspension.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Tyde shall not be liable for indirect, incidental, or
                consequential damages arising from the use of the platform,
                except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Tyde reserves the right to suspend or terminate accounts that
                violate these terms or applicable laws.
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
