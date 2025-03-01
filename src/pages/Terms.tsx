import React from "react";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";
import { colors } from "../constants/colors";

const Terms = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 
              className="text-4xl font-display mb-8 text-center"
              style={{ color: colors.darkBrown }}
            >
              Terms of Service
            </h1>
            
            <div className="prose prose-lg mx-auto" style={{ color: colors.darkBrown }}>
              <p className="mb-4">
                Last Updated: 2/28/25
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using KAI Lagree Studio's website, booking services, or attending any classes, you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree, please refrain from using our services.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">2. Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years old or have parental consent to use our services. By using our services, you represent that you meet these requirements.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">3. Services Provided</h2>
              <p className="mb-4">
                KAI Lagree Studio offers Lagree classes, memberships, and other wellness services, which may be subject to change at our discretion.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">4. Payment & Billing</h2>
              <p className="mb-4">
                All purchases, including memberships and class packages, must be paid in full at the time of booking. We use third-party payment processors, and by making a purchase, you agree to their terms.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">5. Refunds & Cancellations</h2>
              <p className="mb-4">
                All sales are final. Refunds may be considered under exceptional circumstances, such as medical conditions preventing participation. Requests must be submitted in writing to info@kailagreestudio.com within 7 days of purchase. We reserve the right to approve or deny refunds at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">6. Class Booking & Attendance</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Classes must be booked before class time and are subject to availability.</li>
                <li>Late arrivals may not be admitted, and missed classes are non-refundable.</li>
                <li>We reserve the right to refuse service to anyone for any reason.</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">7. Health & Liability Waiver</h2>
              <p className="mb-4">
                By participating in our classes, you acknowledge that physical exercise involves inherent risks, and you assume full responsibility for any injuries or health issues that may arise.
              </p>
              <p className="mb-4">
                You agree that KAI Lagree Studio is not liable for any injuries, accidents, or damages occurring before, during, or after class participation, except in cases of gross negligence or willful misconduct.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">8. Third-Party Services</h2>
              <p className="mb-4">
                We may use third-party services, such as payment processors and scheduling tools. We are not responsible for their security, performance, or privacy practices, and your use of such services is at your own risk.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">9. Code of Conduct</h2>
              <p className="mb-4">
                We expect all clients to behave respectfully toward staff and other participants. Disruptive or inappropriate behavior may result in suspension or termination of services without refund.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">10. Memberships & Auto-Renewal</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Memberships may be billed on a recurring basis until canceled.</li>
                <li>You may cancel your membership by contacting info@kailagreestudio.com at least 20 days before your next billing cycle to avoid additional charges.</li>
                <li>No partial refunds are provided for early cancellation.</li>
              </ul>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">11. Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, images, logos, and class materials, is owned by KAI Lagree Studio and may not be copied, distributed, or used without our written permission.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">12. Privacy & Data Protection</h2>
              <p className="mb-4">
                We collect and store personal information, including names, emails, phone numbers, and payment details. We use encryption and secure servers to protect your data. We may share information with third parties as necessary for service delivery. See our Privacy Policy for details.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">13. Dispute Resolution & Arbitration</h2>
              <p className="mb-4">
                Any dispute, claim, or controversy arising from these Terms shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Santa Clara County, California.
              </p>
              <p className="mb-4">
                By agreeing to these Terms, you waive the right to a jury trial or to participate in a class-action lawsuit. However, we reserve the right to seek injunctive relief in court for intellectual property violations.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">14. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, KAI Lagree Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">15. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold KAI Lagree Studio harmless from any claims, damages, or losses arising from your use of our services or violation of these Terms.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">16. Termination of Services</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend access to our services at any time if you violate these Terms.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">17. Governing Law & Jurisdiction</h2>
              <p className="mb-4">
                These Terms shall be governed by the laws of the State of California, without regard to its conflict of law principles. Any disputes shall be resolved exclusively in the state or federal courts of Santa Clara County, California, and you consent to the jurisdiction of such courts.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">18. Changes to These Terms</h2>
              <p className="mb-4">
                We may update these Terms at any time. If we make material changes, we will provide notice via email or on our website. Continued use of our services after modifications constitutes your acceptance of the revised Terms.
              </p>
              
              <h2 className="text-2xl font-medium mt-8 mb-4">19. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
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

export default Terms;