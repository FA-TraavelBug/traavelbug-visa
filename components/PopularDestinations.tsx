import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";

const destinations = [
  { flag: "🇦🇪", name: "Dubai (UAE)" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇹🇭", name: "Thailand" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇪🇺", name: "Schengen Countries" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇨🇦", name: "Canada" },
];

export function PopularDestinations() {
  return (
    <Section background="light" id="destinations">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Popular <span className="text-primary">Destinations</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">Visa assistance for popular travel destinations.</p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <MotionWrapper key={index} delay={0.05 * index}>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-4xl mb-2">{dest.flag}</div>
                <span className="text-sm font-medium">{dest.name}</span>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}