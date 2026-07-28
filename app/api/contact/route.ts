import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2),
  mobileNumber: z.string().min(10),
  email: z.string().email(),
  destination: z.string().min(2),
  travelDate: z.string().min(1),
  purpose: z.string().min(2),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { message: "Validation failed" },
        { status: 400 }
      );
    }

    // For now, just return success
    // Add Resend integration later
    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}