"use client";

import { useState } from "react";
import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MotionWrapper } from "./ui/MotionWrapper";

const faqs = [
  { q: "Do you guarantee visa approval?", a: "No. Visa approval is solely at the discretion of the respective embassy, consulate or immigration authority." },
  { q: "Which countries do you provide visa assistance for?", a: "We assist travellers with visa applications for multiple international destinations." },
  { q: "How long does visa processing take?", a: "Processing times vary depending on the destination, visa type and the respective embassy." },
  { q: "Can you help with document preparation?", a: "Yes. We guide you through the required documents and help you prepare your application." },
  { q: "Do you also help with flights and hotels?", a: "Yes. Traavel Bug can also assist with flights, hotels and customised holiday packages." },
  { q: "How do I get started?", a: "Simply fill out the enquiry form or contact our team via WhatsApp or phone." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faqs">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">Find answers to common questions about our services.</p>
          </MotionWrapper>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <MotionWrapper key={index} delay={0.05 * index}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-sm transition-all">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.q}</span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-100">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}