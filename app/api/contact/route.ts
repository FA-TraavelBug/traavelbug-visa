// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema matching the form
const contactSchema = z.object({
  fullName: z.string().min(2).max(100).trim(),
  mobileNumber: z.string().min(10).max(15),
  email: z.string().email().min(5).max(100).toLowerCase().trim(),
  destination: z.string().min(2).max(100).trim(),
  travelDate: z.string().min(1),
  purpose: z.string().min(2).max(100).trim(),
  honeypot: z.string().max(0), // Honeypot field - should be empty
});

// Rate limiting store (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    // Reset window
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count++;
  rateLimit.set(ip, record);
  return false;
}

function formatPurpose(purpose: string): string {
  const purposeMap: Record<string, string> = {
    tourism: "Tourism",
    business: "Business",
    "family-visit": "Family Visit",
    medical: "Medical",
    education: "Education",
    other: "Other",
  };
  return purposeMap[purpose] || purpose;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIp(request);

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          message: "Too many requests. Please try again later." 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate honeypot field
    if (body.honeypot && body.honeypot.length > 0) {
      // Silently return success for bots
      return NextResponse.json(
        { message: "Enquiry submitted successfully" },
        { status: 200 }
      );
    }

    // Validate request body
    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { 
          message: "Validation failed", 
          errors: validatedData.error.errors 
        },
        { status: 400 }
      );
    }

    const { fullName, mobileNumber, email, destination, travelDate, purpose } = validatedData.data;

    // Format data for email
    const formattedPurpose = formatPurpose(purpose);
    const formattedDate = formatDate(travelDate);
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL || "Traavel Bug <noreply@traavelbug.com>",
      to: process.env.CONTACT_EMAIL || "support@traavelbug.com",
      subject: `New Visa Enquiry from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #1F2937;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f8fafc;
              }
              .container {
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
              .header {
                border-bottom: 2px solid #214696;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .logo {
                font-size: 24px;
                font-weight: 700;
                color: #214696;
              }
              .logo span {
                color: #F4C430;
              }
              .field {
                margin-bottom: 20px;
                padding: 16px;
                background: #f8fafc;
                border-radius: 12px;
                border-left: 4px solid #214696;
              }
              .field-label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #6B7280;
                margin-bottom: 4px;
              }
              .field-value {
                font-size: 16px;
                color: #1F2937;
                font-weight: 500;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #E5E7EB;
                text-align: center;
                color: #6B7280;
                font-size: 14px;
              }
              .badge {
                display: inline-block;
                background: #214696;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Traavel <span>Bug</span></div>
                <div style="margin-top: 8px; color: #6B7280; font-size: 14px;">
                  New Visa Enquiry
                </div>
              </div>

              <div style="text-align: center; margin-bottom: 30px;">
                <span class="badge">🕐 ${timestamp}</span>
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
                <div class="field-label">🎯 Purpose of Travel</div>
                <div class="field-value">${formattedPurpose}</div>
              </div>

              <div class="footer">
                <p style="margin-bottom: 4px;">
                  This enquiry was submitted through the Traavel Bug website.
                </p>
                <p style="font-size: 12px; color: #9CA3AF;">
                  Please respond to this enquiry within 24 hours.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Traavel Bug - New Visa Enquiry

        Full Name: ${fullName}
        Mobile Number: ${mobileNumber}
        Email: ${email}
        Destination: ${destination}
        Travel Date: ${formattedDate}
        Purpose: ${formattedPurpose}
        Submitted: ${timestamp}

        This enquiry was submitted through the Traavel Bug website.
        Please respond within 24 hours.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send enquiry. Please try again." },
        { status: 500 }
      );
    }

    // Send auto-reply to customer
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL || "Traavel Bug <noreply@traavelbug.com>",
      to: email,
      subject: "We've Received Your Visa Enquiry",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #1F2937;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f8fafc;
              }
              .container {
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
              }
              .header {
                border-bottom: 2px solid #214696;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .logo {
                font-size: 24px;
                font-weight: 700;
                color: #214696;
              }
              .logo span {
                color: #F4C430;
              }
              .button {
                display: inline-block;
                background: #214696;
                color: white;
                padding: 12px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
                margin-top: 20px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #E5E7EB;
                text-align: center;
                color: #6B7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">Traavel <span>Bug</span></div>
              </div>

              <h2 style="color: #214696; margin-top: 0;">
                Thank You, ${fullName}!
              </h2>

              <p style="font-size: 16px;">
                We've received your visa enquiry and our team is reviewing it.
              </p>

              <div style="background: #f0f7ff; padding: 16px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #214696; font-weight: 500;">
                  📋 Here's what happens next:
                </p>
                <ul style="margin: 10px 0 0 20px; color: #4B5563;">
                  <li>Our team will review your enquiry within 24 hours</li>
                  <li>We'll contact you via phone or email</li>
                  <li>We'll guide you through the visa application process</li>
                </ul>
              </div>

              <p style="color: #6B7280;">
                In the meantime, if you have any questions, feel free to reach out:
              </p>

              <div style="display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
                <div style="display: flex; align-items: center; gap: 8px; color: #6B7280;">
                  <span>📱</span>
                  <span>+91 98765 43210</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; color: #6B7280;">
                  <span>✉️</span>
                  <span>support@traavelbug.com</span>
                </div>
              </div>

              <div style="text-align: center;">
                <a href="https://visa.traavelbug.com" class="button">
                  Visit Our Website
                </a>
              </div>

              <div class="footer">
                <p style="margin: 0;">
                  Traavel Bug • Professional Visa Assistance
                </p>
                <p style="font-size: 12px; color: #9CA3AF; margin: 8px 0 0;">
                  This is an automated response. We'll get back to you shortly.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        Thank You, ${fullName}!

        We've received your visa enquiry and our team is reviewing it.

        Here's what happens next:
        - Our team will review your enquiry within 24 hours
        - We'll contact you via phone or email
        - We'll guide you through the visa application process

        In the meantime, if you have any questions:
        Phone: +91 98765 43210
        Email: support@traavelbug.com

        Traavel Bug • Professional Visa Assistance
      `,
    });

    return NextResponse.json(
      { 
        message: "Enquiry submitted successfully",
        data: { id: data?.id }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { 
        message: "An unexpected error occurred. Please try again." 
      },
      { status: 500 }
    );
  }
}

// Clean up rate limiting store periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimit.entries()) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
      rateLimit.delete(ip);
    }
  }
}, 5 * 60 * 1000);