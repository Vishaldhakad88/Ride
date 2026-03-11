import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Refund Policy
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Our commitment to fair and transparent refunds at Tyde
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>Tyde</strong>, we strive to provide the best taxi and porter
              services. This Refund Policy outlines our guidelines for refunds,
              cancellations, and disputed charges. We aim to handle all refund
              requests fairly and promptly.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3">Refund Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds may be eligible in the following situations: cancelled rides
                before the driver arrives, incorrect fare charges, duplicate payments,
                service not rendered due to technical issues, and damaged or lost
                parcels during porter services. Please note that partial refunds may
                apply based on the specific circumstances of your case.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Cancellation & Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                For taxi bookings, cancellations made before the driver is assigned
                will receive a full refund. Cancellations after driver assignment may
                incur a small cancellation fee based on the distance already travelled.
                For porter services, cancellations before parcel pickup are eligible
                for full refund, while cancellations after pickup may be reviewed
                case-by-case.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Fare Disputes</h2>
              <p className="text-gray-700 leading-relaxed">
                If you believe your fare was incorrectly charged, you can raise a
                dispute within 7 days of the ride completion. Our team will review
                the trip details, including route, time, and applicable rates. If an
                error is found, appropriate adjustments or refunds will be processed
                within 5-7 business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Porter Service Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                For damaged parcels during porter services, please report the issue
                immediately with photographic evidence. Refunds for damaged items
                are subject to assessment and may cover repair or replacement costs
                up to the declared value. Lost parcels may be eligible for full
                reimbursement based on the declared value at booking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Refund Processing Time</h2>
              <p className="text-gray-700 leading-relaxed">
                Once approved, refunds are processed within 5-7 business days. The
                amount will be credited back to your original payment method. Please
                note that depending on your bank or payment provider, it may take
                additional 2-5 business days for the refund to reflect in your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed">
                To request a refund, you can contact our customer support team through
                the app, email, or phone. Please provide your booking ID, trip details,
                and a brief description of the issue. Our support team will investigate
                and respond within 24-48 hours. For urgent matters, please reach out
                directly via phone for immediate assistance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Non-Refundable Situations</h2>
              <p className="text-gray-700 leading-relaxed">
                Please note that refunds are not applicable in certain situations
                including: rides cancelled by the user after the driver has arrived
                at the pickup location, disputes raised after 7 days of ride completion,
                requesting refunds for services not used due to personal reasons after
                the ride has started, and any fraudulent or abusive refund requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">Promotional Credits & Offers</h2>
              <p className="text-gray-700 leading-relaxed">
                Promotional credits and discount vouchers are non-refundable and
                have no cash value. If a ride paid with promotional credits is
                cancelled, the credits will be refunded to your account but cannot
                be converted to cash. Special promotional offers may have additional
                terms and conditions that supersede this policy.
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