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
                Last Updated: March 11, 2026
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing the KAI Lagree Studio website, booking classes, purchasing memberships or packages, or attending any classes or events, you agree to comply with and be bound by these Terms of Service ("Terms").
              </p>
              <p className="mb-4">
                If you do not agree to these Terms, please do not use our services.
              </p>
              <p className="mb-4">
                These Terms apply to all services provided by KAI Lagree Studio and its parent company, KAI Studio Concepts LLC (collectively referred to as "KAI," "we," "our," or "us").
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">2. Eligibility</h2>
              <p className="mb-4">
                You must be at least 18 years old to participate in classes or purchase services unless accompanied by a parent or legal guardian or with written parental consent.
              </p>
              <p className="mb-4">
                By using our services, you represent and warrant that you meet these eligibility requirements.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">3. Services Provided</h2>
              <p className="mb-4">
                KAI Lagree Studio offers Lagree fitness classes, memberships, class packages, events, and other wellness-related services.
              </p>
              <p className="mb-4">
                All services, schedules, instructors, and offerings are subject to change at any time at our discretion without prior notice.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">4. Payment & Billing</h2>
              <p className="mb-4">
                All purchases, including memberships, class packages, retail products, and other services, must be paid in full at the time of purchase unless otherwise specified.
              </p>
              <p className="mb-4">
                We utilize third-party payment processors to complete transactions. By making a purchase, you agree to comply with the terms and policies of those third-party providers.
              </p>
              <p className="mb-4">
                Payment information may be securely stored by our third-party payment processors to facilitate future purchases, memberships, and applicable fees such as late cancellations or no-show charges. KAI Lagree Studio does not directly store full credit card numbers on its own servers.
              </p>
              <p className="mb-4">
                By storing a payment method on file, you authorize KAI Lagree Studio to charge that payment method for purchases, memberships, late cancellation fees, no-show fees, and other applicable charges in accordance with studio policies.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">5. Refund Policy</h2>
              <p className="mb-4">
                All purchases are final and non-refundable unless otherwise required by law.
              </p>
              <p className="mb-4">
                Refunds, credits, or exceptions may be considered only in rare circumstances such as documented medical conditions preventing participation. Requests must be submitted in writing to info@kailagreestudio.com within 7 days of purchase.
              </p>
              <p className="mb-4">
                KAI Lagree Studio reserves the sole right to approve or deny any refund or exception.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">6. Class Booking & Attendance Policy</h2>
              <h3 className="text-xl font-medium mt-6 mb-3">Booking</h3>
              <p className="mb-4">
                Classes must be reserved in advance through our booking platform and are available on a first-come, first-served basis.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Late Cancellation</h3>
              <p className="mb-4">
                Cancellations made within 12 hours of the scheduled class start time will incur:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>$14 late cancellation fee</li>
                <li>Loss of class credit</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-3">No-Show</h3>
              <p className="mb-4">
                Failure to attend a booked class will incur:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>$20 no-show fee</li>
                <li>Loss of class credit</li>
              </ul>
              <h3 className="text-xl font-medium mt-6 mb-3">Late Arrival</h3>
              <p className="mb-4">
                Clients arriving more than 15 minutes after the start of class may not be admitted for safety reasons. In such cases, the booking will be treated as a no-show.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Waitlist</h3>
              <p className="mb-4">
                Clients who join the waitlist may be automatically added to class if a spot becomes available before the 12-hour window. If added from the waitlist, the standard cancellation policy applies.
              </p>
              <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Bookings</h3>
              <p className="mb-4">
                Reservations made through third-party platforms such as ClassPass are subject to the policies of those platforms. KAI Lagree Studio does not control third-party billing, credit systems, or refunds.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">7. Memberships & Auto-Renewal</h2>
              <p className="mb-4">
                Memberships may be billed on a recurring basis until canceled.
              </p>
              <p className="mb-4">
                To cancel a membership, clients must submit a cancellation request to info@kailagreestudio.com at least 20 days prior to the next billing cycle to avoid additional charges.
              </p>
              <p className="mb-4">
                No partial refunds will be issued for unused membership time.
              </p>
              <p className="mb-4">
                Additional membership details, including commitment periods, pause policies, and fees, are outlined in individual membership agreements.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">8. Assumption of Risk & Health Acknowledgment</h2>
              <p className="mb-4">
                By participating in Lagree classes or using studio equipment, you acknowledge that physical exercise involves inherent risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Muscle strain</li>
                <li>Injury</li>
                <li>Illness</li>
                <li>Falls</li>
                <li>Equipment-related injuries</li>
                <li>Serious injury in rare cases</li>
              </ul>
              <p className="mb-4">
                You voluntarily assume all risks associated with participating in classes, using equipment, or being present at the studio.
              </p>
              <p className="mb-4">
                You represent that you are physically capable of participating in fitness activities and have consulted a physician if necessary.
              </p>
              <p className="mb-4">
                Clients are responsible for informing instructors of any injuries, medical conditions, pregnancy, or physical limitations prior to participating in class.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, KAI Lagree Studio (KAI Studio Concepts LLC) shall not be liable for any injuries, damages, losses, or claims arising from participation in classes, use of equipment, or presence at the studio, except in cases of gross negligence or willful misconduct.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">10. Personal Property</h2>
              <p className="mb-4">
                KAI Lagree Studio is not responsible for lost, stolen, or damaged personal belongings brought into the studio.
              </p>
              <p className="mb-4">
                Clients are encouraged to keep personal items secured at all times.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">11. Code of Conduct</h2>
              <p className="mb-4">
                All clients are expected to behave respectfully toward staff, instructors, and fellow participants.
              </p>
              <p className="mb-4">
                KAI Lagree Studio reserves the right to refuse service, remove participants from class, or terminate memberships without refund if a client engages in:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Disruptive behavior</li>
                <li>Harassment</li>
                <li>Unsafe use of equipment</li>
                <li>Violation of studio policies</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">12. Photography & Media Release</h2>
              <p className="mb-4">
                Classes, events, and studio activities may occasionally be photographed or recorded for marketing and promotional purposes.
              </p>
              <p className="mb-4">
                By attending classes or events at KAI Lagree Studio, you consent to the use of your image, likeness, or voice in promotional materials unless you notify staff in advance via email that you prefer not to be included.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">13. Intellectual Property</h2>
              <p className="mb-4">
                All content on the KAI Lagree Studio website and within the studio, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Logos</li>
                <li>Branding</li>
                <li>Text</li>
                <li>Images</li>
                <li>Training materials</li>
                <li>Videos</li>
                <li>Marketing content</li>
              </ul>
              <p className="mb-4">
                is the exclusive property of KAI Studio Concepts LLC and may not be copied, reproduced, or distributed without written permission.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">14. Privacy & Data Protection</h2>
              <p className="mb-4">
                KAI Lagree Studio collects personal information such as names, email addresses, phone numbers, and payment information for the purpose of providing services.
              </p>
              <p className="mb-4">
                We utilize secure servers and encryption to protect personal data.
              </p>
              <p className="mb-4">
                We may share limited information with third-party service providers necessary to operate our business (such as scheduling software and payment processors).
              </p>
              <p className="mb-4">
                Please refer to our Privacy Policy for full details regarding data collection and use.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">15. Dispute Resolution & Arbitration</h2>
              <p className="mb-4">
                Any dispute, claim, or controversy arising from these Terms or the use of our services shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules.
              </p>
              <p className="mb-4">
                The arbitration shall take place in Santa Clara County, California.
              </p>
              <p className="mb-4">
                By agreeing to these Terms, you waive the right to a jury trial or participation in a class-action lawsuit.
              </p>
              <p className="mb-4">
                However, KAI Lagree Studio reserves the right to seek injunctive relief in court for violations of intellectual property rights.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">16. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless KAI Lagree Studio, KAI Studio Concepts LLC, its owners, employees, contractors, and instructors from any claims, damages, losses, or legal expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your participation in classes</li>
                <li>Your use of studio facilities</li>
                <li>Violation of these Terms</li>
              </ul>

              <h2 className="text-2xl font-medium mt-8 mb-4">17. Termination of Services</h2>
              <p className="mb-4">
                KAI Lagree Studio reserves the right to suspend or terminate access to services at any time if a client violates these Terms or engages in unsafe or inappropriate behavior.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">18. Changes to These Terms</h2>
              <p className="mb-4">
                KAI Lagree Studio may update these Terms at any time.
              </p>
              <p className="mb-4">
                If material changes are made, we will provide notice through our website or email. Continued use of our services after such updates constitutes acceptance of the revised Terms.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">19. Chargebacks & Payment Disputes</h2>
              <p className="mb-4">
                By purchasing services from KAI Lagree Studio, you agree not to initiate a chargeback or payment dispute with your bank or credit card provider without first contacting us to attempt to resolve the matter.
              </p>
              <p className="mb-4">
                If a chargeback or payment dispute is initiated for a charge that complies with these Terms and studio policies, KAI Lagree Studio reserves the right to recover the disputed amount, charge a reasonable administrative fee, and suspend or terminate the client's account until the matter is resolved.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">20. Non-Transferable Services</h2>
              <p className="mb-4">
                All memberships, class packages, and class credits are non-transferable and may only be used by the original purchaser.
              </p>
              <p className="mb-4">
                Sharing accounts, transferring credits, or booking classes on behalf of another individual without authorization is strictly prohibited and may result in suspension or termination of the account without refund.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">21. Promotional Offers & Introductory Pricing</h2>
              <p className="mb-4">
                Introductory offers, promotional pricing, and special discounts are limited to new clients who have never previously attended KAI Lagree Studio through any booking platform, including third-party services.
              </p>
              <p className="mb-4">
                KAI Lagree Studio reserves the right to cancel, adjust, or refuse promotional purchases that violate eligibility requirements.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">22. Studio Closures & Force Majeure</h2>
              <p className="mb-4">
                KAI Lagree Studio shall not be held liable for temporary closures, schedule interruptions, or service limitations due to circumstances beyond our reasonable control, including but not limited to natural disasters, building maintenance issues, power outages, government restrictions, public health emergencies, or other unforeseen events.
              </p>
              <p className="mb-4">
                In such circumstances, KAI Lagree Studio reserves the right to modify schedules, services, or operations as necessary.
              </p>

              <h2 className="text-2xl font-medium mt-8 mb-4">23. Contact Information</h2>
              <p className="mb-4">
                If you have questions regarding these Terms, please contact:
              </p>
              <p className="mb-4">
                KAI Lagree Studio<br />
                info@kailagreestudio.com<br />
                415 N Mary Ave Ste 110<br />
                Sunnyvale, CA 94085<br />
                United States
              </p>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Terms;
