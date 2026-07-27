// src/components/JsonLd.tsx
"use client";

import Script from "next/script";

const siteUrl = "https://visa.traavelbug.com";
const businessName = "Traavel Bug";
const businessDescription = "Professional visa assistance and travel planning services for international travellers.";
const phoneNumber = "+91 98765 43210";
const email = "support@traavelbug.com";
const address = {
  streetAddress: "123 Business District",
  addressLocality: "Mumbai",
  addressRegion: "Maharashtra",
  postalCode: "400001",
  addressCountry: "IN",
};

const socialProfiles = [
  "https://facebook.com/traavelbug",
  "https://instagram.com/traavelbug",
  "https://linkedin.com/company/traavelbug",
  "https://youtube.com/traavelbug",
];

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${siteUrl}#organization`,
    name: businessName,
    description: businessDescription,
    url: siteUrl,
    telephone: phoneNumber,
    email: email,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    sameAs: socialProfiles,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00",
    ],
    priceRange: "$$",
    currenciesAccepted: "INR, USD, EUR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: businessName,
    description: businessDescription,
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Visa Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Popular Destinations",
        item: `${siteUrl}/#destinations`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you guarantee visa approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Visa approval is solely at the discretion of the respective embassy, consulate or immigration authority. Traavel Bug provides visa assistance and application guidance only.",
        },
      },
      {
        "@type": "Question",
        name: "Which countries do you provide visa assistance for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We assist travellers with visa applications for multiple international destinations. Contact our team to discuss your travel plans.",
        },
      },
      {
        "@type": "Question",
        name: "How long does visa processing take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Processing times vary depending on the destination, visa type and the respective embassy or immigration authority.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with document preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We guide you through the required documents and help you prepare your application before submission.",
        },
      },
      {
        "@type": "Question",
        name: "Do you also help with flights and hotels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Traavel Bug can also assist with flights, hotels and customised holiday packages.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply fill out the enquiry form or contact our team via WhatsApp or phone. We'll guide you through the next steps.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}#service`,
    serviceType: "Visa Assistance",
    provider: {
      "@id": `${siteUrl}#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Visa Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tourist Visa Assistance",
            description: "Professional guidance for tourist visa applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Visa Assistance",
            description: "Expert support for business visa applications.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Visit Visa Assistance",
            description: "Dedicated support for family visit visa applications.",
          },
        },
      ],
    },
  };

  return (
    <Script
      id="json-ld-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          organizationSchema,
          websiteSchema,
          breadcrumbSchema,
          faqSchema,
          serviceSchema,
        ]),
      }}
    />
  );
}