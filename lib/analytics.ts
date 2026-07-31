// lib/analytics.ts
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  // Google Analytics
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", eventName, params);
  }

  // GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }
};

export const trackConversion = (eventName: string, value?: number) => {
  trackEvent(eventName, {
    conversion_value: value,
    currency: "INR",
  });
};

// Specific events
export const trackFormStart = () => {
  trackEvent("form_start", { form_name: "visa_enquiry" });
};

export const trackFormSubmit = (success: boolean) => {
  trackEvent("form_submit", {
    form_name: "visa_enquiry",
    success,
  });
};

export const trackCTA = (buttonName: string, location: string) => {
  trackEvent("cta_click", {
    button_name: buttonName,
    location,
  });
};