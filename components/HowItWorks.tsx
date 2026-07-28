import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";

const steps = [
  { step: "1", title: "Enquire", description: "Fill out our enquiry form with your travel details." },
  { step: "2", title: "Consult", description: "Our team reviews your requirements and guides you." },
  { step: "3", title: "Apply", description: "Get assistance with your visa application." },
  { step: "4", title: "Travel", description: "Receive your visa and embark on your journey." },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">Simple steps to get your visa assistance.</p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <MotionWrapper key={index} delay={0.1 + index * 0.1}>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}