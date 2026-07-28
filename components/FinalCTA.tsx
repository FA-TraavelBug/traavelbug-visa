import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import Button from "./ui/Button";
import { MotionWrapper } from "./ui/MotionWrapper";

export function FinalCTA() {
  return (
    <Section background="primary" padding="large">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-accent">Travel?</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-white/80 text-lg mb-8">
              Start your visa journey today with professional assistance.
            </p>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" className="bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/20">
                Get Visa Assistance
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Chat on WhatsApp
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}