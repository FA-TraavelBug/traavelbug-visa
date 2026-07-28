import Link from "next/link";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Traavel Bug</h3>
              <p className="text-gray-400 text-sm">Professional visa assistance for international travel.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#services" className="hover:text-white">Visa Services</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="#faqs" className="hover:text-white">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📱 +91 98765 43210</li>
                <li>✉️ support@traavelbug.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-gray-400">
                <span className="hover:text-white cursor-pointer">📘</span>
                <span className="hover:text-white cursor-pointer">📸</span>
                <span className="hover:text-white cursor-pointer">🔗</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 text-center text-sm text-gray-400">
          © 2026 Traavel Bug. All rights reserved.
        </div>
      </Container>
    </footer>  // ← Make sure this is </footer> not </section>
  );
}