// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Updated: Added visa@traavelbug.com to recipients
const recipientEmails = process.env.CONTACT_EMAILS 
  ? process.env.CONTACT_EMAILS.split(',').map(email => email.trim())
  : ['fa@traavelbug.com', 'sm@traavelbug.com', 'visa@traavelbug.com'];

// Validation schema
const contactSchema = z.object({
  fullName: z.string().min(2).max(100).trim(),
  mobileNumber: z.string().min(10).max(15),
  email: z.string().email().min(5).max(100).toLowerCase().trim(),
  destination: z.string().min(2).max(100).trim(),
  travelDate: z.string().min(1),
  purpose: z.string().min(2).max(100).trim(),
  honeypot: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { message: "Success" },
        { status: 200 }
      );
    }

    // Validate
    const validated = contactSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validated.error.errors },
        { status: 400 }
      );
    }

    const { fullName, mobileNumber, email, destination, travelDate, purpose } = validated.data;

    // Format date
    const formattedDate = new Date(travelDate).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Format purpose
    const purposeMap: Record<string, string> = {
      tourism: "Tourism",
      business: "Business",
      "family-visit": "Family Visit",
      medical: "Medical",
      education: "Education",
      other: "Other",
    };
    const formattedPurpose = purposeMap[purpose] || purpose;

    // 📧 SEND EMAIL TO ADMIN (Multiple Recipients)
    await resend.emails.send({
      from: `Traavel Bug <support@mail.traavelbug.com>`,
      to: recipientEmails,
      subject: `🆕 New Visa Enquiry from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #1F2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; }
              .container { background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { border-bottom: 2px solid #214696; padding-bottom: 20px; margin-bottom: 30px; }
              .logo { font-size: 24px; font-weight: 700; color: #214696; }
              .logo span { color: #F4C430; }
              .field { margin-bottom: 20px; padding: 16px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #214696; }
              .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6B7280; margin-bottom: 4px; }
              .field-value { font-size: 16px; color: #1F2937; font-weight: 500; }
              .badge { display: inline-block; background: #214696; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
              .recipients { background: #f0f7ff; padding: 12px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #d0e0ff; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #6B7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Traavel <span>Bug</span></div>
                <div style="margin-top: 8px; color: #6B7280;">New Visa Enquiry</div>
              </div>

              <div style="text-align: center; margin-bottom: 30px;">
                <span class="badge">🕐 ${new Date().toLocaleString()}</span>
              </div>

              <div class="recipients">
                <strong style="color: #214696;">📧 Sent to:</strong>
                <span style="color: #4B5563;">${recipientEmails.join(', ')}</span>
              </div>

              <div class="field">
                <div class="field-label">👤 Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>

              <div class="field">
                <div class="field-label">📱 Mobile Number</div>
                <div class="field-value">${mobileNumber}</div>
              </div>

              <div class="field">
                <div class="field-label">✉️ Email Address</div>
                <div class="field-value">${email}</div>
              </div>

              <div class="field">
                <div class="field-label">🌍 Destination</div>
                <div class="field-value">${destination}</div>
              </div>

              <div class="field">
                <div class="field-label">📅 Travel Date</div>
                <div class="field-value">${formattedDate}</div>
              </div>

              <div class="field">
                <div class="field-label">🎯 Purpose</div>
                <div class="field-value">${formattedPurpose}</div>
              </div>

              <div class="footer">
                <p style="margin-bottom: 4px;">This enquiry was submitted through the Traavel Bug website.</p>
                <p style="font-size: 12px; color: #9CA3AF;">Please respond within 24 hours.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // 📧 SEND AUTO-REPLY TO CUSTOMER
    await resend.emails.send({
      from: `Traavel Bug <support@mail.traavelbug.com>`,
      to: email,
      subject: "✅ We've Received Your Visa Enquiry",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #1F2937; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; }
              .container { background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { border-bottom: 2px solid #214696; padding-bottom: 20px; margin-bottom: 30px; }
              .logo { font-size: 24px; font-weight: 700; color: #214696; }
              .logo span { color: #F4C430; }
              .highlight { background: #f0f7ff; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #214696; }
              .button { display: inline-block; background: #214696; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 20px; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center; color: #6B7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Traavel <span>Bug</span></div>
              </div>

              <h2 style="color: #214696;">Thank You, ${fullName}! 🙏</h2>

              <p style="font-size: 16px;">
                We've received your visa enquiry and our team is reviewing it.
              </p>

              <div class="highlight">
                <p style="margin: 0; color: #214696; font-weight: 500;">📋 Here's what happens next:</p>
                <ul style="margin: 10px 0 0 20px; color: #4B5563;">
                  <li>✅ Our team will review your enquiry within 24 hours</li>
                  <li>✅ We'll contact you via phone or email</li>
                  <li>✅ We'll guide you through the visa application process</li>
                </ul>
              </div>

              <div style="text-align: center;">
                <a href="https://visa.traavelbug.com" class="button">Visit Our Website</a>
              </div>

              <div class="footer">
                <p>Traavel Bug • Professional Visa Assistance</p>
                <p style="font-size: 12px; color: #9CA3AF;">This is an automated response. We'll get back to you shortly.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}