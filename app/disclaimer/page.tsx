// app/disclaimer/page.tsx
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AlertCircle, Shield, FileText, Mail, CheckCircle, Globe } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Traavel Bug",
  description: "Read the disclaimer for Traavel Bug's visa assistance and travel services. Understand the limitations and disclaimers regarding our services.",
};

export default function Disclaimer() {
  return (
    <Section className="pt-28 pb-16 md:pt-32 md:pb-20 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <AlertCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">DISCLAIMER</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Disclaimer
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
            <div className="p-6 bg-accent/10 rounded-xl border border-accent/20 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-heading text-xl font-bold text-accent">Important Disclaimer</h2>
                  <p className="text-sm text-muted-text mt-1">
                    Please read this disclaimer carefully before using our services. By using our website 
                    and services, you agree to the terms outlined below.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. General Information</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                The information provided on this website is for general informational purposes only. While 
                we strive to keep the information up to date and accurate, we make no representations or 
                warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                suitability, or availability of the information contained on the website.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. Visa Approval</h2>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm">No Guarantee of Visa Approval</h3>
                  <p className="text-sm text-muted-text mt-1">
                    Traavel Bug provides visa assistance and application guidance only. Visa approval is 
                    solely at the discretion of the respective embassy, consulate, or immigration authority. 
                    We do not guarantee visa approval, and we are not responsible for any decisions made by 
                    immigration authorities.
                  </p>
                  <ul className="text-sm text-muted-text mt-2 space-y-1">
                    <li>✅ We help you prepare the best possible application</li>
                    <li>✅ We guide you through the documentation process</li>
                    <li>✅ We provide expert advice and support</li>
                    <li>❌ We cannot influence immigration decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Third-Party Links</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                Our website may contain links to third-party websites that are not owned or controlled by 
                Traavel Bug. We have no control over and assume no responsibility for the content, privacy 
                policies, or practices of any third-party websites. The inclusion of any links does not 
                necessarily imply a recommendation or endorsement of the views expressed within them.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Professional Advice</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                The information provided on this website is not intended as professional or legal advice. 
                You should consult with qualified professionals for advice tailored to your specific situation. 
                Traavel Bug is not liable for any decisions made based on the information provided on this website.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Information Accuracy</p>
                <p className="text-xs text-muted-text">We strive for accuracy but errors may occur</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Service Availability</p>
                <p className="text-xs text-muted-text">We do not guarantee uninterrupted service</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Third-Party Services</p>
                <p className="text-xs text-muted-text">We are not liable for third-party actions</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Visa Decisions</p>
                <p className="text-xs text-muted-text">We are not responsible for visa outcomes</p>
              </div>
            </div>

            {/* Section 6 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">6. Acceptance of Terms</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                By using our website and services, you acknowledge that you have read, understood, and 
                agree to be bound by this disclaimer. If you do not agree to these terms, please do not 
                use our website or services.
              </p>
            </div>

            {/* Section 7 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <div className="p-4 bg-light-bg rounded-xl border border-border/50">
              <p className="text-sm text-muted-text">
                If you have any questions about this disclaimer, please contact us:
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
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <a href="https://visa.traavelbug.com" className="text-sm text-primary hover:underline">
                    visa.traavelbug.com
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