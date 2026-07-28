"use client";

import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import Button from "./ui/Button";
import { MotionWrapper } from "./ui/MotionWrapper";

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center pt-16" id="services">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Visa Journey
              <br />
              <span className="text-primary">Starts Here</span>
            </h1>
          </MotionWrapper>
          
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Planning an international trip? Get professional assistance with tourist, 
              business and visit visa applications.
            </p>
          </MotionWrapper>
          
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button>Get Visa Assistance</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
}