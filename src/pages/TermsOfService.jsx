import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative py-30 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-2xl font-semibold">
            Your Privacy Matters to TRYDE – Please read this policy carefully
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>PRIVACY POLICY OF TRYDE</strong><br />
              <em>Effective Date: 10-12-2025 | Last Updated: 10-12-2025</em><br /><br />
              Welcome to TRYDE ("Company", "We", "Us", "Our").<br />
              This Privacy Policy explains how we collect, use, store, process, share, and protect the personal information of individuals ("Users", "You", "Your") who use our online transportation, delivery, logistics, and ordering platform ("Platform").<br />
              This Policy is prepared in accordance with:
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc pl-6">
              <li>Digital Personal Data Protection Act (DPDP Act), 2023</li>
              <li>Information Technology Act, 2000</li>
              <li>IT (Reasonable Security Practices & Procedures and Sensitive Personal Data) Rules, 2011</li>
              <li>Applicable transportation and logistics regulations in India</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using TRYDE, you consent to this Privacy Policy. TRYDE operates an online transportation and delivery platform ("Platform") offering:
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc pl-6">
              <li>Bike Taxi</li>
              <li>Auto Taxi</li>
              <li>Cab Taxi</li>
              <li>Ride-Sharing for Auto and Cab</li>
              <li>Parcel Delivery (Bike, Auto, Car, Mini Truck, Truck)</li>
              <li>Porter Services</li>
              <li>Mini-Truck & Large-Truck Transportation</li>
              <li>Intercity Truck & Goods Movement</li>
              <li>Multi-Location Pick-up & Drop Services</li>
              <li>Cargo and Consignment Transportation</li>
              <li>Load/Consignment Marketplace (Customers book trucks; truck drivers book available consignments)</li>
              <li>Food Delivery (Customers order food; restaurants list menu items)</li>
              <li>Ticket Booking Services</li>
            </ul>

            <div>
              <h2 className="text-2xl font-bold mb-3">1. INFORMATION WE COLLECT</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">We may collect the following identifiable information:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Full Name</li>
                  <li>Mobile Number</li>
                  <li>Email Address</li>
                  <li>Profile Picture (optional)</li>
                  <li>Address / Saved Locations</li>
                  <li>Pickup & Drop Coordinates</li>
                  <li>Gender (optional)</li>
                  <li>Date of Birth (optional)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.2 Sensitive Personal Data</h3>
                <p className="text-gray-700 leading-relaxed">As defined under Indian IT Rules and DPDP guidelines:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Passwords</li>
                  <li>Payment information (UPI, card details, bank info)</li>
                  <li>KYC details</li>
                  <li>Government-issued IDs:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Aadhaar (only with user consent and masked/storage as per UIDAI rules)</li>
                      <li>PAN</li>
                      <li>Driving License</li>
                      <li>Vehicle RC</li>
                      <li>Any other ID required for onboarding drivers/partners</li>
                    </ul>
                  </li>
                  <li>Biometric data (only if explicitly collected in future — currently not collected)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.3 Driver / Delivery Partner / Transporter Information</h3>
                <p className="text-gray-700 leading-relaxed">For operating ride, delivery, and logistics services:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Driver's License</li>
                  <li>RC and Vehicle Details</li>
                  <li>Insurance & Permits</li>
                  <li>Vehicle Fitness Certificates</li>
                  <li>Transport documentation</li>
                  <li>KYC documents</li>
                  <li>Real-time GPS during active trips</li>
                  <li>Background verification details (when applicable)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.4 Logistics & Consignment Data</h3>
                <p className="text-gray-700 leading-relaxed">For parcel, freight, and goods movement:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Consignment items, weight, type</li>
                  <li>Pickup and delivery locations</li>
                  <li>Names and contact details of sender/receiver</li>
                  <li>Load listings, truck type, operational details</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.5 Food Delivery Information</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Restaurant menus & business details</li>
                  <li>Customer food orders</li>
                  <li>Delivery instructions</li>
                  <li>Restaurant–customer order mapping</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.6 Device, Technical & App Usage Data</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>IP address</li>
                  <li>Device model, OS, network provider</li>
                  <li>App version</li>
                  <li>Crash reports and diagnostics</li>
                  <li>Usage analytics and engagement behaviour</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">1.7 Location Data</h3>
                <p className="text-gray-700 leading-relaxed">Collected with device permission:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Real-time GPS during trips</li>
                  <li>Trip routes for safety & navigation</li>
                  <li>Approximate and precise locations</li>
                  <li>Background-location data (only when necessary for ongoing services)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. HOW WE USE YOUR INFORMATION</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.1 Delivering Platform Services</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Booking bike taxi, auto taxi, cab taxi</li>
                  <li>Ride-sharing services</li>
                  <li>Parcel & goods delivery</li>
                  <li>Truck, mini-truck & large-truck bookings</li>
                  <li>Intercity transportation</li>
                  <li>Multi-drop pickup & delivery</li>
                  <li>Porter and cargo movement</li>
                  <li>Food orders and restaurant services</li>
                  <li>Consignment marketplace operations</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.2 Safety, Verification & Compliance</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Identity & document verification</li>
                  <li>Fraud and risk monitoring</li>
                  <li>Driver behaviour analysis</li>
                  <li>Trip tracking for user safety</li>
                  <li>Handling disputes and support cases</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.3 Communication</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Trip confirmations and status updates</li>
                  <li>Order progress and delivery alerts</li>
                  <li>Customer support messages</li>
                  <li>Account notifications</li>
                  <li>Marketing & promotional messages (Only with user consent as required under DPDP Act)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.4 Platform Enhancement</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Improving UX and app performance</li>
                  <li>Debugging and error resolution</li>
                  <li>Feature development</li>
                  <li>Traffic analytics and operations efficiency</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">2.5 Legal & Regulatory Compliance</h3>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                  <li>Responding to lawful requests</li>
                  <li>Cooperation with police and transport authorities</li>
                  <li>Compliance with taxation, motor transport, and logistics laws</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. SHARING OF INFORMATION</h2>
              <p className="text-gray-700 leading-relaxed mb-2">We share information only as necessary and in compliance with Indian law.</p>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.1 With Drivers / Delivery Partners / Transporters</h3>
                <p className="text-gray-700 leading-relaxed">Required to complete bookings:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Customer name</li>
                  <li>Contact details</li>
                  <li>Pickup/drop locations</li>
                  <li>Order details (food & parcel)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.2 With Customers</h3>
                <p className="text-gray-700 leading-relaxed">To provide transparency:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Driver's Name</li>
                  <li>Vehicle Model & Number</li>
                  <li>KYC-verified status</li>
                  <li>Phone number</li>
                  <li>Live-trip tracking</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.3 With Restaurants</h3>
                <p className="text-gray-700 leading-relaxed">For food order processing:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Customer Name</li>
                  <li>Order Details</li>
                  <li>Delivery Instructions</li>
                  <li>Delivery Location</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.4 With Third-Party Service Providers</h3>
                <p className="text-gray-700 leading-relaxed">For essential platform operations:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Payment gateway partners</li>
                  <li>SMS/Email services</li>
                  <li>Cloud hosting & storage providers</li>
                  <li>KYC verification agencies</li>
                  <li>Logistics partners</li>
                  <li>Analytics tools</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">We ensure contractual and DPDP Act–compliant data protection measures.</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">3.5 For Legal Compliance</h3>
                <p className="text-gray-700 leading-relaxed">We may share information with:</p>
                <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                  <li>Law enforcement agencies</li>
                  <li>Courts</li>
                  <li>Transport & regulatory authorities</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">Only when legally required, with proper documentation.</p>
                <p className="text-gray-700 leading-relaxed mt-2 font-semibold">We DO NOT sell personal information to any third parties.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. COOKIES & TRACKING TECHNOLOGIES</h2>
              <p className="text-gray-700 leading-relaxed mb-2">TRYDE uses:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6">
                <li>Cookies</li>
                <li>App SDKs</li>
                <li>Analytical trackers</li>
                <li>Session identifiers</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">These help with:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Personalization</li>
                <li>Faster app performance</li>
                <li>Security</li>
                <li>User behaviour insights</li>
                <li>Targeted notifications (with consent)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">A separate Cookies Policy explains this in detail.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. DATA STORAGE & SECURITY</h2>
              <p className="text-gray-700 leading-relaxed">We follow Reasonable Security Practices as per IT Rules 2011 and industry standards:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Encryption of sensitive data</li>
                <li>Secure access controls</li>
                <li>Firewalls and intrusion prevention</li>
                <li>Regular audits and compliance checks</li>
                <li>Limited employee access</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">However, no method is completely secure. TRYDE uses all reasonable measures to protect your information.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. YOUR RIGHTS UNDER INDIAN LAW</h2>
              <p className="text-gray-700 leading-relaxed">You may exercise the following rights under the DPDP Act:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Right to Access: Request a summary of your personal data</li>
                <li>Right to Correction: Update or correct inaccurate information</li>
                <li>Right to Erasure/Deletion: Request account deletion</li>
                <li>Right to Withdraw Consent: Stop promotional messages or optional data processing</li>
                <li>Right to Data Portability (when applicable)</li>
                <li>Right to Grievance Redressal</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">All requests will be processed within the required legal time frame.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">7. DATA RETENTION</h2>
              <p className="text-gray-700 leading-relaxed">We retain your data:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>For as long as your account is active</li>
                <li>For fulfilling service obligations</li>
                <li>For dispute resolution & fraud prevention</li>
                <li>For compliance with legal retention periods</li>
                <li>For tax, regulatory, transportation, and logistics documentation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">After retention periods expire, data is securely archived or deleted.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">8. CHILDREN'S PRIVACY</h2>
              <p className="text-gray-700 leading-relaxed">TRYDE is not intended for individuals under 18 years of age. We do not knowingly collect information from minors.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">9. THIRD-PARTY LINKS</h2>
              <p className="text-gray-700 leading-relaxed">Our Platform may contain links to third-party websites or apps. We are not responsible for their privacy practices, content, or policies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">10. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-gray-700 leading-relaxed">TRYDE may update this policy:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>Due to legal changes</li>
                <li>For platform improvements</li>
                <li>For new services or features</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">Any major updates will be communicated through the app or website. Continued use of TRYDE constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">11. CONTACT & GRIEVANCE REDRESSAL</h2>
              <p className="text-gray-700 leading-relaxed">As required under the DPDP Act and IT Act, our Grievance Officer is:</p>
              <div className="bg-gray-100 p-4 rounded-lg mt-2">
                <p className="text-gray-700 leading-relaxed"><strong>TRYDE – Grievance Redressal Office</strong></p>
                <p className="text-gray-700 leading-relaxed">Email: info.tryde@gmail.com</p>
                <p className="text-gray-700 leading-relaxed">Mobile: +91 951 579 3509 / +91 767 501 6246</p>
                <p className="text-gray-700 leading-relaxed">Address: Avilala, Tirupathi, Andhra Pradesh, India – 517508</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-2">Users may contact the Grievance Officer for privacy concerns, complaints, or data-related requests.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">12. ACCEPTANCE OF PRIVACY POLICY</h2>
              <p className="text-gray-700 leading-relaxed">By using TRYDE, you confirm that:</p>
              <ul className="text-gray-700 leading-relaxed list-disc pl-6 mt-2">
                <li>You have read and understood this Privacy Policy</li>
                <li>You agree to the collection and processing of your data as described</li>
                <li>You provide consent where required under Indian law</li>
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
