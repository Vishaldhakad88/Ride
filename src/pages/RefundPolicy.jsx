import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative py-30 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Refund Policy
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Our commitment to fair and transparent refunds at TRYDE
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>REFUND POLICY OF TRYDE</strong><br />
              <em>Effective Date: 10-12-2025 | Last Updated: 10-12-2025</em><br /><br />
              Welcome to TRYDE ("Company", "We", "Us", "Our"). This Refund Policy explains the conditions under which refunds may be issued for services booked through the TRYDE platform, including ride services, parcel delivery, logistics transportation, food delivery, and other services available on the platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This policy is designed in accordance with applicable Indian laws including:
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc pl-6">
              <li>Information Technology Act, 2000</li>
              <li>Digital Personal Data Protection Act (DPDP Act), 2023</li>
              <li>Consumer Protection Act, 2019</li>
              <li>Applicable transportation and logistics regulations in India</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              By using the TRYDE mobile application, website, or services, you agree to the terms outlined in this Refund Policy.
            </p>

            <div>
              <h2 className="text-2xl font-bold mb-3">1. GENERAL REFUND PRINCIPLES</h2>
              <p className="text-gray-700 leading-relaxed">TRYDE aims to provide fair and transparent refund practices. Refunds may be issued under the following circumstances:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Failed or cancelled bookings</li>
                <li>Payment deducted but service not provided</li>
                <li>Duplicate payments</li>
                <li>Service errors caused by technical issues</li>
                <li>Partner cancellation after booking confirmation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">Refund eligibility depends on the type of service booked and the stage at which the booking was cancelled or interrupted.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. RIDE SERVICES (BIKE / AUTO / CAB / RIDE-SHARING)</h2>
              <p className="text-gray-700 leading-relaxed">For services including:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Bike Taxi</li>
                <li>Auto Taxi</li>
                <li>Cab Taxi</li>
                <li>Ride Sharing</li>
              </ul>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">2.1 Full Refund</h3>
                <p className="text-gray-700 leading-relaxed">Users may receive a full refund when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>A driver cancels the ride after accepting</li>
                  <li>No driver is assigned after payment</li>
                  <li>Technical failure prevents ride completion</li>
                  <li>Payment deducted but ride was not initiated</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">2.2 Partial Refund</h3>
                <p className="text-gray-700 leading-relaxed">A partial refund may be issued when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Ride is cancelled after driver allocation</li>
                  <li>Driver arrives at pickup location and customer cancels</li>
                  <li>Trip partially completed due to unexpected interruption</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">2.3 No Refund</h3>
                <p className="text-gray-700 leading-relaxed">Refunds may not be issued when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Customer cancels after driver arrival beyond the allowed waiting time</li>
                  <li>Ride is completed successfully</li>
                  <li>Incorrect pickup or drop information was provided by the customer</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. PARCEL DELIVERY SERVICES</h2>
              <p className="text-gray-700 leading-relaxed">Applicable to:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Bike Parcel Delivery</li>
                <li>Auto Delivery</li>
                <li>Car Delivery</li>
                <li>Mini Truck Delivery</li>
                <li>Truck Transportation</li>
              </ul>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">3.1 Full Refund</h3>
                <p className="text-gray-700 leading-relaxed">Full refund will be issued if:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Delivery partner fails to pick up the parcel</li>
                  <li>Booking is cancelled before partner assignment</li>
                  <li>Technical error prevents order processing</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">3.2 Partial Refund</h3>
                <p className="text-gray-700 leading-relaxed">Partial refund may apply if:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Delivery is cancelled after pickup</li>
                  <li>Delivery cannot be completed due to route or operational restrictions</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">3.3 No Refund</h3>
                <p className="text-gray-700 leading-relaxed">Refunds may not be issued if:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Incorrect parcel details were provided</li>
                  <li>Parcel violates platform policies</li>
                  <li>Delivery completed successfully</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. TRUCK & LOGISTICS BOOKINGS</h2>
              <p className="text-gray-700 leading-relaxed">For:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Mini Truck transportation</li>
                <li>Large truck logistics</li>
                <li>Intercity goods movement</li>
                <li>Cargo & consignment services</li>
                <li>Load marketplace bookings</li>
              </ul>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Refund Eligibility</h3>
                <p className="text-gray-700 leading-relaxed"><strong>Full Refund</strong> - Provided when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>No truck is assigned</li>
                  <li>Booking cancelled before truck dispatch</li>
                  <li>System error during booking</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed"><strong>Partial Refund</strong> - Applicable when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Truck dispatched but trip cancelled midway</li>
                  <li>Partial logistics service completed</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed"><strong>No Refund</strong> - Applicable when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Goods have been delivered successfully</li>
                  <li>Delay caused by incorrect information from the customer</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. FOOD DELIVERY SERVICES</h2>
              <p className="text-gray-700 leading-relaxed">For orders placed through restaurants listed on TRYDE.</p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Full Refund</h3>
                <p className="text-gray-700 leading-relaxed">Provided when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Restaurant cancels the order</li>
                  <li>Delivery partner fails to deliver the order</li>
                  <li>Payment deducted but order not processed</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Partial Refund</h3>
                <p className="text-gray-700 leading-relaxed">Applicable when:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Order delivered with missing items</li>
                  <li>Food quality issues verified by support team</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">No Refund</h3>
                <p className="text-gray-700 leading-relaxed">Refunds may not be issued if:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Order delivered successfully</li>
                  <li>Customer unavailable at delivery location</li>
                  <li>Wrong delivery address provided</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. TICKET BOOKING SERVICES</h2>
              <p className="text-gray-700 leading-relaxed">For ticketing services available through TRYDE:</p>
              <p className="text-gray-700 leading-relaxed mt-2">Refunds will follow:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Cancellation policies of the ticket provider</li>
                <li>Applicable transport operator policies</li>
                <li>Applicable service charges or cancellation fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">7. PAYMENT FAILURES</h2>
              <p className="text-gray-700 leading-relaxed">If payment is deducted but the order or booking is not confirmed:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>The amount will be automatically refunded</li>
                <li>Refund will be processed to the original payment method</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>Typical refund timelines:</strong></p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>UPI / Wallet: 1–3 business days</li>
                <li>Debit/Credit Card: 3–7 business days</li>
                <li>Net Banking: 3–7 business days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">Processing time may vary depending on the bank or payment provider.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">8. DUPLICATE PAYMENTS</h2>
              <p className="text-gray-700 leading-relaxed">If a user is charged multiple times for the same transaction:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>The extra payment will be refunded automatically</li>
                <li>Users may also report the issue to the support team</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">9. REFUND PROCESS</h2>
              <p className="text-gray-700 leading-relaxed">To request a refund, users can:</p>
              <ol className="text-gray-700 leading-relaxed list-decimal pl-6 mt-2">
                <li>Submit a request through the TRYDE app support section</li>
                <li>Contact TRYDE Customer Support</li>
                <li>Email the grievance officer</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>The request should include:</strong></p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Booking ID</li>
                <li>Transaction ID</li>
                <li>Description of the issue</li>
                <li>Supporting screenshots if applicable</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">Our support team will review the request and respond within a reasonable time frame.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">10. REFUND MODE</h2>
              <p className="text-gray-700 leading-relaxed">Approved refunds will be credited to:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>The original payment method used during booking, or</li>
                <li>The TRYDE wallet (if applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">TRYDE does not issue cash refunds unless legally required.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">11. FRAUD PREVENTION</h2>
              <p className="text-gray-700 leading-relaxed">TRYDE reserves the right to:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Reject refund requests suspected to be fraudulent</li>
                <li>Suspend accounts involved in abuse of refund policies</li>
                <li>Investigate unusual booking patterns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">12. CHANGES TO THIS REFUND POLICY</h2>
              <p className="text-gray-700 leading-relaxed">TRYDE may update this Refund Policy due to:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Changes in services</li>
                <li>Legal or regulatory requirements</li>
                <li>Platform improvements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">Updated policies will be published on the TRYDE website or mobile application.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">13. CONTACT & GRIEVANCE REDRESSAL</h2>
              <p className="text-gray-700 leading-relaxed">For refund-related issues or complaints, users may contact:</p>
              <div className="bg-gray-100 p-4 rounded-lg mt-2">
                <p className="text-gray-700 leading-relaxed"><strong>TRYDE – Customer Support & Grievance Office</strong></p>
                <p className="text-gray-700 leading-relaxed">Email: info.tryde@gmail.com</p>
                <p className="text-gray-700 leading-relaxed">Mobile: +91 951 579 3509 / +91 767 501 6246</p>
                <p className="text-gray-700 leading-relaxed">Address: Avilala, Tirupati, Andhra Pradesh, India – 517508</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">14. ACCEPTANCE OF REFUND POLICY</h2>
              <p className="text-gray-700 leading-relaxed">By using the TRYDE platform, you acknowledge that:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>You have read and understood this Refund Policy</li>
                <li>You agree to the refund terms and conditions stated above</li>
              </ul>
            </div>

            <p className="text-gray-600 text-sm">
              Effective Date: 10-12-2025 | Last Updated: 10-12-2025
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
