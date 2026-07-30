// app/privacy-policy/page.tsx
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Shield, Lock, Eye, Users, Mail, FileText, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Traavel Bug",
  description: "Learn how Traavel Bug collects, uses, and protects your personal information. Read our privacy policy to understand your rights.",
};

export default function PrivacyPolicy() {
  return (
    <Section className="pt-28 pb-16 md:pt-32 md:pb-20 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">PRIVACY POLICY</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
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
                At Traavel Bug, we take your privacy seriously. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white rounded-xl border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Personal Information</h3>
                </div>
                <ul className="text-sm text-muted-text space-y-1">
                  <li>• Full Name</li>
                  <li>• Email Address</li>
                  <li>• Phone Number</li>
                  <li>• Travel Details</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-xl border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Usage Information</h3>
                </div>
                <ul className="text-sm text-muted-text space-y-1">
                  <li>• IP Address</li>
                  <li>• Browser Type</li>
                  <li>• Pages Visited</li>
                  <li>• Time Spent</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Process visa applications</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Send service-related communications</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Improve our services</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Provide customer support</span>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">3. Information Security</h2>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 mb-6">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-text">
                    We implement appropriate technical and organizational measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="text-sm text-muted-text mt-2 space-y-1">
                    <li>✅ SSL Encryption</li>
                    <li>✅ Secure Data Storage</li>
                    <li>✅ Regular Security Audits</li>
                    <li>✅ Access Controls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">4. Data Retention</h2>
            <div className="p-4 bg-white rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Access</p>
                <p className="text-xs text-muted-text">Request a copy of your data</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Rectification</p>
                <p className="text-xs text-muted-text">Correct inaccurate information</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Erasure</p>
                <p className="text-xs text-muted-text">Request deletion of your data</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-border/50">
                <p className="font-semibold text-sm">Withdraw Consent</p>
                <p className="text-xs text-muted-text">Opt-out of communications</p>
              </div>
            </div>

            {/* Section 6 */}
            <h2 className="font-heading text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <div className="p-4 bg-light-bg rounded-xl border border-border/50 mb-6">
              <p className="text-sm text-muted-text">
                If you have any questions about this Privacy Policy, please contact us:
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