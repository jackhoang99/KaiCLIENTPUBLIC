import React from "react";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";
import { colors } from "../constants/colors";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 
              className="text-4xl font-display mb-8 text-center"
              style={{ color: colors.darkBrown }}
            >
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg mx-auto" style={{ color: colors.darkBrown }}>
              <p className="mb-4">
                Last Updated: 2/28/25
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Privacy Policy describes how KAI Lagree Studio ("we," "us," or "our") collects, uses, and discloses your personal information when you visit our website, book classes, or otherwise interact with our services.
              </p>
              <p className="mb-4">
                By using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">2. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. Updates will be posted on this page with a "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">3. Personal Information We Collect</h2>
              <p className="mb-4">
                We collect different types of personal information depending on how you interact with our Services.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">A. Information You Provide Directly</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact Details: Name, phone number, email address.</li>
                <li>Payment Information: Billing details, payment confirmation (processed via third-party payment providers).</li>
                <li>Account Information: Username, password, and security questions (if applicable).</li>
                <li>Customer Support Information: Any data you voluntarily provide when contacting us.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">B. Information Collected Automatically (Cookies & Tracking)</h3>
              <p className="mb-4">
                We collect Usage Data (device type, browser type, IP address, browsing activity) via cookies and similar technologies.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>We use Mariana Tek to power our studio's scheduling and booking system. Mariana Tek may use cookies and similar technologies to collect usage data. You can review their cookie policy here.</li>
                <li>We use Stripe for payment processing. Stripe may collect and process payment-related data for transaction and fraud prevention purposes. You can review their privacy policy here.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">C. Information from Third Parties</h3>
              <p className="mb-4">
                We may receive personal information from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Vendors and service providers (e.g., payment processors like Stripe, marketing platforms).</li>
                <li>Advertising partners (for targeted ads and promotions).</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">4. How We Use Your Personal Information</h2>
              <p className="mb-4">
                We use your data to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide services (e.g., booking classes, processing payments).</li>
                <li>Ensure security and fraud prevention.</li>
                <li>Improve marketing and advertising.</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">5. How We Share Your Information</h2>
              <p className="mb-4">
                We may disclose your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With service providers (e.g., Mariana Tek, payment processors, IT support).</li>
                <li>With marketing and advertising partners.</li>
                <li>For legal reasons (e.g., law enforcement requests).</li>
              </ul>
              <p className="mb-4">
                We take reasonable steps to ensure third-party providers handle your data securely but are not responsible for their policies or breaches.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">6. Data Retention & Security</h2>
              <p className="mb-4">
                We store data securely using encryption and retain it for up to 5 years. If no activity is detected within that period, we securely delete or anonymize your data.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">7. Your Rights & Choices</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>California Residents (CCPA/CPRA): You may request disclosure or opt out of data sales.</li>
                <li>EU/UK Users (GDPR): You may request access, correction, or deletion of your data.</li>
                <li>Marketing Opt-Out: Unsubscribe via email or contact info@kailagreestudio.com.</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">8. Third-Party Links</h2>
              <p className="mb-4">
                Our site may contain links to external websites. We are not responsible for their privacy policies.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                KAI Lagree Studio<br />
                info@kailagreestudio.com<br />
                415 N Mary Ave Ste 110, Sunnyvale, CA 94085, USA
              </p>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;