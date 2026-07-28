import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";

const testimonials = [
  { name: "Sarah M.", destination: "Dubai", review: "Placeholder review. Replace with real testimonial." },
  { name: "Rahul S.", destination: "Singapore", review: "Placeholder review. Replace with real testimonial." },
  { name: "Priya K.", destination: "Schengen", review: "Placeholder review. Replace with real testimonial." },
];

export function Testimonials() {
  return (
    <Section background="light" id="testimonials">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What Our <span className="text-primary">Travellers Say</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">Real feedback from our satisfied customers.</p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <MotionWrapper key={index} delay={0.1 + index * 0.1}>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.destination}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">"{testimonial.review}"</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}