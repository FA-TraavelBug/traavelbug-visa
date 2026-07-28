import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { Card } from "./ui/Card";
import { MotionWrapper } from "./ui/MotionWrapper";

const features = [
  { title: "Trusted Visa Assistance", description: "Get professional guidance throughout your visa application process." },
  { title: "Document Guidance", description: "Know exactly which documents are required." },
  { title: "Dedicated Support", description: "Our team is available to answer your questions." },
  { title: "Multiple Destinations", description: "Visa assistance for a wide range of destinations." },
  { title: "Quick Response", description: "Receive timely assistance for your journey." },
  { title: "Complete Travel Support", description: "Beyond visa support, we help with flights and hotels." },
];

export function WhyChooseUs() {
  return (
    <Section background="light" id="why-choose-us">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why Choose <span className="text-primary">Traavel Bug</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">
              We make the visa application process simpler with dedicated assistance.
            </p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <MotionWrapper key={index} delay={0.1 + index * 0.05}>
              <Card className="text-center h-full">
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}