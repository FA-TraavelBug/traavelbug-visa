// app/terms/page.tsx
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FileText, CheckCircle, Shield, AlertCircle, Users, Mail } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Traavel Bug",
  description: "Read the terms and conditions for using Traavel Bug's services. Understand your rights and obligations when using our visa assistance and travel services.",
};

export default function Terms() {
  return (
    <Section className="pt-28 pb-16 md:pt-32 md:pb-20 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">TERMS & CONDITIONS</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-text max-w-2xl mx-auto">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="p-6 bg-light-bg rounded-xl border border-border/50 mb-8">
              <p className="text-sm text-muted-text">
                Please read these Terms & Conditions carefully before using our services. By accessing 
                or using our website, you agree to be bound by these terms.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                By using the Traavel Bug website and services, you agree to comply with and be bound by 
                these Terms & Conditions. If you do not agree to these terms, please do not use our website 
                or services.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. Our Services</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Visa Assistance</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Travel Planning</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Document Guidance</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Holiday Packages</span>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Provide Accurate Information</p>
                <p className="text-xs text-muted-text">Submit truthful and complete information</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Comply with Laws</p>
                <p className="text-xs text-muted-text">Follow all applicable laws and regulations</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Maintain Confidentiality</p>
                <p className="text-xs text-muted-text">Keep your account information secure</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Respect Others</p>
                <p className="text-xs text-muted-text">Treat our staff and other customers with respect</p>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Visa Approval Disclaimer</h2>
            <div className="p-4 bg-accent/10 rounded-xl border border-accent/20 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">Important Notice</h3>
                  <p className="text-sm text-muted-text mt-1">
                    Traavel Bug provides visa assistance and application guidance only. Visa approval is 
                    solely at the discretion of the respective embassy, consulate, or immigration authority. 
                    We do not guarantee visa approval.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Fees and Payment</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <ul className="text-sm text-muted-text space-y-2">
                <li>• All fees are communicated upfront</li>
                <li>• No hidden charges</li>
                <li>• Payments are processed securely</li>
                <li>• Refund policy applies as per terms</li>
              </ul>
            </div>

            {/* Section 6 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                Traavel Bug shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of our services. Our liability is limited to the 
                extent permitted by law.
              </p>
            </div>

            {/* Section 7 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                These Terms & Conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the 
                courts in New Delhi.
              </p>
            </div>

            {/* Section 8 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
            <div className="p-4 bg-light-bg rounded-xl border border-border/50">
              <p className="text-sm text-muted-text">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:sm@traavelbug.com" className="text-sm text-primary hover:underline">
                    sm@traavelbug.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:rm@traavelbug.com" className="text-sm text-primary hover:underline">
                    rm@traavelbug.com
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-text text-center">
                © {new Date().getFullYear()} Traavel Bug. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}