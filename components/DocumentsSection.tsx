import { Container } from "./ui/Container";
import { Section } from "./ui/Section";
import { MotionWrapper } from "./ui/MotionWrapper";

const documents = [
  "Passport (valid for at least 6 months)",
  "Passport-size Photographs",
  "Completed Visa Application Form",
  "Bank Statements (last 3-6 months)",
  "Flight Itinerary (if applicable)",
  "Hotel Booking (if applicable)",
  "Travel Insurance (if required)",
  "Employment or Business Proof",
];

export function DocumentsSection() {
  return (
    <Section id="documents">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MotionWrapper>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Required <span className="text-primary">Documents</span>
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="text-lg text-gray-600">Common documents required for visa applications.</p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {documents.map((doc, index) => (
            <MotionWrapper key={index} delay={0.05 * index}>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-all">
                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-sm">{doc}</span>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}